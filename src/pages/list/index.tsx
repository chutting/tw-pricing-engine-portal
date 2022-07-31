import { getPromotions } from "@/service/apis/promotions";
import { useEffect } from "react";

const PromotionList = () => {
  useEffect(() => {
    getPromotions();
  })
  return <div>Promotion List</div>
}

export default PromotionList;