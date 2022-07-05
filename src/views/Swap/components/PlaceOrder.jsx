import React from "react";
import { useTranslation } from "react-i18next";
import Panel from "../../shared/components/Panel";
import showResults from "../../shared/utils/showResults";
import BuyBTC from "./BuyBTC";
import SellBTC from "./SellBTC";
import "./components.scss";

const PlaceOrder = () => {
    const { t } = useTranslation("common");

    return (
        <Panel xl={6} lg={12} title="Trade $NCTR">
            <div className="dashboard__place-order">
                <BuyBTC onSubmit={showResults} />
                <SellBTC onSubmit={showResults} />
            </div>
        </Panel>
    );
};

export default PlaceOrder;
