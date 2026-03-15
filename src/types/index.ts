// ── User Roles ───────────────────────────────────────────────────
export type UserRole = "agent" | "operator" | "dmc" | "admin";

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar?: string;
    initials: string;
    department?: string;
}

// ── CRM Types ────────────────────────────────────────────────────
export type LeadStatus = "new" | "contacted" | "qualified" | "proposal" | "negotiation" | "won" | "lost";
export type BookingStatus = "inquiry" | "pending" | "confirmed" | "in-progress" | "completed" | "cancelled";
export type Priority = "low" | "medium" | "high" | "urgent";

export interface Contact {
    id: string;
    name: string;
    email: string;
    phone: string;
    company?: string;
    type: "lead" | "client" | "partner";
    status: LeadStatus;
    source: string;
    assignedTo: string;
    value: number;
    currency: string;
    tags: string[];
    lastContact: string;
    createdAt: string;
    notes?: string;
    avatar?: string;
    initials: string;
}

export interface Deal {
    id: string;
    title: string;
    contact: string;
    contactName: string;
    value: number;
    currency: string;
    stage: LeadStatus;
    probability: number;
    expectedClose: string;
    assignedTo: string;
    createdAt: string;
    description?: string;
    tags: string[];
}

export interface Activity {
    id: string;
    type: "call" | "email" | "meeting" | "task" | "note";
    title: string;
    description: string;
    contactId?: string;
    contactName?: string;
    assignedTo: string;
    dueDate: string;
    completed: boolean;
    createdAt: string;
    priority: Priority;
}

// ── Booking Types ────────────────────────────────────────────────
export interface Booking {
    id: string;
    reference: string;
    clientName: string;
    clientEmail: string;
    destination: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    status: BookingStatus;
    totalAmount: number;
    commission: number;
    currency: string;
    source: string;
    agent: string;
    createdAt: string;
    services: string[];
    notes?: string;
}

// ── Product / Inventory Types ────────────────────────────────────
export type ProductType = "tour" | "hotel" | "transfer" | "activity" | "package" | "flight";

export interface Product {
    id: string;
    name: string;
    type: ProductType;
    destination: string;
    description: string;
    basePrice: number;
    currency: string;
    duration?: string;
    category: string;
    rating: number;
    totalBookings: number;
    status: "active" | "draft" | "archived";
    supplier: string;
    images?: string[];
    tags: string[];
}

export interface InventoryItem {
    id: string;
    productId: string;
    productName: string;
    date: string;
    totalSlots: number;
    bookedSlots: number;
    blockedSlots: number;
    status: "available" | "limited" | "sold-out" | "blocked";
}

// ── Supplier Types ───────────────────────────────────────────────
export interface Supplier {
    id: string;
    name: string;
    type: string;
    location: string;
    email: string;
    phone: string;
    rating: number;
    contractStatus: "active" | "pending" | "expired";
    totalOrders: number;
    totalSpend: number;
    currency: string;
    contactPerson: string;
    tags: string[];
}

// ── Financial Types ──────────────────────────────────────────────
export interface Invoice {
    id: string;
    number: string;
    clientName: string;
    amount: number;
    currency: string;
    status: "draft" | "sent" | "paid" | "overdue" | "cancelled";
    issueDate: string;
    dueDate: string;
    bookingRef?: string;
}

export interface Commission {
    id: string;
    agentName: string;
    bookingRef: string;
    clientName: string;
    bookingAmount: number;
    commissionRate: number;
    commissionAmount: number;
    currency: string;
    status: "pending" | "approved" | "paid";
    date: string;
}

// ── Campaign Types ───────────────────────────────────────────────
export interface Campaign {
    id: string;
    name: string;
    status: "draft" | "scheduled" | "active" | "completed" | "paused";
    type: "email" | "sms" | "newsletter";
    audience: number;
    sent: number;
    opened: number;
    clicked: number;
    converted: number;
    startDate: string;
    endDate?: string;
}

// ── Notification Types ───────────────────────────────────────────
export interface Notification {
    id: string;
    type: "booking" | "payment" | "system" | "alert" | "message";
    title: string;
    description: string;
    time: string;
    read: boolean;
    actionUrl?: string;
}

// ── Chart Data ───────────────────────────────────────────────────
export interface ChartDataPoint {
    name: string;
    value: number;
    value2?: number;
    value3?: number;
}

// ── Navigation Types ─────────────────────────────────────────────
export interface NavItem {
    label: string;
    path: string;
    icon: string;
    badge?: number;
    children?: NavItem[];
}

export interface NavSection {
    title: string;
    items: NavItem[];
}
