import { useEffect, useMemo, useState } from "react";
import { getPromotions } from "@/service/apis/promotions";
import PromotionTable from "./components/table";
import PromotionFilter from "./components/filter";
import { promotionType } from "@/constants/promotion";
import styles from './index.module.less';


const PromotionList = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState<promotionType>(promotionType.all);
  useEffect(() => {
    getPromotions().then(({data}) => {
      setData(data);
    });
  }, [])

  const filteredData = useMemo(() => type === promotionType.all ? data : data.filter(({ type: _type }) => _type === type), [data, type]);

  return (
    <div className={styles.promotionList}>
      <PromotionFilter onChange={setType} />
      <PromotionTable data={filteredData} />
    </div>
  )
}

export default PromotionList;
