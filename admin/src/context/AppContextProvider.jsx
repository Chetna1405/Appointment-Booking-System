import { AppContext } from "./AppContext.jsx"
import PropTypes from "prop-types"
const AppContextProvider = (props) => {
    const value = {

    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children is a valid React node and required
};
export default AppContextProvider