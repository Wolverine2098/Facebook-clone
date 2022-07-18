import styles from '../styles/home.module.css';
import { useAuth } from '../hooks';
const FriendList = () => {
  const auth = useAuth();
  const { friends = [] } = auth.user;

  return (
    <div className={styles.friendList}>
      <div className={styles.header}>Friends</div>
      {friends && friends.length === 0}
    </div>
  );
};
