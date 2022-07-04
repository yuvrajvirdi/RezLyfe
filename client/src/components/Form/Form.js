import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Select, MenuItem, InputLabel } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6" fullWidth>Leave a Review</Typography>
        <Select
          placeholder='Select a Res'
          fullWidth
          name="creator"
          variant="outlined"
          value={postData.creator} 
          onChange ={(e) => setPostData({ ...postData, creator: e.target.value })}
        >
          <MenuItem value={"Ontario Hall"}>Ontario Hall</MenuItem>
          <MenuItem value={"Saugeen-Maitland Hall"}>Saugeen-Maitland Hall</MenuItem>
          <MenuItem value={"Medway-Sydenham Hall"}>Medway-Sydenham Hall</MenuItem>
          <MenuItem value={"Essex Hall"}>Essex Hall</MenuItem>
          <MenuItem value={"Delaware Hall"}>Delaware Hall</MenuItem>
          <MenuItem value={"Elgin Hall"}>Elgin Hall</MenuItem>
          <MenuItem value={"Perth Hall"}>Perth Hall</MenuItem>
          <MenuItem value={"London Hall"}>London Hall</MenuItem>
          <MenuItem value={"Lambton Hall"}>Lambton Hall</MenuItem>
          <MenuItem value={"Alumni House"}>Alumni House</MenuItem>
          <MenuItem value={"Bayfield Hall"}>Bayfield Hall</MenuItem>
        </Select>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
