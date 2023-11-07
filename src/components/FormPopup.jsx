/* eslint-disable react/prop-types */
import Alert from 'react-bootstrap/Alert';
import { Bounce } from "react-awesome-reveal";

export default function FormPopup({ data, close } ) {
  return (
    <Bounce triggerOnce={true}>
      <Alert show={data.show} variant={data.type} onClose={close} dismissible className="popup">
        {data.text}
      </Alert>
    </Bounce>
  )
}
