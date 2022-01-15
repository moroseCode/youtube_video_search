import axios from 'axios';
import configData from '../config.json';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: configData.KEY,
  },
});
