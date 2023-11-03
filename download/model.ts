import { ModelDocument } from "../document";

export interface DownloadModel extends ModelDocument{
  url?: string;
  title?: string;
}