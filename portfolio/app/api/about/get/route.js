import connectDB from "@/app/utils/DBConnect.js";
import AboutModel from "@/models/aboutPostModel";

export async function GET(req) {
  try {
    await connectDB();

    // Retrieve data from the database
    const aboutData = await AboutModel.find();

    return Response.json({ message: "About data retrieved", aboutData });
  } catch (error) {
    return Response.json({ message: error.message });
  }
}
