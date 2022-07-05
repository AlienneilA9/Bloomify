import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import { Button, ButtonToolbar } from "reactstrap";

const BuyBTC = ({ onSubmit }) => (
    <div className="dashboard__place-order-form">
        <h5 className="bold-text textheight">BUY $NCTR</h5>
        <Form onSubmit={onSubmit} className="formContainer">
            {({ handleSubmit }) => (
                <form className="form form--horizontal" onSubmit={handleSubmit}>
                    <div className="form__form-group12">
                        <div className="valuesPad">
                            <span className="form__form-group-label subhead">$USDC.e</span>
                            <span className="form__form-group-label subhead">Balance: 15 $USDC.e</span>
                        </div>
                        <div className="form__form-group-field1">
                            <Field name="price" component="input" type="text" placeholder="$USDC.e" className="input12" />
                            <input className="getDownlineWallet12" type="submit" value="Max" />
                        </div>
                    </div>
                    <div className="form__form-group">
                        <div className="valuesPad">
                            <span className="form__form-group-label subhead">$NCTR</span>
                            <span className="form__form-group-label subhead">Balance: 15 $NCTR</span>
                        </div>
                        <div className="form__form-group-field">
                            <Field name="amount" component="input" type="text" placeholder="$NCTR" className="input12 makeRadius" />
                        </div>
                    </div>
                    <div>
                        <h5 className="dashboard__place-order-form-subhead subhead">You will get 0 $NCTR</h5>
                    </div>
                    <ButtonToolbar className="form__button-toolbar12">
                        <Button color="primary" type="submit" className="swapButton">
                            SWAP
                        </Button>
                    </ButtonToolbar>
                </form>
            )}
        </Form>
    </div>
);

BuyBTC.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default BuyBTC;
