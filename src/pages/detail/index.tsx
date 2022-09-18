import Button from "@/components/button";
import { PromotionType } from "@/constants/promotion";
import { ROUTE_PATH } from "@/routes";
import { savePromotion } from "@/service/apis/promotions";
import { RootState, storeActions, useAppDispatch, useAppSelector } from "@/store";
import { IPromotionDetail } from "@/typings/promotion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Description, DiscountRate, DiscountType, Enabled, EndDate, MaxAmount, Priority, ReduceAmount, StartDate, Title, VipOnly } from "./components/fields";
import styles from './index.module.less';

const initialPromotion = {
  type: PromotionType.discount
}

const PromotionDetail = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [_promotion, setPromotion] = useState({} as IPromotionDetail);
  const promotion = useAppSelector((state: RootState) => state?.promotions.promotionDetail)
  const [validateState, setValidateState] = useState<Record<string, boolean>>({
    title: false,
  });

  useEffect(() => {
    return () => {
      dispatch(storeActions?.promotions?.reset())
    }
  }, [])

  useEffect(() => {
    !!promotion && setPromotion({ ...initialPromotion, ...promotion})
  }, [promotion])

  const handleChangePromotion = (keyValue) => {
    setPromotion({ ..._promotion, ...keyValue})
  }

  const handleChangeValidateState = (keyValue) => {
    setValidateState({ ...validateState, ...keyValue })
  }

  const handleSubmit = () => {
    if (!Object.values(validateState).every((value) => value)) {
      return;
    }
    savePromotion(_promotion).then(() => {
      navigate(ROUTE_PATH.HOME)
    })
  }

  const handleChangeType = (keyValue) => {
    if (keyValue.type === PromotionType.discount) {
      handleChangePromotion({ ...keyValue, maxAmount: null, reduceAmount: null })
      handleChangeValidateState({ maxAmount: true, reduceAmount: true, discountRate: false })
    } else if (keyValue.type === PromotionType.reduction) {
      handleChangePromotion({ ...keyValue, discountRate: null })
      handleChangeValidateState({ maxAmount: false, reduceAmount: false, discountRate: true })
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.formSection}>
          <Title onChangeValidateState={handleChangeValidateState} defaultValue={promotion.title} onChange={handleChangePromotion} />
          <Priority defaultValue={promotion.priority} onChange={handleChangePromotion} />
          <StartDate defaultValue={promotion.startDate} onChange={handleChangePromotion} endDate={_promotion.endDate} />
          <EndDate defaultValue={promotion.endDate} onChange={handleChangePromotion} startDate={_promotion.startDate} />
          <Enabled defaultValue={promotion.enabled} onChange={handleChangePromotion} />
          <Description defaultValue={promotion.description} onChange={handleChangePromotion} />
        </div>
        <div className={styles.formSection}>
          <DiscountType defaultValue={promotion.type} onChange={handleChangeType} />
          {_promotion.type === PromotionType.discount && (
            <DiscountRate
              defaultValue={_promotion.discountRate} 
              onChange={handleChangePromotion} 
              onChangeValidateState={handleChangeValidateState}
            />
          )}
          {_promotion.type === PromotionType.reduction && (
            <>
              <MaxAmount defaultValue={_promotion.maxAmount} onChange={handleChangePromotion} min={_promotion.reduceAmount} />
              <ReduceAmount defaultValue={_promotion.reduceAmount} onChange={handleChangePromotion} max={_promotion.maxAmount} />
            </>
          )}
          <VipOnly defaultValue={promotion.vipOnly} onChange={handleChangePromotion} />
        </div>
      </div>
      <Button onClick={handleSubmit} className={styles.submit}>Submit</Button>
    </div>
  )
}

export default PromotionDetail;