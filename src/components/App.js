import { useEffect } from 'react';
import { getPosts } from '../api';
function App() {
  useEffect(async () => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);
    };

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>FaceBook Clone</h1>
    </div>
  );
}

export default App;
