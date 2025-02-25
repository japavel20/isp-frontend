"use client";

import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Dropdown from 'react-bootstrap/Dropdown';

const MyDrive = () => {
  return (
    <>
      <div className="card bg-white border-0 rounded-3 mb-4">
        <div className="card-body p-4 pb-0">
          <h3 className="mb-4">My Drive</h3>

          <Row className="justify-content-center">
            <Col sm={6} xl={6} xxl={3}>
              <Card className="bg-primary bg-opacity-10 border-0 rounded-3 mb-4 file-for-dark">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between">
                    <Form>
                      <Form.Check
                        type="checkbox"
                        id="default-checkbox"
                        label=''
                      />
                    </Form>

                    <Dropdown className="action-opt ms-2 position-relative top-3">
                      <Dropdown.Toggle
                        variant="secondary" 
                        id="dropdown-basic"
                        className="bg-transparent p-0"
                      > 
                        <MaterialSymbol size={25} icon="more_horiz" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="bg-white border box-shadow">
                        <Dropdown.Item href="#"> 
                          <MaterialSymbol icon="border_color" />
                          Edit
                        </Dropdown.Item>
 
                        <Dropdown.Item href="#"> 
                          <MaterialSymbol icon="delete" />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> 
                  </div>

                  <div className="d-flex align-items-center py-4 my-3">
                    <MaterialSymbol 
                      icon="folder_open" 
                      size={45} 
                      className='text-primary' 
                    />
                    <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                      Assets
                    </span>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span className="fs-13 text-secondary">387 Files</span>
                    <span className="fs-13 text-secondary">4.5 GB</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} xl={6} xxl={3}>
              <Card className="bg-danger bg-opacity-10 border-0 rounded-3 mb-4 file-for-dark">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between">
                    <Form>
                      <Form.Check
                        type="checkbox"
                        id="default-checkbox"
                        label=''
                      />
                    </Form>

                    <Dropdown className="action-opt ms-2 position-relative top-3">
                      <Dropdown.Toggle
                        variant="secondary" 
                        id="dropdown-basic"
                        className="bg-transparent p-0"
                      > 
                        <MaterialSymbol size={25} icon="more_horiz" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="bg-white border box-shadow">
                        <Dropdown.Item href="#"> 
                          <MaterialSymbol icon="border_color" />
                          Edit
                        </Dropdown.Item>
 
                        <Dropdown.Item href="#"> 
                          <MaterialSymbol icon="delete" />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> 
                  </div>

                  <div className="d-flex align-items-center py-4 my-3">
                    <MaterialSymbol 
                      icon="news" 
                      size={45} 
                      className='text-danger' 
                    />

                    <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                      Projects
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="fs-13 text-secondary">123 Files</span>
                    <span className="fs-13 text-secondary">1.4 GB</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} xl={6} xxl={3}>
              <Card className="bg-success bg-opacity-10 border-0 rounded-3 mb-4 file-for-dark">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between">
                    <Form>
                      <Form.Check
                        type="checkbox"
                        id="default-checkbox"
                        label=''
                      />
                    </Form>

                    <Dropdown className="action-opt ms-2 position-relative top-3">
                      <Dropdown.Toggle
                        variant="secondary" 
                        id="dropdown-basic"
                        className="bg-transparent p-0"
                      > 
                        <MaterialSymbol size={25} icon="more_horiz" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="bg-white border box-shadow">
                        <Dropdown.Item href="#"> 
                          <MaterialSymbol icon="border_color" />
                          Edit
                        </Dropdown.Item>
 
                        <Dropdown.Item href="#"> 
                          <MaterialSymbol icon="delete" />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> 
                  </div>

                  <div className="d-flex align-items-center py-4 my-3">
                    <MaterialSymbol 
                      icon="folder" 
                      size={45} 
                      className='text-success' 
                    />
                    <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                      Personal
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="fs-13 text-secondary">435 Files</span>
                    <span className="fs-13 text-secondary">5.2 GB</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} xl={6} xxl={3}>
              <Card className="bg-primary-div bg-opacity-10 border-0 rounded-3 mb-4 file-for-dark">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between">
                    <Form>
                      <Form.Check
                        type="checkbox"
                        id="default-checkbox"
                        label=''
                      />
                    </Form>

                    <Dropdown className="action-opt ms-2 position-relative top-3">
                      <Dropdown.Toggle
                        variant="secondary" 
                        id="dropdown-basic"
                        className="bg-transparent p-0"
                      > 
                        <MaterialSymbol size={25} icon="more_horiz" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="bg-white border box-shadow">
                        <Dropdown.Item href="#"> 
                          <MaterialSymbol icon="border_color" />
                          Edit
                        </Dropdown.Item>
 
                        <Dropdown.Item href="#"> 
                          <MaterialSymbol icon="delete" />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> 
                  </div>

                  <div className="d-flex align-items-center py-4 my-3">
                    <MaterialSymbol 
                      icon="folder_open" 
                      size={45} 
                      className='text-primary-div"' 
                    />
                    <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                      Templates
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="fs-13 text-secondary">431 Files</span>
                    <span className="fs-13 text-secondary">1.3 GB</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default MyDrive;
