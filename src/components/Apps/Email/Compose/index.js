"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Dropdown from "react-bootstrap/Dropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import dynamic from 'next/dynamic'
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const Compose = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap border-bottom pb-3 mb-4">
            <h3 className="fs-16 fw-semibold mb-0">New Message</h3>

            <div className="d-flex position-relative top-3">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Archive</Tooltip>}
              >
                <button className="pe-0 border-0 bg-transparent ps-2">
                  <MaterialSymbol
                    icon="archive"
                    size={20}
                    className="text-body hover"
                  />
                </button>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Help</Tooltip>}
              >
                <button className="pe-0 border-0 bg-transparent ms-2">
                  <MaterialSymbol
                    icon="help_clinic"
                    size={20}
                    className="text-body hover"
                  />
                </button>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Tresh</Tooltip>}
              >
                <button className="pe-0 border-0 bg-transparent ms-2">
                  <MaterialSymbol
                    icon="delete"
                    size={20}
                    className="text-body hover"
                  />
                </button>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">More Option</Tooltip>}
              >
                <Dropdown className="action-opt ms-2 position-relative top-3">
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    className="p-0 border-0 bg-transparent"
                  >
                    <MaterialSymbol icon="more_vert" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-white border box-shadow">
                    <Dropdown.Item href="#">
                      <MaterialSymbol icon="visibility" />
                      View Profile
                    </Dropdown.Item>

                    <Dropdown.Item href="#">
                      <MaterialSymbol icon="delete" />
                      Delete Chat
                    </Dropdown.Item>

                    <Dropdown.Item href="#">
                      <MaterialSymbol icon="lock" />
                      Block
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </OverlayTrigger>
            </div>
          </div>

          {/* form */}
          <Form>
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-4">
                  <Form.Label className="label text-secondary fs-14">To</Form.Label>
                  <Form.Select
                    className="form-control h-55"
                    aria-label="Default select example"
                  >
                    <option value="0">Select</option>
                    <option value="1">james@trezo.com</option>
                    <option value="2">andy@trezo.com</option>
                    <option value="3">mateo@trezo.com</option>
                    <option value="4">luca@trezo.com</option>
                    <option value="5">luca@trezo.com</option>
                    <option value="6">tomato@trezo.com</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6}>
                <Form.Group className="mb-4">
                  <Form.Label className="label text-secondary fs-14">Cc</Form.Label>
                  <Form.Select
                    className="form-control h-55"
                    aria-label="Default select example"
                  >
                    <option value="0">Select</option>
                    <option value="1">james@trezo.com</option>
                    <option value="2">andy@trezo.com</option>
                    <option value="3">mateo@trezo.com</option>
                    <option value="4">luca@trezo.com</option>
                    <option value="5">luca@trezo.com</option>
                    <option value="6">tomato@trezo.com</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6}>
                <Form.Group className="mb-4">
                  <Form.Label className="label text-secondary fs-14">Bcc</Form.Label>
                  <Form.Select
                    className="form-control h-55"
                    aria-label="Default select example"
                  >
                    <option value="0">Select</option>
                    <option value="1">james@trezo.com</option>
                    <option value="2">andy@trezo.com</option>
                    <option value="3">mateo@trezo.com</option>
                    <option value="4">luca@trezo.com</option>
                    <option value="5">luca@trezo.com</option>
                    <option value="6">tomato@trezo.com</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6}>
                <Form.Group className="mb-4">
                  <Form.Label className="label text-secondary fs-14">Subject</Form.Label>
                  <input
                    type="text"
                    className="form-control h-55"
                    placeholder="Write your subject..."
                  />
                </Form.Group>
              </Col>

              <Col lg={12}>
                <Form.Group className="mb-4">
                  <Form.Label className="label text-secondary fs-14">Description</Form.Label>

                  <RichTextEditor
                    id="rte"
                    controls={[
                      ['bold', 'italic', 'underline', 'link', 'image'],
                      ['unorderedList', 'h1', 'h2', 'h3'],
                      ['sup', 'sub'],
                      ['alignLeft', 'alignCenter', 'alignRight'],
                    ]}
                    style={{
                      minHeight: '285px'
                    }}
                  />
                </Form.Group>
              </Col>

              <Col lg={12}>
                <div className="d-flex flex-wrap gap-3 align-items-center">
                  <button
                    className="btn btn-primary text-white fw-semibold py-2 px-4 me-4"
                    type="submit"
                  >
                    Send
                  </button>

                  <div className="position-relative top-3 d-flex align-items-baseline flex-wrap gap-sm-0">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="tooltip-top">Text</Tooltip>}
                    >
                      <button
                        className="p-0 border-0 bg-transparent"
                      >
                        <MaterialSymbol
                          icon="text_fields_alt"
                          size={20}
                          className="text-body hover"
                        />
                      </button>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="tooltip-top">File</Tooltip>}
                    >
                      <button
                        className="p-0 border-0 bg-transparent ms-3"
                      >
                        <MaterialSymbol
                          icon="attach_file"
                          size={20}
                          className="text-body hover"
                        />
                      </button>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="tooltip-top">Link</Tooltip>}
                    >
                      <button
                        className="p-0 border-0 bg-transparent ms-3"
                      >
                        <MaterialSymbol
                          icon="link"
                          size={20}
                          className="text-body hover"
                        />
                      </button>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="tooltip-top">Mood</Tooltip>}
                    >
                      <button
                        className="p-0 border-0 bg-transparent ms-3"
                      >
                        <MaterialSymbol
                          icon="mood"
                          size={20}
                          className="text-body hover"
                        />
                      </button>
                    </OverlayTrigger>

                    <button
                      className="p-0 border-0 bg-transparent ms-3"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Drive"
                    >
                      <MaterialSymbol
                        icon="add_to_drive"
                        size={20}
                        className="text-body hover"
                      />
                    </button>

                    <button
                      className="p-0 border-0 bg-transparent ms-3"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Pen"
                    >
                      <MaterialSymbol
                        icon="ink_pen"
                        size={20}
                        className="text-body hover"
                      />
                    </button>

                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="tooltip-top">More Option</Tooltip>}
                    >
                      <Dropdown className="action-opt ms-3 position-relative">
                        <Dropdown.Toggle
                          variant="secondary"
                          id="dropdown-basic"
                          className="p-0 border-0 bg-transparent"
                        >
                          <MaterialSymbol icon="more_vert" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-white border box-shadow">
                          <Dropdown.Item href="#">
                            <MaterialSymbol icon="visibility" />
                            View Profile
                          </Dropdown.Item>

                          <Dropdown.Item href="#">
                            <MaterialSymbol icon="delete" />
                            Delete Chat
                          </Dropdown.Item>

                          <Dropdown.Item href="#">
                            <MaterialSymbol icon="lock" />
                            Block
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </OverlayTrigger> 
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Compose;
