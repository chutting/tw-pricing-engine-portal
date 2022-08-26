import cover from '@/assets/home-cover.png';
import { getHomeCardsInfo } from '@/service/apis/home';
import { useEffect, useState } from 'react';
import Card from './components/card';
import styles from './index.module.less';

const Home = () => {
  const [cardsConfig, setCardsConfig] = useState<CardConfig[]>([])
  useEffect(() => {
    getHomeCardsInfo().then(setCardsConfig)
  }, [])
  return (
    <div>
      <div className={styles.cover}>
        <img src={cover} className={styles.coverImg} />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.cards}>
          {cardsConfig.map(({ title, content, coverUrl }, index) => (
            <Card key={index} title={title} content={content} coverUrl={coverUrl} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;