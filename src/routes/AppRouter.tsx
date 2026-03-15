import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { useAppSelector } from "../hooks/useStore";
import { LoginPage } from "../pages/auth/LoginPage";
import { LandingPage } from "../pages/public/LandingPage";

/* ---- Lazy-loaded pages ---- */
// Agent
const AgentDashboard = lazy(() => import("../pages/agent/AgentDashboard").then(m => ({ default: m.AgentDashboard })));
const PipelinePage = lazy(() => import("../pages/agent/PipelinePage").then(m => ({ default: m.PipelinePage })));
const ClientsPage = lazy(() => import("../pages/agent/ClientsPage").then(m => ({ default: m.ClientsPage })));
const BookingsPage = lazy(() => import("../pages/agent/BookingsPage").then(m => ({ default: m.BookingsPage })));
const CommissionsPage = lazy(() => import("../pages/agent/CommissionsPage").then(m => ({ default: m.CommissionsPage })));
const ItineraryPage = lazy(() => import("../pages/agent/ItineraryPage").then(m => ({ default: m.ItineraryPage })));
const MarketplacePage = lazy(() => import("../pages/agent/MarketplacePage").then(m => ({ default: m.MarketplacePage })));

// Tour Operator
const OperatorDashboard = lazy(() => import("../pages/operator/OperatorDashboard").then(m => ({ default: m.OperatorDashboard })));
const ProductsPage = lazy(() => import("../pages/operator/ProductsPage").then(m => ({ default: m.ProductsPage })));
const InventoryPage = lazy(() => import("../pages/operator/InventoryPage").then(m => ({ default: m.InventoryPage })));
const RatesPage = lazy(() => import("../pages/operator/RatesPage").then(m => ({ default: m.RatesPage })));
const SuppliersPage = lazy(() => import("../pages/operator/SuppliersPage").then(m => ({ default: m.SuppliersPage })));
const MarginsPage = lazy(() => import("../pages/operator/MarginsPage").then(m => ({ default: m.MarginsPage })));

// DMC
const DMCDashboard = lazy(() => import("../pages/dmc/DMCDashboard").then(m => ({ default: m.DMCDashboard })));
const ServicesPage = lazy(() => import("../pages/dmc/ServicesPage").then(m => ({ default: m.ServicesPage })));
const AvailabilityPage = lazy(() => import("../pages/dmc/AvailabilityPage").then(m => ({ default: m.AvailabilityPage })));
const B2BPortalPage = lazy(() => import("../pages/dmc/B2BPortalPage").then(m => ({ default: m.B2BPortalPage })));
const DMCSuppliersPage = lazy(() => import("../pages/dmc/DMCSuppliersPage").then(m => ({ default: m.DMCSuppliersPage })));

// Admin
const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard").then(m => ({ default: m.AdminDashboard })));
const FinancialsPage = lazy(() => import("../pages/admin/FinancialsPage").then(m => ({ default: m.FinancialsPage })));
const TeamPage = lazy(() => import("../pages/admin/TeamPage").then(m => ({ default: m.TeamPage })));
const ConfigPage = lazy(() => import("../pages/admin/ConfigPage").then(m => ({ default: m.ConfigPage })));
const IntegrationsPage = lazy(() => import("../pages/admin/IntegrationsPage").then(m => ({ default: m.IntegrationsPage })));
const SystemStatusPage = lazy(() => import("../pages/admin/SystemStatusPage").then(m => ({ default: m.SystemStatusPage })));

// CRM
const ContactsPage = lazy(() => import("../pages/crm/ContactsPage").then(m => ({ default: m.ContactsPage })));
const CRMPipelinePage = lazy(() => import("../pages/crm/CRMPipelinePage").then(m => ({ default: m.CRMPipelinePage })));
const ActivitiesPage = lazy(() => import("../pages/crm/ActivitiesPage").then(m => ({ default: m.ActivitiesPage })));
const MarketingPage = lazy(() => import("../pages/crm/MarketingPage").then(m => ({ default: m.MarketingPage })));

// ERP
const ERPProductsPage = lazy(() => import("../pages/erp/ERPProductsPage").then(m => ({ default: m.ERPProductsPage })));
const ERPInventoryPage = lazy(() => import("../pages/erp/ERPInventoryPage").then(m => ({ default: m.ERPInventoryPage })));
const ERPSuppliersPage = lazy(() => import("../pages/erp/ERPSuppliersPage").then(m => ({ default: m.ERPSuppliersPage })));
const ERPBookingsPage = lazy(() => import("../pages/erp/ERPBookingsPage").then(m => ({ default: m.ERPBookingsPage })));
const ERPFinancePage = lazy(() => import("../pages/erp/ERPFinancePage").then(m => ({ default: m.ERPFinancePage })));
const DocumentsPage = lazy(() => import("../pages/erp/DocumentsPage").then(m => ({ default: m.DocumentsPage })));

