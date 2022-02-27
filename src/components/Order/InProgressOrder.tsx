import type { InProgressOrderModel } from '../../core';
import { currency, date } from '../../core/utils';

type InProgressOrderProps = {
    order: InProgressOrderModel,
    onView: (order: InProgressOrderModel) => void,
}

export default function InProgressOrder({ order, onView }: InProgressOrderProps) {
    return <div className="card">
        <header className="card-header">
            <div className="card-header-icon" aria-label="more options">
                <span className="icon">
                    <i className="fas fa-dolly" aria-hidden="true" />
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
                <em>Order Date: </em><strong>{date.format(order.date)}</strong>
            </div>
        </div>
        <footer className="card-footer">
            <button type='button' className="button is-text card-footer-item" onClick={() => { onView(order) }}>View</button>
        </footer>
    </div>
}
