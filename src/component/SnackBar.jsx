import PropTypes from 'prop-types';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import SnackBarAtom from '../atom/SnackBar';

export default function SnackBar() {
  const [snackbar, setSnackbar] = useRecoilState(SnackBarAtom);
  useEffect(() => {
    setTimeout(() => {
      if (snackbar) {
        setSnackbar({ open: false, msg: '' });
      }
    }, 6000);
  }, [snackbar]);
  return (
    <div
      className="snackbar-container"
      style={{ display: snackbar.open ? 'block' : 'none' }}
    >
      {snackbar.msg}
    </div>
  );
}
