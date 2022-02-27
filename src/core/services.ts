import { OrderModel } from './models';
import { OrderArraySchema } from './schemas';
import { response as responseUtils } from './utils';

export default async function getOrders(): Promise<OrderModel[]> {
  const response = await fetch(`${import.meta.env.BASE_URL}/api/orders.json`);
  const data: unknown = await response.json();
  const orders = responseUtils.parseSafe(data, OrderArraySchema);
  if (orders.type === 'error') {
    throw orders.error;
  }
  return orders.value;
  // responseUtils.validate(data, OrderArraySchema);
  // return responseUtils.parse(data, OrderArraySchema);
}
