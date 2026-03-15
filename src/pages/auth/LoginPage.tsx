import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogIn, Shield, Users, Globe, Briefcase, Mail, Lock, Loader2 } from "lucide-react";
import { login } from "../../store/authSlice";
import type { UserRole } from "../../types";

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (role: UserRole) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      dispatch(login(role));
      setIsLoading(false);
      navigate(`/${role === 'admin' ? 'admin' : role === 'agent' ? 'agent' : role === 'operator' ? 'operator' : 'dmc'}`);
    }, 1000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default to admin for the demo form
    handleLogin('admin');
  };

  const demoUsers = [
    { role: "admin" as UserRole, name: "David Chen", icon: <Shield className="w-5 h-5" />, color: "from-purple-500 to-indigo-600" },
    { role: "agent" as UserRole, name: "Sarah Mitchell", icon: <Users className="w-5 h-5" />, color: "from-blue-500 to-cyan-600" },
    { role: "operator" as UserRole, name: "James Porter", icon: <Briefcase className="w-5 h-5" />, color: "from-emerald-500 to-teal-600" },
    { role: "dmc" as UserRole, name: "Maria Santos", icon: <Globe className="w-5 h-5" />, color: "from-orange-500 to-coral-600" },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Animated Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
      
      <div className="w-full max-w-md z-10">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-coral-500 to-coral-600 shadow-lg shadow-coral-500/30 mb-4 animate-bounce-slow">
            <Globe className="text-white w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">TravelOps <span className="text-coral-400">AI</span></h1>
          <p className="text-slate-400">{isLogin ? "Welcome back, travel professional" : "Join the future of travel management"}</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="flex bg-slate-900/50 p-1 rounded-xl mb-8 border border-white/5">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isLogin ? 'bg-coral-500 text-white shadow-lg shadow-coral-500/20' : 'text-slate-400 hover:text-white'}`}
            >
              Login
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${!isLogin ? 'bg-coral-500 text-white shadow-lg shadow-coral-500/20' : 'text-slate-400 hover:text-white'}`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-coral-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-coral-500/50 focus:border-coral-500/50 transition-all"
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-coral-500 transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-coral-500/50 focus:border-coral-500/50 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-400 hover:to-coral-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-coral-500/25 flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>{isLogin ? "Sign In" : "Create Account"}</span>
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#1e2330] px-3 text-slate-500">Or continue with demo</span>
            </div>
          </div>

          {/* Quick Demo Access */}
          <div className="grid grid-cols-2 gap-3">
            {demoUsers.map((user) => (
              <button
                key={user.role}
                onClick={() => handleLogin(user.role)}
                disabled={isLoading}
                className="group relative flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                <div className={`mb-2 p-2 rounded-xl bg-gradient-to-br ${user.color} text-white shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                  {user.icon}
                </div>
                <span className="text-xs font-semibold text-white mb-0.5">{user.name}</span>
                <span className="text-[10px] text-slate-400 capitalize">{user.role}</span>
                
                {/* Subtle Hover Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${user.color} transition-opacity`} />
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-slate-500 text-sm">
          Don't have an account? <a href="#" className="text-coral-400 hover:text-coral-300 font-medium transition-colors">Contact Support</a>
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}} />
    </div>
  );
};
