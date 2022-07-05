import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Button, ButtonToolbar } from "reactstrap";
import { useWeb3Context } from "../../../../hooks";
import { createPlanet, compoundAll, claimAll, compoundReward, cashoutReward } from "../../../../store/slices/planet-thunk";
import { IReduxState } from "../../../../store/slices/state.interface";
import { IPendingTxn } from "../../../../store/slices/pending-txns-slice";
import TxModal from "../../../BloomBox/TxModal";
import "./bloomButton.scss";

interface IBloomButtonProps {
    action: string;
}

function BloomButton({ action }: IBloomButtonProps) {
    const [open, setOpen] = useState(false);
    const { provider, address, chainID, checkWrongNetwork } = useWeb3Context();
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const planetId = "1";

    let timerComponent;

    let buttonText = "";
    let className = "bloom-button";
    let clickFunc = () => {};
    let filter = "";

    if (action == "compound") {
        buttonText = "Pollinate";
        className = "bloom-button";
    } else if (action == "claim") {
        buttonText = "Claim";
        className = "bloom-button";
    } else if (action == "check") {
        buttonText = "Check";
        className = "bloom-button";
    } else if (action == "deposit") {
        buttonText = "Deposit";
        className = "bloom-button";
    } else if (action == "upgrade") {
        buttonText = "Upgrade";
        className = "bloom-button";
    } else if (action == "mint") {
        buttonText = "mint";
        className = "bloom-button";
    }

    return (
        <>
            <ButtonToolbar className="button-toolbar">
                <Button className="buttonStyle" color="primary" type="submit" onClick={clickFunc}>
                    {buttonText}
                </Button>
            </ButtonToolbar>
        </>
    );
}
export default BloomButton;
