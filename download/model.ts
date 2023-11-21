import { ModelDocument } from "../document";

export interface DownloadModel extends ModelDocument, DownloadModelRequest{
  
}
export interface DownloadModelRequest {
  url?: string;
  title?: string;
  attachmentId?:string;
}
