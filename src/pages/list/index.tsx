import { useEffect, useMemo, useState } from "react";
import { getPromotions } from "@/service/apis/promotions";
import PromotionTable from "./components/table";
import PromotionFilter from "./components/filter";
import styles from './index.module.less';


const PromotionList = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState<string>('ALL');
  useEffect(() => {
    getPromotions().then(({data}) => {
      setData(data);
    });
  }, [])

  const filteredData = useMemo(() => type === 'ALL' ? data : data.filter(({ type: _type }) => _type === type), [data, type]);

  return (
    <div className={styles.promotionList}>
      <PromotionFilter onChange={setType} />
      <PromotionTable data={filteredData} />
    </div>
  )
}

export default PromotionList;
