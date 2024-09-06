import mongoose, { mongo } from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name Must Contain at least 3 Characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name Must Contain at least 3 Characters!"],
  },
  email: {
    type: String,
    required: true,
    validator: [validator.isEmail, "Please Provide a valid Email!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone must contain exact 10 digits!"],
    maxLength: [10, "Phone must contain exact 10 digits!"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "Message must contain at least 10 characters!"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
