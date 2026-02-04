import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // later connect backend
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      {/* NAVBAR */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-[#282b39] px-6 md:px-10 py-3">
        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48">
              <path d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-lg font-bold">OutreachGen AI</h2>
        </div>

        <Link
          to="/login"
          className="flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:opacity-90 transition"
        >
          Login
        </Link>
      </header>

      {/* MAIN */}
      <main className="flex-1 flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col justify-center px-10 py-12 lg:px-20">
          <div className="max-w-[480px]">
            <h1 className="text-slate-900 dark:text-white text-4xl font-black mb-4 leading-tight">
              Secure Your Outreach with Local AI
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
              100% offline hyper-personalized messaging. Your data never leaves your machine.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((f) => (
                <Feature key={f.title} {...f} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="flex-1 flex flex-col justify-center px-10 py-12 lg:px-20 border-l border-slate-200 dark:border-[#282b39] bg-white dark:bg-[#161825]">
          <div className="max-w-[420px] w-full mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
              Create Local Account
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Join the future of secure outreach automation.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />
              <Input
                name="email"
                placeholder="Work Email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
              <Input
                name="password"
                placeholder="Password"
                type="password"
                value={form.password}
                onChange={handleChange}
              />

              <button className="mt-4 w-full h-12 rounded-lg bg-primary text-white font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md">
                Create Account
              </button>
            </form>

            <p className="mt-8 text-sm text-center text-slate-600 dark:text-slate-400">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-bold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-6 text-center border-t border-slate-200 dark:border-[#282b39]">
        <p className="text-xs text-slate-500">
          © 2024 OutreachGen AI. Securely automated by your local hardware.
        </p>
      </footer>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      {...props}
      className="w-full h-12 px-4 rounded-lg border border-slate-300 dark:border-[#3b3f54] 
      bg-white dark:bg-[#1c1d27] text-slate-900 dark:text-white 
      placeholder:text-slate-400 dark:placeholder:text-[#9da1b9] 
      focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
    />
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <div>
        <h3 className="font-bold text-lg text-slate-900 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}

const features = [
  { icon: "shield_person", title: "100% Offline Privacy", desc: "Everything processed locally." },
  { icon: "dynamic_feed", title: "Multi-Channel Generation", desc: "Email, LinkedIn & more at once." },
  { icon: "database", title: "Local Knowledge Base", desc: "Train models on your own docs." },
];
