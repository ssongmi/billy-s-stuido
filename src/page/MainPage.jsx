import Split from 'react-split';
import LeftBar from '../component/LeftBar';
import GenerateBar from '../component/GenerateBar';
import RightBar from '../component/RightBar';
import Main from '../component/Main';

export default function MainPage() {
  return (
    <div className="page-container main-page">
      <LeftBar />
      <Split className="split">
        <GenerateBar />
        <Main />
        <RightBar />
      </Split>
    </div>
  );
}
