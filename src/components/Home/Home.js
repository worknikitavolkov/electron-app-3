import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Home = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
        <Row>
          <Col md = {4}>
            <Calendar onChange={onChange} value={value} />
          </Col>
          <Col md = {8}>
            У вас нет занятий на этот день
          </Col>
        </Row>
    </div>
  );
};
