import { ReactElement } from 'react';
import type { DraftOrderModel } from '../../core';
import { currency, date } from '../../core/utils';


type DraftOrderProps = {
    order: DraftOrderModel;
    onView: (order: DraftOrderModel) => void,
    onDelete: (order: DraftOrderModel) => void
}

export default function DraftOrder({ order, onView, onDelete }: DraftOrderProps): ReactElement {
    return <div className="card">
        <header className="card-header">
            <div className="card-header-icon" aria-label="more options">
                <span className="icon">
                    <i className="fas fa-pen-ruler" aria-hidden="true" />
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
                <em>Created At: </em><strong>{date.format(date.decode(order.createdAt))}</strong>
            </div>
        </div>
        <footer className="card-footer">
            <button type='button' className="button is-text card-footer-item" onClick={() => { onView(order) }}>Edit</button>
            <button type='button' className="button is-text card-footer-item" onClick={() => { onDelete(order) }}>Delete</button>
        </footer>
    </div>
}
