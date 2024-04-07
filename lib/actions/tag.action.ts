"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInterractedTags(
  params: GetTopInteractedTagsParams
) {
  try {
    connectToDatabase();

    const { userId, limit = 3 } = params;

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    // find interactions for the user and group by tag
    // interactions

    return [
      {
        _id: "1",
        name: "Javascript",
      },
      {
        _id: "2",
        name: "Python",
      },
      {
        _id: "3",
        name: "React",
      },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
