import PropTypes from "prop-types";
import { AdminContext } from "./AdminContext";
import { useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"
const AdminContextProvider = (props) => {
    
    const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken') ? localStorage.getItem('adminToken') :"")
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const [doctors , setDoctors] = useState([])
    const getAllDoctors = async () => {
        try {
            const { data } = await axios.post(backendURL+'/api/admin/all-doctors' , {} , {headers : {adminToken}})
            if (data.success) {
                setDoctors(data.doctors);
                console.log(data.doctors);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const value = {
        adminToken, setAdminToken,
        backendURL , doctors , getAllDoctors
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

AdminContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children is a valid React node and required
};

export default AdminContextProvider