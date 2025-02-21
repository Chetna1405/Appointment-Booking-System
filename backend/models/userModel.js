import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default:"data:image/jpeg;base64,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"
    },
    address: {
        type: Object,
        default: {
            line1: "",
            line2:""
        }
    },
    gender: {
        type: String,
        default:"Not Selected"
    },
    dob: {
        type: String,
        default:"Not Selected"
    },
    phone: {
        type: String,
        default:'0000000000'
    }
    

},{timestamps:true})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)
export default userModel;