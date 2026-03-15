import type { User, Contact, Deal, Activity, Booking, Product, Supplier, Invoice, Commission, Campaign, Notification, ChartDataPoint } from "../types";

// ── Users ────────────────────────────────────────────────────────
export const mockUsers: User[] = [
    { id: "u1", name: "Sarah Mitchell", email: "sarah@travelops.com", role: "agent", initials: "SM", department: "Sales" },
    { id: "u2", name: "James Porter", email: "james@travelops.com", role: "operator", initials: "JP", department: "Operations" },
    { id: "u3", name: "Maria Santos", email: "maria@travelops.com", role: "dmc", initials: "MS", department: "DMC Greece" },
    { id: "u4", name: "David Chen", email: "david@travelops.com", role: "admin", initials: "DC", department: "Management" },
];

// ── Contacts ─────────────────────────────────────────────────────
export const mockContacts: Contact[] = [
    { id: "c1", name: "Emma Johnson", email: "emma@gmail.com", phone: "+1 555-0101", type: "client", status: "won", source: "Website", assignedTo: "u1", value: 8500, currency: "USD", tags: ["luxury", "honeymoon"], lastContact: "2026-02-28", createdAt: "2025-11-15", initials: "EJ" },
    { id: "c2", name: "Robert Williams", email: "robert@corp.com", phone: "+1 555-0102", company: "TechVentures Inc", type: "client", status: "qualified", source: "Referral", assignedTo: "u1", value: 24000, currency: "USD", tags: ["corporate", "group"], lastContact: "2026-03-01", createdAt: "2026-01-10", initials: "RW" },
    { id: "c3", name: "Alice Chen", email: "alice@travel.com", phone: "+1 555-0103", type: "lead", status: "new", source: "Instagram", assignedTo: "u1", value: 3200, currency: "USD", tags: ["budget", "adventure"], lastContact: "2026-03-02", createdAt: "2026-02-28", initials: "AC" },
    { id: "c4", name: "Michael Brown", email: "michael@outlook.com", phone: "+44 20 7946 0958", type: "client", status: "proposal", source: "Google Ads", assignedTo: "u1", value: 12000, currency: "GBP", tags: ["luxury", "family"], lastContact: "2026-02-25", createdAt: "2025-12-05", initials: "MB" },
    { id: "c5", name: "Sophie Laurent", email: "sophie@yahoo.fr", phone: "+33 1 42 68 53 00", type: "lead", status: "contacted", source: "Trade Show", assignedTo: "u1", value: 5600, currency: "EUR", tags: ["cultural", "solo"], lastContact: "2026-02-20", createdAt: "2026-02-18", initials: "SL" },
    { id: "c6", name: "Raj Patel", email: "raj@bizmail.in", phone: "+91 98765 43210", company: "IndiGo Tours", type: "partner", status: "won", source: "LinkedIn", assignedTo: "u1", value: 45000, currency: "USD", tags: ["b2b", "bulk"], lastContact: "2026-02-27", createdAt: "2025-09-20", initials: "RP" },
    { id: "c7", name: "Lisa Anderson", email: "lisa@fastmail.com", phone: "+1 555-0107", type: "lead", status: "negotiation", source: "Website", assignedTo: "u1", value: 6800, currency: "USD", tags: ["wellness", "retreat"], lastContact: "2026-03-01", createdAt: "2026-01-25", initials: "LA" },
    { id: "c8", name: "Kenji Tanaka", email: "kenji@travel.jp", phone: "+81 3-5555-1234", company: "Sakura Travel Co", type: "partner", status: "qualified", source: "Conference", assignedTo: "u1", value: 38000, currency: "USD", tags: ["b2b", "asia"], lastContact: "2026-02-22", createdAt: "2026-01-08", initials: "KT" },
];

