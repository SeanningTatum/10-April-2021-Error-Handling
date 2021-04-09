import React from 'react';

interface Props {
  name: string;
  description: string;
  imgUrl: string;
}

function BlogCard(props: Props): JSX.Element {
  return (
    <article className="sm:grid grid-cols-5 bg-white shadow-lg p-7 relative lg:max-w-2xl sm:p-4 rounded-lg lg:col-span-2 lg:ml-20 mb-6">
      <img
        src={props.imgUrl}
        alt="Just a flower"
        className="w-full rounded-lg h-full object-cover"
      />
      <div className="pt-5 self-center sm:pt-0 sm:pl-10 col-span-3">
        <h2 className="text-gray-800 capitalize text-xl font-bold">
          {props.name}
        </h2>

        <h3 className="inline-block pt-2 text-gray-500">{props.description}</h3>
      </div>
    </article>
  );
}

export default BlogCard;
