import { ModelDocument } from "../document";

export interface BannerModel extends ModelDocument, BannerModelRequest{
 
}

export interface BannerModelRequest {
  title?: string;
  description?: string;
  link?: string;
  imageId?: string;
  isActive?:boolean;
}
