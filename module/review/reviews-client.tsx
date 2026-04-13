"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { getReviews } from "@/module/review";

type Review = Awaited<ReturnType<typeof getReviews>>[number];

export default function ReviewsPage({
  initialData,
}: {
  initialData: Review[];
}) {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Review History</h1>
        <p className="text-muted-foreground">View all AI code reviews</p>
      </div>

      {initialData.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No reviews yet. Connect a repository and open a PR to get
                started.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {initialData.map((review) => (
            <Card key={review.id}>
              <CardHeader>
                <div className="flex justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">
                      PR #{review.prNumber} ⋅ {review.prTitle}
                    </CardTitle>
                    <CardDescription>
                      {review.repository.fullName} ⋅{" "}
                      {formatDistanceToNow(new Date(review.createdAt), {
                        addSuffix: true,
                      })}
                    </CardDescription>
                    <div className="text-sm"></div>
                  </div>

                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={review.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
