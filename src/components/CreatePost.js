import styles from '../styles/home.module.css';
import { useState } from 'react';
import { addPost } from '../api';
import { usePosts } from '../hooks';
import { useToasts } from 'react-toast-notifications';
const CreatePost = () => {
  const [post, setPost] = useState('');
  const [addingPost, setAddingPost] = useState(false);
  const { addToast } = useToasts();
  const posts = usePosts();
  const handleAddPostClick = async () => {
    setAddingPost(true);
    console.log(post);
    const response = await addPost(post);

    if (response.success) {
      setPost('');
      addToast('Post Created successfully', {
        appearance: 'success',
      });
    } else {
      addToast(response.message, {
        appearance: 'error',
      });
    }

    setAddingPost(false);
  };
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
