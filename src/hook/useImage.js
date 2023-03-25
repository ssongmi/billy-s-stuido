import { useCallback } from 'react';

const useImage = () => {
  const convertToBase64 = useCallback((file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  }), []);

  return {
    convertToBase64,
  };
};

export default useImage;
