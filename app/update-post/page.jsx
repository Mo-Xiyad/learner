'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { Suspense, useEffect, useState } from 'react';

import Form from '@components/Form';

function updatePostComponent() {
  const searchParams = useSearchParams();
  const postId = searchParams.get('id');
  const router = useRouter();

  const [post, setPost] = useState({ post: '', tag: '' });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/post/${postId}`);
      const data = await response.json();

      setPost({
        post: data.post,
        tag: data.tag
      });
    };

    if (postId) getPromptDetails();
  }, [postId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!postId) return alert('Missing PostId!');

    try {
      const response = await fetch(`/api/post/${postId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          post: post.post,
          tag: post.tag
        })
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
}
const UpdatePost = () => {
  return (
    <Suspense>
      <updatePostComponent />
    </Suspense>
  );
};

export default UpdatePost;
