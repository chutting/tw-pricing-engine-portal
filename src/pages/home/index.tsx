import cover from '@/assets/home-cover.png';
import styles from './index.module.less';

const Home = () => {
  return (
    <div>
      <img src={cover} className={styles.cover} />
    </div>
  )
}

export default Home;