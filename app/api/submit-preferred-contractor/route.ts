import { NextResponse } from "next/server";

/**
 * Fake backend: validates the payload and always returns success.
 * No email is sent; for demo/testing only.
 */
type Body = {
  businessName?: string;
  contactName?: string;
  mobile?: string;
  email?: string;
};

const FAKE_DELAY_MS = 600;

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const { businessName, contactName, mobile, email } = body;
  if (!businessName?.trim() || !contactName?.trim() || !mobile?.trim() || !email?.trim()) {
    return NextResponse.json(
      { message: "Missing required fields: businessName, contactName, mobile, email." },
      { status: 400 }
    );
  }

  // Simulate backend processing
  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_MS));

  return NextResponse.json({ ok: true, message: "Received." });
}
