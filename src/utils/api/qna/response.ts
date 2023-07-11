export interface IQnaListResponse {
  qna_list: IQnaCard[];
}

export interface IQnaCard {
  id: number;
  title: string;
  username: string;
  created_at: string;
  is_replied: boolean;
  is_public: boolean;
  is_mine: boolean;
}

export interface IQnaDetailResponse {
  id: number;
  title: string;
  content: string;
  username: string;
  is_replied: boolean;
  is_mine: boolean;
  created_at: string;
  reply: IReply;
}

export interface IReply {
  title: string;
  content: string;
  created_at: string;
}
