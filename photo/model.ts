import { ModelDocument } from "../document";

export interface PhotoModel  extends ModelDocument,PhotoModelRequest{
}

export interface PhotoModelRequest {
  title?: string;
  imageId?: string;
}