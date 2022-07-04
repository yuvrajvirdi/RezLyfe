import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    residence: String,
    tags: [String],
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Post = mongoose.model('PostMessage', postSchema);

export default Post;