import axios from '../utils/axiosInstance';
import env from '~/config/env';
import type { Blog } from '~/models/Blog';
import { ServerError } from '~/types/Errors';
import type { Response } from '~/types/Response';

const URL = `http://localhost:3000/api/blog`;

export async function getBlogs(): Promise<Response<Blog[]>> {
  throw new ServerError();

  const { data } = await axios.get(URL);

  return data;
}
