"use client";

import React from "react";
import "react-material-symbols/rounded";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

const AlertsWithLink = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <h4 className="fs-18 mb-4">Alerts With Link</h4>

          <div>
            <Alert variant="primary">
              This is a primary alert with{" "}
              <Alert.Link href="#">an example link</Alert.Link>. Give it a click
              if you like.
            </Alert>

            <Alert variant="secondary">
              This is a secondary alert with{" "}
              <Alert.Link href="#">an example link</Alert.Link>. Give it a click
              if you like.
            </Alert>

            <Alert variant="success">
              This is a success alert with{" "}
              <Alert.Link href="#">an example link</Alert.Link>. Give it a click
              if you like.
            </Alert>

            <Alert variant="danger">
              This is a danger alert with{" "}
              <Alert.Link href="#">an example link</Alert.Link>. Give it a click
              if you like.
            </Alert>

            <Alert variant="warning">
              This is a warning alert with{" "}
              <Alert.Link href="#">an example link</Alert.Link>. Give it a click
              if you like.
            </Alert>

            <Alert variant="info">
              This is an info alert with{" "}
              <Alert.Link href="#">an example link</Alert.Link>. Give it a click
              if you like.
            </Alert>

            <Alert variant="light">
              This is a light alert with{" "}
              <Alert.Link href="#">an example link</Alert.Link>. Give it a click
              if you like.
            </Alert>

            <Alert variant="dark">
              This is a dark alert with{" "}
              <Alert.Link href="#">an example link</Alert.Link>. Give it a click
              if you like.
            </Alert>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default AlertsWithLink;