// Analytics
const BIDashboardPage = lazy(() => import("../pages/analytics/BIDashboardPage").then(m => ({ default: m.BIDashboardPage })));
const ReportBuilderPage = lazy(() => import("../pages/analytics/ReportBuilderPage").then(m => ({ default: m.ReportBuilderPage })));
const AIInsightsPage = lazy(() => import("../pages/analytics/AIInsightsPage").then(m => ({ default: m.AIInsightsPage })));

function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center h-64">
            <div className="w-8 h-8 border-3 border-coral-500 border-t-transparent rounded-full animate-spin" />
        </div>
    );
}

function roleHome(role: string) {
    switch (role) {
        case "agent": return "/agent";
        case "operator": return "/operator";
        case "dmc": return "/dmc";
        case "admin": return "/admin";
        default: return "/agent";
    }
}

export function AppRouter() {
    const { currentRole, isAuthenticated } = useAppSelector((s) => s.auth);

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                {/* Public Routes */}
                <Route 
                    path="/" 
                    element={isAuthenticated ? <Navigate to={roleHome(currentRole)} replace /> : <LandingPage />} 
                />
                <Route 
                    path="/login" 
                    element={!isAuthenticated ? <LoginPage /> : <Navigate to={roleHome(currentRole)} replace />} 
                />

                {/* Protected Dashboard routes */}
                <Route element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" replace />}>
                    {/* Role-based entry points handled via specific paths, no top-level index redirect here to avoid衝突 */}
                    {/* Agent */}
                    <Route path="/agent" element={<AgentDashboard />} />
                    <Route path="/agent/pipeline" element={<PipelinePage />} />
                    <Route path="/agent/clients" element={<ClientsPage />} />
                    <Route path="/agent/bookings" element={<BookingsPage />} />
                    <Route path="/agent/commissions" element={<CommissionsPage />} />
                    <Route path="/agent/itinerary" element={<ItineraryPage />} />
                    <Route path="/agent/marketplace" element={<MarketplacePage />} />

                    {/* Tour Operator */}
                    <Route path="/operator" element={<OperatorDashboard />} />
                    <Route path="/operator/products" element={<ProductsPage />} />
                    <Route path="/operator/inventory" element={<InventoryPage />} />
                    <Route path="/operator/rates" element={<RatesPage />} />
                    <Route path="/operator/suppliers" element={<SuppliersPage />} />
                    <Route path="/operator/margins" element={<MarginsPage />} />

                    {/* DMC */}
                    <Route path="/dmc" element={<DMCDashboard />} />
                    <Route path="/dmc/services" element={<ServicesPage />} />
                    <Route path="/dmc/availability" element={<AvailabilityPage />} />
                    <Route path="/dmc/b2b-portal" element={<B2BPortalPage />} />
                    <Route path="/dmc/suppliers" element={<DMCSuppliersPage />} />

                    {/* Admin */}
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/financials" element={<FinancialsPage />} />
                    <Route path="/admin/team" element={<TeamPage />} />
                    <Route path="/admin/config" element={<ConfigPage />} />
                    <Route path="/admin/integrations" element={<IntegrationsPage />} />
                    <Route path="/admin/status" element={<SystemStatusPage />} />

                    {/* CRM (Shared Module) */}
                    <Route path="/crm/contacts" element={<ContactsPage />} />
                    <Route path="/crm/pipeline" element={<CRMPipelinePage />} />
                    <Route path="/crm/activities" element={<ActivitiesPage />} />
                    <Route path="/crm/marketing" element={<MarketingPage />} />

                    {/* ERP (Shared Module) */}
                    <Route path="/erp/products" element={<ERPProductsPage />} />
                    <Route path="/erp/inventory" element={<ERPInventoryPage />} />
                    <Route path="/erp/suppliers" element={<ERPSuppliersPage />} />
                    <Route path="/erp/bookings" element={<ERPBookingsPage />} />
                    <Route path="/erp/finance" element={<ERPFinancePage />} />
                    <Route path="/erp/documents" element={<DocumentsPage />} />

                    {/* Analytics (Shared Module) */}
                    <Route path="/analytics/bi" element={<BIDashboardPage />} />
                    <Route path="/analytics/reports" element={<ReportBuilderPage />} />
                    <Route path="/analytics/ai-insights" element={<AIInsightsPage />} />
                </Route>

                {/* Catch-all */}
                <Route path="*" element={<Navigate to={roleHome(currentRole)} replace />} />
            </Routes>
        </Suspense>
    );
}
