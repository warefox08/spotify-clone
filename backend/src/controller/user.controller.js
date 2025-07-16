import { User } from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const currUserId = req.auth.userId
        const users = await User.find({clerkId: {$ne: currUserId}});

        res.status(200).json(users);

    } catch (error) {
        next (error);
    }
};