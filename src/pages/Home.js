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
          <div className={styles.postWrapper} key={`post-${post._id}`}>
            <div className={styles.postHeader}>
              <div className={styles.postAvatar}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/428/428933.png"
                  alt="user-pic"
                />
                <div>
                  <Link
                    to={`/user/${post.user._id}`}
                    state={{
                      user: post.user,
                    }}
                    className={styles.postAuthor}
                  >
                    {post.user.name}
                  </Link>

                  <span className={styles.postTime}>a minute ago</span>
                </div>
              </div>
              <div className={styles.postContent}>{post.content}</div>

              <div className={styles.postActions}>
                <div className={styles.postLike}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                    alt="likes-icon"
                  />
                  <span>{post.likes.length}</span>
                </div>

                <div className={styles.postCommentsIcon}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
                    alt="comments-icon"
                  />
                  <span>{post.comments.length}</span>
                </div>
              </div>
              <div className={styles.postCommentBox}>
                <input placeholder="Start typing a comment" />
              </div>

              <div className={styles.postCommentsList}>
                {post.comments.map((comment) => (
                  <Comment comment={comment} />
                ))}
              </div>
            </div>
          </div>
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
