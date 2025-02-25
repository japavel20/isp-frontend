"use client";

import React from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form"; 
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <Form className="position-relative default-src-form mb-3 pb-1">
            <Form.Control
              type="text"
              className="rounded-1"
              placeholder="Search"
            />
            <MaterialSymbol
              icon="search"
              size={18}
              className="position-absolute start-0 translate-middle-y"
              style={{
                top: '20px'
              }}
            />
          </Form>

          <Link
            href="/apps/email/compose/"
            className="btn btn-primary fs-16 fw-medium text-center d-block py-2 mb-4"
          >
            <div className="d-flex align-items-center justify-content-center py-lg-1">
              <MaterialSymbol icon="edit" size={18} className="me-2" />
              <span>Compose</span>
            </div>
          </Link>

          <ul className="email-sidebar-nav ps-0 mb-4 list-unstyled">
            <li className="mb-3 d-flex justify-content-between align-items-center">
              <Link
                href="/apps/email/inbox/"
                className={`d-flex align-items-center text-decoration-none ${
                  pathname === "/apps/email/inbox/" ? "active" : ""
                }`}
              >
                <MaterialSymbol
                  icon="inbox"
                  size={18}
                  className="position-relative top-1 me-2"
                />
                <span className="fw-medium">Inbox</span>
              </Link>
              <span className="fs-13">10</span>
            </li>

            <li className="mb-3">
              <Link
                href="/apps/email/starred/"
                className={`d-flex align-items-center text-decoration-none ${
                  pathname === "/apps/email/starred/" ? "active" : ""
                }`}
              >
                <MaterialSymbol
                  icon="star_rate"
                  size={18}
                  className="position-relative top-1 me-2"
                />
                <span className="fw-medium">Started</span>
              </Link>
            </li>

            <li className="mb-3">
              <Link
                href="/apps/email/snoozed/"
                className={`d-flex align-items-center text-decoration-none ${
                  pathname === "/apps/email/snoozed/" ? "active" : ""
                }`}
              >
                <MaterialSymbol
                  icon="alarm"
                  size={18}
                  className="position-relative top-1 me-2"
                />
                <span className="fw-medium">Snoozed</span>
              </Link>
            </li>

            <li className="mb-3">
              <Link
                href="/apps/email/sent-mail/"
                className={`d-flex align-items-center text-decoration-none ${
                  pathname === "/apps/email/sent-mail/" ? "active" : ""
                }`}
              >
                <MaterialSymbol
                  icon="send"
                  size={18}
                  className="position-relative top-1 me-2"
                />
                <span className="fw-medium">Sent</span>
              </Link>
            </li>

            <li className="mb-3">
              <Link
                href="/apps/email/draft/"
                className={`d-flex align-items-center text-decoration-none ${
                  pathname === "/apps/email/draft/" ? "active" : ""
                }`}
              >
                <MaterialSymbol
                  icon="draft"
                  size={18}
                  className="position-relative top-1 me-2"
                />
                <span className="fw-medium">Drafts</span>
              </Link>
            </li>

            <li className="mb-3">
              <Link
                href="/apps/email/important/"
                className={`d-flex align-items-center text-decoration-none ${
                  pathname === "/apps/email/important/" ? "active" : ""
                }`}
              >
                <MaterialSymbol
                  icon="bookmark"
                  size={18}
                  className="position-relative top-1 me-2"
                />
                <span className="fw-medium">Important</span>
              </Link>
            </li>

            <li className="mb-3">
              <Link
                href="#"
                className={`d-flex align-items-center text-decoration-none ${
                  pathname === "#" ? "active" : ""
                }`}
              >
                <MaterialSymbol
                  icon="auto_read_pause"
                  size={18}
                  className="position-relative top-1 me-2"
                />
                <span className="fw-medium">Chats</span>
              </Link>
            </li>

            <li className="mb-3">
              <Link
                href="#"
                className={`d-flex align-items-center text-decoration-none ${
                  pathname === "#" ? "active" : ""
                }`}
              >
                <MaterialSymbol
                  icon="schedule_send"
                  size={18}
                  className="position-relative top-1 me-2"
                />
                <span className="fw-medium">Scheduled</span>
              </Link>
            </li>

            <li className="mb-3">
              <Link
                href="#"
                className={`d-flex align-items-center text-decoration-none ${
                  pathname === "#" ? "active" : ""
                }`}
              >
                <MaterialSymbol
                  icon="live_help"
                  size={18}
                  className="position-relative top-1 me-2"
                />
                <span className="fw-medium">Spam</span>
              </Link>
            </li>

            <li className="mb-3">
              <Link
                href="#"
                className={`d-flex align-items-center text-decoration-none ${
                  pathname === "#" ? "active" : ""
                }`}
              >
                <MaterialSymbol
                  icon="delete"
                  size={18}
                  className="position-relative top-1 me-2"
                />
                <span className="fw-medium">Trash</span>
              </Link>
            </li>

            <li className="mb-3">
              <Link
                href="#"
                className="d-flex align-items-center text-decoration-none"
              >
                <MaterialSymbol
                  icon="account_circle"
                  size={18}
                  className="position-relative top-1 me-2"
                />
                <span className="fw-medium">Personal</span>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="d-flex align-items-center text-decoration-none"
              >
                <MaterialSymbol
                  icon="trip"
                  size={18}
                  className="position-relative top-1 me-2"
                />
                <span className="fw-medium">Company</span>
              </Link>
            </li>
          </ul>

          <button className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg">
            <span className="py-sm-1 d-block">
              <i className="ri-add-line d-none d-sm-inline-block"></i>
              <span>Add New Label</span>
            </span>
          </button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Sidebar;
