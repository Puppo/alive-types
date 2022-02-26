import {
  OrderModel,
  OrderWithDelete,
  OrderWithEdit,
  OrderWithView,
} from '../models';

export function isOrderWithDelete(order: OrderModel): order is OrderWithDelete {
  return order.type === 'draft';
}

export function isOrderWithView(order: OrderModel): order is OrderWithView {
  return (
    order.type === 'progress' ||
    order.type === 'ship' ||
    order.type === 'delivery'
  );
}

export function isOrderWithEdit(order: OrderModel): order is OrderWithEdit {
  return order.type === 'draft';
}
