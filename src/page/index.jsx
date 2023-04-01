// eslint-disable-next-line import/no-extraneous-dependencies
import Split from 'react-split';
import { Suspense, useEffect } from 'react';
import { useIsFetching, useIsMutating } from 'react-query';
import { useRecoilValue } from 'recoil';
import { useCookies } from 'react-cookie';
import LeftBar from '../component/LeftBar';
import GenerateBar from '../component/GenerateBar';
import RightBar from '../component/RightBar';
import MainPage from './MainPage';
import Progress from '../component/Progress';
import Start from './Start';
import Main from '../component/Main';
import SnackBar from '../component/SnackBar';

export default function Index() {
  const isMutating = useIsMutating();
  useEffect(() => {
    localStorage.removeItem('album');
  }, []);
  return (
    <>
      <SnackBar />
      <Start />
      <div className="backdrop" style={{ zIndex: 9999, display: isMutating > 0 ? 'block' : 'none' }}>
        <Progress mode="circle" open />
      </div>
      <div className="page-container main-page">
        <LeftBar />
        <Split className="split" gutterSize={4} sizes={[30, 40, 30]} style={{ width: '100%' }}>
          <GenerateBar />
          <Main />
          <RightBar />
        </Split>
      </div>
    </>
  );
}
