import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // In the future, fetch and render MDX content based on the slug
  
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">{slug}</h1>
      <div className="mt-8">
        {/* MDX content will be rendered here */}
        <p>Post content for {slug} will be here.</p>
      </div>
    </div>
  );
};

export default PostPage;
