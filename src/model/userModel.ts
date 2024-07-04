import mongoose from "mongoose";

const user = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  favorite: { type: [String], default: [""] },
  profilePic: {
    type: String,
    default:
      "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png",
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
