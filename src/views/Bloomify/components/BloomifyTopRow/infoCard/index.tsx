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
    { value: "0x000", label: "Marketing" },
];

const InfoCard = () => {
    const customStyles = {
        control: (base: any, state: any) => ({
            ...base,
            display: "flex",
            backgroundColor: "#333 !important",
            color: "white",
            // match with the menu
            borderRadius: "3px 3px 0 0",
            // Overwrittes the different states of border
        }),
        menu: (base: any) => ({
            ...base,
            // override border radius to match the box
            borderRadius: 0,
            backgroundColor: "#333",
            // kill the gap
            marginTop: 0,
            color: "white",
        }),
        menuList: (base: any) => ({
            ...base,
            backgroundColor: "#333",
            // kill the white space on first and last option
            padding: 0,
            color: "white",
        }),

        option: (base: any) => ({
            ...base,
            color: "white",
            backgroundColor: "#333",
            // kill the white space on first and last option
            padding: "5%",
            "&:hover": {
                // Overwrittes the different states of border
                backgroundColor: "#7611f7",
            },
        }),
        valueContainer: (base: any) => ({
            ...base,
            color: "white",
            // kill the white space on first and last option
        }),
        singleValue: (base: any) => ({
            ...base,
            color: "white",
            // kill the white space on first and last option
        }),
        input: (base: any) => ({
            ...base,
            color: "white",
            boxShadow: "none",
            border: "0%",
            // kill the white space on first and last option
        }),
    };

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
                if (value == null) {
                    console.log("break" + value.value);
                    break;
                } else {
                    setRoleValue(value);
                    setName(value.value);
                    console.log("value :" + value.value);
                    break;
                }

            default:
                break;
        }
    };

    const handleInputChange = (inputValue: any, actionMeta: any) => {
        console.group("Input Changed");
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };

    const handleClick = () => {
        const abc = roleValue;
        return "";
    };

    return (
        <Col className="infoCol1 col3" md={12} xl={4} lg={5} xs={12}>
            <Card className="infoCard1 card3">
                <CardBody className="infoCardBody1 cardBody3">
                    <div className="contentWrapper contentWrapper3">
                        <div>
                            <div className="headerWrapper1">
                                <span className="headerText">Your Info</span>
                            </div>
                        </div>
                        <div className="tableWrapper">
                            <div className="rowWrapper">
                                <p className="subheadText">Deposited</p>
                                <p className="subheadText">0 $NCTR</p>
                            </div>
                            <div className="rowWrapper">
                                <p className="subheadText">NDV </p>
                                <p className="subheadText">0</p>
                            </div>
                            <div className="rowWrapper">
                                <p className="subheadText">Referral Rewards</p>
                                <p className="subheadText">0 $NCTR</p>
                            </div>
                            <div className="rowWrapper">
                                <p className="subheadText"> Max Payout </p>
                                <div>
                                    <p className="subheadText">0 $NCTR</p>
                                </div>
                            </div>
                            <div className="rowWrapper">
                                <p className="subheadText">Claimed </p>
                                <p className="subheadText">0 $NCTR</p>
                            </div>
                            <div className="rowWrapper">
                                <p className="subheadText">Team </p>
                                <p className="subheadText">0</p>
                            </div>
                        </div>
                        <div className="buttonWrapper">
                            <div className="buttonContainer">
                                <BloomButton action="upgrade" />
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};

export default InfoCard;
