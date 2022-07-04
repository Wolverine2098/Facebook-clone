import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getPosts } from '../api';
import { Home, Login } from '../pages';
import Loader from './Loader';
import Navbar from './Navbar';

const About = () => {
  return <h1>About</h1>;
};

const UserInfo = () => {
  return <h1>UserInfo</h1>;
};

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();

      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route path="/">
          <Home posts={posts} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/user/abcd">
          <UserInfo />
        </Route>
      </Router>
    </div>
  );
}

export default App;
