import { Settings, Globe, DollarSign, Bell, Shield, Palette } from "lucide-react";
import { useState } from "react";

export function ConfigPage() {
    const [activeTab, setActiveTab] = useState("general");

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title flex items-center gap-2"><Settings size={22} className="text-coral-500" /> System Configuration</h1>
                    <p className="page-subtitle">Manage platform settings and preferences</p>
                </div>
                <button className="btn-primary">Save Changes</button>
            </div>

            <div className="tab-list">
                {[{ k: "general", l: "General", i: <Settings size={14} /> }, { k: "currency", l: "Currency", i: <DollarSign size={14} /> }, { k: "localization", l: "Localization", i: <Globe size={14} /> }, { k: "notifications", l: "Notifications", i: <Bell size={14} /> }, { k: "security", l: "Security", i: <Shield size={14} /> }, { k: "branding", l: "Branding", i: <Palette size={14} /> }].map((t) => (
                    <button key={t.k} onClick={() => setActiveTab(t.k)} className={`tab-item flex items-center gap-1.5 ${activeTab === t.k ? "active" : ""}`}>
                        {t.i}{t.l}
                    </button>
                ))}
            </div>

            <div className="card">
                <div className="card-body space-y-6">
                    {activeTab === "general" && (
                        <>
                            <div>
                                <label className="form-label">Company Name</label>
                                <input className="form-input max-w-md" defaultValue="TravelOps Inc." />
                            </div>
                            <div>
                                <label className="form-label">Primary Email</label>
                                <input className="form-input max-w-md" defaultValue="admin@travelops.com" />
                            </div>
                            <div>
                                <label className="form-label">Phone</label>
                                <input className="form-input max-w-md" defaultValue="+1 (555) 000-1234" />
                            </div>
                            <div>
                                <label className="form-label">Default Commission Rate (%)</label>
                                <input type="number" className="form-input w-32" defaultValue={10} />
                            </div>
                            <div>
                                <label className="form-label">Fiscal Year Start</label>
                                <select className="form-select w-48"><option>January</option><option>April</option><option>July</option><option>October</option></select>
                            </div>
                        </>
                    )}
                    {activeTab === "currency" && (
                        <>
                            <div>
                                <label className="form-label">Base Currency</label>
                                <select className="form-select w-48"><option>USD ($)</option><option>EUR (€)</option><option>GBP (£)</option></select>
                            </div>
                            <div>
                                <label className="form-label">Supported Currencies</label>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "INR"].map((c) => (
                                        <label key={c} className="flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer" style={{ borderColor: "var(--color-border)" }}>
                                            <input type="checkbox" defaultChecked className="rounded" /><span className="text-sm">{c}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <label className="form-label mb-0">Auto-update exchange rates</label>
                                <div className="toggle active"><div className="toggle-knob" /></div>
                            </div>
                        </>
                    )}
                    {activeTab === "localization" && (
                        <>
                            <div>
                                <label className="form-label">Default Language</label>
                                <select className="form-select w-48"><option>English</option><option>Spanish</option><option>French</option><option>German</option></select>
                            </div>
                            <div>
                                <label className="form-label">Date Format</label>
                                <select className="form-select w-48"><option>YYYY-MM-DD</option><option>DD/MM/YYYY</option><option>MM/DD/YYYY</option></select>
                            </div>
                            <div>
                                <label className="form-label">Timezone</label>
                                <select className="form-select w-64"><option>UTC</option><option>America/New_York</option><option>Europe/London</option><option>Asia/Tokyo</option></select>
                            </div>
                        </>
                    )}
                    {!["general", "currency", "localization"].includes(activeTab) && (
                        <div className="text-center py-12" style={{ color: "var(--color-text-muted)" }}>
                            <Settings size={40} className="mx-auto mb-3 opacity-30" />
                            <p className="text-sm">Settings for <strong className="capitalize">{activeTab}</strong> will be configurable here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
