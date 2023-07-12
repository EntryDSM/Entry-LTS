export interface IBoard {
  title?: string;
  boardNumber?: number;
  isPublic?: boolean;
  isReplied?: boolean;
  userName?: string;
  createdAt?: string;
  isNumber: boolean;
  isTopBorder: boolean;
  isComment?: boolean;
  isWriter?: boolean;
  isWriteDay?: boolean;
  isOpen?: boolean;
  content?: string;
}
