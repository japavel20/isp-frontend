"use client";

import React from "react";
import Card from "react-bootstrap/Card"; 
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const FullCalendarDemo = () => {
  return (
    <>
      <Card className="card bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className='full-calendar-box'>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView='dayGridMonth' 
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default FullCalendarDemo;
