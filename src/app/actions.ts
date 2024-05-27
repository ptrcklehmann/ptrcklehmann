"use server";

import { cookies } from "next/headers";

async function create() {
  const cookieHeader = cookies();
  const pageTitle = cookieHeader.get("pageTitle");

  let title = "Nice to see you!";
  if (!pageTitle) {
    title = "See you soon.";
    cookies().set("pageTitle", title, { path: "/", maxAge: 31536000 }); // 1 year
  }
}
