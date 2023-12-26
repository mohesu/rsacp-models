import { ModelDocument } from "../document";

export interface BranchModel extends ModelDocument, BranchModelRequest {}
export interface BranchModelRequest {
  state?: string;
  city?: string;
  type?: string;
  zone?: string;
  presidentName?: string;
  presidentEmail?: string;
  presidentMobile?: string;
  secretaryName?: string;
  secretaryEmail?: string;
  secretaryMobile?: string;
  isActive?: boolean;
  deleted?: boolean;
}
