"use client";

import React, { useState } from "react";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";
import Table from "react-bootstrap/Table";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from "next/image";

const leadsData = [
  {
    id: '#854',
    customerImg: '/images/user-6.jpg',
    customerName: 'Oliver Khan',
    email: 'oliver@trezo.com',
    phone: '+1 555-123-4567',
    createdDate: '19 Jun 2024',
    company: 'ABC Corporation',
    leadSource: 'Organic',
    status: 'confirmed',
  },
  {
    id: '#853',
    customerImg: '/images/user-7.jpg',
    customerName: 'Carolyn Barnes',
    email: 'carolyn@trezo.com',
    phone: '+1 555-987-6543',
    createdDate: '18 Jun 2024',
    company: 'XYZ Ltd',
    leadSource: 'Social',
    status: 'inProgress',
  },
  {
    id: '#852',
    customerImg: '/images/user-8.jpg',
    customerName: 'Donna Miller',
    email: 'donna@trezo.com',
    phone: '+1 555-456-7890',
    createdDate: '17 Jun 2024',
    company: 'Tech Solutions',
    leadSource: 'Website',
    status: 'pending',
  },
  {
    id: '#851',
    customerImg: '/images/user-9.jpg',
    customerName: 'Barbara Cross',
    email: 'barbara@trezo.com',
    phone: '+1 555-369-7878',
    createdDate: '16 Jun 2024',
    company: 'Global Solutions',
    leadSource: 'Paid',
    status: 'rejected',
  },
  {
    id: '#850',
    customerImg: '/images/user-10.jpg',
    customerName: 'Rebecca Block',
    email: 'rebecca@trezo.com',
    phone: '+1 555-658-4488',
    createdDate: '15 Jun 2024',
    company: 'Acma Industries',
    leadSource: 'Others',
    status: 'confirmed',
  },
  {
    id: '#849',
    customerImg: '/images/user-11.jpg',
    customerName: 'Ramiro McCarty',
    email: 'ramiro@trezo.com',
    phone: '+1 555-558-9966',
    createdDate: '14 Jun 2024',
    company: 'Synergy Ltd',
    leadSource: 'Facebook',
    status: 'inProgress',
  },
  {
    id: '#848',
    customerImg: '/images/user-12.jpg',
    customerName: 'Robert Fairweather',
    email: 'robert@trezo.com',
    phone: '+1 555-357-5888',
    createdDate: '13 Jun 2024',
    company: 'Summit Solutions',
    leadSource: 'Instagram',
    status: 'pending',
  },
  {
    id: '#847',
    customerImg: '/images/user-13.jpg',
    customerName: 'Marcelino Haddock',
    email: 'marcelino@trezo.com',
    phone: '+1 555-456-8877',
    createdDate: '12 Jun 2024',
    company: 'Strategies Ltd',
    leadSource: 'X',
    status: 'rejected',
  },
  {
    id: '#846',
    customerImg: '/images/user-14.jpg',
    customerName: 'Thomas Wilson',
    email: 'thomas@trezo.com',
    phone: '+1 555-622-4488',
    createdDate: '11 Jun 2024',
    company: 'Tech Enterprises',
    leadSource: 'LinkedIn',
    status: 'confirmed',
  },
  {
    id: '#845',
    customerImg: '/images/user-15.jpg',
    customerName: 'Nathaniel Hulsey',
    email: 'nathaniel@trezo.com',
    phone: '+1 555-225-4488',
    createdDate: '10 Jun 2024',
    company: 'Synetic Solutions',
    leadSource: 'Pinterest',
    status: 'inProgress',
  },
];

const LeadsTable = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="card bg-white border-0 rounded-3 mb-4">
        <div className="card-body p-0">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 p-4">
            <SearchForm />

            <div className="text-end">
              <button
                className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
                onClick={handleShow}
              >
                <span className="py-sm-1 d-block">
                  <i className="ri-add-line"></i>
                  <span>Add New Lead</span>
                </span>
              </button>
            </div>
          </div>

          <div className="default-table-area style-two default-table-width">
            <div className="table-responsive">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col">
                      <Form>
                        <Form.Check
                          type="checkbox"
                          id="default-checkbox"
                          label="ID" 
                        />
                      </Form> 
                    </th>
                    <th scope="col">Customer</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Created Date</th>
                    <th scope="col">Company</th>
                    <th scope="col">Lead Source</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {leadsData &&
                    leadsData.slice(0, 10).map((value, i) => (
                      <tr key={i}>
                        <td className="text-body">
                          <Form>
                            <Form.Check
                              type="checkbox"
                              id={value.id}
                              label={value.id}
                            />
                          </Form> 
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <Image 
                                src={value.customerImg}
                                className="wh-34 rounded-circle" 
                                alt="user" 
                                width={34}
                                height={34}
                              />
                            </div>
                            <div className="flex-grow-1 ms-2 position-relative top-1">
                              <h6 className="mb-0 fs-14 fw-medium">{value.customerName}</h6>
                            </div>
                          </div>
                        </td>

                        <td className="text-body">{value.email}</td>

                        <td>{value.phone}</td>

                        <td className="text-body">{value.createdDate}</td>

                        <td className="text-body">{value.company}</td>

                        <td className="text-body">{value.leadSource}</td>

                        <td>
                          <span
                            className={`badge bg-opacity-10 p-2 fs-12 fw-normal text-capitalize ${value.status}`}
                          >
                            {value.status}
                          </span>
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
        </div>
      </div>

      {/* Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header className="border-bottom p-4" closeButton>
          <Offcanvas.Title className="fs-18 mb-0">Add New Lead</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="p-4">
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="label">ID No</Form.Label>
              <Form.Control
                type="text"
                className="text-dark"
                placeholder="ID No"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">User Name</Form.Label>
              <Form.Control
                type="text"
                className="text-dark"
                placeholder="User Name"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Email</Form.Label>
              <Form.Control
                type="email"
                className="text-dark"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Phone</Form.Label>
              <Form.Control
                type="text"
                className="text-dark"
                placeholder="Phone"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Due Date</Form.Label>
              <Form.Control type="date" className="text-dark" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Company</Form.Label>
              <Form.Control
                type="text"
                className="text-dark"
                placeholder="Company"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Lead Source</Form.Label>
              <Form.Control
                type="text"
                className="text-dark"
                placeholder="Lead Source"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Status</Form.Label>
              <Form.Select
                className="form-control text-dark"
                aria-label="Default select example"
              >
                <option>Select</option>
                <option value="0">Confirmed</option>
                <option value="1">In Progress</option>
                <option value="2">Pending</option>
                <option value="3">Rejected</option>
              </Form.Select>
            </Form.Group>
  
            <Form.Group className="d-flex gap-3">
              <Button variant="primary" type="submit" className="text-white fw-semibold py-2 px-2 px-sm-3">
                <span className="py-sm-1 d-block">
                  <i className="ri-add-line text-white"></i> {' '}
                  <span>Create New Lead</span>
                </span>
              </Button>
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default LeadsTable;
