import { ModelDocument } from "../document";

export interface NoticeModel extends ModelDocument, NoticeModelRequest{
  
}
export interface NoticeModelRequest {
  title?: string;
  url?: string; 
  attachmentId?:string;
}
