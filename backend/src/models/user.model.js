import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
    fullName: {
    type: String, 
    required: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    clerkId: {
        type: String,
        required: true,
        unique: true    // usually for username, email, anything that can only be used once ###
    },  // always need to keep track of that unique ID if using 3rd party user authenthication like clerk

    },
    {timestamps: true} //created@ or update@ for example "user is create at 2024..."
);

export const User = mongoose.model("user", userSchema);