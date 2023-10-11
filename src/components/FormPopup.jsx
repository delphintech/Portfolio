import Modal from 'react-bootstrap/Modal';

export default function FormPopup({ data } ) {
  console.log(data)
  return (
      <Modal
        show={data.show}
        onHide={() => close()}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        contentClassName={data.color}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {data.text}
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body  closeButton className={data.color}>
        <div className={data.color}>
          <p>{data.text}</p>
        </div>
        </Modal.Body>
      </Modal>
  )
}
