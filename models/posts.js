import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User' // one to many relationship
  },
  post: {
    type: String,
    required: [true, 'Post is required.']
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.']
  }
});

const Post = models.Prompt || model('Posts', PostSchema);

export default Post;
