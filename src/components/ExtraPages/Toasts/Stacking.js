"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Image from "next/image";

const Stacking = () => {
  return (
    <>
      <Card className="card bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="mb-3 mb-lg-4">
            <h3 className="mb-0">Stacking</h3>
          </div>

          <ToastContainer className="position-static">
            <Toast>
              <Toast.Header>
                <Image
                  src="/images/holder1.svg"
                  className="rounded me-2"
                  alt="holder1"
                  width={20}
                  height={20}
                />
                <strong className="me-auto">Bootstrap</strong>
                <small className="text-muted">just now</small>
              </Toast.Header>
              <Toast.Body>See? Just like this.</Toast.Body>
            </Toast>
            
            <Toast>
              <Toast.Header>
                <Image
                  src="/images/holder1.svg"
                  className="rounded me-2"
                  alt="holder1"
                  width={20}
                  height={20}
                />
                <strong className="me-auto">Bootstrap</strong>
                <small className="text-muted">2 seconds ago</small>
              </Toast.Header>
              <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
            </Toast>
          </ToastContainer>
        </Card.Body>
      </Card>
    </>
  );
};

export default Stacking;
