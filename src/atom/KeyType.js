import { atom } from 'recoil';

const KeyType = atom({
  key: 'keyword',
  default: 'family',
});

export default KeyType;
