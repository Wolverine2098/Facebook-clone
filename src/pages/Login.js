import styles from '../styles/login.module.css';
const Login = () => {
  return (
    <form className={styles.loginForm}>
      <span className={styles.loginSignupHeader}>log in</span>
      <div className={styles.field}>
        <input type="email" placeholder="Email" required />
      </div>
      <div className={styles.field}>
        <input type="password" placeholder="Password" required />
      </div>
      <div className={styles.field}>
        <button>log in</button>
      </div>
    </form>
  );
};

export default Login;
