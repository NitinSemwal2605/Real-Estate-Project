import mongoose, { Schema, Document } from "mongoose";
import { Seller } from "./seller.model";  // Adjust the path as necessary

// Create a property interface for type safety
export interface Property extends Document {
    _id: string;
    createdId: Date;
    listedBy: mongoose.Schema.Types.ObjectId;  // Reference to Seller model
    location: string;
    images: string[];
    description: string;
    type: string;
    clicks: number;
    enquiries: number;
    views: number;
    isVerified: boolean;
    isListed: boolean;
    visits: number;
    teamId: string;
}

// Create Property Schema of property interface type
const propertySchema: Schema<Property> = new Schema({
    _id: {
        type: String,
        required: [true, "ID is required"]
    },
    createdId: {
        type: Date,
        default: Date.now
    },
    listedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: [true, "Listed By field is required"]
    },
    location: {
        type: String,
        required: [true, "Location is required"]
    },
    images: {
        type: [String],
        default: []
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    type: {
        type: String,
        required: [true, "Type is required"]
    },
    clicks: {
        type: Number,
        default: 0
    },
    enquiries: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isListed: {
        type: Boolean,
        default: true
    },
    visits: {
        type: Number,
        default: 0
    },
    teamId: {
        type: String,
        required: [true, "Team ID is required"]
    }
});

const Property = (mongoose.models.Property as mongoose.Model<Property>) || mongoose.model<Property>("Property", propertySchema);

export default Property;
