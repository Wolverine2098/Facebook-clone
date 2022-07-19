import styles from '../styles/home.module.css';
import { useState } from 'react';
const CreatePost = () => {
  const [post, setPost] = useState('');
  const [addingPost, setAddingPost] = useState(false);
  const handleAddPostClick = () => {};
  return (
    <div className={styles.createPost}>
      <textarea
        className={styles.addPost}
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <div>
        <button
          className={styles.addPostBtn}
          onClick={handleAddPostClick}
          disabled={addingPost}
        >
          {addingPost ? 'Adding post..' : 'Add post'}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
