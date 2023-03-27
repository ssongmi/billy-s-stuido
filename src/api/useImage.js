import { useMutation, useQueryClient } from 'react-query';
import { useCallback } from 'react';
import useAxios from './useAxios';

const useText2Image = () => {
  const queryClient = useQueryClient();
  const { defaultClient } = useAxios({});

  const postText = useCallback(async (postData) => {
    const { data } = await defaultClient.post('/text2img', postData);
    return data;
  }, [defaultClient]);

  return useMutation(postText, { onSuccess: () => console.log('success') });
};

const useImage2Image = () => {
  const queryClient = useQueryClient();
  const { defaultClient } = useAxios({});

  const postImage = useCallback(async (postData) => {
    const { data } = await defaultClient.post('/text2img', postData);
    return data;
  }, [defaultClient]);

  return useMutation(postImage, { onSuccess: () => console.log('success') });
};

export {
  useImage2Image,
  useText2Image,
};
