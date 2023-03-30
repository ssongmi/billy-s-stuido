import { useCallback } from 'react';

const useImage = () => {
  const convertToBase64 = useCallback((file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  }), []);

  const convertToBlob = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });
  return {
    convertToBase64,
    convertToBlob,
  };
};

export default useImage;
