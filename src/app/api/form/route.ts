import { FormSchemaValuesT } from "@/shared/constants";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as FormSchemaValuesT;
    console.log(data); // required in technical task
    return NextResponse.json(`Thank you for your interest, ${data.name}`);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
