import React, { useEffect, useState } from 'react';

import BlogCard from '~/components/BlogCard';
import Center from '~/components/Center';
import type { Blog } from '~/models/Blog';
import { getBlogs } from '~/services/Blog';
import { useDialogContext } from '~/store/DialogStore';
import { AllErrors, ServerError, ValidationError } from '~/types/Errors';

function Home(): JSX.Element {
  // MARK:- Store
  const { dispatch, state } = useDialogContext();

  // MARK:- State
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs(): Promise<void> {
      try {
        const data = await getBlogs();

        setBlogs(data.body);
      } catch (error: AllErrors) {
        if (error instanceof ValidationError) {
          dispatch({
            type: 'show',
            payload: {
              message: error.displayFormattedError(),
              type: 'ERROR',
            },
          });

          return;
        }

        if (error instanceof ServerError) {
          // Redirect maybe
        }

        // Errors that haven't been caught!
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, [dispatch]);

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
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              name={blog.name}
              description={blog.description}
              imgUrl={blog.imgUrl}
            />
          ))
        ) : (
          <h1 className="text-5xl">No blog entries to display!</h1>
        )}
      </div>
    </Center>
  );
}

export default Home;
