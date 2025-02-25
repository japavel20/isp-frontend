"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const RecentTransactions = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
            <h3 className="mb-0">Recent Transactions</h3>

            <Dropdown className="action-opt">
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="bg-transparent p-0"
              >
                <MaterialSymbol icon="more_horiz" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-white border box-shadow">
                <Dropdown.Item href="#">
                  <MaterialSymbol icon="schedule" />
                  Today
                </Dropdown.Item>

                <Dropdown.Item href="#">
                  <MaterialSymbol icon="pie_chart" />
                  Last 7 Days
                </Dropdown.Item>

                <Dropdown.Item href="#">
                  <MaterialSymbol icon="refresh" />
                  Last Month
                </Dropdown.Item>

                <Dropdown.Item href="#">
                  <MaterialSymbol icon="calendar_today" />
                  Last 1 Year
                </Dropdown.Item>

                <Dropdown.Item href="#">
                  <MaterialSymbol icon="bar_chart" />
                  All Time
                </Dropdown.Item>

                <Dropdown.Item href="#">
                  <MaterialSymbol icon="visibility" />
                  View
                </Dropdown.Item>

                <Dropdown.Item href="#">
                  <MaterialSymbol icon="delete" />
                  Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <ul className="ps-0 mb-0 list-unstyled">
            <li className="d-flex align-items-center justify-content-between mb-3 pb-3">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <MaterialSymbol 
                    icon="credit_card" 
                    className="icon-circle bg-primary bg-opacity-10 text-primary text-center rounded-circle wh-40 lh-40"
                    size={24}
                  />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="fw-medium fs16 mb-0">Master Card</h6>
                  <span className="fs-12">23 Dec 2023 - 3:20 pm</span>
                </div>
              </div>
              <span className="fs-14 fw-medium text-success">+1,520</span>
            </li>

            <li className="d-flex align-items-center justify-content-between mb-3 pb-3">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <MaterialSymbol 
                  icon="redeem" 
                  className="icon-circle bg-danger bg-opacity-10 text-danger text-center rounded-circle wh-40 lh-40"
                  size={24}
                />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="fw-medium fs16 mb-0">Paypal</h6>
                  <span className="fs-12">23 Dec 2023 - 3:20 pm</span>
                </div>
              </div>
              <span className="fs-14 fw-medium text-danger">-2,250</span>
            </li>

            <li className="d-flex align-items-center justify-content-between mb-3 pb-3">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <MaterialSymbol 
                    icon="account_balance" 
                    className="icon-circle bg-primary-div bg-opacity-10 text-primary-div text-center rounded-circle wh-40 lh-40"
                    size={24}
                  />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="fw-medium fs16 mb-0">Wise</h6>
                  <span className="fs-12">23 Dec 2023 - 3:20 pm</span>
                </div>
              </div>
              <span className="fs-14 fw-medium text-success">+3,560</span>
            </li>
            
            <li className="d-flex align-items-center justify-content-between mb-3 pb-3">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <MaterialSymbol 
                    icon="currency_ruble" 
                    className="icon-circle bg-info bg-opacity-10 text-info text-center rounded-circle wh-40 lh-40"
                    size={24}
                  />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="fw-medium fs16 mb-0">Payoneer</h6>
                  <span className="fs-12">23 Dec 2023 - 3:20 pm</span>
                </div>
              </div>
              <span className="fs-14 fw-medium text-success">+6,500</span>
            </li>

            <li className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <MaterialSymbol 
                    icon="credit_score" 
                    className="icon-circle bg-primary bg-opacity-10 text-primary text-center rounded-circle wh-40 lh-40"
                    size={24}
                  />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="fw-medium fs16 mb-0">Credit Card</h6>
                  <span className="fs-12">23 Dec 2023 - 3:20 pm</span>
                </div>
              </div>
              <span className="fs-14 fw-medium text-danger">+4,320</span>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default RecentTransactions;
