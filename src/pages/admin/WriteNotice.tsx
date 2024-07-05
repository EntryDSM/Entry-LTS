import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Input, Radio, Switch, Text, Textarea } from '@team-entry/design_system';
import { Mobile, Pc } from '@/hooks/useResponsive';
import { useInput } from '@/hooks/useInput';
import File from '@/components/File';
import { CreateNotice, UploadNoticeImage } from '@/utils/api/notice';
import { ICreateNotice } from '@/utils/api/notice/types';
import { UploadAttachFile } from '@/utils/api/attachFile';

const WriteNotice = () => {
  const [switchCheck, setSwitchCheck] = useState(false);
  const { form: inputValue, onChange: setInputValue } = useInput<ICreateNotice>({
    title: '',
    content: '',
    type: 'NOTICE',
    isPinned: false,
  });
  const { mutate: createNotice } = CreateNotice();
  const { mutate: uploadNoticeImage } = UploadNoticeImage();
  const { mutate: uploadAttachFile } = UploadAttachFile();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const inputImageRef = useRef<HTMLInputElement>();
  const inputFileRef = useRef<HTMLInputElement>();

  const onCreateNotice = () => {
    if (selectedImage) {
      uploadNoticeImage(
        { photo: selectedImage },
        {
          onSuccess: (imageResponse) => {
            if (selectedFiles.length > 0) {
              uploadAttachFile(selectedFiles, {
                onSuccess: (fileResponse) => {
                  createNotice({
                    ...inputValue,
                    isPinned: switchCheck,
                    fileName: imageResponse.data.fileName,
                    attachFileName: fileResponse.data.map((file) => file.fileName),
                  });
                },
              });
            } else {
              createNotice({
                ...inputValue,
                isPinned: switchCheck,
                fileName: imageResponse.data.fileName,
              });
            }
          },
        },
      );
    } else if (selectedFiles.length > 0) {
      uploadAttachFile(selectedFiles, {
        onSuccess: (fileResponse) => {
          createNotice({
            ...inputValue,
            isPinned: switchCheck,
            attachFileName: fileResponse.data.map((file) => file.fileName),
          });
        },
      });
    } else {
      createNotice({
        ...inputValue,
        isPinned: switchCheck,
      });
    }
  };

  const onImageUpload = () => {
    inputImageRef.current.click();
  };

  const onFileUpload = () => {
    inputFileRef.current.click();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setSelectedImage(event.target.files[0]);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles([...selectedFiles, ...Array.from(event.target.files)]); // 새로 추가
    }
  };

  useEffect(() => {
    inputImageRef.current.value = null;
    inputFileRef.current.value = null;
  }, [selectedImage, selectedFiles]);

  return (
    <_Container>
      <_Wrapper>
        <Pc>
          <Text color="black900" size="header1">
            공지사항 작성
          </Text>
        </Pc>
        <Mobile>
          <Text color="black900" size="title1">
            공지사항 작성
          </Text>
        </Mobile>
        <_Line />
        <_NoticeInputs>
          <_SwitchWrapper>
            글 고정
            <Switch color="green" isClick={switchCheck} onClick={() => setSwitchCheck((prev) => !prev)} />
          </_SwitchWrapper>
          <_RadioWrapper>
            <Radio
              title="분류"
              color="green"
              label="입학 공지사항"
              name="type"
              value="NOTICE"
              checked={inputValue.type === 'NOTICE'}
              onClick={setInputValue}
            />
            <Radio
              color="green"
              label="예비 신입생 안내"
              name="type"
              value="GUIDE"
              checked={inputValue.type === 'GUIDE'}
              onClick={setInputValue}
            />
          </_RadioWrapper>
          <Input
            type="text"
            label="제목"
            name="title"
            width="100%"
            placeholder="제목을 입력해주세요"
            value={inputValue.title}
            onChange={setInputValue}
          />
          <Textarea
            name="content"
            label="본문"
            width="100%"
            placeholder="내용을 입력해주세요"
            maxLength={600}
            value={inputValue.content}
            onChange={setInputValue}
            margin={['top', 20]}
          />
        </_NoticeInputs>
        <_ButtonBox>
          <_ButtonFooter>
            <Button color="green" kind="outlined" onClick={onImageUpload}>
              본업 이미지 업로드
            </Button>
            <Button color="green" kind="outlined" onClick={onFileUpload}>
              파일 업로드
            </Button>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageUpload}
              ref={inputImageRef}
              accept="image/*"
            />
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileUpload}
              ref={inputFileRef}
              accept="image/*,application/*"
              multiple
            />
          </_ButtonFooter>
          <Button color="green" onClick={onCreateNotice}>
            게시
          </Button>
        </_ButtonBox>
        <_FileWrapper>
          {selectedImage && (
            <File
              name={selectedImage.name}
              url={URL.createObjectURL(selectedImage)}
              isBornup={true}
              deleteFunction={() => {
                setSelectedImage(null);
              }}
            />
          )}
          {selectedFiles.map((file, index) => (
            <File
              key={index}
              name={file.name}
              url={URL.createObjectURL(file)}
              deleteFunction={() => {
                setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
              }}
            />
          ))}
        </_FileWrapper>
      </_Wrapper>
    </_Container>
  );
};

export default WriteNotice;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const _Wrapper = styled.div`
  margin-top: 7rem;
  width: 60rem;
  padding: 0 20px;
`;

const _Line = styled.div`
  margin: 25px 0px;
  width: 70px;
  height: 1.5px;
  background-color: #cacaca;
  @media screen and (max-width: 769px) {
    margin-top: 15px;
  }
`;

const _NoticeInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const _SwitchWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const _RadioWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
`;

const _ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media screen and (max-width: 769px) {
    margin-top: 15px;
  }
`;

const _ButtonFooter = styled.div`
  display: flex;
  gap: 12px;
  input {
    display: none;
  }
`;

const _FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px 0px 50px 0px;
`;
