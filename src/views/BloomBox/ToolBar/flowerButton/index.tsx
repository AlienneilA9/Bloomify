import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Button, ButtonToolbar } from "reactstrap";
import { useWeb3Context } from "../../../../hooks";
import { createPlanet, compoundAll, claimAll, compoundReward, cashoutReward } from "../../../../store/slices/planet-thunk";
import { IReduxState } from "../../../../store/slices/state.interface";
import { IPendingTxn } from "../../../../store/slices/pending-txns-slice";
import TxModal from "../../TxModal";
import "./flowerButton.scss";
import Modal from "../../CreateModal/createModal";

interface IFlowerButtonProps {
    action: string;
}

function FlowerButton({ action }: IFlowerButtonProps) {
    const [openModal, setOpenModal] = useState(false);
    const { provider, address, chainID, checkWrongNetwork } = useWeb3Context();
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };
    const planetId = "1";
    const onCompoundReward = async () => {
        if (await checkWrongNetwork()) return;
        dispatch(compoundReward({ planetId, provider, address, networkID: chainID }));
    };
    const onClaimReward = async () => {
        if (await checkWrongNetwork()) return;
        dispatch(cashoutReward({ planetId, provider, address, networkID: chainID }));
    };

    let timerComponent;

    let buttonText = "";
    let className = "flower-button";
    let clickFunc = () => {};
    let filter = "";

    if (action == "compound") {
        buttonText = "Compound";
        timerComponent = <p>{buttonText}</p>;
        className = "flower-button";
        clickFunc = () => {
            onCompoundReward();
        };
    } else if (action == "claim") {
        buttonText = "Emergancy Claim";
        className = "flower-button";
        clickFunc = () => {
            onClaimReward();
        };
    } else if (action == "rename") {
        buttonText = "Rename";
        className = "flower-button";
        clickFunc = () => {
            onClaimReward();
        };
    } else if (action == "aoost") {
        buttonText = "Boost";
        className = "flower-button";
        clickFunc = () => {
            onClaimReward();
        };
    } else if (action == "add") {
        buttonText = "Add";
        className = "flower-button";
        clickFunc = () => {
            onClaimReward();
        };
    } else if (action == "transfer") {
        buttonText = "Transfer";
        className = "flower-button";
        clickFunc = () => {
            onClaimReward();
        };
    } else if (action == "create") {
        buttonText = "Create";
        className = "flower-button";
        clickFunc = () => {
            handleOpen();
        };
    }

    const pendingTransactions = useSelector<IReduxState, IPendingTxn[]>(state => {
        return state.pendingTransactions;
    });

    if (pendingTransactions && pendingTransactions.length > 0) {
        buttonText = `${pendingTransactions.length} Tx Pending `;
        clickFunc = () => {};
    }

    return (
        <>
            <ButtonToolbar className="button-toolbar">
                <Button className="buttonStyle" color="primary" type="submit" onClick={clickFunc}>
                    {buttonText}
                </Button>
            </ButtonToolbar>
            {/* <TxModal open={handleOpen} handleClose={handleClose} filter={filter} planetId={planetId} /> */}
            {openModal && <Modal closeModal={setOpenModal} />}
        </>
    );
}
export default FlowerButton;
