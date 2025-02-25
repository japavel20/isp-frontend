"use client";

import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Dropdown from 'react-bootstrap/Dropdown';
import Image from "next/image";

const Applications = () => {
  return (
    <>
      <Row>
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
                <Image 
                  src="/images/figma.svg" 
                  alt="figma"
                  width={20}
                  height={20}
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">ET Template</span>
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
                <Image 
                  src="/images/dribbble.svg" 
                  alt="dribbble"
                  width={30}
                  height={30}
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">React Template</span>
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
                <Image 
                  src="/images/spotify.svg" 
                  alt="spotify"
                  width={30}
                  height={30}
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">Material UI</span>
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
                <Image 
                  src="/images/github.svg" 
                  alt="github"
                  width={30}
                  height={30}
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">WP Themes</span>
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
                <Image 
                  src="/images/gdrive.svg" 
                  alt="gdrive"
                  width={30}
                  height={30}
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">Personal Photos</span>
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
                <Image 
                  src="/images/trello.svg" 
                  alt="trello"
                  width={30}
                  height={30}
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">Mobile Apps</span>
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
                <Image 
                  src="/images/slak.svg" 
                  alt="slak"
                  width={30}
                  height={30}
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">Important Files</span>
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
                <Image 
                  src="/images/pinterest.svg" 
                  alt="pinterest"
                  width={30}
                  height={30}
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">Angular Template</span>
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
                <Image 
                  src="/images/facebook.svg" 
                  alt="facebook"
                  width={30}
                  height={30}
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">Projects</span>
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
                <Image 
                  src="/images/linkedin.svg" 
                  alt="linkedin"
                  width={30}
                  height={30}
                />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">Documents</span>
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

export default Applications;
