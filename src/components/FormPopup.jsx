import Alert from 'react-bootstrap/Alert';


export default function FormPopup({ data, close } ) {
  console.log(data)
  return (
    <Alert show={data.show} variant={data.type} onClose={close} dismissible className="popup">
      {data.text}
    </Alert>
  )
}
