import cover from '@/assets/home-cover.png';
import arrowRight from '@/assets/arrow-right.svg'
import { getHomeCardsInfo } from '@/service/apis/home';
import { useEffect, useState } from 'react';
import Card from './components/card';
import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes';

const Home = () => {
  const [cardsConfig, setCardsConfig] = useState<CardConfig[]>([])
  let navigate = useNavigate();
  useEffect(() => {
    getHomeCardsInfo().then(setCardsConfig)
  }, [])

  const handleCreatePromotion = () => {
    navigate(ROUTE_PATH.PROMOTION_CREATE)
  }
  return (
    <>
      <div className={styles.cover}>
        <img src={cover} className={styles.coverImg} />
        <div className={styles.createPromotionButton} onClick={handleCreatePromotion}>
          <span>Create Promotion</span>
          <img src={arrowRight} className={styles.arrowRight} />
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.cards}>
          {cardsConfig.map(({ title, content, coverUrl }, index) => (
            <Card key={index} title={title} content={content} coverUrl={coverUrl} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home;