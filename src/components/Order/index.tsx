import { ReactElement } from 'react';
import type { OrderModel } from '../../core';
import DeliveryOrder from './DeliveryOrder';
import DraftOrder from './DraftOrder';
import InProgressOrder from './InProgressOrder';
import ShipOrder from './ShipOrder';

type OrderProps = {
    order: OrderModel,
    onView: (order: OrderModel) => void,
    onDelete: (order: OrderModel) => void
}

export default function Order({ order, onView, onDelete }: OrderProps): ReactElement | null {
    switch (order.type) {
        case 'draft':
            return <DraftOrder onView={onView} onDelete={onDelete} order={order} />;
        case 'progress':
            return <InProgressOrder order={order} onView={onView} />;
        case 'ship':
            return <ShipOrder order={order} onView={onView} />;
        case 'delivery':
            return <DeliveryOrder order={order} onView={onView} />;
    }
}
