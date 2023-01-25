export async function loader({ request }: { request: Request }) {
  try {
    const translations = { "int.name": "name" };

    return new Response(JSON.stringify(translations), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    return new Response("Error trying to get translations", {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
