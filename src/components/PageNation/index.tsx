import * as _ from './style';
import Arrow from '../../assets/Arrow.svg';

export interface IPage {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data: [];
}
const PageNation = () => {
  //   const Left = () => {
  //     if (page !== 0) {
  //       setPage((prev) => prev - 1);
  //     }
  //   };

  //   const Right = () => {
  //     if (page !== Math.ceil(data?.length / 12) - 1) {
  //       setPage((prev) => prev + 1);
  //     }
  //   };

  return (
    <_._Pages>
      <>
        <_._Arrow rotate={180} src={Arrow}></_._Arrow>
      </>
      <>
        <_._Arrow src={Arrow}></_._Arrow>
      </>
    </_._Pages>
  );
};

export default PageNation;
