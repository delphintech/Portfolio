/* eslint-disable react/prop-types */
import Alert from 'react-bootstrap/Alert';
import { Bounce } from "react-awesome-reveal";

export default function FormPopup({ data, close } ) {
  return (
    <div className="popup">
      <Bounce triggerOnce={true}>
        <Alert show={data.show} variant={data.type} onClose={close} dismissible >
          {data.text}
        </Alert>
      </Bounce>
    </div>
  )
}
