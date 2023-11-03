import { ModelDocument } from "../document";

export interface BannerModel extends ModelDocument{
  title: string;
  description: string;
  link: string;
  imageId? : string;
}