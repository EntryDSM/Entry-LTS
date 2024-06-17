export type FaqType = 'ADMISSION' | 'COURSE' | 'SCHOOL_LIFE' | 'OTHER' | '';

export interface ICreateFaq {
  title: string;
  content: string;
  faqType: FaqType;
}

export type GetFaqType = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  faqType: FaqType;
};

export interface IGetFaq {
  faqs: GetFaqType[];
}

export interface IFaqDetail {
  title: string;
  content: string;
  createdAt: string;
  faqType: FaqType;
}
