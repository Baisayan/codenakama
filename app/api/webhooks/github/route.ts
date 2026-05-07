import { reviewPullRequest } from "@/module/ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const event = request.headers.get("x-github-event");

  try {
    if (!event) {
      return NextResponse.json({ error: "Missing event" }, { status: 400 });
    }

    if (event === "ping") {
      return NextResponse.json({ message: "Pong" }, { status: 200 });
    }

    if (event === "pull_request") {
      const { action, repo, number } = body;
      const [owner, repoName] = repo.split("/");

      if (!repo?.full_name || !number) {
        return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
      }

      if (action === "opened") {
        reviewPullRequest(owner, repoName, number).catch(
          (error: unknown) =>
            console.error(`Review failed for ${repo} #${number}:`, error),
        );

        console.log(`Review completed for ${repo.full_name} #${number}`);
      }
    }

    return NextResponse.json({ message: "Event processed" });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
