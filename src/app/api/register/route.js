import User from "@/models/User";
import dbConnection from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  try {
    await dbConnection();

    const { username, email, password } = await request.json();
    console.log(username, email, password);

    if (!username || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required!" },
        { status: 404 }
      );
    }

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { success: false, message: "User already exist!" },
        { status: 404 }
      );
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPass,
    });

    const savedUser = await newUser.save();

    return NextResponse.json(
      { success: true, message: "User registered success", savedUser },
      { status: 201 }
    );
  } catch (error) {
    console.log("ERROR IN REGISTER:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};
