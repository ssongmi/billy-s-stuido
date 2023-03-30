import { useMutation, useQueryClient } from 'react-query';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import useAxios from './useAxios';
import GeneratedPicture from '../atom/GeneratedPicture';

const DEFAULT_PROMPT = 'masterpiece, best quality, beautiful detailed eyes, ,intricate details, 8k wallpaper, elaborate features,';
const DEFAULT_IMAGE_OPTION = '&negative_prompt=(worst quality, normal quality, low quality:1.4), lowres, blurry&scheduler=KDPM2AncestralDiscreteScheduler&strength=0.3&num_images=1&guidence_scale=7&steps=50&seed=-1';
const DEFAULT_TEXT_OPTION = {
  prompt: 'string',
  negative_prompt: 'string',
  scheduler: 'EulerAncestralDiscreteScheduler',
  image_height: 512,
  image_width: 512,
  num_images: 1,
  guidance_scale: 7,
  steps: 50,
  seed: 42,
};

const useText2Image = () => {
  const queryClient = useQueryClient();
  const [generatedPicture, setGeneratedPicture] = useRecoilState(GeneratedPicture);
  const { defaultClient } = useAxios({});

  const postText = useCallback(async ({ prompt }) => {
    const postData = { ...DEFAULT_TEXT_OPTION };
    postData.prompt = `${DEFAULT_PROMPT}${prompt}`;
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
  const { defaultClient } = useAxios({ config: {
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      'Cache-Control': 'no-store',
      Pragma: 'no-store',
      Expires: '0',
    },
  },
  });

  const postImage = useCallback(async ({ formData, prompt }) => {
    const { data } = await defaultClient.post(`/img2img?prompt=${DEFAULT_PROMPT}${prompt}${DEFAULT_IMAGE_OPTION}`, formData);
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
