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

const DepositCard = () => {
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
        <Col className="infoCol col2" md={12} xl={3} lg={6} xs={12}>
            <Card className="nodetiercontanern card2">
                <CardBody className="infoCardBody cardBody3">
                    <div className="contentWrapper">
                        <div>
                            <div className="headerWrapper">
                                <span className="headerText">Deposit</span>
                            </div>
                        </div>
                        <div className="depositWrapper">
                            <div className="labelWrapper">
                                <label className="depositLabel subheadText">VALUE: </label>
                                <label className="depositLabel subheadText">USDC.e : </label>
                            </div>
                            <div className="setFlex1 sto">
                                <input className="getDownlineWallet osm input1" type="text" name="name" />
                                <input className="getDownlineWallet dvs" type="submit" value="Max" />
                            </div>
                        </div>
                        <div className="depositWrapper">
                            <div className="labelWrapper">
                                <label className="depositLabel subheadText">COMPANION </label>{" "}
                            </div>
                            <CreatableSelect
                                isClearable
                                onChange={value => handleChange("roles", value ? value : "")}
                                onInputChange={value => handleInputChange("roles", value)}
                                options={roles}
                                value={roleValue}
                                className="widthfull"
                                theme={customStyles}
                                menuPortalTarget={document.body}
                                styles={customStyles}
                            />
                        </div>{" "}
                        <div className="buttonWrapper">
                            <div className="buttonContainer" onClick={handleClick}>
                                <BloomButton action="deposit" />
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};

export default DepositCard;