// ── Deals ────────────────────────────────────────────────────────
export const mockDeals: Deal[] = [
    { id: "d1", title: "Santorini Honeymoon Package", contact: "c1", contactName: "Emma Johnson", value: 8500, currency: "USD", stage: "won", probability: 100, expectedClose: "2026-03-15", assignedTo: "u1", createdAt: "2025-11-20", tags: ["luxury", "honeymoon"] },
    { id: "d2", title: "Corporate Retreat - Bali", contact: "c2", contactName: "Robert Williams", value: 24000, currency: "USD", stage: "qualified", probability: 60, expectedClose: "2026-04-10", assignedTo: "u1", createdAt: "2026-01-12", tags: ["corporate", "group"] },
    { id: "d3", title: "Adventure Trek Nepal", contact: "c3", contactName: "Alice Chen", value: 3200, currency: "USD", stage: "new", probability: 20, expectedClose: "2026-05-01", assignedTo: "u1", createdAt: "2026-02-28", tags: ["adventure"] },
    { id: "d4", title: "Family Safari Kenya", contact: "c4", contactName: "Michael Brown", value: 12000, currency: "GBP", stage: "proposal", probability: 50, expectedClose: "2026-04-20", assignedTo: "u1", createdAt: "2025-12-10", tags: ["luxury", "family"] },
    { id: "d5", title: "Provence Wine & Culture Tour", contact: "c5", contactName: "Sophie Laurent", value: 5600, currency: "EUR", stage: "contacted", probability: 30, expectedClose: "2026-05-15", assignedTo: "u1", createdAt: "2026-02-19", tags: ["cultural"] },
    { id: "d6", title: "Maldives Wellness Retreat", contact: "c7", contactName: "Lisa Anderson", value: 6800, currency: "USD", stage: "negotiation", probability: 75, expectedClose: "2026-03-25", assignedTo: "u1", createdAt: "2026-01-28", tags: ["wellness"] },
    { id: "d7", title: "Japan Cherry Blossom Tour", contact: "c8", contactName: "Kenji Tanaka", value: 38000, currency: "USD", stage: "qualified", probability: 55, expectedClose: "2026-04-01", assignedTo: "u1", createdAt: "2026-01-10", tags: ["b2b", "asia"] },
    { id: "d8", title: "Iceland Northern Lights Trip", contact: "c3", contactName: "Alice Chen", value: 4200, currency: "USD", stage: "new", probability: 15, expectedClose: "2026-06-01", assignedTo: "u1", createdAt: "2026-03-01", tags: ["adventure"] },
];

// ── Activities ───────────────────────────────────────────────────
export const mockActivities: Activity[] = [
    { id: "a1", type: "call", title: "Follow-up call with Emma", description: "Discuss honeymoon preferences", contactId: "c1", contactName: "Emma Johnson", assignedTo: "u1", dueDate: "2026-03-03", completed: false, createdAt: "2026-03-01", priority: "high" },
    { id: "a2", type: "email", title: "Send Bali proposal to Robert", description: "Corporate retreat package details", contactId: "c2", contactName: "Robert Williams", assignedTo: "u1", dueDate: "2026-03-04", completed: false, createdAt: "2026-03-01", priority: "urgent" },
    { id: "a3", type: "meeting", title: "Team sales review", description: "Weekly pipeline review meeting", assignedTo: "u1", dueDate: "2026-03-05", completed: false, createdAt: "2026-02-28", priority: "medium" },
    { id: "a4", type: "task", title: "Update Kenya Safari pricing", description: "Get latest rates from supplier", contactId: "c4", contactName: "Michael Brown", assignedTo: "u1", dueDate: "2026-03-02", completed: true, createdAt: "2026-02-27", priority: "high" },
    { id: "a5", type: "note", title: "Client preference update", description: "Sophie prefers boutique hotels, no chains", contactId: "c5", contactName: "Sophie Laurent", assignedTo: "u1", dueDate: "2026-02-28", completed: true, createdAt: "2026-02-20", priority: "low" },
    { id: "a6", type: "call", title: "Negotiate Maldives resort rate", description: "Try for 15% group discount", contactId: "c7", contactName: "Lisa Anderson", assignedTo: "u1", dueDate: "2026-03-06", completed: false, createdAt: "2026-03-02", priority: "high" },
];

