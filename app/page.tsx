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

      <main className="container mx-auto px-2 flex flex-col items-center mt-10 md:mt-15 text-center">
        <Badge variant="secondary" className="mb-4 py-1 px-4 text-sm gap-2">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          Powered by RAG & GitHub Webhooks
        </Badge>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 max-w-4xl bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
          Code reviews that catch what humans miss
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-2 mb-10 tracking-wide">
          CodeNakama analyzes logic, security vulnerabilities, and performance
          bottlenecks in your PRs. Built for engineers who care about code
          quality.
        </p>

        <div className="flex items-center gap-4">
          <Button asChild size="lg">
            <Link href="/repository">
              <Github className="size-4" />
              Get Started for Free
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            Explore Features
          </Button>
        </div>
      </main>

      <section className="py-20 container mx-auto px-4">
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

      <section className="py-24 bg-zinc-950/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            {/* Main Feature */}
            <div className="md:col-span-2 row-span-2 p-8 rounded-3xl border border-white/10 bg-linear-to-br from-zinc-900 to-black overflow-hidden group">
              <div className="max-w-xs">
                <h3 className="text-2xl font-bold mb-2 text-emerald-400">
                  Context-Aware RAG
                </h3>
                <p className="text-muted-foreground">
                  Unlike generic AI, we index your entire codebase to understand
                  your patterns, types, and architecture.
                </p>
              </div>
              <div className="mt-8 p-4 bg-zinc-950 rounded-lg border border-white/5 font-mono text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                {`// AI context check...\nif (existingPattern === "safe") {\n  return success;\n}`}
              </div>
            </div>
            {/* Smaller Features */}
            <div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/50">
              <h3 className="text-xl font-bold mb-2">Security First</h3>
              <p className="text-sm text-muted-foreground">
                Detect SQL injections and leaked secrets before they reach main.
              </p>
            </div>
            <div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/50">
              <h3 className="text-xl font-bold mb-2">Mermaid Logic</h3>
              <p className="text-sm text-muted-foreground">
                Visualizes complex logic changes with auto-generated sequence
                diagrams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-3">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between text-muted-foreground">
            <Button variant="ghost" size="lg" asChild>
              <Link href="https://github.com/Baisayan/codenakama">
                <Github className="size-4" />
                View in GitHub
              </Link>
            </Button>
            <p>© 2026 CodeNakama.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
