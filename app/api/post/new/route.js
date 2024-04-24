import Post from '@models/posts';
import { connectToDB } from '@utils/database';

// Route type should be as below based on what the endpoint is about ex; GET, POST, PUT, DELETE
// POST is since we are creating a new post
export const POST = async (request) => {
  const { userId, post, tag } = await request.json();

  try {
    await connectToDB();
    const newPost = new Post({ creator: userId, post, tag });

    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response('Failed to create a new post', { status: 500 });
  }
};