// ── Bookings ─────────────────────────────────────────────────────
export const mockBookings: Booking[] = [
    { id: "b1", reference: "BK-2026-001", clientName: "Emma Johnson", clientEmail: "emma@gmail.com", destination: "Santorini, Greece", checkIn: "2026-04-15", checkOut: "2026-04-22", guests: 2, status: "confirmed", totalAmount: 8500, commission: 850, currency: "USD", source: "Direct", agent: "Sarah Mitchell", createdAt: "2026-01-15", services: ["Hotel", "Transfers", "Tours"] },
    { id: "b2", reference: "BK-2026-002", clientName: "Robert Williams", clientEmail: "robert@corp.com", destination: "Bali, Indonesia", checkIn: "2026-05-10", checkOut: "2026-05-17", guests: 15, status: "pending", totalAmount: 24000, commission: 2400, currency: "USD", source: "B2B Portal", agent: "Sarah Mitchell", createdAt: "2026-02-01", services: ["Hotel", "Flights", "Team Building"] },
    { id: "b3", reference: "BK-2026-003", clientName: "Michael Brown", clientEmail: "michael@outlook.com", destination: "Kenya", checkIn: "2026-06-20", checkOut: "2026-06-28", guests: 4, status: "inquiry", totalAmount: 12000, commission: 1200, currency: "GBP", source: "Website", agent: "Sarah Mitchell", createdAt: "2026-02-15", services: ["Safari", "Lodge", "Transfers"] },
    { id: "b4", reference: "BK-2026-004", clientName: "Lisa Anderson", clientEmail: "lisa@fastmail.com", destination: "Maldives", checkIn: "2026-05-01", checkOut: "2026-05-08", guests: 1, status: "confirmed", totalAmount: 6800, commission: 680, currency: "USD", source: "Direct", agent: "Sarah Mitchell", createdAt: "2026-02-20", services: ["Resort", "Spa", "Water Sports"] },
    { id: "b5", reference: "BK-2026-005", clientName: "Sophie Laurent", clientEmail: "sophie@yahoo.fr", destination: "Provence, France", checkIn: "2026-07-05", checkOut: "2026-07-12", guests: 2, status: "pending", totalAmount: 5600, commission: 560, currency: "EUR", source: "Instagram", agent: "Sarah Mitchell", createdAt: "2026-03-01", services: ["Boutique Hotel", "Wine Tours", "Transfers"] },
    { id: "b6", reference: "BK-2026-006", clientName: "Raj Patel", clientEmail: "raj@bizmail.in", destination: "Europe Multi-City", checkIn: "2026-08-01", checkOut: "2026-08-15", guests: 30, status: "confirmed", totalAmount: 45000, commission: 6750, currency: "USD", source: "B2B Portal", agent: "Sarah Mitchell", createdAt: "2025-10-10", services: ["Hotels", "Flights", "Tours", "Transfers"] },
    { id: "b7", reference: "BK-2026-007", clientName: "Kenji Tanaka", clientEmail: "kenji@travel.jp", destination: "Japan", checkIn: "2026-04-01", checkOut: "2026-04-10", guests: 20, status: "in-progress", totalAmount: 38000, commission: 5700, currency: "USD", source: "Conference", agent: "Sarah Mitchell", createdAt: "2026-01-15", services: ["Hotels", "Guides", "Rail Pass", "Cultural Tours"] },
    { id: "b8", reference: "BK-2025-048", clientName: "Maria Santos", clientEmail: "maria@travelops.com", destination: "Patagonia, Argentina", checkIn: "2025-12-10", checkOut: "2025-12-20", guests: 6, status: "completed", totalAmount: 15200, commission: 2280, currency: "USD", source: "Direct", agent: "Sarah Mitchell", createdAt: "2025-09-05", services: ["Lodge", "Trekking", "Transfers"] },
];

