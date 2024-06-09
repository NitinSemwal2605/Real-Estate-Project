import mongoose, { Schema, Document } from "mongoose";
import { User } from "./user.model";  

// Create a buyer interface for type safety
export interface Buyer extends Document {
    userId: mongoose.Schema.Types.ObjectId;  // Reference to User
    message: [string];
    interestedIn: [string];
    calls: [string];
    status: string;
    senderId: mongoose.Schema.Types.ObjectId;  // Reference to User
}

// Create Buyer Schema of buyer interface type

const buyerSchema: Schema<Buyer> = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User ID is required"]
    },
    message: {
        type: [String],
        default: []
    },
    interestedIn: {
        type: [String],
        default: []
    },
    calls: {
        type: [String],
        default: []
    },
    status: {
        type: String,
        required: [true, "Status is required"]
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Sender ID is required"]
    }
}, {
    _id: false  // Disable the automatic creation of the _id field
});

const Buyer = (mongoose.models.Buyer as mongoose.Model<Buyer>) || mongoose.model<Buyer>("Buyer", buyerSchema);

export default Buyer;
