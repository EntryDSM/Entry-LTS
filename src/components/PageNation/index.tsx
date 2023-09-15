import * as _ from './style';
import Arrow from '../../assets/Arrow.svg';
import { Icon } from '@team-entry/design_system';

export interface IPage {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data: [];
}
const PageNation = () => {
  // const Left = () => {
  //   if (page !== 0) {
  //     setPage((prev) => prev - 1);
  //   }
  // };

  // const Right = () => {
  //   if (page !== Math.ceil(data?.length / 12) - 1) {
  //     setPage((prev) => prev + 1);
  //   }
  // };

  return (
    <_._Pages>
      <_._Arrow kind="outlined" icon="LeftArrow" onClick={() => {}} color="orange" />
      <_._PageButton>1</_._PageButton>
      <_._Arrow kind="outlined" icon="RightArrow" onClick={() => {}} color="orange" />
    </_._Pages>
  );
};

export default PageNation;
