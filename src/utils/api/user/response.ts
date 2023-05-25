export interface AuthorizationResponse {
  access_token: string;
  refresh_token: string;
}

export interface ApplyInfoStatusResponse {
  phone_number: string;
  name: string;
  is_submitted: boolean;
  is_printed_arrived: boolean;
  application_type: 'MEISTER';
  self_introduce: string;
  study_plan: string;
}
