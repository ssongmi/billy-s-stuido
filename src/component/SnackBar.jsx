import PropTypes from 'prop-types';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import SnackBarAtom from '../atom/SnackBar';

export default function SnackBar() {
  const [snackbar, setSnackbar] = useRecoilState(SnackBarAtom);
  useEffect(() => {
    // setTimeout(() => {
    //   if (snackbar) {
    //     setSnackbar({ open: false, msg: '' });
    //   }
    // }, 6000);
  }, [snackbar]);
  return (
    <div
      className={`snackbar-container snackbar-type-${snackbar.type}`}
      style={{ display: snackbar.open ? 'flex' : 'none' }}
    >
      <img alt="snackbar-icon" src={`${process.env.PUBLIC_URL}/icon/icon_${snackbar.type}.svg`} />
      <span>{snackbar.msg}</span>
    </div>
  );
}
