import { Sparkles, Brain, MessageSquare, Lightbulb, Send } from "lucide-react";
import { useState } from "react";

const aiFeatures = [
    { name: "Smart Lead Scoring", description: "AI-powered lead scoring based on engagement, travel history, and conversion probability", icon: <Brain size={20} />, status: "active" },
    { name: "Price Optimization", description: "Dynamic pricing recommendations based on demand, competition, and market conditions", icon: <Lightbulb size={20} />, status: "active" },
    { name: "Predictive Analytics", description: "Forecast booking trends, revenue targets, and seasonality patterns", icon: <Sparkles size={20} />, status: "active" },
    { name: "NLP Itinerary Builder", description: "Generate complete itineraries from natural language trip descriptions", icon: <MessageSquare size={20} />, status: "active" },
];

const chatHistory = [
    { role: "user" as const, text: "Show me revenue forecast for next quarter" },
    { role: "ai" as const, text: "Based on historical data and current pipeline, I forecast Q2 2026 revenue at approximately $165,000 (+14% QoQ). Key drivers include: Santorini bookings (35% of pipeline), new Japan packages launching in April, and the seasonal uplift from European summer bookings." },
    { role: "user" as const, text: "Which destinations should I focus on for upselling?" },
    { role: "ai" as const, text: "Top 3 upsell opportunities:\n\n1. **Maldives** - Highest margin (28%), add water villa upgrades and spa packages\n2. **Japan** - Growing demand (+45%), bundle cultural experiences with luxury stays\n3. **Kenya** - Safari extensions have 82% acceptance rate when offered at booking" },
];

export function AIInsightsPage() {
    const [query, setQuery] = useState("");

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title flex items-center gap-2"><Sparkles size={22} className="text-coral-500" /> AI Insights Engine</h1>
                    <p className="page-subtitle">Ask questions and get AI-powered business insights</p>
                </div>
            </div>

            {/* AI Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {aiFeatures.map((f) => (
                    <div key={f.name} className="card card-hover">
                        <div className="card-body">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-xl bg-gradient-coral flex items-center justify-center text-white">{f.icon}</div>
                                <div className="w-2 h-2 rounded-full bg-success-500" title="Active" />
                            </div>
                            <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--color-heading)" }}>{f.name}</h3>
                            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{f.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* AI Chat */}
            <div className="card">
                <div className="card-header">
                    <h3 className="text-sm font-semibold flex items-center gap-2" style={{ color: "var(--color-heading)" }}>
                        <MessageSquare size={14} /> AI Business Assistant
                    </h3>
                </div>
                <div className="card-body">
                    <div className="space-y-4 mb-4 max-h-[400px] overflow-y-auto">
                        {chatHistory.map((msg, i) => (
                            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                                {msg.role === "ai" && (
                                    <div className="w-8 h-8 rounded-lg bg-gradient-coral flex items-center justify-center shrink-0">
                                        <Sparkles size={14} className="text-white" />
                                    </div>
                                )}
                                <div className={`max-w-[75%] p-3 rounded-xl text-sm ${msg.role === "user" ? "bg-brand text-white rounded-br-sm" : "rounded-bl-sm"}`} style={msg.role === "ai" ? { background: "var(--color-surface-alt)", color: "var(--color-text)" } : undefined}>
                                    <div style={{ whiteSpace: "pre-line" }}>{msg.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3">
                        <input
                            type="text"
                            className="form-input flex-1"
                            placeholder="Ask about revenue, bookings, customers, forecasts..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className="btn-primary">
                            <Send size={16} />
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                        {["What's our top destination?", "Show pipeline health", "Forecast next month", "Identify at-risk deals"].map((s) => (
                            <button key={s} onClick={() => setQuery(s)} className="text-xs px-3 py-1.5 rounded-full border transition-colors" style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#FF6F4A"; e.currentTarget.style.color = "#FF6F4A"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-text-muted)"; }}
                            >{s}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
