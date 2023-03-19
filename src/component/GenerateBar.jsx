import { useCallback, useRef, useState } from 'react';
import data from '../data/KeywordType.json';
import Button from './Button';

export default function GenerateBar () {
  const [mode, setMode] = useState('image');
  const [type, setType] = useState('family');
  const [image, setImage] = useState(null);

  const fileRef = useRef();

  const handleClickUpload = useCallback(() => {
    if (fileRef) {
      fileRef.current.click();
    }
  }, [fileRef]);

  const handleModeBtnClick = useCallback((newMode) => {
    setMode(newMode);
  }, []);

  const handleImageChange = useCallback(() => {}, []);
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
            data.keywords[type]?.map((keyword) => (
              <Button
                className="oval-btn keyword-btn"
                icon="icon_add_active.svg"
              >
                {keyword}
              </Button>
            ))
          }
        </div>
        <div className="contents-container">
          <input
            className="prompt-input"
          />
        </div>
      </div>
      <div className="generate-btn-container">
        <Button className="generate-btn dark-green-btn">GENERATE</Button>
      </div>
    </div>
  );
}