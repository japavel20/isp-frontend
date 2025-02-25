"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const TotalProjects = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <span>Total Projects</span>

          <h3 className="mb-0 fs-20">22.5k+</h3>

          <div className="py-3">
            <div className="wh-77 lh-97 text-center m-auto bg-primary bg-opacity-25 rounded-circle">
              <MaterialSymbol
                icon="auto_stories"
                size={32}
                className="text-primary"
              />
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <span className="fs-12">This Month</span>
            <MaterialSymbol icon="timeline" size={24} className="text-success" />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default TotalProjects;
