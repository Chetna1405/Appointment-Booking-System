import { DoctorContext } from "./DoctorContext.jsx"
import PropTypes from "prop-types"
const DoctorContextProvider = (props) => {
    const value = {

    }
    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}
DoctorContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children is a valid React node and required
};
export default DoctorContextProvider