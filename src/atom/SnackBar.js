import { atom } from 'recoil';

const SnackBarAtom = atom({
  key: 'snackbar',
  default: { open: true, msg: 'dsgdghfh', type: 'success' },
});

export default SnackBarAtom;
