import connectDB from "@/app/utils/DBConnect.js";
import AboutModel from "@/models/aboutPostModel";

export async function POST(req) {
  try {
    const {
      name,
      roles,
      description,
      description2,
      github,
      linkedin,
      instagram,
      facebook,
    } = await req.json();

    const about = {
      name,
      roles,
      description,
      description2,
      github,
      linkedin,
      instagram,
      facebook,
    };
    await connectDB();
    await AboutModel.create(about);
    return Response.json({ message: "About posted" });
  } catch (error) {
    return Response.json({ message: error.message });
  }
}
