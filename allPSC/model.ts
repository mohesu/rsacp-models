
import { ModelDocument } from "../document";
export interface AllPSCModel extends ModelDocument{
  year?: string;
  president?: string;
  secretary?: string;
  chiefEditor?: string;
}