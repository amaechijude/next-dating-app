export async function POST(req: Request) {
    if (req.method !== "POST") {
        return new Response("Method not allowed", { status: 405 });
    }
    
    return new Response("OK", { status: 200 });
}
