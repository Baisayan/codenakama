import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";

export default function Hero() {
  const steps = [
    {
      title: "Connect",
      desc: "Sync your GitHub repositories with one click.",
      icon: "01",
    },
    {
      title: "Push",
      desc: "Open a PR and our webhooks trigger the AI engine.",
      icon: "02",
    },
    {
      title: "Review",
      desc: "Get detailed, context-aware reviews in seconds.",
      icon: "03",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-2 flex flex-col items-center my-10 md:my-15 text-center">
        <Badge variant="secondary" className="mb-4 py-1 px-4 text-sm gap-2">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          Expert at Reviewing your shitty PRs
        </Badge>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 max-w-4xl bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
          Code reviews that catch what human's miss
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-2 mb-10 tracking-wide">
          CodeNakama analyzes logic, security vulnerabilities, and performance
          bottlenecks in your PRs. Built for engineers who care about code
          quality.
        </p>

        <div className="flex items-center gap-4">
          <Button asChild size="lg">
            <Link href="/repository">Get Started for Free</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Github className="size-4" />
            View in GitHub
          </Button>
        </div>
      </main>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative p-8 rounded-2xl border border-white/5 bg-zinc-900/50"
            >
              <span className="text-5xl font-bold text-white/15 absolute top-4 right-4">
                {step.icon}
              </span>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
