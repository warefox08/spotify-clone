import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    senderId: {
        type: String, 
        required: true
    },
    receiverId:{
        type: String, 
        required: true
    },
    content: {
        type: String, 
        require: true
    }
}, {timestamps: true});

export const Message = mongoose.model("Message", messageSchema)