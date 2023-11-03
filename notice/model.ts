import { ModelDocument } from "../document";

export interface NoticeModel extends ModelDocument{
  title?: string;
  url?: string; 
}