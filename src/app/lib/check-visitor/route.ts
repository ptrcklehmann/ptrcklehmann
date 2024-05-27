import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cookies = request.headers.get("cookie") || "";
  const visited = cookies
    .split(";")
    .some((cookie) => cookie.trim().startsWith("visited="));

  if (!visited) {
    const response = NextResponse.json({ message: "See you soon." });
    response.headers.set(
      "Set-Cookie",
      "visited=true; Path=/; HttpOnly; Max-Age=31536000"
    ); // 1 year
    return response;
  }

  return NextResponse.json({ message: "Nice to see you!" });
}
