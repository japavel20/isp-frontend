"use client";

import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const TicketsResolved = () => {
  const [Chart, setChart] = useState();
  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  const series = [
    {
      name: "Tickets Resolved",
      data: [35, 70, 35, 65, 45, 98, 80],
    },
  ];

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    colors: ["#605DFF"],
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.9,
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      labels: {
        show: false,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      show: false,
      max: 100,
      min: 0,
      labels: {
        show: true,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: true,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: true,
        color: "#ECEEF2",
      },
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    legend: {
      show: true,
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
        radius: 2,
      },
    },
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-3">
          <span className="mb-1 d-block">Tickets Resolved</span>

          <h3 className="mb-0 fs-20">2.4k</h3>

          <div
            style={{
              marginBottom: "-15px",
              marginLeft: "-10px",
              marginRight: "-10px",
              marginTop: "-7px",
            }}
          >
            {Chart && (
              <Chart
                options={options}
                series={series}
                type="area"
                height={130}
              />
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <span className="fs-12">This Month</span>
            <MaterialSymbol
              icon="trending_up"
              size={24}
              className="text-success"
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default TicketsResolved;
