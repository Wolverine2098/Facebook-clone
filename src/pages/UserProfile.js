import { useEffect, useState } from 'react';
// import { Loader } from '../components';
import {
  useLocation,
  useParams,
  useHistory,
  useNavigate,
} from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import styles from '../styles/settings.module.css';
import { useAuth } from '../hooks';
import { fetchUserProfile } from '../api';
const UserProfile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { userId } = useParams();
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const auth = useAuth();
  console.log('userId', userId);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetchUserProfile(userId);

      if (response.success) {
        setUser(response.data.user);
      } else {
        addToast(response.message, {
          appearance: 'error',
        });
        return navigate.push('/');
      }
      setLoading(false);
    };
    getUser();
  }, [userId, navigate, addToast]);
  // if (loading) {
  //   return <Loader />;
  // }
  // const location = useLocation();
  // console.log('location', location);
  // const { user = {} } = location.state;

  const checkIfUserIsAFriend = () => {
    const friends = auth.user.friendships;
    const friendIds = friends.map((friend) => friend.to_user._id);
    const index = friendIds.indexOf(userId);
    if (index !== -1) return true;

    return false;
  };

  return (
    <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/428/428933.png"
          alt=""
        />
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>{user.email}</div>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <div className={styles.fieldValue}>{user.name}</div>
      </div>

      <div className={styles.btnGrp}>
        {checkIfUserIsAFriend() ? (
          <button className={`button ${styles.saveBtn}`}>Remove friend</button>
        ) : (
          <button className={`button ${styles.saveBtn}`}>Add friend</button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
