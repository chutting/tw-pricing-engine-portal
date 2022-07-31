import { ROUTE_PATH } from "@/routes";
import { getPromotions } from "@/service/apis/promotions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PromotionList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPromotions().then(({data}) => {
      setData(data);
    });
  }, [])
  const fields = [
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
      header: 'StartDate',
    },
    {
      key: 'endDate',
      header: 'EndDate',
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
  return (
    <table>
      <thead>
        <tr>
          {fields.map(({ header }) => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((_data, index) => (
          <tr key={index}>
            {fields.map(({ key }) => <th key={key}>{key === 'title' ? <Link to={`${ROUTE_PATH.PROMOTION_DETAIL}?id=${_data.id}`}>{_data[key]}</Link> : _data[key]}</th>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PromotionList;