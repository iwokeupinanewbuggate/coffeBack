import mongoose from "mongoose";

const user = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  favorite: { type: [String], default: [""] },
  profilePic: {
    type: String,
    default:
      "https://res.cloudinary.com/db0wbldom/image/upload/v1721899629/pngwing.com_uh6xss.png",
  },
  address: { type: String, default: "" },
  paymentInfo: {
    cardHolder: {
      type: String,
      default: "",
    },
    cardNumber: {
      type: String,
      default: "",
    },
    expirationDate: {
      type: String,
      default: "",
    },
    cvv: {
      type: String,
      default: "",
    },
  },
});

const userModel = mongoose.models.user || mongoose.model("user", user);

export default userModel;
