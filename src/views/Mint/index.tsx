import React from "react";
import { Col, Container, Row, Card, CardBody } from "reactstrap";
import MintBloom from "./components/mintBloom";
import MintDeer from "./components/mintDeer";
import { useSelector } from "react-redux";
import { IReduxState } from "../../store/slices/state.interface";
import { IAccountSlice } from "../../store/slices/account-slice";
import { IApprovals } from "../../store/slices/account-slice";
import ApproveButton from "./components/aproveButton";
import "./mint.scss";

function Mint() {
    let approvals = useSelector<IReduxState, IApprovals>(state => {
        return state.account.approvals && state.account.approvals;
    });

    let isApproved = false;

    if (approvals != null) {
        isApproved = approvals.isUsdcApproved;
    }

    return (
        <Container className="mint">
            <Row className="infoRowMint">
                {/* <Col className="infoCol1" md={6} xl={8} lg={7} xs={12}>
                    <MintDeer></MintDeer>
                </Col> */}
                <Col className="infoCol1" md={6} xl={8} lg={7} xs={12}>
                    <MintBloom nftName="bloom"></MintBloom>
                </Col>
            </Row>
        </Container>
    );
}

export default Mint;
