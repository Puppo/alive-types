import classnames from 'classnames';
import { ReactElement, ReactNode } from 'react';

type NotificationProps = {
  type: 'success' | 'warning' | 'error';
  text: string | ReactNode;
};

export default function Notification({ text, type }: NotificationProps): ReactElement {
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
      <button type='button' className="delete">close</button>
      {text}
    </div>
  );
}
