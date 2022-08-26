import styles from './index.module.less'

interface IProps {
  coverUrl: string
  title: string
  content: string
}

const Card = ({ coverUrl, title, content }: IProps) => {
  return (
    <div className={styles.container}>
      <img src={coverUrl} className={styles.cover} />
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Card;
