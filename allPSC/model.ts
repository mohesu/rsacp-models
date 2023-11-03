
import { ModelDocument } from "../document";
export interface AllPSCModel extends ModelDocument, AllPSCModelRequest{

}
export interface AllPSCModelRequest {
  year?: string;
  president?: string;
  secretary?: string;
  chiefEditor?: string;
}