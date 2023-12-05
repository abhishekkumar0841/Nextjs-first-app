import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// export default mongoose.model('User', userSchema)

// const User = mongoose.model.User || mongoose.model("User", userSchema);

// export default User;

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
