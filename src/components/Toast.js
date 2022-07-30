import { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function CustomToast({ showtoast, position, message }) {
  const [show, setShow] = useState(showtoast);

  return (
    <>
      <ToastContainer position={position} className="p-3">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Cart</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default CustomToast;
