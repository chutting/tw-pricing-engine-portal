import { PromotionType } from "@/constants/promotion";

interface IPromotion {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  type: string;
  description: string;
}

interface IPromotionDetail {
  title: string;
  priority: number;
  startDate: string;
  endDate: string;
  enabled: boolean;
  description: string;
  type: PromotionType;
  vipOnly: boolean;
  discountRate?: number;
  maxAccount?: number;
  reduceAcount?: number;
}