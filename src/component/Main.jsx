import { useRecoilState, useRecoilValue } from 'recoil';
import { useCallback, useEffect, useMemo } from 'react';
import Picture from '../atom/Picture';
import GeneratedPicture from '../atom/GeneratedPicture';

export default function Main () {
  const picture = useRecoilValue(Picture);
  const generatedPicture = useRecoilValue(GeneratedPicture);
  const pictureURL = useMemo(() => (picture ? URL.createObjectURL(picture) : null), [picture]);
  const generatedPictureURL = useMemo(
    () => (generatedPicture ? URL.createObjectURL(generatedPicture) : null),
    [generatedPicture],
  );
  useEffect(() => {
    console.log(pictureURL);
  }, [pictureURL]);
  return (
    <div className="main-container">
      { pictureURL
        ? (
          <div className="main-picture-container before-picture">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img alt="before-picture" src={pictureURL} />
          </div>
        )
        : null}
      { generatedPictureURL ? (
        <div className="main-picture-container after-picture">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img alt="after-picture" src={generatedPictureURL} />
        </div>
      ) : null }
    </div>
  );
}
