export type NoticeType = 'GUIDE' | 'NOTICE' | '';

export interface IAllNotice {
  notices: INotice[];
}

export interface INotice {
  id: string;
  title: string;
  type: NoticeType;
  isPinned: boolean;
  createdAt: string;
}

export interface IAttachFiles {
  attachFileUrl: string;
  attachFileName: string;
}

export interface INoticeDetail {
  title: string;
  content: string;
  createdAt: string;
  type: NoticeType;
  imageURL: string;
  attachFiles: IAttachFiles[];
}

export interface ICreateNotice {
  title: string;
  content: string;
  type: NoticeType;
  isPinned: boolean;
  fileName?: string;
  attachFileName?: string[];
}

export interface IUploadNoticeImage {
  photo: File;
}
