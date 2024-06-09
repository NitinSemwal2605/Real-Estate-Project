import mongoose, { Schema, Document } from "mongoose";
import { User } from "./user.model";

// Create a call interface for type safety
export interface Call extends Document {
    _id: string;  // Explicitly specify the id as string
    senderId: mongoose.Schema.Types.ObjectId;  // Reference to User
    date: Date;
    slot: string;
    agent: string;
    type: string;
    status: string;
    isCompleted: boolean;
    isCancelled: boolean;
    isPostponed: boolean;
}
// Create Call Schema of call interface type

const callSchema: Schema<Call> = new Schema({
    _id: {
        type: String,
        required: [true, "ID is required"]
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Sender ID is required"]
    },
    date: {
        type: Date,
        required: [true, "Date is required"]
    },
    slot: {
        type: String,
        required: [true, "Slot is required"]
    },
    agent: {
        type: String,
        required: [true, "Agent is required"]
    },
    type: {
        type: String,
        required: [true, "Type is required"]
    },
    status: {
        type: String,
        required: [true, "Status is required"]
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isCancelled: {
        type: Boolean,
        default: false
    },
    isPostponed: {
        type: Boolean,
        default: false
    }
}, {
    _id: false  // Disable the automatic creation of the _id field
});

const Call = (mongoose.models.Call as mongoose.Model<Call>) || mongoose.model<Call>("Call", callSchema);

export default Call;

