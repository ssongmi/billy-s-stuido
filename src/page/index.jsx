// eslint-disable-next-line import/no-extraneous-dependencies
import Splitter from 'react-simple-splitter';
import LeftBar from '../component/LeftBar';
import GenerateBar from '../component/GenerateBar';

const option1={
  mode: 'h',
  minSize: 300,
  oneSize: 300,
}
export default function Index() {
  return (
    <>
      <LeftBar />
      <GenerateBar />
      <div />
    </>
  );
}