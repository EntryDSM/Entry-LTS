export type NoticeType = 'FRESHMAN' | 'ADMISSION';

export interface IAllNotice {
  notices: INotice[];
}

export interface INotice {
  id: string;
  title: string;
  type: NoticeType;
  is_pinned: boolean;
  created_at: string;
}

export interface INoticeDetail {
  title: string;
  content: string;
  created_at: string;
  type: NoticeType;
  image: string;
}
