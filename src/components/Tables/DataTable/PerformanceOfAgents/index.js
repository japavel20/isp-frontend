"use client";

import React from "react"; 
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Image from "next/image";
import Pagination from "./Pagination";

const agentsData = [
  {
    id: "#854",
    agentName: {
      img: "/images/user-12.jpg",
      name: "Oliver Khan",
    },
    totalTickets: 230,
    openTickets: 20,
    resolvedTickets: 75,
    avgResolutionTime: "2.5 hours",
    satisfactionRate: "80",
  },
  {
    id: "#853",
    agentName: {
      img: "/images/user-13.jpg",
      name: "Ava Cooper",
    },
    totalTickets: 180,
    openTickets: 16,
    resolvedTickets: 35,
    avgResolutionTime: "1.4 hours",
    satisfactionRate: "75",
  },
  {
    id: "#852",
    agentName: {
      img: "/images/user-14.jpg",
      name: "Isabella Evans",
    },
    totalTickets: 150,
    openTickets: 35,
    resolvedTickets: 45,
    avgResolutionTime: "3.2 hours",
    satisfactionRate: "80",
  },
  {
    id: "#851",
    agentName: {
      img: "/images/user-15.jpg",
      name: "Mia Hughes",
    },
    totalTickets: 75,
    openTickets: 86,
    resolvedTickets: 25,
    avgResolutionTime: "4.5 hours",
    satisfactionRate: "100",
  },
  {
    id: "#850",
    agentName: {
      img: "/images/user-16.jpg",
      name: "Noah Mitchell",
    },
    totalTickets: 320,
    openTickets: 90,
    resolvedTickets: 10,
    avgResolutionTime: "3.8 hours",
    satisfactionRate: "80",
  },
  {
    id: "#849",
    agentName: {
      img: "/images/user-17.jpg",
      name: "Sophia Carter",
    },
    totalTickets: 120,
    openTickets: 55,
    resolvedTickets: 20,
    avgResolutionTime: "5.3 hours",
    satisfactionRate: "60",
  },
];

const PerformanceOfAgents = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-0">
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <h3 className="mb-0">Performance of Agents</h3>

              <Form.Select
                className="month-select form-control p-0 h-auto border-0"
                aria-label="Default select example"
              >
                <option value="0">Select</option>
                <option value="1">This Day</option>
                <option value="2">This Week</option>
                <option value="3">This Month</option>
                <option value="4">This Year</option>
              </Form.Select>
            </div>
          </div>

          <div className="default-table-area style-two all-projects">
            <div className="table-responsive">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Agent Name</th>
                    <th scope="col">Total Tickets</th>
                    <th scope="col">Open Tickets</th>
                    <th scope="col">Resolved Tickets</th>
                    <th scope="col">Avg. Resolution Time</th>
                    <th scope="col">Satisfaction Rate</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {agentsData &&
                    agentsData.slice(0, 6).map((value, i) => (
                      <tr key={i}>
                        <td className="text-body">{value.id}</td>

                        <td>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <Image
                                src={value.agentName.img}
                                className="wh-34 rounded-circle"
                                alt="user"
                                width={34}
                                height={34}
                              />
                            </div>
                            <div className="flex-grow-1 ms-2 position-relative top-1">
                              <h6 className="mb-0 fs-14 fw-medium">
                                {value.agentName.name}
                              </h6>
                            </div>
                          </div>
                        </td>

                        <td>{value.totalTickets}</td>

                        <td className="text-body">{value.openTickets}</td>

                        <td className="text-body">{value.resolvedTickets}</td>

                        <td className="text-body">{value.avgResolutionTime}</td>

                        <td>
                          <div
                            style={{
                              background: `conic-gradient(#605DFF 0% ${value.satisfactionRate}%, #f1f1f1 ${value.satisfactionRate}%)`,
                              position: "relative",
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                width: "80%",
                                height: "80%",
                                backgroundColor: "white",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <p
                                style={{
                                  fontSize: "10px",
                                }}
                                className="text-primary"
                              >
                                {value.satisfactionRate}%
                              </p>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                              <MaterialSymbol
                                icon="visibility"
                                size={16}
                                className="text-primary"
                              />
                            </button>

                            <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                              <MaterialSymbol
                                icon="edit"
                                size={16}
                                className="text-body"
                              />
                            </button>

                            <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                              <MaterialSymbol
                                icon="delete"
                                size={16}
                                className="text-danger"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>

            {/* Pagination */}
            <Pagination />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default PerformanceOfAgents;
