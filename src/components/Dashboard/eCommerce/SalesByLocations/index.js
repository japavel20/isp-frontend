"use client";

import React from "react";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Dropdown from 'react-bootstrap/Dropdown';
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const SalesByLocations = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
            <h3 className="mb-0">Sales by Locations</h3>

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

          <div className="text-center mb-4">
            <Image 
              src="/images/map.svg" 
              alt="map" 
              width={270}
              height={160}
            />
          </div>

          <ul className="ps-0 mb-0 list-unstyled sales_by_locations mt-4">
            <li className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/images/usa.svg"
                  className="rounded-circle"
                  alt="usa"
                  width={30}
                  height={30}
                />
              </div>

              <div className="flex-grow-1 ms-3">
                <span className="fw-medium d-block mb-2">United States</span>

                <div>
                  <ProgressBar now={85} />
                  <span className="count fw-medium text-body">85%</span>
                </div>
              </div>
            </li>

            <li className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/images/germany.svg"
                  className="rounded-circle"
                  alt="germany"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <span className="fw-medium d-block mb-2">Germany</span>

                <div>
                  <ProgressBar now={75} />
                  <span className="count fw-medium text-body">75%</span>
                </div> 
              </div>
            </li>

            <li className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/images/united-kingdom.svg"
                  className="rounded-circle"
                  alt="united-kingdom"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <span className="fw-medium d-block mb-2">United Kingdom</span>

                <div>
                  <ProgressBar now={40} />
                  <span className="count fw-medium text-body">40%</span>
                </div>
              </div>
            </li>

            <li className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/images/canada.svg"
                  className="rounded-circle"
                  alt="canada"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <span className="fw-medium d-block mb-2">Canada</span>

                <div>
                  <ProgressBar now={10} />
                  <span className="count fw-medium text-body">10%</span>
                </div>
              </div>
            </li>

            <li className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/images/portugal.svg"
                  className="rounded-circle"
                  alt="portugal"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <span className="fw-medium d-block mb-2">Portugal</span>

                <div>
                  <ProgressBar now={5} />
                  <span className="count fw-medium text-body">5%</span>
                </div> 
              </div>
            </li>

            <li className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/images/spain.svg"
                  className="rounded-circle"
                  alt="spain"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <span className="fw-medium d-block mb-2">Spain</span>

                <div>
                  <ProgressBar now={15} />
                  <span className="count fw-medium text-body">15%</span>
                </div>
              </div>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default SalesByLocations;
