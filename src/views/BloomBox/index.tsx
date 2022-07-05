import { useSelector } from "react-redux";
import { Grid, Zoom } from "@material-ui/core";
import "./bloombox.scss";
import { Skeleton } from "@material-ui/lab";
import { IReduxState } from "../../store/slices/state.interface";
import { IFlowerInfoDetails } from "../../store/slices/account-slice";
import ToolBar from "./ToolBar";
import DFCard from "./ApeCard";
import { IAppSlice } from "../../store/slices/app-slice";
import { IAccountSlice } from "../../store/slices/account-slice";
import { trim } from "../../helpers";
import { Col, Container, Row, Card, CardBody } from "reactstrap";
import FlowerCard from "./FlowerCard";
import "../../views/Bloomify/bloomify.scss";
import BudgetStatistic from "./components/BudgetStatistic";
import FlowerButton from "./ToolBar/flowerButton";

function BloomBox() {
    const planets = useSelector<IReduxState, IFlowerInfoDetails[]>(state => {
        return state.account.planets;
    });

    const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);
    const app = useSelector<IReduxState, IAppSlice>(state => state.app);

    const isAccountLoading = useSelector<IReduxState, boolean>(state => state.account.loading);
    const account = useSelector<IReduxState, IAccountSlice>(state => state.account);

    const myBalance = useSelector<IReduxState, string>(state => {
        return state.account.balances && state.account.balances.apeu;
    });
    const myBalance1 = parseInt(myBalance, 10); //1234

    const limitTransferIn = useSelector<IReduxState, string>(state => {
        return state.account.limits && state.account.limits.transferIn;
    });

    const limitTransferOut = useSelector<IReduxState, string>(state => {
        return state.account.limits && state.account.limits.transferOut;
    });

    const limitSellOut = useSelector<IReduxState, string>(state => {
        return state.account.limits && state.account.limits.sellOut;
    });

    const clickFunc = () => {
        window.open(`https://traderjoexyz.com/trade?outputCurrency=0x0adD05dC5eF7c622CeD36aF14cDF1ca360AEae86#/`, "_blank");
    };

    const clickChart = () => {
        window.open(`https://dexscreener.com/avalanche/0x9aa1c6a4804CC6be836C084aB0Dc8f8FCeC15b7D`, "_blank");
    };

    const clickFuncbook = () => {
        window.open(`https://darkforestmoney.gitbook.io/dark-forest/`, "_blank");
    };

    return (
        <>
            <Container className="teamContainer">
                <Row className="teamRow teamBox">
                    <Col className="infoCol col2" md={12} xl={3} lg={6} xs={12}>
                        <Card className="nodetiercontanern card2">
                            <CardBody className="infoCardBody cardBody3">
                                <div className="contentWrapper contentWrapper3">
                                    <div className="headerWrapper">
                                        <span className="headerText">Pending Rewards</span>
                                    </div>
                                    <div className="cardContainerWrapper">
                                        <div className="cardValueWrapper">
                                            <div className="cardValueContainer">
                                                <p className="headerText">
                                                    {isAccountLoading ? (
                                                        <Skeleton width="100px" />
                                                    ) : (
                                                        `${new Intl.NumberFormat("en-US").format(Math.floor(account.totalpending))} NCTR`
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="tableWrapper">
                                            <div className="rowWrapper">
                                                <p className="subheadText">Total Claimed</p>
                                                <p className="subheadText">0 NCTR</p>
                                            </div>
                                            <div className="rowWrapper">
                                                <p className="subheadText">Total Claimed $</p>
                                                <p className="subheadText">$0</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flowerButtonWrapper">
                                        <div className="flowerButtonContainer">
                                            <FlowerButton action="claim" />
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="infoCol col2" md={12} xl={3} lg={6} xs={12}>
                        <Card className="nodetiercontanern card2">
                            <CardBody className="infoCardBody cardBody3">
                                <div className="contentWrapper contentWrapper3">
                                    <div className="headerWrapper">
                                        <span className="headerText">Total Flowers</span>
                                    </div>
                                    <div className="cardValueWrapper">
                                        <div className="cardValueContainer">
                                            <p className="headerText">{isAppLoading ? <Skeleton width="100px" /> : `${new Intl.NumberFormat("en-US").format(app.totalPlanets)}`}</p>
                                            <p className="subheadText">/FLOWERS</p>
                                        </div>
                                    </div>
                                    <div className="tableWrapper">
                                        <div className="rowWrapper">
                                            <p className="subheadText">TVL</p>
                                            <p className="subheadText">
                                                {isAppLoading ? (
                                                    <Skeleton width="100px" />
                                                ) : (
                                                    `$${new Intl.NumberFormat("en-US").format(
                                                        Math.floor(Math.floor((app.totalValueLocked * app.mimPrice * app.marketPrice) / 10000)) / 4,
                                                    )}`
                                                )}
                                            </p>
                                        </div>
                                        <div className="rowWrapper">
                                            <p className="subheadText">Emissions Daily</p>
                                            <p className="subheadText">
                                                {isAppLoading ? (
                                                    <Skeleton width="100px" />
                                                ) : (
                                                    `$${new Intl.NumberFormat("en-US").format(
                                                        Math.floor((app.calculateTotalDailyEmission * app.mimPrice * app.marketPrice) / 10000),
                                                    )}`
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flowerButtonWrapper">
                                        <div className="flowerButtonContainer">
                                            <FlowerButton action="create" />
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="infoCol col2" md={12} xl={3} lg={6} xs={12}>
                        <Card className="nodetiercontanern card2">
                            <CardBody className="infoCardBody cardBody3">
                                <div className="contentWrapper contentWrapper3">
                                    <div className="headerWrapper">
                                        <span className="headerText">$NCTR Price</span>
                                    </div>
                                    <div className="cardValueWrapper">
                                        <div className="cardValueContainer">
                                            <p className="subheadText">$</p>
                                            <p className="headerText">{isAppLoading ? <Skeleton width="100px" /> : `${trim(app.marketPrice / 10000, 7)}`}</p>
                                            <p className="subheadText"> /USD</p>
                                        </div>
                                    </div>
                                    <div className="tableWrapper">
                                        <div className="rowWrapper">
                                            <p className="subheadText">TVL</p>
                                            <p className="subheadText">
                                                {isAppLoading ? (
                                                    <Skeleton width="100px" />
                                                ) : (
                                                    `${new Intl.NumberFormat("en-US").format(Math.round(Math.floor(app.totalValueLocked) / 2000000000))} NCTR`
                                                )}
                                            </p>
                                        </div>
                                        <div className="rowWrapper">
                                            <p className="subheadText">Burned</p>
                                            <p className="subheadText">
                                                {isAppLoading ? (
                                                    <Skeleton width="250px" />
                                                ) : (
                                                    `${new Intl.NumberFormat("en-US").format(Math.floor(Math.round(Math.floor(app.burnedFromRenaming) / 10000000)))} NCTR`
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flowerButtonWrapper">
                                        <div className="flowerButtonContainer">
                                            <FlowerButton action="chart" />
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {/* BUTTONS */}
                <Row className="teamRow teamBox">
                    <BudgetStatistic></BudgetStatistic>
                    <BudgetStatistic></BudgetStatistic>
                    {planets == undefined ? <></> : <ToolBar planets={planets} />}
                </Row>
                {/* BUTTONS END */}

                {/* FLOWERS */}
                <Row className="teamRow teamBox heightNode">{planets == undefined ? <Skeleton width="100px" /> : planets.map(planet => <FlowerCard planet={planet} />)}</Row>
            </Container>
            {/* FLOWERS END */}
        </>
    );
}

export default BloomBox;
