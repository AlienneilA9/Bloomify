import { useSelector } from "react-redux";
import { Grid, Zoom } from "@material-ui/core";
import { trim } from "../../helpers";
import { Skeleton } from "@material-ui/lab";
import { IReduxState } from "../../store/slices/state.interface";
import { IAppSlice } from "../../store/slices/app-slice";
import { IAccountSlice } from "../../store/slices/account-slice";
import { Col, Container, Row, Card, CardBody } from "reactstrap";
import "./bloomify.scss";
import BloomButton from "./components/bloomButton";
import { Form, Field } from "react-final-form";
import t1 from "../../assets/bloomNFT/1.png";
import t2 from "../../assets/bloomNFT/2.png";
import t3 from "../../assets/bloomNFT/3.png";
import t4 from "../../assets/bloomNFT/4.png";
import t5 from "../../assets/bloomNFT/5.png";
import t6 from "../../assets/bloomNFT/6.png";
import CreatableSelect from "react-select/creatable";
import { useState } from "react";
import ClaimCard from "./components/BloomifyTopRow/claimCard";
import DepositCard from "./components/BloomifyTopRow/depositCard";
import CheckCard from "./components/BloomifyTopRow/checkCard";
import MintBloom from "../Mint/components/mintBloom";
import InfoCard from "./components/BloomifyTopRow/infoCard";
import MaterialTable from "./components/materialTable";

const tierImg = [t1, t2, t3, t4, t5, t6];
const roles = [
    { value: "abac", label: "Jeremy" },
    { value: "0x000", label: "Pelton" },
    { value: "0x000", label: "Marketing" },
];

const customStyle = {};

function Bloomify() {
    const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);
    const app = useSelector<IReduxState, IAppSlice>(state => state.app);
    const isAccountLoading = useSelector<IReduxState, boolean>(state => state.account.loading);
    const account = useSelector<IReduxState, IAccountSlice>(state => state.account);
    const [roleValue, setRoleValue] = useState<string>("");

    const [quantity, setQuantity] = useState<string>("");
    const [name, setName] = useState<string>("");

    const handleChange = (field: any, value: any) => {
        switch (field) {
            case "roles":
                setRoleValue(value);
                setName(value.value);
                console.log("123" + value.value);
                break;

            default:
                break;
        }
    };

    const handleClick = () => {
        const abc = roleValue;
        return "";
    };

    return (
        <>
            <Container className="teamContainer">
                <Row className="teamRow teamBox">
                    <ClaimCard />
                    <DepositCard />
                    <CheckCard />
                </Row>
                <Row className="teamRow teamBox">
                    <InfoCard></InfoCard>
                    <Col className="infoCol1" md={6} xl={8} lg={7} xs={12}>
                        <MintBloom nftName="bloom"></MintBloom>
                    </Col>
                </Row>
                <Row className="teamRow teamBox">
                    <MaterialTable></MaterialTable>
                </Row>
            </Container>
        </>
    );
}

export default Bloomify;
