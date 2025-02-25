"use client";

import React from "react";
import Form from 'react-bootstrap/Form';
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const SearchForm = () => {
  return (
    <>
      <Form className="position-relative table-src-form me-0">
        <Form.Control type="text" placeholder="Search here" />

        <MaterialSymbol icon="search" className="position-absolute top-50 start-0 translate-middle-y"/>
      </Form>
    </>
  );
};

export default SearchForm;
