import { atom } from 'recoil';

const Mode = atom({
  key: 'mode',
  default: 'image',
});

export default Mode;
