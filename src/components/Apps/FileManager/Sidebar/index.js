"use client";

import React from "react";
import Link from "next/link"; 
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <Card className="bg-white border-0 rounded-3 rounded-bottom-0">
        <Card.Body className="p-4">
          <Form className="position-relative default-src-form mb-4 pb-1">
            <Form.Control
              type="text"
              className="rounded-1"
              placeholder="Search"
            />
 
            <MaterialSymbol 
              icon="search" 
              size={18} 
              className='position-absolute start-0 translate-middle-y' 
              style={{
                top: '20px'
              }}
            />
          </Form>

          <ul className="fm-sidebar-nav ps-0 mb-0 list-unstyled">
            <li className="mb-4">
              <Link
                href="/apps/file-manager/" 
                className={`d-flex align-items-center text-decoration-none justify-content-between ${
                  pathname === "/apps/file-manager/" ? "active" : ""
                }`}
              >
                <div className="d-flex align-items-center">
                  <MaterialSymbol 
                    icon="inbox" 
                    size={18} 
                    className='position-relative top-1 me-2' 
                  />
                  <span className="fw-semibold">My Drive</span>
                </div>
                <span>6</span>
              </Link>

              <ul className="mb-0 list-unstyled file-subdown">
                <li>
                  <Link 
                    href="/apps/file-manager/assets/"  
                    className={`text-decoration-none ${
                      pathname === "/apps/file-manager/assets/" ? "active" : ""
                    }`}
                  >
                    Assets
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/apps/file-manager/projects/" 
                    className={`text-decoration-none ${
                      pathname === "/apps/file-manager/projects/" ? "active" : ""
                    }`}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/apps/file-manager/personal/" 
                    className={`text-decoration-none ${
                      pathname === "/apps/file-manager/personal/" ? "active" : ""
                    }`}
                  >
                    Personal
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/apps/file-manager/applications/" 
                    className={`text-decoration-none ${
                      pathname === "/apps/file-manager/applications/" ? "active" : ""
                    }`}
                  >
                    Applications
                  </Link>
                </li>
              </ul>
            </li>

            <li className="mb-4">
              <Link
                href="/apps/file-manager/documents/"
                className={`d-flex align-items-center text-decoration-none ${
                  pathname === "/apps/file-manager/documents/" ? "active" : ""
                }`}
              >
                <MaterialSymbol 
                  icon="description" 
                  size={18} 
                  className='position-relative top-1 me-2 text-success' 
                />
                <span className="fw-medium">Documents</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link
                href="/apps/file-manager/media/"
                className={`d-flex align-items-center text-decoration-none ${
                  pathname === "/apps/file-manager/media/" ? "active" : ""
                }`}
              >
                <MaterialSymbol 
                  icon="perm_media" 
                  size={18} 
                  className='position-relative top-1 me-2 text-info' 
                />
                <span className="fw-medium">Media</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link
                href="/apps/file-manager/recents/"
                className={`d-flex align-items-center text-decoration-none ${
                  pathname === "/apps/file-manager/recents/" ? "active" : ""
                }`}
              >
                <MaterialSymbol 
                  icon="schedule" 
                  size={18} 
                  className='position-relative top-1 me-2 text-primary-div' 
                />
                <span className="fw-medium">Recents</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link
                href="/apps/file-manager/important/"
                className={`d-flex align-items-center text-decoration-none ${
                  pathname === "/apps/file-manager/important/" ? "active" : ""
                }`}
              >
                <MaterialSymbol 
                  icon="grade" 
                  size={18} 
                  className='position-relative top-1 me-2 text-warning' 
                />
                <span className="fw-medium">Important</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link
                href="/apps/file-manager/spam/"
                className={`d-flex align-items-center text-decoration-none justify-content-between ${
                  pathname === "/apps/file-manager/spam/" ? "active" : ""
                }`}
              >
                <div className="d-flex align-items-center">
                  <MaterialSymbol 
                    icon="report_gmailerrorred" 
                    size={18} 
                    className='position-relative top-1 me-2 text-primary' 
                  />
                  <span className="fw-medium">Spam</span>
                </div>
                <span>10</span>
              </Link>
            </li>

            <li>
              <Link
                href="/apps/file-manager/trash/"
                className={`d-flex align-items-center text-decoration-none justify-content-between ${
                  pathname === "/apps/file-manager/trash/" ? "active" : ""
                }`}
              >
                <div className="d-flex align-items-center">
                  <MaterialSymbol 
                    icon="delete" 
                    size={18} 
                    className='position-relative top-1 me-2 text-danger' 
                  />
                  <span className="fw-medium">Trash</span>
                </div>
                <span>15</span>
              </Link>
            </li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="bg-white border-0 rounded-3 rounded-top-0 border-top mb-4">
        <Card.Body className="p-4">
          <h4 className="fs-15">Storage Status</h4>
          <span className="fs-13 d-block mb-2">% 50 GB used of 100 GB</span>
          
          <ProgressBar 
            variant="primary" 
            now={50} 
            style={{
              height: '4px'
            }}
          /> 
        </Card.Body>
      </Card>
    </>
  );
};

export default Sidebar;
