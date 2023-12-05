import Post from "@/models/Post";
import dbConnection from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
    const {id} = params;
  try {
    await dbConnection();

    try {
      const post = await Post.findById(id);
      return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (error) {
      console.log("Error in fetching posts", error);
    }
  } catch (error) {
    return new NextResponse(`Database error------ ${error}`, { status: 500 });
  }
};
