export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  type: 'contact' | 'quote' | 'support';
}

export interface SupportTicket {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  product_category: string;
  quantity?: number;
  details: string;
}
