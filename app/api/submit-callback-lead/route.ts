import { NextResponse } from "next/server";

/**
 * Fake backend: validates the payload and always returns success.
 * No email is sent; for demo/testing only.
 */
type Body = {
  name?: string;
  business?: string;
  phone?: string;
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

  const { name, business, phone, email } = body;
  if (!name?.trim() || !business?.trim() || !phone?.trim() || !email?.trim()) {
    return NextResponse.json(
      { message: "Missing required fields: name, business, phone, email." },
      { status: 400 }
    );
  }

  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_MS));

  return NextResponse.json({ ok: true, message: "Received." });
}
