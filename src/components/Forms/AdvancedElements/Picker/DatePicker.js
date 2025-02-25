"use client";

import React from "react";
import Form from 'react-bootstrap/Form';

const DatePicker = () => {
  return (
    <>
      <Form.Group className="mb-4">
        <label className="label text-secondary">Date Picker</label>

        <Form.Control type="date" className="h-60 text-dark" />
      </Form.Group>
    </>
  );
};

export default DatePicker;
