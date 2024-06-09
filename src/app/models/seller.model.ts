import mongoose, { Schema, Document } from "mongoose";
import { User } from "./user.model";  

// Create a seller interface for type safety
export interface Seller extends Document {
    _id: string;  // Explicitly specify the id as string
    properties: [string];
    message: [string];
    calls: [string];
    rank: number;
    userId: mongoose.Schema.Types.ObjectId;  // Reference to User
}
// Create Seller 
const sellerSchema: Schema<Seller> = new Schema({
    _id: {
        type: String,
        required: [true, "ID is required"]
    },
    properties: {
        type: [String],
        default: []
    },
    message: {
        type: [String],
        default: []
    },
    calls: {
        type: [String],
        default: []
    },
    rank: {
        type: Number,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User ID is required"]
    }
}, {
    _id: false  // Disable the automatic creation of the _id field
});

const Seller = (mongoose.models.Seller as mongoose.Model<Seller>) || mongoose.model<Seller>("Seller", sellerSchema);

export default Seller;
