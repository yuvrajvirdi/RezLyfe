import React, { useState, useEffect } from 'react';
import { getPosts, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';
import logo from '../../images/logo.png';
import { Container, AppBar, TextField, Button, Paper, Typography, Grow, Grid, Select, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import './uni.styles.css'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function refreshPage() {
  window.location.reload(false);
}

function handleClick(e){
  e.preventDefault();
  window.location = '/';
  console.log('Going to home');
}

const Uni = () => {
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
  
    const [search, setSearch] = useState('');

    const searchPost = () => {
      if (search.trim()) {
        dispatch(getPostsBySearch({ search }));
      } 
    };

    const handleKeyPress = (e) => {
      if (e.keyCode === 13) {
        searchPost();
      }
    };

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
      <Container maxWidth="xl">
        <div class="nav-bar">
            <div class="logo-wrapper"> 
                <a onClick={handleClick}><img src={logo} class="logo"/></a>
            </div>
        </div>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              
              <Grid item xs={12} sm={4}>
                <AppBar className={classes.appBarSearch} position="static" color="inherit">
                <Typography variant="h6" fullWidth className={classes.filter}>Select Filter From Below</Typography>
                  <Select
                    fullWidth
                    name="search"
                    onKeyDown={handleKeyPress}
                    variant="outlined"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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
                 
                  <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                  <Button onClick={refreshPage} variant="contained" color="secondary" size="small">Reset</Button>
                </AppBar>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                  
              </Grid>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
  );
};

export default Uni;
