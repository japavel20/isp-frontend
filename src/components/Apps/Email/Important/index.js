"use client";

import React from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Dropdown from "react-bootstrap/Dropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Important = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap pb-4 border-bottom">
            <div className="d-flex position-relative top-3">
              <div className="d-flex">
                <Form>
                  <Form.Check type="checkbox" id="default-checkbox" label="" />
                </Form>

                <Dropdown className="btn-group">
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    className="dropdown-toggle p-0 border-0 ps-0 bg-transparent"
                  >
                    <MaterialSymbol
                      icon="arrow_drop_down"
                      size={22}
                      className="text-body"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-white border box-shadow">
                    <Dropdown.Item href="#">All</Dropdown.Item>

                    <Dropdown.Item href="#">None</Dropdown.Item>

                    <Dropdown.Item href="#">Read</Dropdown.Item>

                    <Dropdown.Item href="#">Unread</Dropdown.Item>

                    <Dropdown.Item href="#">Starred</Dropdown.Item>

                    <Dropdown.Item href="#">Untarred</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

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

            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <span className="fs-12 fw-medium me-2">1 - 5 of 12</span>

                <nav aria-label="Page navigation example">
                  <ul className="pagination mb-0 justify-content-center">
                    <li className="page-item">
                      <button className="page-link icon" aria-label="Previous">
                        <MaterialSymbol icon="keyboard_arrow_left" />
                      </button>
                    </li>
                    <li className="page-item">
                      <button className="page-link icon" aria-label="Next">
                        <MaterialSymbol icon="keyboard_arrow_right" />
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="d-flex align-items-center ms-3">
                <MaterialSymbol icon="menu" size={20} />

                <Dropdown className="action-opt position-relative top-3">
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    className="p-0 border-0 bg-transparent"
                  >
                    <MaterialSymbol icon="arrow_drop_down" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-white border box-shadow">
                    <Dropdown.Item href="#">All</Dropdown.Item>

                    <Dropdown.Item href="#">None</Dropdown.Item>

                    <Dropdown.Item href="#">Read</Dropdown.Item>

                    <Dropdown.Item href="#">Unread</Dropdown.Item>

                    <Dropdown.Item href="#">Starred</Dropdown.Item>

                    <Dropdown.Item href="#">Untarred</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="default-table-area email-list">
            <div className="table-responsive">
              <table className="table align-middle">
                <tbody>
                  <tr>
                    <td className="ps-0">
                      <div className="d-flex align-items-center">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault2"
                          />
                        </div>
                        <MaterialSymbol
                          icon="bookmark"
                          size={22}
                          className="text-body position-relative top-1"
                        />
                      </div>
                    </td>
                    <td>
                      <span className="fs-14 fw-medium">Google</span>
                    </td>
                    <td>
                      <Link
                        href="/apps/email/read-email/"
                        className="w-330 d-inline-block text-truncate text-secondary"
                      >
                        2-Step Verification Turn Off{" "}
                        <span className="text-body">
                          - Integer nec arcu ac nisi...
                        </span>
                      </Link>
                    </td>
                    <td className="text-end pe-0 fs-12">
                      <span>20 JULY 2024</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="ps-0">
                      <div className="d-flex align-items-center">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault3"
                          />
                        </div>
                        <MaterialSymbol
                          icon="bookmark"
                          size={22}
                          className="text-body position-relative top-1"
                        />
                      </div>
                    </td>
                    <td>
                      <span className="fs-14 fw-medium">Facebook</span>
                    </td>
                    <td>
                      <Link
                        href="/apps/email/read-email/"
                        className="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Friend Request{" "}
                        <span className="text-body">
                          - Sed in libero eget lorem fermentum...
                        </span>
                      </Link>
                    </td>
                    <td className="text-end pe-0 fs-12">
                      <span>21 JULY 2024</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="ps-0">
                      <div className="d-flex align-items-center">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault4"
                          />
                        </div>
                        <MaterialSymbol
                          icon="bookmark"
                          size={22}
                          className="text-body position-relative top-1"
                        />
                      </div>
                    </td>
                    <td>
                      <span className="fs-14 fw-medium">Linkedin</span>
                    </td>
                    <td>
                      <Link
                        href="/apps/email/read-email/"
                        className="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Travel Information{" "}
                        <span className="text-body">
                          - Vivamus vestibulum ligula in mauris...
                        </span>
                      </Link>
                    </td>
                    <td className="text-end pe-0 fs-12">
                      <span>22 JULY 2024</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="ps-0">
                      <div className="d-flex align-items-center">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault5"
                          />
                        </div>
                        <MaterialSymbol
                          icon="bookmark"
                          size={22}
                          className="text-body position-relative top-1"
                        />
                      </div>
                    </td>
                    <td>
                      <span className="fs-14 fw-medium">Ethan Parker</span>
                    </td>
                    <td>
                      <Link
                        href="/apps/email/read-email/"
                        className="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Leave Application{" "}
                        <span className="text-body">
                          - Integer nec arcu ac nisi...
                        </span>
                      </Link>
                    </td>
                    <td className="text-end pe-0 fs-12">
                      <span>23 JULY 2024</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="ps-0">
                      <div className="d-flex align-items-center">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault6"
                          />
                        </div>
                        <MaterialSymbol
                          icon="bookmark"
                          size={22}
                          className="text-body position-relative top-1"
                        />
                      </div>
                    </td>
                    <td>
                      <span className="fs-14 fw-medium">Dribbble</span>
                    </td>
                    <td>
                      <Link
                        href="/apps/email/read-email/"
                        className="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Design Inspiration{" "}
                        <span className="text-body">
                          - Sed in libero eget lorem fermentum...
                        </span>
                      </Link>
                    </td>
                    <td className="text-end pe-0 fs-12">
                      <span>24 JULY 2024</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="ps-0">
                      <div className="d-flex align-items-center">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault7"
                          />
                        </div>
                        <MaterialSymbol
                          icon="bookmark"
                          size={22}
                          className="text-body position-relative top-1"
                        />
                      </div>
                    </td>
                    <td>
                      <span className="fs-14 fw-medium">Instagram</span>
                    </td>
                    <td>
                      <Link
                        href="/apps/email/read-email/"
                        className="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Training Schedule{" "}
                        <span className="text-body">
                          - Vivamus vestibulum ligula in mauris...
                        </span>
                      </Link>
                    </td>
                    <td className="text-end pe-0 fs-12">
                      <span>25 JULY 2024</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="ps-0">
                      <div className="d-flex align-items-center">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault8"
                          />
                        </div>
                        <MaterialSymbol
                          icon="bookmark"
                          size={22}
                          className="text-body position-relative top-1"
                        />
                      </div>
                    </td>
                    <td>
                      <span className="fs-14 fw-medium">
                        Isabella Cooper
                      </span>
                    </td>
                    <td>
                      <Link
                        href="/apps/email/read-email/"
                        className="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Internal Auditor{" "}
                        <span className="text-body">
                          - Sed in libero eget lorem fermentum...
                        </span>
                      </Link>
                    </td>
                    <td className="text-end pe-0 fs-12">
                      <span>26 JULY 2024</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="ps-0">
                      <div className="d-flex align-items-center">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault9"
                          />
                        </div>
                        <MaterialSymbol
                          icon="bookmark"
                          size={22}
                          className="text-body position-relative top-1"
                        />
                      </div>
                    </td>
                    <td>
                      <span className="fs-14 fw-medium">Google</span>
                    </td>
                    <td>
                      <Link
                        href="/apps/email/read-email/"
                        className="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Password Changed{" "}
                        <span className="text-body">
                          - Integer nec arcu ac nisi...
                        </span>
                      </Link>
                    </td>
                    <td className="text-end pe-0 fs-12">
                      <span>27 JULY 2024</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="ps-0">
                      <div className="d-flex align-items-center">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault10"
                          />
                        </div>
                        <MaterialSymbol
                          icon="bookmark"
                          size={22}
                          className="text-body position-relative top-1"
                        />
                      </div>
                    </td>
                    <td>
                      <span className="fs-14 fw-medium">
                        Olivia Rodriguez
                      </span>
                    </td>
                    <td>
                      <Link
                        href="/apps/email/read-email/"
                        className="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Virtual Training{" "}
                        <span className="text-body">
                          - Vivamus vestibulum ligula in mauris...
                        </span>
                      </Link>
                    </td>
                    <td className="text-end pe-0 fs-12">
                      <span>28 JULY 2024</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="ps-0">
                      <div className="d-flex align-items-center">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault11"
                          />
                        </div>
                        <MaterialSymbol
                          icon="bookmark"
                          size={22}
                          className="text-body position-relative top-1"
                        />
                      </div>
                    </td>
                    <td>
                      <span className="fs-14 fw-medium">YouTube</span>
                    </td>
                    <td>
                      <Link
                        href="/apps/email/read-email/"
                        className="w-330 d-inline-block text-truncate text-secondary"
                      >
                        New Subscriber{" "}
                        <span className="text-body">
                          - Sed in libero eget lorem fermentum...
                        </span>
                      </Link>
                    </td>
                    <td className="text-end pe-0 fs-12">
                      <span>29 JULY 2024</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="ps-0">
                      <div className="d-flex align-items-center">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault12"
                          />
                        </div>
                        <MaterialSymbol
                          icon="bookmark"
                          size={22}
                          className="text-body position-relative top-1"
                        />
                      </div>
                    </td>
                    <td>
                      <span className="fs-14 fw-medium">Google</span>
                    </td>
                    <td>
                      <Link
                        href="/apps/email/read-email/"
                        className="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Security Alert{" "}
                        <span className="text-body">
                          - Vivamus vestibulum ligula in mauris...
                        </span>
                      </Link>
                    </td>
                    <td className="text-end pe-0 fs-12">
                      <span>30 JULY 2024</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Important;
