import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col } from "reactstrap";
import "../../../../TeamManagement/teamManagement.scss";
import { Skeleton } from "@material-ui/lab";
import "../../../bloomify.scss";
import BloomButton from "../../bloomButton";
import { useSelector } from "react-redux";
import { IReduxState } from "../../../../../store/slices/state.interface";
import { IAppSlice } from "../../../../../store/slices/app-slice";
import { IAccountSlice } from "../../../../../store/slices/account-slice";
import CreatableSelect from "react-select/creatable";

const roles = [
    { value: "abac", label: "Jeremy" },
    { value: "1", label: "Pelton" },
    { value: "2", label: "Marketing" },
];

const CheckCard = () => {
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
                console.log("vale : " + value.value);
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
        <Col className="infoCol col2" md={12} xl={3} lg={6} xs={12}>
            <Card className="nodetiercontanern card2">
                <CardBody className="infoCardBody cardBody3">
                    <div className="contentWrapper">
                        <div className="headerWrapper">
                            <span className="headerText">Check Out Bloomer</span>
                        </div>
                        <div className="depositWrapper">
                            <div className="labelWrapper">
                                <label className="depositLabel subheadText">BLOOMER: </label>
                            </div>
                            <input className="input1 getDownlineWallet" type="text" />
                        </div>
                        <div className="tableWrapper">
                            <div className="rowWrapper">
                                <p className="subheadText">Team</p>
                                <p className="subheadText">0</p>
                            </div>
                            <div className="rowWrapper">
                                <p className="subheadText">Airdrops Sent </p>
                                <p className="subheadText">0 $NCTR</p>
                            </div>
                        </div>
                        <div className="buttonWrapper">
                            <div className="buttonContainer">
                                <BloomButton action="check" />
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CheckCard;
