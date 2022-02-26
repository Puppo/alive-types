import { ReactElement } from "react";

export type ModalProps = {
  title: string;
  content: string | React.ReactNode;
  onClose: () => void;
}

export default function Modal({
  title,
  content,
  onClose,
}: ModalProps): ReactElement {
  return <div className="modal is-active">
    <div className="modal-background" />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <button type="button" className="delete" aria-label="close" onClick={() => onClose()} />
      </header>
      <section className="modal-card-body">
        <div className="content">
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
      </section>
    </div>
  </div>
}