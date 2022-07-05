import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Panel from "../../../shared/components/Panel";
import getTooltipStyles from "../../../shared/helpers";

const getRandomArbitrary = (minValue, maxValue) => {
    const ratio = maxValue - minValue + minValue;
    return Math.random() * ratio;
};

const generateRandomData = (dataLength, minDeviationValue, maxDeviationValue, minRange, maxRange) => {
    const rangeFactor = (maxRange - minRange) / dataLength;

    return Array.from({ length: dataLength }, (v, k) => ({
        name: k,
        point: k * rangeFactor + getRandomArbitrary(minDeviationValue, maxDeviationValue),
        amt: 2000,
    }));
};

const data = generateRandomData(100, -2000, 2000, 300, 6000);

const tickFormer = tick => `${tick / 1000}k`;

const UserChart = () => {
    const { t } = useTranslation("common");

    return (
        <>
            <div className="blurMe">
                <Panel className="borrderr " lg={6} xl={9} md={12} title="Downline Growth" subhead="">
                    <div>
                        <ResponsiveContainer height={195} className="dashboard__active-users-chart ">
                            <LineChart height={195} data={data}>
                                <YAxis tickLine={false} tickFormatter={tickFormer} interval="preserveStartEnd" width={50} />
                                <XAxis hide padding={{ left: 30, right: 30 }} />
                                <CartesianGrid vertical={false} />
                                <Tooltip {...getTooltipStyles("dark", "defaultItems")} />
                                <Line type="linear" dataKey="point" dot={false} stroke="#b8e986" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Panel>
            </div>
            <div>
                <p className="middleText">Comming Soon</p>
            </div>
        </>
    );
};

UserChart.propTypes = {};

export default UserChart;
