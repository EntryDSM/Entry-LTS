export interface IAuthorizationResponse {
  accessToken: string;
  refreshToken: string;
}

type ApplicationType = 'COMMON' | 'MEISTER' | 'SOCIAL';

export interface IApplyInfoStatusResponse {
  phoneNumber: string;
  name: string;
  submitted: boolean;
  printed_arrived: boolean;
  application_type: ApplicationType;
  self_introduce: string;
  study_plan: string;
  receipt_code: number;
}
