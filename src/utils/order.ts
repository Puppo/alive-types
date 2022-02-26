import {
  DraftOrderModel,
  OrderModel,
  OrderWithDelete,
  OrderWithView,
} from "../core";

export function isOrderWithDelete(order: OrderModel): order is OrderWithDelete {
  return order.type === "draft";
}

export function isOrderWithView(order: OrderModel): order is DraftOrderModel {
  return (
    order.type === "progress" ||
    order.type === "ship" ||
    order.type === "delivery"
  );
}

export function isOrderWithEdit(order: OrderModel): order is OrderWithView {
  return order.type === "draft";
}
