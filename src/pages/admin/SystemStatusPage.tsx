import React from "react";
import { Activity, Server, Database, Shield, Cpu, RefreshCw, CheckCircle } from "lucide-react";

export const SystemStatusPage: React.FC = () => {
  const systems = [
    { name: "API Gateway", status: "Operational", uptime: "99.99%", latency: "24ms", icon: <Globe className="w-5 h-5 text-emerald-400" /> },
    { name: "Core Engine", status: "Operational", uptime: "100%", latency: "12ms", icon: <Cpu className="w-5 h-5 text-coral-400" /> },
    { name: "PostgreSQL DB", status: "Operational", uptime: "99.95%", latency: "8ms", icon: <Database className="w-5 h-5 text-blue-400" /> },
    { name: "Redis Cache", status: "Operational", uptime: "100%", latency: "2ms", icon: <Activity className="w-5 h-5 text-purple-400" /> },
    { name: "Auth Service", status: "Operational", uptime: "99.99%", latency: "45ms", icon: <Shield className="w-5 h-5 text-indigo-400" /> },
    { name: "Media storage", status: "Operational", uptime: "99.90%", latency: "120ms", icon: <Server className="w-5 h-5 text-teal-400" /> },
  ];

  return (
    <div className="p-6 space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">System Status</h1>
          <p className="text-slate-400">Real-time monitoring of TravelOps infrastructure</p>
        </div>
        <button className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl transition-colors">
          <RefreshCw className="w-4 h-4" />
          <span>Refresh All</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {systems.map((system) => (
          <div key={system.name} className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-coral-500/20 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-coral-500/10 transition-colors">
                {system.icon}
              </div>
              <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold">
                <CheckCircle className="w-3 h-3" />
                <span>{system.status}</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">{system.name}</h3>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500 font-medium">Uptime</span>
              <span className="text-emerald-400">{system.uptime}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-slate-500 font-medium">Latency</span>
              <span className="text-white">{system.latency}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Incident History</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start justify-between p-4 border-l-2 border-slate-700 bg-slate-800/30 rounded-r-xl">
              <div className="space-y-1">
                <h4 className="text-white font-medium">Minor latency in media storage</h4>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">MARCH 12, 2026</p>
              </div>
              <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full uppercase font-bold tracking-tight">Resolved</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper for icon
function Globe({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20"/><path d="M2 12h20"/><path d="M12 2a14.5 14.5 0 0 1 0 20"/></svg>
  );
}
