// eslint-disable-next-line import/no-extraneous-dependencies
import Split from 'react-split';
import { Suspense, useEffect } from 'react';
import { useIsFetching, useIsMutating } from 'react-query';
import LeftBar from '../component/LeftBar';
import GenerateBar from '../component/GenerateBar';
import RightBar from '../component/RightBar';
import MainPage from './MainPage';
import Progress from '../component/Progress';
import Start from './Start';
import Main from '../component/Main';
import SnackBar from '../component/SnackBar';

export default function Index() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  return (
    <>
      <SnackBar />
      {/* <Start /> */}
      <div className="backdrop" style={{ zIndex: 9999, display: isFetching > 0 ? 'block' : 'none' }}>
        <Progress mode="circle" open />
      </div>
      <div className="page-container main-page">
        <LeftBar />
        <Split className="split">
          <GenerateBar />
          <Main />
          <RightBar />
        </Split>
      </div>
    </>
  );
}
