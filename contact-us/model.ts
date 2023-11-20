import { ModelDocument } from "../document";

export interface ContactUsModel extends ModelDocument, ContactUsModelRequest{
  
}

export interface ContactUsModelRequest {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  deleted?: boolean;
  viewed?: boolean;
}