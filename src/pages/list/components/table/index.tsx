import { ROUTE_PATH } from "@/routes";
import { storeActions, useAppDispatch } from "@/store";
import { IPromotionDetail } from "@/typings/promotion";
import { useNavigate } from "react-router-dom";
import styles from './index.module.less';

const fieldsConfig = [
  {
    key: 'id',
    header: 'Id',
  },
  {
    key: 'title',
    header: 'Title',
  },
  {
    key: 'startDate',
    header: 'Start Date',
  },
  {
    key: 'endDate',
    header: 'End Date',
  },
  {
    key: 'type',
    header: 'Type',
  },
  {
    key: 'description',
    header: 'Description',
  },
]

interface IProps {
  data: IPromotionDetail[]
}

const PromotionTable = ({ data }: IProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const goToPromotionDetail = (data: IPromotionDetail) => {
    dispatch(storeActions.promotions.setPromotion(data))
    navigate(ROUTE_PATH.PROMOTION_DETAIL)
  }
  return (
    <table>
      <thead>
        <tr>
          {fieldsConfig.map(({ header }) => <th className={styles.header} key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((_data, index) => (
          <tr key={index} onClick={() => goToPromotionDetail(_data)} className={styles.row}>
            {fieldsConfig.map(({ key }) => (
              <th key={key} className={styles.cell}>
                {_data[key]}
              </th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PromotionTable;
