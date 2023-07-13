import { useQuery } from 'react-query';
import { instance } from '../axios';

const router = 'pdf';

/** 미리보기용 원서 pdf 출력 */
export const GetPdfPreview = () => {
  const response = async () => {
    const { data } = await instance.get(`${router}/preview`, {
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/pdf',
      },
    });
    return data;
  };
  return useQuery(['PdfPreview'], response);
};
