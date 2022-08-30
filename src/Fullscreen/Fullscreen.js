import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function Fullscreen() {
  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);

  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);

  return (
    <MDBContainer className="p-5">
      <MDBBtn onClick={toggleShow}>Full screen below xl</MDBBtn>
      <MDBModal
        tabIndex="-1"
        show={fullscreenXlModal}
        setShow={setFullscreenXlModal}
      >
        <MDBModalDialog size="fullscreen-xl-down">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Full screen below xl</MDBModalTitle>
              <MDBBtn
                type="button"
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>...</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn type="button" color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBContainer>
  );
}
