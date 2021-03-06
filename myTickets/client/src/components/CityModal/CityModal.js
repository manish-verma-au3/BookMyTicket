import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import mumbai from "../../assets/images/mumbai1.png";
import mumbai1 from "../../assets/images/gate-of-india.svg";
const CityModal = props => {
  const [show, setShow] = useState(props.shows);

  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="mt-5"
      size="lg"
      id="example-modal-sizes-title-lg"
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header>
        <input
          type="text"
          className="form-control"
          placeholder="search for cities"
        />
      </Modal.Header>
      <Modal.Body>
        <h3 className="text-center text-muted"> Popular Cities</h3>
        <div className="city-modal-body">
          <div>
            <div>
              <svg
                height="48pt"
                viewBox="0 -16 480 480"
                width="48pt"
                xmlns="http://www.w3.org/2000/svg"
                className="city-modal"
              >
                <path d="m184 232h16v16h-16zm0 0" />
                <path d="m280 232h16v16h-16zm0 0" />
                <path d="m56 272h16v16h-16zm0 0" />
                <path d="m88 272h16v16h-16zm0 0" />
                <path d="m408 272h16v16h-16zm0 0" />
                <path d="m376 272h16v16h-16zm0 0" />
                <path d="m216 120h16v16h-16zm0 0" />
                <path d="m248 120h16v16h-16zm0 0" />
                <path d="m280 120h16v16h-16zm0 0" />
                <path d="m184 120h16v16h-16zm0 0" />
                <path d="m88 176h16v16h-16zm0 0" />
                <path d="m56 176h16v16h-16zm0 0" />
                <path d="m456 160h16v-48h-112v-72c0-9.40625-9.542969-16.800781-16-20.6875v-19.3125h-16v19.3125c-6.457031 3.917969-16 11.28125-16 20.6875v16h-64v-32h-16v32h-64v-16c0-9.40625-9.542969-16.800781-16-20.6875v-19.3125h-16v19.3125c-6.457031 3.917969-16 11.28125-16 20.6875v72h-112v48h16v48h-24v48h24v128h-24v64h480v-64h-24v-128h24v-48h-24zm-96-32h96v16h-96zm0 32h80v48h-80zm0 96h80v128h-16v-40c0-13.253906-10.746094-24-24-24s-24 10.746094-24 24v40h-16zm48 88v40h-16v-40c0-4.417969 3.582031-8 8-8s8 3.582031 8 8zm-72-310.808594c3.105469 1.695313 5.832031 4.011719 8 6.808594v24h-16v-23.648438c2.070312-2.980468 4.808594-5.429687 8-7.160156zm-8 142.808594v-24h16v24zm16 16v192h-16v-192zm-16-56v-16h16v16zm0-32v-24h16v24zm-160-32h144v16h-144zm0 32h144v48h-144zm144 64v32h-16v-32zm-32 0v32h-16v-32zm-32 0v32h-16v-32zm-32 0v32h-16v-32zm-48 0h16v32h-16zm-24-134.808594c3.105469 1.695313 5.832031 4.011719 8 6.808594v24h-16v-23.648438c2.070312-2.980468 4.808594-5.429687 8-7.160156zm-8 142.808594v-24h16v24zm16 16v192h-16v-192zm-16-56v-16h16v16zm0-32v-24h16v24zm-112 24h96v16h-96zm96 32v48h-80v-48zm-104 80v-16h104v16zm64 80c-13.253906 0-24 10.746094-24 24v40h-16v-128h80v128h-16v-40c0-13.253906-10.746094-24-24-24zm8 24v40h-16v-40c0-4.417969 3.582031-8 8-8s8 3.582031 8 8zm104 88h-176v-32h176zm80 0h-64v-32h64zm0-48h-64v-96c0-6.199219 16.121094-20.359375 32-30.574219 15.878906 10.214844 32 24.375 32 30.574219zm-27.878906-142.855469-4.121094-2.472656-4.121094 2.472656c-10.277344 6.175781-43.878906 27.808594-43.878906 46.855469v96h-24v-168h144v168h-24v-96c0-19.046875-33.601562-40.679688-43.878906-46.855469zm219.878906 158.855469v32h-176v-32zm0-176v16h-104v-16zm0 0" />
                <path d="m376 176h16v16h-16zm0 0" />
                <path d="m408 176h16v16h-16zm0 0" />
              </svg>
            </div>
            <div>
              <p>Mumbai</p>
            </div>
          </div>
          <img src={mumbai1} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CityModal;
