"use client";

import React from "react";
import Image from "next/image";
import Card from 'react-bootstrap/Card';
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const Welcome = () => {
  return (
    <>
      <Card className="bg-primary border-0 rounded-3 welcome-box style-two mb-4 position-relative">
        <Card.Body className="py-38 px-4">
          <div className="mb-5">
            <h3 className="text-white fw-semibold">
              Welcome Back, <span className="text-danger-div">Olivia!</span>
            </h3>
            <p className="text-light">Your progress this week is Awesome.</p>
          </div>

          <div className="d-flex align-items-center flex-wrap gap-4 gap-xxl-5">
            <div className="d-flex align-items-center welcome-status-item style-two">
              <div className="flex-shrink-0"> 
                <MaterialSymbol icon="airplay" />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="text-white fw-semibold mb-0 fs-16">75h</h5>
                <p className="text-light">Hours Spent</p>
              </div>
            </div>

            <div className="d-flex align-items-center welcome-status-item style-two">
              <div className="flex-shrink-0">
                <MaterialSymbol icon="local_library" className="icon-bg two" />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="text-white fw-semibold mb-0 fs-16">15</h5>
                <p className="text-light">Course Completed</p>
              </div>
            </div>
          </div>
        </Card.Body>

        <Image
          src="/images/welcome-2.gif"
          className="welcome-2 d-none d-sm-block"
          alt="welcome"
          width={290}
          height={222}
        />
      </Card>
    </>
  );
};

export default Welcome;
