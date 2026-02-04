import { useState } from "react";
import { Link } from "react-router-dom";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-background-dark text-slate-100 min-h-screen font-display flex flex-col">

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-8 z-20">
        <div className="flex items-center gap-3 text-primary">
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-2xl">auto_awesome</span>
          </div>
          <h1 className="text-white text-xl font-bold tracking-tight">OutreachGen AI</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row min-h-screen">

        {/* Left Info Section */}
        <section className="hidden lg:flex lg:w-1/2 relative bg-background-dark overflow-hidden items-center justify-center border-r border-border-dark">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -left-1/4 w-full h-full bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-emerald-500/5 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 w-full max-w-lg px-12">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8nWdrHPV9IzchsCbb6XT_X-EvL_AYZLg7Rz_kty507tK0aaAB1OoVBLWsdgLHIrpEanNTOUlrtKvALwJXkUXkrNII_7akwzEDOwYB6Q7a9muRK3I3t1bf-z8VGqklkDwART-HZYxotyTvNCRkjWbS6CXYbu-74lH5lLDjUr6QK4QyQtJ0Qy9aqCSx-rgfyKtNjJ5JVWL_X04W3GZ1TfPjyhobUfJujvKAjHvVrtdiCId1Ainb5bSd1JmGKGuWmqpe_QyRGpcaBFc"
              alt="Server Visualization"
              className="rounded-3xl shadow-2xl grayscale brightness-75 opacity-80 mix-blend-screen"
            />

            <div className="mt-12 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">Privacy-Preserving Outreach</h2>
              <p className="text-slate-400 max-w-md">
                Harness the power of local LLMs for hyper-personalized messaging without ever letting your data leave your hardware.
              </p>
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section className="flex-1 flex flex-col items-center justify-center p-8 lg:p-24 bg-background-dark">
          <div className="w-full max-w-md space-y-8">

            <div>
              <h2 className="text-3xl font-bold text-white">Welcome back</h2>
              <p className="text-slate-400 text-sm">Log in to your local workspace to continue.</p>
            </div>

            <form className="space-y-6">

              {/* Email */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Email or Username</label>
                <input
                  className="w-full mt-2 bg-card-dark border border-border-dark rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary outline-none"
                  placeholder="alex@local.host"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Password</label>
                <div className="relative mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-card-dark border border-border-dark rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary outline-none"
                    placeholder="••••••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25">
                Secure Local Login
              </button>
            </form>

            <div className="space-y-4 text-center">
  <p className="text-[11px] text-emerald-500">
    Your data stays on your machine. Authentication handled locally.
  </p>

  <p className="text-sm text-slate-400">
    Don’t have an account?{" "}
    <Link
      to="/register"
      className="text-primary font-semibold hover:underline"
    >
      Create Account
    </Link>
  </p>
</div>

          </div>
        </section>

      </main>
    </div>
  );
}
