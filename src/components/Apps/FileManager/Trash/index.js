"use client";

import React from "react";
import Pagination from "./Pagination";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Form from "react-bootstrap/Form";

const trashFilesData = [
  {
    fileName: "Dashboard Design",
    owner: "Linda Maddox",
    listedDate: "20 Nov 2024",
    fileType: ".pdf",
    fileSize: "1.2 GB",
    fileItems: "69",
  },
  {
    fileName: "Important Documents",
    owner: "Juanita Lavigne",
    listedDate: "18 Nov 2024",
    fileType: ".zip",
    fileSize: "2.6 GB",
    fileItems: "236",
  },
  {
    fileName: "Product Design",
    owner: "Roy Pope",
    listedDate: "17 Nov 2024",
    fileType: ".psd",
    fileSize: "3.2 GB",
    fileItems: "365",
  },
  {
    fileName: "Dashboard Design File",
    owner: "Cecil Jones",
    listedDate: "15 Nov 2024",
    fileType: ".fig",
    fileSize: "1 GB",
    fileItems: "25",
  },
  {
    fileName: "Media Files",
    owner: "Trudy Venegas",
    listedDate: "14 Nov 2024",
    fileType: ".jpg",
    fileSize: "1.5 GB",
    fileItems: "153",
  },
  {
    fileName: "Graphic Design File",
    owner: "Sharilyn Goodall",
    listedDate: "13 Nov 2024",
    fileType: ".png",
    fileSize: "1.6 GB",
    fileItems: "142",
  },
  {
    fileName: "Personal Photo",
    owner: "Annie Carver",
    listedDate: "09 Nov 2024",
    fileType: ".gif",
    fileSize: "1.2 GB",
    fileItems: "175",
  },
  {
    fileName: "Audio File",
    owner: "Winona Etzel",
    listedDate: "08 Nov 2024",
    fileType: ".mp3",
    fileSize: "1.3 GB",
    fileItems: "136",
  },
  {
    fileName: "Audio File",
    owner: "Winona Etzel",
    listedDate: "08 Nov 2024",
    fileType: ".mp3",
    fileSize: "1.3 GB",
    fileItems: "136",
  },
  {
    fileName: "Personal Photo",
    owner: "Annie Carver",
    listedDate: "09 Nov 2024",
    fileType: ".gif",
    fileSize: "1.2 GB",
    fileItems: "175",
  },
];

const Trash = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
            <h3 className="mb-0">Trash</h3>

            <Form.Select
              className="month-select form-control"
              aria-label="Default select example"
            >
              <option value="0">Select</option>
              <option value="1">Today</option>
              <option value="2">Weekly</option>
              <option value="3">Monthly</option>
              <option value="4">Yearly</option>
            </Form.Select>
          </div>

          <div className="default-table-area recent-files">
            <div className="table-responsive">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col">File Name</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Listed Date</th>
                    <th scope="col">File Type</th>
                    <th scope="col">File Size</th>
                    <th scope="col">File Items</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {trashFilesData &&
                    trashFilesData.slice(0, 8).map((value, i) => (
                      <tr key={i}>
                        <td className="text-body">
                          <div className="d-flex align-items-center"> 
                            <MaterialSymbol
                              icon="folder"
                              size={28}
                              className="text-warning"
                            />
                            <div className="ms-2">
                              <h6 className="fw-medium fs-14 position-relative top-1 m-0">{value.fileName}</h6>
                            </div>
                          </div>
                        </td>

                        <td className="text-body">{value.owner}</td>

                        <td>{value.listedDate}</td>

                        <td className="text-body">{value.fileType}</td>

                        <td className="text-body">{value.fileSize}</td>

                        <td>
                          {value.fileItems} 
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

              {/* Pagination */}
              <Pagination />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Trash;
