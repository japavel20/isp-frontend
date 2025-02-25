"use client";

import React from "react";
import "react-material-symbols/rounded";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const SoftRoundedPillBadges = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <h4 className="fs-18 mb-4">Soft Rounded Pill Badges</h4>

          <Stack direction="horizontal" gap={2}>
            <Badge
              bg="primary"
              className="bg-opacity-10 bg-primary py-1 px-2 text-primary rounded-pill fw-medium fs-12"
            >
              Primary
            </Badge>

            <Badge
              bg="secondary"
              className="bg-opacity-10 bg-secondary py-1 px-2 text-secondary rounded-pill fw-medium fs-12"
            >
              Secondary
            </Badge>

            <Badge
              bg="success"
              className="bg-opacity-10 bg-success py-1 px-2 text-secondary rounded-pill fw-medium fs-12"
            >
              Success
            </Badge>

            <Badge
              bg="danger"
              className="bg-opacity-10 bg-danger py-1 px-2 text-secondary rounded-pill fw-medium fs-12"
            >
              Danger
            </Badge>

            <Badge
              bg="warning"
              text="dark"
              className="bg-opacity-10 bg-warning py-1 px-2 text-secondary rounded-pill fw-medium fs-12"
            >
              Warning
            </Badge>

            <Badge
              bg="info"
              className="bg-opacity-10 bg-info py-1 px-2 text-secondary rounded-pill fw-medium fs-12"
            >
              Info
            </Badge>

            <Badge
              bg="light"
              text="dark"
              className="bg-opacity-10 bg-light py-1 px-2 text-secondary rounded-pill fw-medium fs-12"
            >
              Light
            </Badge>

            <Badge
              bg="dark"
              className="bg-opacity-10 bg-dark py-1 px-2 text-secondary rounded-pill fw-medium fs-12"
            >
              Dark
            </Badge>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
};

export default SoftRoundedPillBadges;
