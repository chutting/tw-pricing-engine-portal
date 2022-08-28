import Button from "@/components/button";
import { promotionType, promotionTypeMap } from "@/constants/promotion";
import styles from './index.module.less';

interface IProps {
  onChange: (type: promotionType) => void;
}

const PromotionFilter = ({ onChange }: IProps) => {
  return (
    <div className={styles.promotionFilters}>
      {Object.values(promotionType).map((filter) => (
        <Button key={filter} onClick={() => onChange(filter)}>{promotionTypeMap[filter]}</Button>
      ))}
    </div>
  )
}

export default PromotionFilter;