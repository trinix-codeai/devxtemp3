import { useState } from "react";
import { Sparkles, MapPin, Clock, DollarSign, Plus, Sun, Utensils, Camera, Heart } from "lucide-react";

interface ItineraryDay {
    day: number;
    title: string;
    activities: { time: string; title: string; description: string; icon: React.ReactNode; type: string }[];
}

const sampleItinerary: ItineraryDay[] = [
    {
        day: 1, title: "Arrival & Sunset Magic", activities: [
            { time: "14:00", title: "Airport Transfer", description: "Private luxury transfer from Athens to Santorini port", icon: <MapPin size={14} />, type: "transfer" },
            { time: "16:00", title: "Hotel Check-in", description: "Canaves Oia Suites - Junior Suite with Caldera View", icon: <Heart size={14} />, type: "hotel" },
            { time: "19:00", title: "Sunset Dinner", description: "Ammoudi Bay seafood dinner with caldera sunset views", icon: <Utensils size={14} />, type: "dining" },
        ]
    },
    {
        day: 2, title: "Exploring Oia & Wine", activities: [
            { time: "09:00", title: "Breakfast at Hotel", description: "Full Greek breakfast on private terrace", icon: <Utensils size={14} />, type: "dining" },
            { time: "10:30", title: "Oia Walking Tour", description: "Guided tour of Oia's blue-domed churches and art galleries", icon: <Camera size={14} />, type: "tour" },
            { time: "14:00", title: "Wine Tasting Tour", description: "Visit 3 award-winning wineries with sommelier", icon: <Sun size={14} />, type: "activity" },
            { time: "20:00", title: "Fine Dining", description: "Chef's tasting menu at Lycabettus Restaurant", icon: <Utensils size={14} />, type: "dining" },
        ]
    },
    {
        day: 3, title: "Sea & Volcano", activities: [
            { time: "09:30", title: "Catamaran Cruise", description: "Private catamaran to volcanic hot springs & Red Beach", icon: <Sun size={14} />, type: "activity" },
            { time: "13:00", title: "BBQ Lunch on Board", description: "Fresh grilled seafood and local wine on the catamaran", icon: <Utensils size={14} />, type: "dining" },
            { time: "17:00", title: "Spa Treatment", description: "Couples massage at Mystique Spa overlooking the caldera", icon: <Heart size={14} />, type: "activity" },
        ]
    },
];

const typeColors: Record<string, string> = {
    transfer: "bg-info-100 text-info-600",
    hotel: "bg-coral-100 text-coral-600",
    dining: "bg-warning-100 text-warning-600",
    tour: "bg-success-100 text-success-600",
    activity: "bg-purple-100 text-purple-600",
};

export function ItineraryPage() {
    const [prompt, setPrompt] = useState("");
    const [showResult, setShowResult] = useState(true);

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title flex items-center gap-2">
                        <Sparkles size={22} className="text-coral-500" /> AI Itinerary Builder
                    </h1>
                    <p className="page-subtitle">Generate complete day-by-day itineraries from natural language</p>
                </div>
            </div>

            {/* AI Input */}
            <div className="card">
                <div className="card-body">
                    <label className="form-label">Describe the trip</label>
                    <div className="flex gap-3">
                        <input
                            type="text"
                            className="form-input flex-1"
                            placeholder='e.g., "5-day luxury honeymoon in Santorini with private tours and fine dining"'
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                        <button className="btn-primary shrink-0" onClick={() => setShowResult(true)}>
                            <Sparkles size={16} /> Generate
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {["5-day luxury honeymoon in Santorini", "7-day family safari in Kenya", "3-day adventure trek in Nepal", "10-day cultural tour of Japan"].map((s) => (
                            <button key={s} onClick={() => setPrompt(s)} className="text-xs px-3 py-1.5 rounded-full border transition-colors" style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#FF6F4A"; e.currentTarget.style.color = "#FF6F4A"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-text-muted)"; }}
                            >{s}</button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Generated Itinerary */}
            {showResult && (
                <div className="space-y-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h2 className="text-lg font-heading font-bold" style={{ color: "var(--color-heading)" }}>Santorini Luxury Honeymoon</h2>
                                    <div className="flex items-center gap-4 mt-1 text-xs" style={{ color: "var(--color-text-muted)" }}>
                                        <span className="flex items-center gap-1"><MapPin size={12} /> Santorini, Greece</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> 5 Days / 4 Nights</span>
                                        <span className="flex items-center gap-1"><DollarSign size={12} /> Est. $8,500 per couple</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="btn-outline btn-sm">Export PDF</button>
                                    <button className="btn-primary btn-sm">Share with Client</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    {sampleItinerary.map((day) => (
                        <div key={day.day} className="card">
                            <div className="card-header">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-coral flex items-center justify-center">
                                        <span className="text-white font-heading font-bold text-sm">D{day.day}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>Day {day.day}: {day.title}</h3>
                                        <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>{day.activities.length} activities planned</span>
                                    </div>
                                </div>
                                <button className="btn-ghost btn-sm"><Plus size={14} /> Add Activity</button>
                            </div>
                            <div className="card-body">
                                <div className="space-y-3">
                                    {day.activities.map((act, i) => (
                                        <div key={i} className="flex items-start gap-4 p-3 rounded-lg transition-colors" style={{ background: "var(--color-surface-alt)" }}>
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${typeColors[act.type] || "bg-slate-100 text-slate-600"}`}>
                                                {act.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>{act.time}</span>
                                                    <span className="text-sm font-medium" style={{ color: "var(--color-heading)" }}>{act.title}</span>
                                                </div>
                                                <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>{act.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
