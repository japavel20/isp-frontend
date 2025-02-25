"use client";

import React from "react";
import Form from 'react-bootstrap/Form';
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const Filter = () => {
  return (
    <>
      <div className="card bg-white border-0 rounded-3 mb-4">
        <div className="card-body p-4">
          <div className="d-sm-flex justify-content-between align-items-center flex-wrap gap-2">
            <h4 className="fs-16 fw-medium mb-2 mb-sm-0">Filter</h4>

            <Form className="default-src-form">
              <div className="d-sm-flex flex-wrap gap-3">
                <div className="position-relative mb-2 mb-sm-0">
                  <Form.Control
                    type="text"
                    className="rounded-1"
                    placeholder="Search here"
                  />
                  <MaterialSymbol icon="search" size={18} className="position-absolute top-50 start-0 translate-middle-y" />
                </div>

                <div>
                  <Form.Select
                    className="form-control rounded-1 py-0 fs-14 ps-3 bg-transparent pe-5"
                    aria-label="Default select example"
                  >
                    <option value="0">Default Shorting</option>
                    <option value="1">Apple</option>
                    <option value="2">SAMSUNG</option>
                    <option value="3">T-Shirts</option>
                  </Form.Select>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
