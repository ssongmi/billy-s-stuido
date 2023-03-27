// eslint-disable-next-line import/no-extraneous-dependencies
import Split from 'react-split';
import { Suspense } from 'react';
import LeftBar from '../component/LeftBar';
import GenerateBar from '../component/GenerateBar';
import RightBar from '../component/RightBar';
import Main from '../component/Main';
import Progress from '../component/Progress';

export default function Index() {
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
