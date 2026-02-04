import React from 'react';
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
import Prism from '../utils/Prism';

// --- Custom UI Components (Replacing missing Shadcn imports) ---

const Button = ({ children, variant = "default", size = "default", className = "", asChild, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-white/20 bg-transparent hover:bg-white/10 text-white",
    ghost: "hover:bg-white/10 text-white",
  };
  const sizes = {
    default: "h-10 px-4 py-2",
    lg: "h-12 px-8 text-lg font-semibold",
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asChild) {
    return <Link className={finalClassName} {...props}>{children}</Link>;
  }
  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

// --- Content Data ---

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
  { icon: Mail, name: "Email", color: "text-blue-600" },
  { icon: Linkedin, name: "LinkedIn", color: "text-blue-500" },
  { icon: MessageCircle, name: "WhatsApp", color: "text-green-600" },
];

const benefits = [
  "10x faster outreach creation",
  "Higher response rates",
  "Consistent brand voice",
  "Multi-channel support",
  "AI tone matching",
  "Prospect insights"
];

// --- Main Landing Component ---

export default function Landing() {
  return (
    <div className="min-h-screen text-white relative">
      
      {/* 1. Prism Background Animation */}
      

      {/* 2. Navigation */}
      <nav className="border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg">OutreachAI</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild to="/login">Login</Button>
            <Button asChild to="/dashboard">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* 3. Hero Section */}
<section className="py-24 px-6 relative overflow-hidden">

  {/* 🌈 Prism Background */}
  <div className="absolute inset-0 -z-10">
    <Prism
      animationType="rotate"
      timeScale={0.25}
      height={3.5}
      baseWidth={5.5}
      scale={3.6}
      hueShift={0}
      colorFrequency={1}
      noise={0}
      glow={1}
    />
  </div>

  {/* ✨ Content */}
  <div className="max-w-4xl mx-auto text-center relative z-10">

    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-md">
      <Zap className="w-4 h-4" />
      AI-Powered Cold Outreach
    </div>

    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white drop-shadow-lg">
      Hyper-Personalized Outreach
      <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text block">
        in Seconds
      </span>
    </h1>

    <p className="text-xl text-neutral-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
      Generate AI-powered, personalized messages across Email, LinkedIn, WhatsApp, and more. 
      Increase your response rates with intelligent prospect analysis.
    </p>

    {/* 🚀 Single Button */}
    <div className="flex justify-center">
      <Button size="lg" className="px-10 shadow-lg" asChild to="/login">
        Get Started
    </Button>

    </div>

    {/* 🌍 Channels */}
    <div className="flex items-center justify-center gap-8 mt-16">
      {channels.map((channel) => (
        <div key={channel.name} className="flex items-center gap-2 text-neutral-600">
          <channel.icon className={`w-5 h-5 ${channel.color}`} />
          <span className="text-sm font-medium">{channel.name}</span>
        </div>
      ))}
      <span className="text-neutral-600 text-sm">+ more</span>
    </div>

  </div>
</section>


      {/* 4. Features Section */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need for Smarter Outreach
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Our AI analyzes prospects and crafts messages that feel personal, not automated.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardContent>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits & AI Demo Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Stop Sending Generic Messages
              </h2>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                Every prospect is unique. Our AI understands their role, industry, and communication 
                style to craft messages that actually get responses.
              </p>
              <div className="grid grid-cols-2 gap-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-neutral-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-blue-600/5 border-blue-500/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-400">SP</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Sarah Parker</p>
                    <p className="text-sm text-neutral-400">VP of Sales • Tech Industry</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-5 border border-white/5">
                  <p className="text-neutral-200 leading-relaxed italic">
                    "Hi Sarah! I noticed your team at TechCorp just expanded into the APAC market — 
                    congrats on the growth! Given your focus on scaling sales operations, I thought 
                    you might find our outreach automation interesting..."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
                    92% Reply Likelihood
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-neutral-400 text-xs font-bold border border-white/10">
                    Professional Tone
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Outreach?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of sales professionals using AI to connect with prospects more effectively.
          </p>
          <Button size="lg" className="px-12" asChild to="/login">
  Get Started Free
  <ArrowRight className="w-5 h-5 ml-2" />
</Button>

        </div>
      </section>

      {/* 7. Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">OutreachAI</span>
          </div>
          <p className="text-neutral-500 text-sm">
            © 2024 OutreachAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}