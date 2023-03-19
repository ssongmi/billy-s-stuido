// eslint-disable-next-line import/no-extraneous-dependencies
import Split from 'react-split';
import LeftBar from '../component/LeftBar';
import GenerateBar from '../component/GenerateBar';
import RightBar from '../component/RightBar';
import Main from '../component/Main';

export default function Index() {
  return (
    <>
      <LeftBar />
      <Split className="split">
        <GenerateBar />
        <Main />
        <RightBar />
      </Split>
    </>
  );
}
