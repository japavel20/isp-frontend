"use client";

import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Dropdown from 'react-bootstrap/Dropdown';

const Assets = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
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
                  Projects
                </span>
              </div>

              <div className="d-flex justify-content-between">
                <span className="fs-13 text-secondary">159  Files</span>
                <span className="fs-13 text-secondary">4.5 GB</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
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
                  className='text-primary-div' 
                />

                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                  Documents
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="fs-13 text-secondary">159  Files</span>
                <span className="fs-13 text-secondary">4.5 GB</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
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
                  className='text-success' 
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                  Media
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="fs-13 text-secondary">159  Files</span>
                <span className="fs-13 text-secondary">4.5 GB</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
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
                  className='text-danger'
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                  Applications
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="fs-13 text-secondary">159 Files</span>
                <span className="fs-13 text-secondary">4.5 GB</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
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
                  className='text-warning'
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                  ET Template
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="fs-13 text-secondary">159 Files</span>
                <span className="fs-13 text-secondary">4.5 GB</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
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
                  className='text-info'
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                  React Template
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="fs-13 text-secondary">159 Files</span>
                <span className="fs-13 text-secondary">4.5 GB</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
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
                  className='text-primary-div'
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                  Material UI
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="fs-13 text-secondary">159 Files</span>
                <span className="fs-13 text-secondary">4.5 GB</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
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
                  className='text-secondary'
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                  WP Themes
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="fs-13 text-secondary">159 Files</span>
                <span className="fs-13 text-secondary">4.5 GB</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
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
                  className='text-danger'
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                  Personal Photos
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="fs-13 text-secondary">159 Files</span>
                <span className="fs-13 text-secondary">4.5 GB</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
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
                  Mobile Apps
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="fs-13 text-secondary">159 Files</span>
                <span className="fs-13 text-secondary">4.5 GB</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
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
                  className='text-primary-div'
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                  Important Files
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="fs-13 text-secondary">159 Files</span>
                <span className="fs-13 text-secondary">4.5 GB</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
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
                  className='text-warning'
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                Angular Template
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="fs-13 text-secondary">159 Files</span>
                <span className="fs-13 text-secondary">4.5 GB</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Assets;
