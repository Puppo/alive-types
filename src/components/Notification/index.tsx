import classnames from 'classnames';
import { ReactElement, ReactNode } from 'react';

type NotificationProps = {
  type: 'success' | 'warning' | 'error';
  text: string | ReactNode;
  onClose: () => void;
};

export default function Notification({ text, type, onClose }: NotificationProps): ReactElement {
  return (
    <div className={
      classnames(
        "notification",
        {
          'is-success': type === 'success',
          'is-warning': type === 'warning',
          'is-danger': type === 'error',
        }
      )
    }>
      <button type='button' className="delete" onClick={() => onClose()}>close</button>
      {text}
    </div>
  );
}
