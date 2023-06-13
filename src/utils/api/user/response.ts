export interface AuthorizationResponse {
  access_token: string;
  refresh_token: string;
}

type ApplicationType = 'COMMON' | 'MEISTER' | 'SOCIAL';

export interface ApplyInfoStatusResponse {
  phone_number: string;
  name: string;
  is_submitted: boolean;
  is_printed_arrived: boolean;
  application_type: ApplicationType;
  self_introduce: string;
  study_plan: string;
}
