
const CONTACT_API_PATH = "/api/contact";

export async function sendContactForm(data: Record<string, string>): Promise<any> {
  const response = await fetch(CONTACT_API_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return await response.json();
  }
  return await response.text();
}

