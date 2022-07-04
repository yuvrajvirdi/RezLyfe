import express from 'express';
import mongoose from 'mongoose';

import Post from '../models/models.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await Post.find().sort({createdAt: -1});
   
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPostBySearch = async (req, res) => {
    const { searchQuery } = req.query;
    try {
        const rez = new RegExp(searchQuery, "i");
        const posts = await Post
            .find({ residence: rez })
            .sort({ createdAt: -1 });
        res.json({ data: posts });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, residence, tags } = req.body;

    const newPost = new Post({ title, message, selectedFile, residence, tags })

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;