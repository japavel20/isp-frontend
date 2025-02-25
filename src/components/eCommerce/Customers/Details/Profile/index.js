"use client";

import React from "react";
import Image from "next/image";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Dropdown from 'react-bootstrap/Dropdown';

const Profile = () => {
  return (
    <>
      <div className="card bg-white border-0 rounded-3 mb-4">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-3 mb-lg-4">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/images/user-60.jpg"
                  className="wh-65 rounded-circle border border-2"
                  alt="user"
                  width={65}
                  height={65}
                />
              </div>

              <div className="flex-grow-1 ms-2 position-relative top-2">
                <h4 className="fs-16 fw-semibold mb-1">Ava Turner</h4>
                <span>Team Leader</span>
              </div>
            </div>

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
                  <MaterialSymbol icon="visibility" />
                  View
                </Dropdown.Item>

                <Dropdown.Item href="#"> 
                  <MaterialSymbol icon="edit" />
                  Edit
                </Dropdown.Item>
  
                <Dropdown.Item href="#"> 
                  <MaterialSymbol icon="delete" />
                  Delete
                </Dropdown.Item>

                <Dropdown.Item href="#"> 
                  <MaterialSymbol icon="lock" />
                  Block
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> 
          </div>

          <div className="mb-3">
            <span>Account ID:</span>
            <span className="d-block fw-medium text-secondary mt-1">
              ID-12174123
            </span>
          </div>

          <div className="mb-3">
            <span>Billing Email:</span>
            <span className="d-block fw-medium text-secondary mt-1">
              ava@trezo.com
            </span>
          </div>

          <div className="mb-3">
            <span>Delivery Address:</span>
            <span className="d-block fw-medium text-secondary mt-1">
              715 Maple St, Hamletville, England
            </span>
          </div>

          <div className="mb-3">
            <span>Language:</span>
            <span className="d-block fw-medium text-secondary mt-1">
              English, Spanish
            </span>
          </div>

          <div>
            <span>Latest Transaction:</span>
            <span className="d-block fw-medium text-secondary mt-1">
              #JAN-121
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
