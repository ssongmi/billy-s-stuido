import { useMutation, useQueryClient } from 'react-query';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import useAxios from './useAxios';
import GeneratedPicture from '../atom/GeneratedPicture';

const useText2Image = () => {
  const queryClient = useQueryClient();
  const [generatedPicture, setGeneratedPicture] = useRecoilState(GeneratedPicture);
  const { defaultClient } = useAxios({});

  const postText = useCallback(async (postData) => {
    const { data } = await defaultClient.post('/text2img', postData);
    return data;
  }, [defaultClient]);

  return useMutation(postText, { onSuccess: (res) => {
    console.log(res);
    setGeneratedPicture(res.images[0]);
  } });
};

const useImage2Image = () => {
  const queryClient = useQueryClient();
  const [generatedPicture, setGeneratedPicture] = useRecoilState(GeneratedPicture);
  const { defaultClient } = useAxios({});

  const postImage = useCallback(async (postData) => {
    const { data } = await defaultClient.post('/text2img', postData);
    return data;
  }, [defaultClient]);

  return useMutation(postImage, { onSuccess: (res) => {
    console.log(res);
    setGeneratedPicture(res.images[0]);
  } });
};

export {
  useImage2Image,
  useText2Image,
};