// ── Products ─────────────────────────────────────────────────────
export const mockProducts: Product[] = [
    { id: "p1", name: "Santorini Sunset Experience", type: "package", destination: "Santorini, Greece", description: "7-night luxury stay with private sunset tours and wine tasting", basePrice: 4200, currency: "USD", duration: "7 nights", category: "Luxury", rating: 4.9, totalBookings: 145, status: "active", supplier: "Aegean Luxury Hotels", tags: ["luxury", "romantic"] },
    { id: "p2", name: "Bali Wellness Retreat", type: "package", destination: "Bali, Indonesia", description: "5-night holistic wellness program with yoga and spa treatments", basePrice: 1800, currency: "USD", duration: "5 nights", category: "Wellness", rating: 4.7, totalBookings: 89, status: "active", supplier: "Bali Healing Center", tags: ["wellness", "retreat"] },
    { id: "p3", name: "Kenya Big Five Safari", type: "tour", destination: "Masai Mara, Kenya", description: "6-day safari with luxury tented camps and expert guides", basePrice: 3500, currency: "USD", duration: "6 days", category: "Adventure", rating: 4.8, totalBookings: 210, status: "active", supplier: "Savanna Expeditions", tags: ["safari", "wildlife"] },
    { id: "p4", name: "Tokyo Cultural Discovery", type: "tour", destination: "Tokyo, Japan", description: "Full-day guided tour of traditional and modern Tokyo", basePrice: 150, currency: "USD", duration: "1 day", category: "Cultural", rating: 4.6, totalBookings: 520, status: "active", supplier: "Japan Experience Co", tags: ["cultural", "city"] },
    { id: "p5", name: "Maldives Water Villa", type: "hotel", destination: "Maldives", description: "Overwater villa with private pool and butler service", basePrice: 850, currency: "USD", duration: "per night", category: "Luxury", rating: 4.9, totalBookings: 78, status: "active", supplier: "Paradise Island Resort", tags: ["luxury", "beach"] },
    { id: "p6", name: "Provence Wine Tour", type: "activity", destination: "Provence, France", description: "Full-day tour of 4 premier vineyards with sommelier", basePrice: 220, currency: "EUR", duration: "1 day", category: "Food & Wine", rating: 4.8, totalBookings: 340, status: "active", supplier: "Provence Wine Routes", tags: ["wine", "food"] },
    { id: "p7", name: "Airport Transfer - Athens", type: "transfer", destination: "Athens, Greece", description: "Private luxury car transfer from Athens International Airport", basePrice: 65, currency: "EUR", duration: "45 min", category: "Transfer", rating: 4.5, totalBookings: 890, status: "active", supplier: "Athens Private Cars", tags: ["transfer"] },
    { id: "p8", name: "Iceland Northern Lights Hunt", type: "tour", destination: "Reykjavik, Iceland", description: "3-night aurora borealis chase with expert photographer guide", basePrice: 1200, currency: "USD", duration: "3 nights", category: "Adventure", rating: 4.7, totalBookings: 156, status: "active", supplier: "Arctic Adventures", tags: ["adventure", "nature"] },
    { id: "p9", name: "Nepal Everest Base Camp Trek", type: "tour", destination: "Nepal", description: "14-day guided trek to Everest Base Camp", basePrice: 2800, currency: "USD", duration: "14 days", category: "Adventure", rating: 4.6, totalBookings: 92, status: "draft", supplier: "Himalaya Guides", tags: ["trekking", "adventure"] },
    { id: "p10", name: "Patagonia Explorer", type: "package", destination: "Patagonia, Argentina", description: "10-night expedition through Torres del Paine and Perito Moreno", basePrice: 5500, currency: "USD", duration: "10 nights", category: "Adventure", rating: 4.8, totalBookings: 64, status: "active", supplier: "Austral Expeditions", tags: ["adventure", "nature"] },
];

