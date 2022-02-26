import { OrderModel } from './models';

const getOrders = async (): Promise<OrderModel[]> =>
  fetch(`${import.meta.env.BASE_URL}/api/orders.json`).then(
    (res) => res.json() as Promise<OrderModel[]>
  );

export default getOrders;
