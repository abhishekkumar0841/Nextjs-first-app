import Post from "@/models/Post";
import dbConnection from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await dbConnection();

    try {
      const posts = await Post.find();
      return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
      console.log("Error in fetching posts", error);
    }
  } catch (error) {
    return new NextResponse(`Database error------ ${error}`, { status: 500 });
  }
};
