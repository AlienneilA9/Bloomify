import React from "react";
import { Col, Container, Row } from "reactstrap";
import MatTable from "./components/MatTable";

const MaterialTable = () => (
    <Container className="airdropcontainer">
        <Row className="height100">
            <MatTable />
        </Row>
    </Container>
);

export default MaterialTable;
