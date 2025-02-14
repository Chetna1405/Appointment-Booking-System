import { AppContext } from "./AppContext";
import { doctors } from "../assets/assets";
import PropTypes from "prop-types";
const AppContextProvider = ({ children }) => {
    
    const currencySymbol = '$'
    const value = {
        doctors,
        currencySymbol
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