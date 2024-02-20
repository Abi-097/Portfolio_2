import connectDB from "@/app/utils/DBConnect.js";
import AboutModel from "@/models/aboutPostModel";
import NextResponse from "next/server";

export async function PUT(req) {
  try {
    console.log("PUT request received");
    await connectDB();
    const requestBody = await req.json();
    console.log("Request body:", requestBody);
    const {
      _id: { $oid },
      name,
      roles,
      description,
      description2,
      github,
      linkedin,
      instagram,
      facebook,
    } = requestBody;

    const updatedAbout = {
      _id: { $oid },
      name,
      roles,
      description,
      description2,
      github,
      linkedin,
      instagram,
      facebook,
    };

    console.log("Updating document with _id:", $oid);

    if (!_id) {
      console.log("Invalid _id provided");
      return { status: 400, body: { message: "Invalid _id provided" } };
    }

    const existingAbout = await AboutModel.findByIdAndUpdate(
      $oid,
      updatedAbout,
      { new: true }
    );
    console.log("existingAbout:", existingAbout);

    console.log("About updated successfully");
    return NextResponse.json({
      message: "About updated",
      updatedAbout: existingAbout,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: error.message });
  }
}
