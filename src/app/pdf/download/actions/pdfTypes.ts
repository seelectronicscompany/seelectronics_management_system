import { BankInfo, InvoicesType, PaymentTypes, StaffsType } from "@/types";

export type PayoutPreference = "bkash" | "nagad" | "rocket" | "bank";

export interface CertificatePayload {
  type: "certificate";
  staffId?: string;
  memberNumber?: string;
  shopName?: string;
  shopId?: string;
  ownerName?: string;
  phone?: string;
  address?: string;
  district?: string;
}

export interface IdCardPayload {
  type: "id-card";
  id: string;
  issuedAt: Date;
}

export interface InvoiceTemplateData extends InvoicesType {
  bgImage: string;
}

export interface PaymentReceiptTemplateData {
  bgImage: string;
  invoiceNumber: string;
  date: Date;
  description: string | null;
  staffId: string;
  transactionId: string | null;
  paymentId: string;
  paymentMethod: PaymentTypes;
  senderWalletNumber: string | null;
  senderBankInfo: BankInfo | null;
  receiverWalletNumber: string | null;
  receiverBankInfo: BankInfo | null;
  amount: number;
  staff: {
    name: string;
  };
  serviceId?: string | null;
}

export interface IdCardTemplateData extends Omit<
  StaffsType,
  "role" | "photoUrl" | "currentPoliceStation" | "currentPostOffice"
> {
  role: "technician" | "electrician";
  photoUrl: string;
  currentPoliceStation: string;
  currentPostOffice: string;
  frontBgImage: string;
  backBgImage: string;
  issueDate: Date;
  qrcode: string;
  barcode: string;
}
export interface CertificateTemplateData extends Omit<
  StaffsType,
  "role" | "phone"
> {
  role: "technician" | "electrician";
  bgImage: string;
  issueDate: Date;
  qrcode: string;
  font1: string;
  font2: string;
  font3: string;
  memberNumber: string;
  shopName: string;
  shopId: string;
  ownerName: string;
  phone: string;
  address: string;
  district: string;
}

export interface ComplaintTemplateData {
  complaintId: string;
  customer: {
    name: string;
    customerId: string;
    phone: string;
    address: string;
  };
  staff: {
    name: string;
    phone: string;
    role: string;
    staffId: string;
    currentStreetAddress?: string;
    currentDistrict?: string;
  };
  productType?: string;
  subject: string;
  description: string;
  status: string;
  adminNote?: string | null;
  createdAt: Date;
  logo?: string;
}

export interface CustomerComplaintTemplateData {
  complaintId: string;
  serviceId: string;
  customer: {
    name: string;
    customerId: string;
    phone: string;
    address: string;
  };
  staff: {
    name: string;
    staffId: string;
  };
  subject: string;
  description: string;
  createdAt: Date;
  logo?: string;
  elecLogo?: string;
  elecSign?: string;
}

export interface HearingNoticeTemplateData {
  complaintId: string;
  customer: {
    name: string;
    customerId: string;
    phone: string;
    address: string;
  };
  staff: {
    name: string;
    phone: string;
    role: string;
    staffId: string;
  };
  subject: string;
  adminNote: string;
  issueDateBn: string;
  receiptNum: string;
  orderNum: string;
  logo?: string;
  elecLogo?: string;
  elecSign?: string;
  officerName?: string;
  officerDesignation?: string;
}

export interface CompletionNoticeTemplateData {
  complaintId: string;
  customer: {
    name: string;
    customerId: string;
    phone: string;
    address: string;
  };
  staff: {
    name: string;
    phone: string;
    role: string;
    staffId: string;
  };
  subject: string;
  adminNote: string;
  punishmentType?: string;
  punishmentStartDate?: string;
  punishmentEndDate?: string;
  resolvedDateBn: string;
  receiptNo: string;
  logo?: string;
  elecLogo?: string;
  elecSign?: string;
  officerName?: string;
  officerDesignation?: string;
}

export interface StaffNotGuiltyTemplateData {
  complaintId: string;
  customer: {
    name: string;
    customerId: string;
    phone: string;
    address: string;
  };
  staff: {
    name: string;
    phone: string;
    role: string;
    staffId: string;
  };
  subject: string;
  adminNote: string;
  resolvedDateBn: string;
  receiptNo: string;
  logo?: string;
  elecLogo?: string;
  elecSign?: string;
  officerName?: string;
  officerDesignation?: string;
}
