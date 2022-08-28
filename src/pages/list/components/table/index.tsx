import { Link } from "react-router-dom";
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
  data: IPromotion[]
}

const PromotionTable = ({ data }: IProps) => {
  return (
    <table>
      <thead>
        <tr>
          {fieldsConfig.map(({ header }) => <th className={styles.header} key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((_data, index) => (
          <tr key={index}>
            {fieldsConfig.map(({ key }) => (
              <th key={key} className={styles.cell}>
                {key === 'title' ?
                  <Link to={`/promotion-detail/${_data.id}`}>{_data[key]}</Link> :
                  _data[key]
                }
              </th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PromotionTable;
