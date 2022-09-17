import Button from "@/components/button";
import { PromotionType, promotionTypeMap } from "@/constants/promotion";
import styles from './index.module.less';

const filters = ['ALL', PromotionType.discount, PromotionType.reduction]

interface IProps {
  onChange: (type: string) => void;
}

const PromotionFilter = ({ onChange }: IProps) => {
  return (
    <div className={styles.promotionFilters}>
      {filters.map((filter) => (
        <Button key={filter} onClick={() => onChange(filter)}>{promotionTypeMap[filter] ?? 'All'}</Button>
      ))}
    </div>
  )
}

export default PromotionFilter;