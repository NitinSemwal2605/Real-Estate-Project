import mongoose, { Schema } from "mongoose";

// Create a agent interface for type safety
export interface Agent {
    _id: string;  
    userId: string;
    calls: string[];
    isAvailable: boolean;
    callsConverted: number;
}

// Create Agent Schema of agent interface type
const agentSchema: Schema<Agent> = new Schema({
    _id: {
        type: String,
        required: [true, "ID is required"]
    },
    userId: {
        type: String,
        required: [true, "User ID is required"]
    },
    calls: {
        type: [String],
        default: []
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    callsConverted: {
        type: Number,
        default: 0
    }
}, {
    _id: false  // Disable the automatic creation of the _id field
});

const Agent = (mongoose.models.Agent as mongoose.Model<Agent>) || mongoose.model<Agent>("Agent", agentSchema);

export default Agent;
