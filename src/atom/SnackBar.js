import { atom } from 'recoil';

const SnackBarAtom = atom({
  key: 'snackbar',
  default: { open: false, msg: '', type: 'success' },
});

export default SnackBarAtom;
