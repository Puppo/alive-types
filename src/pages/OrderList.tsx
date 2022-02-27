import { useEffect, useState } from "react";
import { Modal, ModalProps, Notification, Order } from "../components";
import { getOrders, OrderModel } from "../core";
import { order as orderUtils } from "../core/utils";

function List() {
    const [orders, setOrders] = useState<OrderModel[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [modal, setModal] = useState<ModalProps | null>(null);


    useEffect((): void => {
        function fetchOrders(): void {
            setError(null);
            getOrders()
                .then(setOrders)
                .catch((err: Error) => {
                    setError(err);
                });
        }
        fetchOrders();
    }, [])

    const onView = (order: OrderModel): void => {
        if (orderUtils.isOrderWithView(order)) {
            setModal({
                title: "View Order",
                content: `${order.id} in viewing`,
                onClose: () => setModal(null),
            });
            return;
        }
        if (orderUtils.isOrderWithEdit(order)) {
            setModal({
                title: "Edit Order",
                content: `Order with id: ${order.id} in editing`,
                onClose: () => setModal(null),
            });
        }
    }

    const onDelete = (order: OrderModel) => {
        if (orderUtils.isOrderWithDelete(order)) {
            setModal({
                title: "Delete Order",
                content: `Order with id: ${order.id} in deleting`,
                onClose: () => setModal(null),
            });
        }
    }


    return <>
        {error && <Notification type='error' text={error.message} onClose={() => { setError(null) }} />}
        <div className="container is-fluid pt-5">
            <h1 className="title has-text-white">Order List</h1>
            <div className="columns is-flex is-flex-wrap-wrap">
                {orders.map((order) => (
                    <div key={order.id} className="column is-6">
                        <Order order={order} onView={onView} onDelete={onDelete} />
                    </div>
                ))}
            </div>
        </div>
        {modal && <Modal title={modal.title} content={modal.content} onClose={modal.onClose} />}
    </>
}

export default List
