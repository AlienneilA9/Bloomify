import React from "react";
import { Col, Container, Row, Card, CardBody } from "reactstrap";
import BCH from "./components/BCH";
import BTC from "./components/BTC";
import BuyBTC from "./components/BuyBTC";
import ETH from "./components/ETH";
import PlaceOrder from "./components/PlaceOrder";
import SellBTC from "./components/SellBTC";
import XRP from "./components/XRP";

export interface ITop10Data {
    id: number;
    name: string;
    teamMemebers: number;
    airdropsSent: number;
}

function Swap() {
    return (
        <>
            <Container className="teamContainer">
                <Row className="teamRow teamBox">
                    <BTC></BTC>
                    <ETH></ETH>
                    <XRP></XRP>
                    <BCH></BCH>
                </Row>
                <Row className="teamRow teamBox">
                    <PlaceOrder></PlaceOrder>
                </Row>
                <Row className="teamRow teamBox"></Row>
            </Container>
        </>
    );
}

export default Swap;
