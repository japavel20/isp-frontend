"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const KeyFeatures = () => {
  return (
    <>
      <div
        className="key-features-area pt-150 pb-125 position-relative z-2" 
      >
        <div className="container">
          <div className="section-title">
            <span className="top-title">
              <span>Key Features</span>
            </span>
            <h2>
              Discover What Sets Us Apart: Highlighted Dashboard Functions
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="key-features-single-item">
                <MaterialSymbol icon="stacks" className="wh-87 bg-primary bg-opacity-25 d-inline-block text-primary" />

                <h3>Real-Time Updates</h3>
                <p>
                  Provide real-time updates and notifications to keep users
                  informed about important events, changes, or updates within
                  the system.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="key-features-single-item">
                <MaterialSymbol icon="frame_source" className="wh-87 bg-primary-div bg-opacity-25 d-inline-block text-primary-div" />

                <h3>Quality Code</h3>
                <p>
                  These features include adherence to coding standards, robust
                  error handling mechanisms, efficient algorithms, scalability,
                  maintainability, and readability.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="key-features-single-item">
                <MaterialSymbol icon="support_agent" className="wh-87 bg-danger bg-opacity-25 d-inline-block text-danger" />

                <h3>24/7 Customer Support</h3>
                <p>
                  Our 24/7 customer support is dedicated to providing
                  round-the-clock assistance, ensuring that help is always
                  available whenever our customers need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
