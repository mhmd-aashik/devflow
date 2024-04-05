/* eslint-disable no-empty */
"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  try {
    await connectToDatabase();
  } catch (error) {}
}
