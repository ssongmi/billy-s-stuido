import { useEffect } from 'react';
import data from '../data/Filter.json';
import Button from './Button';

export default function RightBar () {
  const album = JSON.parse(localStorage.getItem('album'));
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
            album?.map((picture) => (
              <div className="picture-container">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                  alt="picture"
                  src={picture}
                />
              </div>
            ))
          }
          <Button
            className="rect-btn picture-add-btn"
            icon="icon_add.svg"
          />
        </div>
      </div>
    </div>
  );
}
