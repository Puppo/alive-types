export type IsoDate = string;

export type CustomerModel = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

type ShippingModel = {
  date: IsoDate;
  trackingNumber: string;
  company: string;
};

type DeliveryModel = {
  date: IsoDate;
  signedBy: string;
};

export type Currency = {
  amount: number;
  currency: 'USD' | 'EUR';
};

export type DraftOrderModel = {
  type: 'draft';
  id: string;
  createdAt: IsoDate;
  customer: CustomerModel;
  total: Currency;
};

export type InProgressOrderModel = {
  type: 'progress';
  id: string;
  createdAt: IsoDate;
  customer: CustomerModel;
  date: IsoDate;
  total: Currency;
};

export type ShipOrderModel = {
  type: 'ship';
  id: string;
  createdAt: IsoDate;
  customer: CustomerModel;
  date: IsoDate;
  total: Currency;
  ship: ShippingModel;
};

export type DeliveryOrderModel = {
  type: 'delivery';
  id: string;
  createdAt: IsoDate;
  date: IsoDate;
  customer: CustomerModel;
  total: Currency;
  ship: ShippingModel;
  delivery: DeliveryModel;
};

export type OrderModel =
  | DraftOrderModel
  | InProgressOrderModel
  | ShipOrderModel
  | DeliveryOrderModel;

export type OrderWithDelete = DraftOrderModel;
export type OrderWithEdit = DraftOrderModel;
export type OrderWithView =
  | InProgressOrderModel
  | ShipOrderModel
  | DeliveryOrderModel;
