// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { useRecoilState } from 'recoil';
import Loading from '../atom/Loading';

const AXIOS_DEFAULT_OPTION = {
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    Pragma: 'no-store',
    Expires: '0',
  },
};
const useAxios = ({ config, columns }) => {
  const [loading, setLoading] = useRecoilState(Loading);
  const defaultClient = axios.create(config || AXIOS_DEFAULT_OPTION);
  defaultClient.defaults.timeout = 100000;

  return {
    defaultClient,
  };
};

export default useAxios;
