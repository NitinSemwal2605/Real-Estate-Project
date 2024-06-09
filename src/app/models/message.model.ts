import mongoose, { Document, Schema } from "mongoose";
import { User } from "./user.model";

// Create a message interface for type safety
export interface Message extends Document {
    _id: string;  // Explicitly specify the id as string
    senderId: mongoose.Schema.Types.ObjectId;  // Reference to User
    type: string;
    status: string;
}
// Create Message Schema of message interface type
const messageSchema: Schema<Message> = new Schema({
    _id: {
        type: String,
        required: [true, "ID is required"]
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Sender ID is required"]
    },
    type: {
        type: String,
        required: [true, "Type is required"]
    },
    status: {
        type: String,
        required: [true, "Status is required"]
    }
}, {
    _id: false  // Disable the automatic creation of the _id field
});

const Message = (mongoose.models.Message as mongoose.Model<Message>) || mongoose.model<Message>("Message", messageSchema);

export default Message;
