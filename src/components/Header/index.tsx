import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "../../assets/icons/hamburger.svg";
import BuyButton from "./buy-button";
import ConnectButton from "./connect-button";
import AddButton from "./add-button";
import { DRAWER_WIDTH, TRANSITION_DURATION, HEADER_WIDTH } from "../../constants/style";
import logo from "../../assets/logo.png";

interface IHeader {
    handleDrawerToggle: () => void;
    drawe: boolean;
}

const useStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: "100%",
        },
        justifyContent: "flex-end",
        alignItems: "center",
        background: "transparent",
        backdropFilter: "none",
        zIndex: 10,
    },
    topBar: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: TRANSITION_DURATION,
        }),
        marginLeft: HEADER_WIDTH,
    },
    topBarShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: TRANSITION_DURATION,
        }),
        marginLeft: 0,
    },
}));

function Header({ handleDrawerToggle, drawe }: IHeader) {
    const classes = useStyles();
    const isVerySmallScreen = useMediaQuery("(max-width: 400px)");

    return (
        <div className={`${classes.topBar} ${!drawe && classes.topBarShift}`}>
            <AppBar position="sticky" className={classes.appBar} elevation={0}>
                <Toolbar className="dapp-topbar">
                    <div>
                        <img className="logo-image" src={logo} />
                    </div>

                    <div onClick={handleDrawerToggle} className="dapp-topbar-slider-btn">
                        <img src={MenuIcon} alt="" />
                    </div>
                    <div>
                        {" "}
                        <h3 className="header-title">BLOOMIFY</h3>
                    </div>
                    <div className="dapp-topbar-btns-wrap">
                        <div className="toolbarbuttons">
                            <AddButton />
                            <BuyButton />
                            <ConnectButton />
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
