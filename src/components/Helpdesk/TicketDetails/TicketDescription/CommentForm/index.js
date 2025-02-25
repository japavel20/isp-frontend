"use client";

import React from "react";
import Form from "react-bootstrap/Form";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
});

const CommentForm = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label className="label text-secondary fs-14">
            Post A Reply
          </Form.Label>

          <RichTextEditor
            id="rte"
            controls={[
              ["bold", "italic", "underline", "link", "image"],
              ["unorderedList", "h1", "h2", "h3"],
              ["sup", "sub"],
              ["alignLeft", "alignCenter", "alignRight"],
            ]}
            style={{
              minHeight: "285px",
            }}
          />
        </Form.Group>

        <Form.Group className="d-flex flex-wrap gap-3">
          <button
            type="submit"
            className="btn btn-danger fw-medium fs-16 py-2 px-4"
          >
            <span className="py-1 d-inline-block text-white">
              Save As Draft
            </span>
          </button>

          <button
            type="submit"
            className="btn btn-primary fw-medium fs-16 py-2 px-4"
          >
            <div className="d-flex align-items-center">
              <MaterialSymbol icon="send" size={20} className="me-2 text-white" />
              
              <span className="py-1 d-inline-block text-white">Submit Now</span>
            </div>
          </button>
        </Form.Group>
      </Form>
    </>
  );
};

export default CommentForm;
