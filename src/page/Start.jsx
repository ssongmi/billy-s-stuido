import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Button from '../component/Button';

export default function Start() {
  const [cookies, setCookie, removeCookie] = useCookies(['start']);
  const handleStartClick = useCallback(() => {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    setCookie('start', true, {
      expires,
    });
  }, []);
  return (
    <div
      className="page-container start-page"
      style={{
        opacity: cookies.start ? 0 : 1,
        visibility: cookies.start ? 'hidden' : 'visible',
      }}
    >
      <div className="start-page">
        <div className="start-page-overlay" />
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img className="start-page-img" alt="image" src={`${process.env.PUBLIC_URL}/img/main.png`} />
        <span className="start-page-title">빌리의 화실</span>
        <Button
          handleClick={handleStartClick}
          className="start-page-btn"
        >
          Let&#39;s Start
        </Button>
      </div>
    </div>
  );
}
