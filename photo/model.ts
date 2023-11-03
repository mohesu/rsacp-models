import { ModelDocument } from "../document";

export interface PhotoModel  extends ModelDocument{
  title: string;
  imageId?: string;
}