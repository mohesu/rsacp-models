import { ModelDocument } from "../document";

export interface LatestUpdateModel extends ModelDocument, LatestUpdateModelRequest{
  
}
export interface LatestUpdateModelRequest {
  title?: string;
  url?: string; 
}