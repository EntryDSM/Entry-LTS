import styled from '@emotion/styled';
import { Text } from '@team-entry/design_system';

interface IGradePreview {
  gradeScore: number;
  attendenceScore: number;
  volunteerScore: number;
  maxScore: number;
  dsmAlgorithmScore: number;
  certificateScore: number;
}

const GradePreview = ({
  gradeScore,
  attendenceScore,
  volunteerScore,
  maxScore,
  dsmAlgorithmScore,
  certificateScore,
}: IGradePreview) => {
  return (
    <CurrentGrades>
      <Text size="title3" color="black" style={{ fontWeight: 700 }}>
        총: {gradeScore + attendenceScore + volunteerScore + dsmAlgorithmScore + certificateScore}/{maxScore}
      </Text>
      <Text size="title3" color="black" style={{ fontWeight: 500 }}>
        성적 점수: {gradeScore}/{maxScore - 30}
      </Text>
      <Text size="title3" color="black" style={{ fontWeight: 500 }}>
        출석 점수: {attendenceScore}/15
      </Text>
      <Text size="title3" color="black" style={{ fontWeight: 500 }}>
        봉사 점수: {volunteerScore}/15
      </Text>
    </CurrentGrades>
  );
};

export default GradePreview;

const CurrentGrades = styled.div`
  display: flex;
  gap: 10px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`;
