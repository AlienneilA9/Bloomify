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

const ClaimCard = () => {
    const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);
    const app = useSelector<IReduxState, IAppSlice>(state => state.app);
    const isAccountLoading = useSelector<IReduxState, boolean>(state => state.account.loading);
    const account = useSelector<IReduxState, IAccountSlice>(state => state.account);
    return (
        <Col className="infoCol col2" md={12} xl={3} lg={6} xs={12}>
            <Card className="nodetiercontanern card2">
                <CardBody className="infoCardBody cardBody3">
                    <div className="contentWrapper">
                        <div className="headerWrapper">
                            <span className="headerText">Available ($NCTR)</span>
                        </div>
                        <div className="subheadContainer">
                            <span className="subheadText">1 $NCTR = 0.00 USDC.e</span>
                        </div>
                        <div className="valueWrapper">
                            <div className="availableRewardContainer">
                                <p className="dollarAvailable">
                                    {isAppLoading ? (
                                        <Skeleton width="100px" />
                                    ) : (
                                        `$${new Intl.NumberFormat("en-US").format(Math.floor((account.totalpending * app.mimPrice * app.marketPrice) / 10000))}`
                                    )}
                                </p>
                                <p className="headerText">{isAccountLoading ? <Skeleton width="100px" /> : `1000 NCTR`}</p>
                            </div>
                        </div>
                        <div className="buttonWrapper">
                            {" "}
                            <div className="buttonContainer">
                                <BloomButton action="claim" />
                            </div>
                            <div className="buttonContainer">
                                <BloomButton action="compound" />
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ClaimCard;
