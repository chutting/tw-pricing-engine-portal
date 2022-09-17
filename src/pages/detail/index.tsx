import Button from "@/components/button";
import { IPromotionDetail } from "@/typings/promotion";
import { useState } from "react";
import { Description, DiscountType, Enabled, EndDate, Priority, StartDate, Title, VipOnly } from "./components/fields";
import styles from './index.module.less';

const PromotionDetail = () => {
  const [promotion, setPromotion] = useState({} as IPromotionDetail);
  const [validateState, setValidateState] = useState<Record<string, boolean>>({
    title: false,
    startDate: false,
    endDate: false,
    enabled: false,
    type: false,
    vipOnly: false,
  });

  const handleChangePromotion = (keyValue) => {
    setPromotion({ ...promotion, ...keyValue})
  }

  const handleChangeValidateState = (keyValue) => {
    setValidateState({ ...validateState, ...keyValue })
  }

  const handleSubmit = () => {
    console.log('validateState', !Object.values(validateState).every((value) => value))
    console.log('promotion', promotion)
    if (!Object.values(validateState).every((value) => value)) {
      return;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.formSection}>
          <Title onChangeValidateState={handleChangeValidateState} defaultValue={promotion.title} onChange={handleChangePromotion} />
          <Priority defaultValue={promotion.priority} onChange={handleChangePromotion} />
          <StartDate defaultValue={promotion.startDate} onChange={handleChangePromotion} />
          <EndDate defaultValue={promotion.endDate} onChange={handleChangePromotion} />
          <Enabled defaultValue={promotion.enabled} onChange={handleChangePromotion} />
          <Description defaultValue={promotion.description} onChange={handleChangePromotion} />
        </div>
        <div className={styles.formSection}>
          <DiscountType defaultValue={promotion.description} onChange={handleChangePromotion} />
          <VipOnly defaultValue={promotion.description} onChange={handleChangePromotion} />
        </div>
      </div>
      <Button onClick={handleSubmit} className={styles.submit}>Submit</Button>
    </div>
  )
}

export default PromotionDetail;