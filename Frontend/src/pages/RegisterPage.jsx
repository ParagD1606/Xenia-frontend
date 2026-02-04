import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  User, 
  Mail, 
  Lock, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  Shield, 
  Zap, 
  Database,
  ChevronLeft
} from "lucide-react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getPasswordStrength = (pass) => {
    let strength = 0;
    if (pass.length > 5) strength += 1;
    if (pass.length > 8) strength += 1;
    if (/[A-Z]/.test(pass)) strength += 1;
    if (/[0-9]/.test(pass)) strength += 1;
    return strength; 
  };

  const strength = getPasswordStrength(form.password);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log(form);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full flex bg-[#050505] text-white font-sans selection:bg-blue-500/30 overflow-hidden relative">
      
      {/* --- BACK BUTTON (Added Here) --- */}
      <Link 
        to="/" 
        className="absolute top-8 left-8 z-50 flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
      >
        <div className="p-2 rounded-full bg-white/5 border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-all">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        </div>
        <span className="font-medium">Back to Home</span>
      </Link>

      {/* Background Noise Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* --- LEFT SIDE: Registration Form --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-12 relative z-10 border-r border-white/5">
        
        <div className="w-full max-w-[440px] mx-auto space-y-8 animate-fade-in-up mt-12 lg:mt-0">
          
           {/* Logo (Visible on form side for context) */}
           <div className="flex justify-center lg:justify-start mb-2">
             <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">OutreachGen AI</span>
            </div>
          </div>

          {/* Header */}
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Create your account
            </h1>
            <p className="text-neutral-400">
              Start generating offline, privacy-first outreach campaigns.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-300 ml-1 uppercase tracking-wider">Full Name</label>
              <div className={`group relative flex items-center rounded-xl border bg-white/5 transition-all duration-300 ${focusedInput === 'name' ? "border-blue-500/50 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]" : "border-white/10 hover:border-white/20"}`}>
                <div className="pl-4 text-neutral-500"><User className="w-5 h-5" /></div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('name')}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-300 ml-1 uppercase tracking-wider">Work Email</label>
              <div className={`group relative flex items-center rounded-xl border bg-white/5 transition-all duration-300 ${focusedInput === 'email' ? "border-blue-500/50 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]" : "border-white/10 hover:border-white/20"}`}>
                <div className="pl-4 text-neutral-500"><Mail className="w-5 h-5" /></div>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none"
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-300 ml-1 uppercase tracking-wider">Password</label>
              <div className={`relative flex items-center rounded-xl border bg-white/5 transition-all duration-300 ${focusedInput === 'password' ? "border-blue-500/50 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]" : "border-white/10 hover:border-white/20"}`}>
                <div className="pl-4 text-neutral-500"><Lock className="w-5 h-5" /></div>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('password')}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none"
                  placeholder="Create a strong password"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 p-1 text-neutral-500 hover:text-neutral-300 transition-colors">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {form.password && (
                <div className="flex gap-1.5 px-1 pt-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div 
                      key={level} 
                      className={`h-1 flex-1 rounded-full transition-all duration-500 ${strength >= level ? (strength === 4 ? "bg-emerald-500" : "bg-blue-500") : "bg-white/10"}`} 
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button 
              disabled={isLoading}
              className="group relative w-full overflow-hidden rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] disabled:opacity-70 mt-2"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
              <span className="flex items-center justify-center gap-2">
                {isLoading ? "Creating Account..." : "Get Started Now"}
                {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </span>
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-neutral-400">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-blue-400 hover:text-blue-300 hover:underline underline-offset-4 transition-all">
              Log in instead
            </Link>
          </p>
        </div>
      </div>

      {/* --- RIGHT SIDE: Features & Visuals --- */}
      <div className="hidden lg:flex w-1/2 relative flex-col justify-center p-12 overflow-hidden bg-[#0A0A0A]">
        
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-600/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-lg mx-auto">
          
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wide mb-6">
              <Sparkles className="w-3 h-3" />
              <span>Enterprise Grade Security</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Your Data. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Your Hardware.
              </span>
            </h2>
            <p className="text-lg text-neutral-400">
              Join thousands of sales teams generating outreach on their own infrastructure, ensuring 100% data privacy.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all duration-300 backdrop-blur-sm"
              >
                <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-blue-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

// Data for Feature Cards
const features = [
  { 
    icon: Shield, 
    title: "100% Offline Privacy", 
    desc: "No data ever leaves your device. All LLM processing happens locally on your GPU/CPU.",
    gradient: "from-emerald-500 to-emerald-700"
  },
  { 
    icon: Zap, 
    title: "Multi-Channel Generation", 
    desc: "Generate sequences for Email, LinkedIn, and SMS simultaneously with context awareness.",
    gradient: "from-blue-500 to-indigo-600"
  },
  { 
    icon: Database, 
    title: "Local Knowledge Base", 
    desc: "Train the AI on your PDFs, CSVs, and previous emails without uploading to the cloud.",
    gradient: "from-purple-500 to-pink-600"
  }
];