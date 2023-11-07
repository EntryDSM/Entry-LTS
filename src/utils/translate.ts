import { FaqType } from './api/faq/types';

export const faqTypeToKorean: Record<FaqType, string> = {
  ADMISSION: '입학 문의',
  SCHOOL_LIFE: '학교 생활',
  COURSE: '진학 문의',
  OTHER: '기타',
  '': '전체',
};
