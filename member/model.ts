import { ModelDocument } from "../document";

export interface MemberModel extends ModelDocument, MemberModelRequest {}
export interface MemberModelRequest {
  name?: string;
  dob?: Date;
  qualification?: string;
  designation?: string;
  house?: string;
  area?: string;
  imageId?: string;
  city?: string;
  pincode?: string;
  state?: string;
  country?: string;
  email?: string;
  mobile?: string;
  tel?: string;
  refName1?: string;
  refName2?: string;
  refMemNo1?: string;
  refMemNo2?: string;
  paymentMode?: string;
  transactionId?: string;
  amount?: string;
  bankName?: string;
  transactionDate?: Date;
  membershipNo?: string;
  landmark?: string;
  address?: string;
  membershipCode?: string;
  firstName?: string;
  lastName?: string;
  paymentScreenshotId?: string;
  qualificationName?: string;
  qualificationDocumentId?: string;
  status?: string;
  userId?: string;
  qualificationProof?: string;
}

export enum MemberStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
}
export const memberStatusList = [
  MemberStatus.Pending,
  MemberStatus.Approved,
  MemberStatus.Rejected,
];

export enum MemberQualification {
  MD = "MD",
  MS = "MS",
  DNB = "DNB",
}
export const memberQualificationList = [
  MemberQualification.MD,
  MemberQualification.MS,
  MemberQualification.DNB,
];
