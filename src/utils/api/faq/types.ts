export type FaqType = 'ADMISSION' | 'COURSE' | 'SCHOOL_LIFE' | 'OTHER';

export interface ICreateFaq {
  title: string;
  content: string;
  faq_type: FaqType;
}

export interface IGetFaq {
  title: string;
  content: string;
  created_at: string;
  faq_type: FaqType;
}

export interface IQnaFaqDetail {
  title: string;
  content: string;
  created_at: string;
  type: FaqType;
}
