import { useRecoilState, useRecoilValue } from 'recoil';
import { useCallback, useRef, useState } from 'react';
import { useQueryClient } from 'react-query';
import data from '../data/KeywordType.json';
import Button from './Button';
import KeyType from '../atom/KeyType';
import Picture from '../atom/Picture';
import useImage from '../hook/useImage';
import { useImage2Image, useTest, useText2Image } from '../api/useImage';
import GeneratedPicture from '../atom/GeneratedPicture';
import SnackBarAtom from '../atom/SnackBar';
import Mode from '../atom/Mode';
import Prompt from '../atom/Prompt';

const MAX_FILE_SIZE = 1024 * 1024;
export default function GenerateBar () {
  const [picture, setPicture] = useRecoilState(Picture);
  const [generatedPicture, setGeneratedPicture] = useRecoilState(GeneratedPicture);
  const [mode, setMode] = useRecoilState(Mode);
  const [type, setType] = useState('family');
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useRecoilState(Prompt);
  const { mutate: image2Image } = useImage2Image();
  const { mutate: text2Image } = useText2Image();
  const [snackbar, setSnackbar] = useRecoilState(SnackBarAtom);

  const keyType = useRecoilValue(KeyType);
  const { convertToBase64, convertToBlob } = useImage();

  const fileRef = useRef();
  const handleClickUpload = useCallback(() => {
    if (fileRef) {
      fileRef.current.click();
    }
  }, [fileRef]);

  const handleModeBtnClick = useCallback((newMode) => {
    setMode(newMode);
  }, []);

  const handleImageChange = useCallback((evt) => {
    const newEvt = evt;
    const fileSize = evt?.target?.files[0]?.size;
    if (MAX_FILE_SIZE <= fileSize) {
      setSnackbar({ open: true, msg: '1MB 이하의 사진을 선택해주세요.', type: 'error' });
      newEvt.target.value = '';
      return;
    }
    setGeneratedPicture(null);
    setPicture(evt.target.files[0]);
    newEvt.target.value = '';
  }, []);

  const queryClient = useQueryClient();
  const handleGenerateClick = useCallback(async () => {
    if (mode === 'image') {
      const formData = new FormData();
      formData.append('image', picture);
      image2Image({ formData, prompt });
    } else if (mode === 'text') {
      text2Image({ prompt });
    }
  }, [picture, prompt, convertToBlob, mode]);

  const handleWordClick = useCallback((newWord) => {
    setPrompt((prevPrompt) => `${prevPrompt}${prevPrompt.length === 0 ? '' : ', '} ${newWord}`);
  }, []);
  return (
    <div className="generate-bar-container">
      <div className="image-container">
        <div className="mode-btn-container">
          <Button
            className={mode === 'image' ? 'mode-btn active' : 'mode-btn'}
            handleClick={() => handleModeBtnClick('image')}
          >
            IMAGE TO IMAGE
          </Button>
          <Button
            className={mode === 'text' ? 'mode-btn active' : 'mode-btn'}
            handleClick={() => handleModeBtnClick('text')}
          >
            TEXT TO IMAGE
          </Button>
        </div>

        { mode === 'image' ? (
          <div className="group-container">
            <div className="group-title">
              <div className="group-main-title">Image</div>
              <div className="group-description">
                Upload or draw an image to use as inspiration.
                <br />
                The size of the picture must be
                {' '}
                <b>1MB</b>
                {' '}
                or less.
              </div>
            </div>
            <div className="contents-container image-upload-container">
              <input
                className="image-fake-input"
                onClick={handleClickUpload}
                readOnly
              />
              <input
                ref={fileRef}
                type="file"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                onChange={handleImageChange}
              />
              <div />
              <div />
            </div>
          </div>
        ) : '' }
      </div>
      <div className="group-container prompt-container">
        <div className="group-title">
          <div className="group-main-title">Prompt</div>
          <div className="group-description">
            What do you want to see? You can use a single word or a full sentence
          </div>
        </div>
        <div className="keyword-container">
          {
            data.keywords[keyType]?.map((keyword) => (
              <Button
                className="oval-btn keyword-btn"
                icon="icon_add_active.svg"
                handleClick={() => handleWordClick(keyword)}
              >
                {keyword}
              </Button>
            ))
          }
        </div>
        <div className="contents-container">
          <textarea
            className="prompt-input"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}

          />
        </div>
      </div>
      <div className="generate-btn-container">
        <Button
          className="generate-btn dark-green-btn"
          handleClick={handleGenerateClick}
        >
          GENERATE
        </Button>
      </div>
    </div>
  );
}
