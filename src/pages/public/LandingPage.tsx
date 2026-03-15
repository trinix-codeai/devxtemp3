import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { 
  Globe, 
  Shield, 
  Users, 
  Briefcase, 
  Zap, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Mail, 
  Lock, 
  LogIn, 
  Loader2,
  ChevronRight,
  TrendingUp,
  Award
} from "lucide-react";
import { login } from "../../store/authSlice";
import type { UserRole } from "../../types";

export const LandingPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (role: UserRole) => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(login(role));
      setIsLoading(false);
      navigate(`/${role === 'admin' ? 'admin' : role === 'agent' ? 'agent' : role === 'operator' ? 'operator' : 'dmc'}`);
    }, 1000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin('admin'); // Default to admin for demo
  };

  const demoUsers = [
    { role: "admin" as UserRole, name: "Admin", color: "from-purple-500 to-indigo-600" },
    { role: "agent" as UserRole, name: "Agent", color: "from-blue-500 to-cyan-600" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-coral-500/30 font-sans overflow-x-hidden">
      {/* High-Tech Background with Speed Lines */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.07] mix-blend-overlay" />
        {/* Animated Speed Lines (Canvas or CSS) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-coral-500/40 to-transparent opacity-30 animate-speed-line"
              style={{
                top: `${Math.random() * 100}%`,
                left: '-100%',
                width: `${20 + Math.random() * 30}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        {/* Radial Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-coral-600/10 blur-[150px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl px-6 h-16 shadow-2xl">
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-coral-500 to-coral-600 flex items-center justify-center shadow-lg shadow-coral-500/20 group-hover:rotate-12 transition-transform">
              <Globe className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">TravelOps <span className="text-coral-500">CRM</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#network" className="hover:text-white transition-colors">Network</a>
          </div>

          <button className="hidden md:flex items-center space-x-2 text-sm font-bold text-coral-400 hover:text-coral-300 transition-colors">
            <span>Enterprise Sales</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-48 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          
          {/* Left Side: Value Prop */}
          <div className="lg:w-1/2 space-y-10 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-coral-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                <Zap className="w-3 h-3 fill-current" />
                <span>Next-Gen Operating System</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-400 to-coral-600">Travel CRM</span> Built for Speed.
              </h1>
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed font-medium">
                The world's most advanced platform for travel professionals. Orchestrate your entire business with AI-driven workflows and real-time connectivity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xl font-bold">140%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Avg. Growth</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xl font-bold">#1 Rated</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Travel SaaS</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <div className="flex items-center space-x-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-crosshair">
                <div className="text-xs font-bold text-slate-500 border-r border-white/10 pr-6 uppercase tracking-widest">Trusted By</div>
                <Users className="w-6 h-6" />
                <Briefcase className="w-6 h-6" />
                <Globe className="w-6 h-6" />
                <Shield className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Right Side: Integrated Auth Forms */}
          <div className="lg:w-[450px] w-full animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[32px] p-8 shadow-2xl relative overflow-hidden group">
              {/* Subtle Inner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-coral-500/10 blur-[60px] rounded-full" />
              
              <div className="relative z-10">
                <div className="flex bg-slate-900/80 p-1.5 rounded-2xl mb-8 border border-white/10">
                  <button 
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${isLogin ? 'bg-coral-500 text-white shadow-xl shadow-coral-500/20' : 'text-slate-400 hover:text-white'}`}
                  >
                    SIGN IN
                  </button>
                  <button 
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${!isLogin ? 'bg-coral-500 text-white shadow-xl shadow-coral-500/20' : 'text-slate-400 hover:text-white'}`}
                  >
                    CREATE ACCOUNT
                  </button>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{isLogin ? "Welcome back" : "Get started today"}</h3>
                  <p className="text-sm text-slate-400">{isLogin ? "Access your high-performance dashboard" : "Join 2,000+ travel professionals worldwide"}</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Work Email</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-600 group-focus-within:text-coral-500 transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-coral-500/40 focus:border-coral-500/40 transition-all font-medium"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between ml-1">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
                      {isLogin && <a href="#" className="text-[10px] font-bold text-coral-500 hover:text-coral-400 transition-colors uppercase tracking-widest">Forgot?</a>}
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-600 group-focus-within:text-coral-500 transition-colors">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-coral-500/40 focus:border-coral-500/40 transition-all font-medium"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-400 hover:to-coral-500 text-white text-sm font-bold py-4 rounded-xl shadow-2xl shadow-coral-500/25 flex items-center justify-center space-x-2 transition-all transform hover:translate-y-[-2px] active:translate-y-[0] disabled:opacity-70"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <LogIn className="w-5 h-5" />
                        <span className="tracking-widest">{isLogin ? "LAUNCH DASHBOARD" : "START FREE TRIAL"}</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-[0.2em]">
                    <span className="bg-[#121a2b] px-3 text-slate-600">Quick Portal Login</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  {demoUsers.map((user) => (
                    <button
                      key={user.role}
                      onClick={() => handleLogin(user.role)}
                      disabled={isLoading}
                      className="flex-1 py-3 px-2 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/10 hover:border-coral-500/30 transition-all text-[10px] font-bold tracking-widest text-slate-400 hover:text-white"
                    >
                      {user.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Proof */}
            <div className="mt-8 flex items-center justify-center space-x-3 text-emerald-400/80">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">No credit card required for trial</span>
            </div>
          </div>
        </div>
      </main>

      {/* Feature Grid (Clean/Micro) */}
      <section id="features" className="relative z-10 py-24 bg-[#0a0f1e]/50 backdrop-blur-md border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-coral-500/10 border border-coral-500/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-coral-500" />
            </div>
            <h4 className="text-xl font-bold">Ultra-Low Latency</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Bookings and rate updates sync across global markets in milliseconds.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-500" />
            </div>
            <h4 className="text-xl font-bold">Bank-Grade Security</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Your client data is protected by AES-256 encryption and SOC2 compliance.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Globe className="w-6 h-6 text-emerald-500" />
            </div>
            <h4 className="text-xl font-bold">Omni-Channel Supply</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Access 500k+ products directly via GDS, Bedbanks, and direct API.</p>
          </div>
        </div>
      </section>

      {/* Simple Tech Footer */}
      <footer className="relative z-10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-12">
          <div className="flex items-center space-x-2 opacity-50">
            <Globe className="text-coral-500 w-5 h-5" />
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">TravelOps AI System v2.4</span>
          </div>
          <div className="flex space-x-8 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-coral-500 transition-colors">Documentation</a>
            <a href="#" className="hover:text-coral-500 transition-colors">API Status</a>
            <a href="#" className="hover:text-coral-500 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes speed-line {
          0% { transform: translateX(0); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translateX(3000px); opacity: 0; }
        }
        .animate-speed-line {
          animation: speed-line linear infinite;
        }
      `}} />
    </div>
  );
};
