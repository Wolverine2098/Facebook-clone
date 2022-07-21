import PropTypes from 'prop-types';
import CreatePost from '../components/CreatePost';
import { Link } from 'react-router-dom';
import Comment from '../components/Comment';
import styles from '../styles/home.module.css';
import { getPosts } from '../api';
import Loader from '../components/Loader';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuth, usePosts } from '../hooks';
import FriendsList from '../components/FriendsList';
import Post from '../components/Post';
const Home = () => {
  const auth = useAuth();
  const posts = usePosts();

  if (posts.loading) {
    return <Loader />;
  }

  console.log(posts);
  return (
    <div className={styles.home}>
      <div className={styles.postsList}>
        <CreatePost />
        {posts.data.map((post) => (
          <Post post={post} key={`post-${post._id}`} />
        ))}
      </div>
      {auth.user && <FriendsList />}
    </div>
  );
};

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Home;
