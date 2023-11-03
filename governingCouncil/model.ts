import { ModelDocument } from "../document";

export interface GoverningCouncilModel extends ModelDocument{
  imageId?: string;
  name?: string;
  designation?: string;
  mobile?: string;
  email?: string;
  city?: string;
  state?: string;
  type: string;
}
