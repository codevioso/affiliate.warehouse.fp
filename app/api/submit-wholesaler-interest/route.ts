import { NextResponse } from "next/server";

/**
 * Fake backend: validates the payload and always returns success.
 * No email is sent; for demo/testing only.
 */
type Body = {
  companyName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const FAKE_DELAY_MS = 600;

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const { companyName, contactName, email, phone } = body;
  if (!companyName?.trim() || !contactName?.trim() || !email?.trim() || !phone?.trim()) {
    return NextResponse.json(
      { message: "Missing required fields: companyName, contactName, email, phone." },
      { status: 400 }
    );
  }

  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_MS));

  return NextResponse.json({ ok: true, message: "Received." });
}