// ── Suppliers ────────────────────────────────────────────────────
export const mockSuppliers: Supplier[] = [
    { id: "s1", name: "Aegean Luxury Hotels", type: "Hotel Chain", location: "Santorini, Greece", email: "bookings@aegeanluxury.com", phone: "+30 22860 71234", rating: 4.9, contractStatus: "active", totalOrders: 145, totalSpend: 285000, currency: "EUR", contactPerson: "Nikos Papadopoulos", tags: ["luxury", "greece"] },
    { id: "s2", name: "Bali Healing Center", type: "Resort & Spa", location: "Ubud, Bali", email: "reservations@balihealing.com", phone: "+62 361 975 123", rating: 4.7, contractStatus: "active", totalOrders: 89, totalSpend: 98000, currency: "USD", contactPerson: "Wayan Suarta", tags: ["wellness", "bali"] },
    { id: "s3", name: "Savanna Expeditions", type: "Tour Operator", location: "Nairobi, Kenya", email: "ops@savannaexp.co.ke", phone: "+254 20 234 5678", rating: 4.8, contractStatus: "active", totalOrders: 210, totalSpend: 450000, currency: "USD", contactPerson: "John Mwangi", tags: ["safari", "africa"] },
    { id: "s4", name: "Japan Experience Co", type: "Ground Handler", location: "Tokyo, Japan", email: "info@japanexp.co.jp", phone: "+81 3-5555-1234", rating: 4.6, contractStatus: "active", totalOrders: 520, totalSpend: 180000, currency: "JPY", contactPerson: "Yuki Tanaka", tags: ["japan", "cultural"] },
    { id: "s5", name: "Athens Private Cars", type: "Transfer Company", location: "Athens, Greece", email: "dispatch@athenscars.gr", phone: "+30 210 321 0000", rating: 4.5, contractStatus: "pending", totalOrders: 890, totalSpend: 125000, currency: "EUR", contactPerson: "Dimitris Alexiou", tags: ["transfer", "greece"] },
    { id: "s6", name: "Paradise Island Resort", type: "Resort", location: "Maldives", email: "res@paradiseisland.mv", phone: "+960 664 0011", rating: 4.9, contractStatus: "active", totalOrders: 78, totalSpend: 320000, currency: "USD", contactPerson: "Ahmed Rasheed", tags: ["luxury", "maldives"] },
];

// ── Invoices ─────────────────────────────────────────────────────
export const mockInvoices: Invoice[] = [
    { id: "inv1", number: "INV-2026-001", clientName: "Emma Johnson", amount: 8500, currency: "USD", status: "paid", issueDate: "2026-01-20", dueDate: "2026-02-20", bookingRef: "BK-2026-001" },
    { id: "inv2", number: "INV-2026-002", clientName: "Robert Williams", amount: 24000, currency: "USD", status: "sent", issueDate: "2026-02-05", dueDate: "2026-03-05", bookingRef: "BK-2026-002" },
    { id: "inv3", number: "INV-2026-003", clientName: "Michael Brown", amount: 12000, currency: "GBP", status: "draft", issueDate: "2026-02-20", dueDate: "2026-03-20", bookingRef: "BK-2026-003" },
    { id: "inv4", number: "INV-2026-004", clientName: "Lisa Anderson", amount: 6800, currency: "USD", status: "paid", issueDate: "2026-02-25", dueDate: "2026-03-25", bookingRef: "BK-2026-004" },
    { id: "inv5", number: "INV-2026-005", clientName: "Raj Patel", amount: 45000, currency: "USD", status: "overdue", issueDate: "2025-11-01", dueDate: "2025-12-01", bookingRef: "BK-2026-006" },
    { id: "inv6", number: "INV-2026-006", clientName: "Sophie Laurent", amount: 5600, currency: "EUR", status: "sent", issueDate: "2026-03-02", dueDate: "2026-04-02", bookingRef: "BK-2026-005" },
];

// ── Commissions ──────────────────────────────────────────────────
export const mockCommissions: Commission[] = [
    { id: "cm1", agentName: "Sarah Mitchell", bookingRef: "BK-2026-001", clientName: "Emma Johnson", bookingAmount: 8500, commissionRate: 10, commissionAmount: 850, currency: "USD", status: "paid", date: "2026-02-20" },
    { id: "cm2", agentName: "Sarah Mitchell", bookingRef: "BK-2026-002", clientName: "Robert Williams", bookingAmount: 24000, commissionRate: 10, commissionAmount: 2400, currency: "USD", status: "pending", date: "2026-03-05" },
    { id: "cm3", agentName: "Sarah Mitchell", bookingRef: "BK-2026-004", clientName: "Lisa Anderson", bookingAmount: 6800, commissionRate: 10, commissionAmount: 680, currency: "USD", status: "approved", date: "2026-03-01" },
    { id: "cm4", agentName: "Sarah Mitchell", bookingRef: "BK-2026-006", clientName: "Raj Patel", bookingAmount: 45000, commissionRate: 15, commissionAmount: 6750, currency: "USD", status: "paid", date: "2025-12-15" },
    { id: "cm5", agentName: "Sarah Mitchell", bookingRef: "BK-2026-007", clientName: "Kenji Tanaka", bookingAmount: 38000, commissionRate: 15, commissionAmount: 5700, currency: "USD", status: "pending", date: "2026-02-15" },
];

