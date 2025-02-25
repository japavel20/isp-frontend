"use client";

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Card from 'react-bootstrap/Card';

import dynamic from 'next/dynamic'
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const Editors = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <h4 className="fs-18 mb-4">Editors</h4>
          
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
        </Card.Body>
      </Card>
    </>
  )
}

export default Editors;