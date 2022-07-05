import React from "react";
import { Col, Container, Row, Card, CardBody } from "reactstrap";
import "./teamManagement.scss";
import TotalProducts from "./components/TotalProducts";
import ProductSales from "./components/ProductSales";
import FilterDownlines from "./components/FilterDownlines";
import MaterialTable from "./components/materialTable";
import UserChart from "./components/charts/UserChart";
import Reservations from "./components/Reservations";

export interface ITop10Data {
    id: number;
    name: string;
    teamMemebers: number;
    airdropsSent: number;
}

const data: ITop10Data = {
    id: 0,
    name: "Mon",
    teamMemebers: 5,
    airdropsSent: 10,
};

function TeamManagement() {
    return (
        <>
            <Container className="teamContainer">
                <Row className="teamRow teamBox">
                    <TotalProducts />
                    <TotalProducts />
                    <TotalProducts />
                    <TotalProducts />
                </Row>
                <Row className="teamRow teamBox">
                    <UserChart />
                </Row>
                <Row className="teamRow teamBox"></Row>
                <Row className="teamRow teamBox height600">
                    <FilterDownlines />
                    <MaterialTable></MaterialTable>
                </Row>
                <Row className="teamRow teamBox">
                    <Reservations></Reservations>
                </Row>
            </Container>
        </>
    );
}

export default TeamManagement;
