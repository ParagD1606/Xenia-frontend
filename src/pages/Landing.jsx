import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sparkles, 
  Zap, 
  Target, 
  MessageSquare, 
  BarChart3, 
  Users, 
  ArrowRight,
  CheckCircle2,
  Mail,
  Linkedin,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Target,
    title: "AI-Powered Personalization",
    description: "Analyze LinkedIn profiles and generate hyper-personalized messages that resonate with each prospect."
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Outreach",
    description: "Create tailored messages for Email, LinkedIn, WhatsApp, SMS, and Instagram — all from one place."
  },
  {
    icon: BarChart3,
    title: "Reply Likelihood Scoring",
    description: "Get AI-predicted response rates and tone match scores to optimize your outreach strategy."
  },
  {
    icon: Users,
    title: "Prospect Memory",
    description: "Build a knowledge base of similar prospects to continuously improve message quality."
  }
];

const channels = [
  { icon: Mail, name: "Email", color: "text-primary" },
  { icon: Linkedin, name: "LinkedIn", color: "text-info" },
  { icon: MessageCircle, name: "WhatsApp", color: "text-success" },
];

const benefits = [
  "10x faster outreach creation",
  "Higher response rates",
  "Consistent brand voice",
  "Multi-channel support",
  "AI tone matching",
  "Prospect insights"
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground text-lg">OutreachAI</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/dashboard">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            AI-Powered Cold Outreach
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Hyper-Personalized Outreach
            <span className="text-primary"> in Seconds</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Generate AI-powered, personalized messages across Email, LinkedIn, WhatsApp, and more. 
            Increase your response rates with intelligent prospect analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8" asChild>
              <Link to="/dashboard">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              Watch Demo
            </Button>
          </div>
          
          {/* Channel Icons */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {channels.map((channel) => (
              <div key={channel.name} className="flex items-center gap-2 text-muted-foreground">
                <channel.icon className={`w-5 h-5 ${channel.color}`} />
                <span className="text-sm">{channel.name}</span>
              </div>
            ))}
            <span className="text-muted-foreground text-sm">+ more</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need for Smarter Outreach
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our AI analyzes prospects and crafts messages that feel personal, not automated.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="card-elevated-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Stop Sending Generic Messages
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Every prospect is unique. Our AI understands their role, industry, and communication 
                style to craft messages that actually get responses.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="card-elevated p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">SP</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Sarah Parker</p>
                    <p className="text-sm text-muted-foreground">VP of Sales • Tech Industry</p>
                  </div>
                </div>
                <div className="message-bubble">
                  <p className="text-foreground">
                    Hi Sarah! I noticed your team at TechCorp just expanded into the APAC market — 
                    congrats on the growth! Given your focus on scaling sales operations, I thought 
                    you might find our outreach automation interesting...
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="badge-tag">92% Reply Likelihood</span>
                  <span className="badge-muted">Professional Tone</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Outreach?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of sales professionals using AI to connect with prospects more effectively.
          </p>
          <Button size="lg" className="text-base px-8" asChild>
            <Link to="/dashboard">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">OutreachAI</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 OutreachAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
