import React, { useEffect, useState } from 'react';

import BlogCard from '~/components/BlogCard';
import Center from '~/components/Center';
import type { Blog } from '~/models/Blog';
import { getBlogs } from '~/services/Blog';
import {
  InsufficientFundsError,
  InvalidCardError,
  RestrictedRegionError,
} from '~/types/Errors';
import type { PayPalErrors } from '~/types/Errors';

function Home(): JSX.Element {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  function logItem() {
    // hehe
  }

  async function fetchBlogs(): Promise<void> {
    try {
      const data = await getBlogs();

      setBlogs(data.body);
    } catch (error: PayPalErrors) {
      if (error instanceof InsufficientFundsError) {
        // Send the user some money... he needs it :'(
      }

      if (error instanceof InvalidCardError) {
        // Something be wrong with da card!
      }

      if (error instanceof RestrictedRegionError) {
        // I have custom methods!
        error.listValidCountries();
      }

      // Generic error handler! Probably Redirect user away
      console.error('An unknown error has occurred.');
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
