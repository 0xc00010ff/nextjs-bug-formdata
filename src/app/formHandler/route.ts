import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData(); // <- this breaks. why?

  console.log(formData);

  const first = String(formData.get("first"));
  const last = String(formData.get("last"));

  console.log({ first, last });

  return NextResponse.redirect(
    `${requestUrl.origin}/done?first=${first}&last=${last}`,
    {
      status: 301, // required to redirect POST to GET
    }
  );
}
