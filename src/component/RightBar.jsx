import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import base64ToBlob from 'base64toblob';
import data from '../data/Filter.json';
import Button from './Button';
import Picture from '../atom/Picture';
import useImage from '../hook/useImage';
import GeneratedPicture from '../atom/GeneratedPicture';

const IMAGE_TYPE = 'iVBORw0...ASUVORK5CYII=';
export default function RightBar () {
  const [album, setAlbum] = useState(JSON.parse(localStorage.getItem('album')));

  const picture = useRecoilValue(Picture);
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
              <div className="filter-btn-wrap">
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
