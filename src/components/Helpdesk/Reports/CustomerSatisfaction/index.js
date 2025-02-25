"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const CustomerSatisfaction = () => {
  const [Chart, setChart] = useState();
  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  const series = [50, 15, 75, 50];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: ["Highly Satisfied", "Satisfied", "Low Satisfied", "Unsatisfied"],
    colors: ["#AD63F6", "#C2CDFF", "#FFAA72", "#0dcaf0"],
    stroke: {
      width: 1,
      show: true,
      colors: ["transparent"],
    },
    legend: {
      show: false,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        width: 9,
        height: 9,
        offsetX: -2,
        offsetY: -0.5,
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "73%",
          labels: {
            show: false,
            name: {
              color: "#64748B",
            },
            value: {
              show: true,
              color: "#3A4252",
              fontSize: "28px",
              fontWeight: "600",
            },
            total: {
              show: true,
              color: "#64748B",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
  };

  return (
    <>
      <Card className="bg-primary border-0 rounded-3 position-relative mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
            <h3 className="mb-0 text-white">Customer Satisfaction</h3>

            <Form.Select
              className="month-select form-control p-0 h-auto border-0 w-90 text-white bg-transparent"
              style={{
                backgroundPosition: "right 0 center",
                backgroundImage: `url(/images/down-white.svg)`,
              }}
              aria-label="Default select example"
            >
              <option value="0" className="text-secondary">
                Select
              </option>
              <option value="1" className="text-secondary">
                Last Month
              </option>
              <option value="2" className="text-secondary">
                Last Year
              </option>
            </Form.Select>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            {Chart && (
              <Chart
                options={options}
                series={series}
                type="donut"
                height={175}
              />
            )}
       
            <Image
              src="/images/satisfaction.png"
              alt="satisfaction"
              width={99}
              height={133}
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CustomerSatisfaction;