// ── Campaigns ────────────────────────────────────────────────────
export const mockCampaigns: Campaign[] = [
    { id: "cmp1", name: "Spring Escape Deals", status: "active", type: "email", audience: 3200, sent: 3180, opened: 1420, clicked: 380, converted: 45, startDate: "2026-02-15", endDate: "2026-03-15" },
    { id: "cmp2", name: "Honeymoon Season Launch", status: "scheduled", type: "email", audience: 820, sent: 0, opened: 0, clicked: 0, converted: 0, startDate: "2026-03-10" },
    { id: "cmp3", name: "Winter Sun Newsletter", status: "completed", type: "newsletter", audience: 5400, sent: 5380, opened: 2150, clicked: 640, converted: 78, startDate: "2025-11-01", endDate: "2025-12-31" },
    { id: "cmp4", name: "Adventure Travel Week", status: "draft", type: "email", audience: 1500, sent: 0, opened: 0, clicked: 0, converted: 0, startDate: "2026-04-01" },
];

// ── Notifications ────────────────────────────────────────────────
export const mockNotifications: Notification[] = [
    { id: "n1", type: "booking", title: "New Booking Received", description: "Robert Williams - Corporate Retreat Bali", time: "5 min ago", read: false },
    { id: "n2", type: "payment", title: "Payment Received", description: "Emma Johnson paid $8,500 for Santorini package", time: "1 hour ago", read: false },
    { id: "n3", type: "alert", title: "Low Inventory Alert", description: "Kenya Safari - Only 3 slots left for June", time: "2 hours ago", read: false },
    { id: "n4", type: "message", title: "New Message", description: "Sophie Laurent asked about wine tour options", time: "3 hours ago", read: true },
    { id: "n5", type: "system", title: "Rate Update", description: "Aegean Hotels updated summer 2026 rates", time: "5 hours ago", read: true },
    { id: "n6", type: "booking", title: "Booking Confirmed", description: "Lisa Anderson - Maldives Water Villa confirmed", time: "1 day ago", read: true },
    { id: "n7", type: "payment", title: "Invoice Overdue", description: "Raj Patel - INV-2026-005 is 90 days overdue", time: "1 day ago", read: false },
];

// ── Chart Data ───────────────────────────────────────────────────
export const revenueByMonth: ChartDataPoint[] = [
    { name: "Sep", value: 42000, value2: 35000 },
    { name: "Oct", value: 58000, value2: 48000 },
    { name: "Nov", value: 65000, value2: 52000 },
    { name: "Dec", value: 48000, value2: 42000 },
    { name: "Jan", value: 72000, value2: 61000 },
    { name: "Feb", value: 85000, value2: 72000 },
];

export const bookingsByDestination: ChartDataPoint[] = [
    { name: "Greece", value: 245 },
    { name: "Bali", value: 189 },
    { name: "Kenya", value: 210 },
    { name: "Japan", value: 178 },
    { name: "Maldives", value: 134 },
    { name: "France", value: 156 },
];

export const bookingsBySource: ChartDataPoint[] = [
    { name: "Direct", value: 35 },
    { name: "B2B Portal", value: 28 },
    { name: "Website", value: 20 },
    { name: "Referral", value: 10 },
    { name: "Social", value: 7 },
];

export const monthlyBookings: ChartDataPoint[] = [
    { name: "Sep", value: 28 },
    { name: "Oct", value: 35 },
    { name: "Nov", value: 42 },
    { name: "Dec", value: 31 },
    { name: "Jan", value: 48 },
    { name: "Feb", value: 56 },
];

export const teamPerformance: ChartDataPoint[] = [
    { name: "Sarah M.", value: 42, value2: 78 },
    { name: "Tom H.", value: 35, value2: 65 },
    { name: "Amy L.", value: 38, value2: 72 },
    { name: "Chris B.", value: 28, value2: 55 },
    { name: "Diana K.", value: 31, value2: 68 },
];
