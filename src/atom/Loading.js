import { atom } from 'recoil';

const Loading = atom({
  key: 'loading',
  default: {
    open: false,
    title: '',
  },
});

export default Loading;
