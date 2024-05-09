import GoToBlog from '@/assets/GoToBlog';
import Medium from '@/assets/Medium';
import styled from '@emotion/styled';

const MediumBlog = () => {
  const blogs = new Array(9).fill(
    <Blogfigure
      href="https://naver.com"
      blogData={{
        backgroundImg: '',
        date: '2024.05.08',
        title: '아주 멋있는 제목임',
        description: '아주 멋있는 블로그 내용이 여기 아래에 있어요',
      }}
    />,
  );

  return (
    <Section>
      <h2>저희가 문제를 해결해가는 과정을 보여드릴게요</h2>
      <h1>미디엄 블로그</h1>
      <div>
        <BlogMore>
          <span>
            블로그 더보기
            <GoToBlog />
          </span>
          <Medium />
        </BlogMore>
        <BlogSection>{blogs}</BlogSection>
      </div>
    </Section>
  );
};

export default MediumBlog;

const Section = styled.section`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  & > div {
    display: flex;
    gap: 20px;
  }
`;

const BlogMore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > span {
    display: flex;
    gap: 4px;
    align-items: center;
    color: #969696;
    cursor: pointer;
  }
`;

const BlogSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 15px;
`;

interface BlogPropsType {
  href: string;
  blogData: {
    backgroundImg: string;
    date: string;
    title: string;
    description: string;
  };
}

const Blogfigure = ({ href, blogData }: BlogPropsType) => {
  return (
    <a href={href}>
      <Figure>
        <img src={blogData.backgroundImg}></img>
        <figcaption>
          <Date>{blogData.date}</Date>
          <Title>{blogData.title}</Title>
          <Description>{blogData.description}</Description>
        </figcaption>
      </Figure>
    </a>
  );
};

const Figure = styled.figure`
  width: 250px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  padding: 12px;

  & > img {
    background-color: #d9d9d9;
    border-radius: 12px;
    flex-grow: 1;
  }

  & > figcaption {
    display: flex;
    flex-direction: column;
  }
`;

const Date = styled.span`
  font-size: 12px;
  color: #737373;
  font-weight: 100;
  padding-bottom: 2px;
`;

const Title = styled.span`
  font-size: 16px;
  padding-bottom: 4px;
`;

const Description = styled.span`
  font-size: 14px;
  height: 17px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
