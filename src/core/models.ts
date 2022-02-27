import { TypeOf } from 'zod';
import {
  CurrencySchema,
  CustomerSchema,
  DeliveryOrderSchema,
  DeliverySchema,
  DraftOrderSchema,
  InProgressOrderSchema,
  IsoDateSchema,
  OrderSchema,
  ShipOrderSchema,
  ShippingSchema,
} from './schemas';

export type IsoDate = TypeOf<typeof IsoDateSchema>;

export type CustomerModel = TypeOf<typeof CustomerSchema>;

export type ShippingModel = TypeOf<typeof ShippingSchema>;

export type DeliveryModel = TypeOf<typeof DeliverySchema>;

export type Currency = TypeOf<typeof CurrencySchema>;

export type DraftOrderModel = TypeOf<typeof DraftOrderSchema>;

export type InProgressOrderModel = TypeOf<typeof InProgressOrderSchema>;

export type ShipOrderModel = TypeOf<typeof ShipOrderSchema>;

export type DeliveryOrderModel = TypeOf<typeof DeliveryOrderSchema>;

export type OrderModel = TypeOf<typeof OrderSchema>;

export type OrderWithDelete = DraftOrderModel;
export type OrderWithEdit = DraftOrderModel;
export type OrderWithView =
  | InProgressOrderModel
  | ShipOrderModel
  | DeliveryOrderModel;
