import { ModelDocument } from "../document";

export interface RsacpAwardModel extends ModelDocument, RsacpAwardModelRequest{
 
}
export interface RsacpAwardModelRequest {
  title?: string;
  description?: string;
}