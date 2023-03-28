// eslint-disable-next-line import/no-extraneous-dependencies
import Split from 'react-split';
import { Suspense, useEffect } from 'react';
import { useIsFetching } from 'react-query';
import LeftBar from '../component/LeftBar';
import GenerateBar from '../component/GenerateBar';
import RightBar from '../component/RightBar';
import Main from '../component/Main';
import Progress from '../component/Progress';

export default function Index() {
  const isFetching = useIsFetching();
  useEffect(() => {
    console.log('-------------');
    console.log(isFetching);
  }, [isFetching]);
  return (
    <Suspense fallback={(
      <div className="backdrop" style={{ zIndex: 9999 }}>
        <Progress mode="circle" open />
      </div>
    )}
    >
      <LeftBar />
      <Split className="split">
        <GenerateBar />
        <Main />
        <RightBar />
      </Split>
    </Suspense>
  );
}
