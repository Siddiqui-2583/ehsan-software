import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
  title: String,
  blogContent: String,
  reactCount: Number
});

const blog= mongoose.model('blog', blogSchema)

export default blog