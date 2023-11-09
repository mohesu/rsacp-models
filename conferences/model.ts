import { ModelDocument } from "../document";

export interface ConferencesModel extends ModelDocument, ConferencesModelRequest{
  
}
export interface ConferencesModelRequest {
  title?: string;
  url?: string; 
}