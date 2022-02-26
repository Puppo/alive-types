import { ReactElement } from 'react';
import type { DeliveryOrderModel } from '../../core';
import { currency, date } from '../../core/utils';

type DeliveryOrderProps = {
    order: DeliveryOrderModel,
    onView: (order: DeliveryOrderModel) => void,
}

export default function DeliveryOrder({ order, onView }: DeliveryOrderProps): ReactElement {
    return <div className="card">
        <header className="card-header">
            <div className="card-header-icon" aria-label="more options">
                <span className="icon">
                    <i className="fas fa-truck-ramp-box" aria-hidden="true" />
                </span>
            </div>
            <p className="card-header-title">
                {`${order.id} - ${order.customer.name}`}
            </p>
        </header>
        <div className="card-content">
            <div className="content has-text-left">
                <em>Total: </em><strong>{currency.format(order.total)}</strong>
                <br />
                <em>Order Date: </em><strong>{date.format(date.decode(order.date))}</strong>
                <p>
                    <em>Shipped in date </em><strong>{date.format(date.decode(order.ship.date))}</strong>
                    <br />
                    <em>With: </em><strong>{order.ship.company}</strong>
                    <br />
                    <em>Tracking number: </em><strong>{order.ship.trackingNumber}</strong>
                </p>
                <p>
                    <em>Delivered in date </em><strong>{date.format(date.decode(order.delivery.date))}</strong>
                    <br />
                    <em>Sign by: </em><strong>{order.delivery.signedBy}</strong>
                </p>
            </div>
        </div>
        <footer className="card-footer">
            <button type='button' className="button is-text card-footer-item" onClick={() => { onView(order) }}>View</button>
        </footer>
    </div>
}
