import axios from '../utils/axiosInstance';
import env from '~/config/env';
import type { Blog } from '~/models/Blog';
import type { Response } from '~/types/Response';

const URL = `http://localhost:3000/api/blog`;

export async function getBlogs(): Promise<Response<Blog[]>> {
  const { data } = await axios.get(URL);

  return data;
}
