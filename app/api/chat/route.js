export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ text: "API Key missing in .env.local" }), { status: 500 });
    }

    // These are the ONLY two names that work in the stable v1 endpoint right now
    const endpoints = [
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-8b:generateContent?key=${apiKey}`,
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`
    ];

    let lastError = "";

    for (const url of endpoints) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: message }] }]
          }),
        });

        const data = await response.json();

        if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
          return new Response(JSON.stringify({ 
            text: data.candidates[0].content.parts[0].text 
          }));
        } else {
          lastError = data.error?.message || "Model rejected request";
          continue; 
        }
      } catch (err) {
        lastError = err.message;
        continue;
      }
    }

    throw new Error(lastError);

  } catch (error) {
    return new Response(JSON.stringify({ text: `System Error: ${error.message}` }), { status: 500 });
  }
}