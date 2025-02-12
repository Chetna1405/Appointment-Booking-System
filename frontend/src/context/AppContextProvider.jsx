import { AppContext } from "./AppContext";
import { doctors } from "../assets/assets";
import PropTypes from "prop-types";
const AppContextProvider = ({ children }) => {
    const value = {
        doctors
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


export default AppContextProvider