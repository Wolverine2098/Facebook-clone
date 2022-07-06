import { useState } from 'react';
import styles from '../styles/login.module.css';
import { useToasts } from 'react-toast-notifications';
import { login } from '../api';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState('');
  const { addToast } = useToasts();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoggingIn(true);
    if (!email || !password) {
      return addToast('please enter both email and password', {
        appearance: 'error',
      });
    }
    const response = await login(email, password);
    if (response.success) {
      addToast('Successfully logged in', {
        appearance: 'success',
      });
    } else
      addToast(response.message, {
        appearance: 'error',
      });

    setLoggingIn(false);
  };
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>log in </span>
      <div className={styles.field}>
        <input
          type="email"
          placeholder="Emaiil"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className={styles.field}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className={styles.field}>
        <button disabled={loggingIn}>
          {loggingIn ? 'Logging in..' : 'log In'}
        </button>
      </div>
    </form>
  );
};

export default Login;
