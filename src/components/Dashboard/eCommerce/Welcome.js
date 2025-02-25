"use client";

import React from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const Welcome = () => {
  return (
    <>
      <Card className="bg-primary border-0 rounded-3 welcome-box mb-4">
        <Card.Body className="p-4">
          <Row className="align-items-center">
            <Col xs={12} sm={8} lg={8}>
              <div className="border-bottom">
                <h3 className="text-white fw-semibold mb-1">
                  Good Morning, <span className="text-danger-div">Olivia!</span>
                </h3>
                <p className="text-light">
                  Here`&apos;s what`&apos;s happening with your store today.
                </p>
              </div>

              <div className="d-flex align-items-center flex-wrap gap-4 gap-xxl-5">
                <div className="d-flex align-items-center welcome-status-item">
                  <div className="flex-shrink-0">
                    <MaterialSymbol icon="shopping_bag" />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="text-white fw-semibold mb-0">
                      86 New orders
                    </h5>
                    <p className="text-light">Awaiting processing</p>
                  </div>
                </div>

                <div className="d-flex align-items-center welcome-status-item">
                  <div className="flex-shrink-0">
                    <MaterialSymbol icon="chat_error" className="icon-bg" />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="text-white fw-semibold mb-0">35 Products</h5>
                    <p className="text-light">Out of stock</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={4} lg={4}>
              <div className="welcome-img text-center text-sm-end mt-4 mt-sm-0">
                <Image
                  src="/images/welcome.png"
                  alt="welcome"
                  width={209}
                  height={168}
                />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Welcome;
