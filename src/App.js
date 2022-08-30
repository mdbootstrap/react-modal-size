import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Fullscreen() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/Size">
        <MDBBtn className="ms-3 mt-3">Size</MDBBtn>
      </Link>
      <Link to="/Fullscreen">
        <MDBBtn className="ms-3 mt-3">Fullscreen</MDBBtn>
      </Link>
    </MDBContainer>
  );
}
