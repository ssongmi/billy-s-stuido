import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import base64ToBlob from 'base64toblob';
import data from '../data/Filter.json';
import Button from './Button';
import Picture from '../atom/Picture';
import useImage from '../hook/useImage';
import GeneratedPicture from '../atom/GeneratedPicture';
import { useImage2Image, useText2Image } from '../api/useImage';
import Mode from '../atom/Mode';
import Prompt from '../atom/Prompt';

const IMAGE_TYPE = 'iVBORw0...ASUVORK5CYII=';
export default function RightBar () {
  const [album, setAlbum] = useState(JSON.parse(localStorage.getItem('album')));
  const mode = useRecoilValue(Mode);
  const picture = useRecoilValue(Picture);
  const prompt = useRecoilValue(Prompt);
  const { mutate: image2Image } = useImage2Image();
  const { mutate: text2Image } = useText2Image();
  const generatedPicture = useRecoilValue(GeneratedPicture);
  const { convertToBase64 } = useImage();
  const handleAddClick = useCallback(async () => {
    const originAlbum = JSON.parse(localStorage.getItem('album')) || [];
    if (originAlbum?.length > 6) {
      originAlbum.pop();
    }
    originAlbum.push(URL.createObjectURL(base64ToBlob(generatedPicture, IMAGE_TYPE)));
    localStorage.setItem('album', JSON.stringify(originAlbum));

    setAlbum(originAlbum);
  }, [generatedPicture]);

  const handleFilterClick = useCallback((suffix) => {
    console.log('dd');
    if (mode === 'image') {
      const formData = new FormData();
      formData.append('image', picture);
      image2Image({ formData, prompt: prompt + suffix });
    } else if (mode === 'text') {
      text2Image({ prompt: prompt + suffix });
    }
  }, [prompt, image2Image, text2Image, picture, mode]);
  return (
    <div className="right-bar-container">
      <div className="group-container filter-container">
        <div className="group-title">
          <div className="group-main-title">Filter</div>
          <div className="group-description">Let&rsquo;s express your picture</div>
        </div>
        <div className="contents-container filter-btn-container">
          {
            data.filters.map((filter) => (
              // eslint-disable-next-line max-len
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
              <div
                className="filter-btn-wrap"
                onClick={() => handleFilterClick(filter.suffix)}
              >
                <Button
                  icon={filter.img}
                  className="round-rect-btn filter-btn"
                />
                <div className="filter-btn-hover">
                  {filter.type}
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="group-container album-container">
        <div className="group-title">
          <div className="group-main-title">Album</div>
          <div className="group-description">Let&rsquo;s save your picture</div>
        </div>
        <div className="contents-container album-btn-container">
          {
            album?.map((pic) => (
              <div className="picture-container">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                  alt="picture"
                  src={pic}
                />
              </div>
            ))
          }
          <Button
            className="rect-btn picture-add-btn"
            icon="icon_add.svg"
            handleClick={handleAddClick}
          />
        </div>
      </div>
    </div>
  );
}
