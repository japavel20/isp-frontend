"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const TopProductsBySales = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30">
            <h3 className="mb-0">Top Products by Sales</h3>

            <Form.Select
              className="month-select form-control p-0 h-auto border-0"
              aria-label="Default select example"
            >
              <option value="0">Select</option>
              <option value="1">Today</option>
              <option value="2">Last Weekly</option>
              <option value="3">Last Monthly</option>
              <option value="4">Last Yearly</option>
            </Form.Select>
          </div>

          <ul className="ps-0 mb-0 list-unstyled">
            <li className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <MaterialSymbol
                    icon="smartphone"
                    size={24}
                    className="icon-circle bg-primary bg-opacity-10 text-primary text-center rounded-1 wh-48 lh-48"
                  />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="fw-medium fs16 mb-0">Samsung Galaxy</h6>
                  <span className="fs-12">Samsung</span>
                </div>
              </div>
              <span className="fs-14 fw-medium text-secondary">$96,455</span>
            </li>

            <li className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <MaterialSymbol
                    icon="tap_and_play"
                    size={24}
                    className="icon-circle bg-primary-div bg-opacity-10 text-primary-div text-center rounded-1 wh-48 lh-48"
                  />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="fw-medium fs16 mb-0">iPhone 15 Plus</h6>
                  <span className="fs-12">Apple inc.</span>
                </div>
              </div>
              <span className="fs-14 fw-medium text-secondary">$89,670</span>
            </li>

            <li className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <MaterialSymbol
                    icon="edgesensor_low"
                    size={24}
                    className="icon-circle bg-danger bg-opacity-10 text-danger text-center rounded-1 wh-48 lh-48"
                  />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="fw-medium fs16 mb-0">Vivo V30</h6>
                  <span className="fs-12">Vivo Ltd.</span>
                </div>
              </div>
              <span className="fs-14 fw-medium text-secondary">$75,329</span>
            </li>

            <li className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <MaterialSymbol
                    icon="watch"
                    size={24}
                    className="icon-circle bg-success bg-opacity-10 text-success text-center rounded-1 wh-48 lh-48"
                  />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="fw-medium fs16 mb-0">Watch Series 7</h6>
                  <span className="fs-12">Apple</span>
                </div>
              </div>
              <span className="fs-14 fw-medium text-secondary">$98,256</span>
            </li>

            <li className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <MaterialSymbol
                    icon="headphones"
                    size={24}
                    className="icon-circle bg-info bg-opacity-10 text-info text-center rounded-1 wh-48 lh-48"
                  />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="fw-medium fs16 mb-0">Sony WF-SP800N</h6>
                  <span className="fs-12">Sony</span>
                </div>
              </div>
              <span className="fs-14 fw-medium text-secondary">$65,987</span>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default TopProductsBySales;
