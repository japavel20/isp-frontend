"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const TotalOrders = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <span>Total Orders</span>

          <h3 className="mb-0 fs-20">75k+</h3>

          <div className="py-3">
            <div className="wh-77 lh-97 text-center m-auto bg-primary-div bg-opacity-25 rounded-circle">
              <MaterialSymbol
                icon="orders"
                size={32}
                className="text-primary-div"
              />
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <span className="fs-12">This Month</span>
            <MaterialSymbol icon="trending_down" size={24} className="text-danger" />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default TotalOrders;
