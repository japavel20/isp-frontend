"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import ProgressBar from "react-bootstrap/ProgressBar";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Pagination from "./Pagination";

const studentsProgressData = [
  {
    name: "Olivia Clark",
    courseName: "Web Design",
    status: "55",
    progressBg: "warning",
  },
  {
    name: "Alexander Garcia",
    courseName: "Python Dev",
    status: "80",
    progressBg: "success",
  },
  {
    name: "Chloe Lewis",
    courseName: "Front-end",
    status: "25",
    progressBg: "info",
  },
  {
    name: "Ava Turner",
    courseName: "Back-end",
    status: "50",
    progressBg: "danger",
  },
  {
    name: "Ryan Flores",
    courseName: "Data Analytics",
    status: "100",
    progressBg: "success",
  },
  {
    name: "John Doe",
    courseName: "Plugin Dev",
    status: "10",
    progressBg: "warning",
  },
];

const StudentsProgress = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-0">
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <h3 className="mb-0">Student&apos;s Progress</h3>

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
          </div>

          <div className="default-table-area style-two top-instructors">
            <div className="table-responsive">
              <Table className="table align-middle border-0">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {studentsProgressData &&
                    studentsProgressData.slice(0, 6).map((value, i) => (
                      <tr key={i}>
                        <td>
                          <div className="d-flex align-items-center">
                            <h6 className="mb-0 fs-14 fw-medium">
                              {value.name}
                            </h6>
                          </div>
                        </td>

                        <td className="text-body">{value.courseName}</td>

                        <td>
                          <ProgressBar
                            variant={value.progressBg}
                            now={value.status}
                            style={{
                              height: "5px",
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </div>

          {/* Pagination */}
          <Pagination />
        </Card.Body>
      </Card>
    </>
  );
};

export default StudentsProgress;
