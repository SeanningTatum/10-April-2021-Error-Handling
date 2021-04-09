import React, { useEffect, useState } from 'react';

import BlogCard from '~/components/BlogCard';
import Center from '~/components/Center';
import type { Blog } from '~/models/Blog';
import * as BlogService from '~/services/Blog';

function Home(): JSX.Element {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchBlogs(): Promise<void> {
    try {
      const data = await BlogService.getBlogs();

      setBlogs(data.body);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <Center>
        <h1>Loading...</h1>
      </Center>
    );
  }

  return (
    <Center>
      <div>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            name={blog.name}
            description={blog.description}
            imgUrl={blog.imgUrl}
          />
        ))}
      </div>
    </Center>
  );
}

export default Home;
