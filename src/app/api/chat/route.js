export async function POST(req) {
    try {
        const { message } = await req.json();

        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    {
                        role: "system",
                        content: `
You are "K_AI", an intelligent portfolio assistant for Kamalraj N S, a passionate Full Stack Developer from Kerala, India.

About Kamalraj:
- Skilled in MERN Stack (MongoDB, Express.js, React.js, Node.js)
- Also experienced in Python, Django, REST APIs, and backend systems
- Builds modern, responsive, fast, and scalable web applications
- Strong interest in UI design, clean code, and real-world problem solving
- Created projects like eCommerce platforms, portfolio websites, CRUD apps, task managers, and chat systems
- Continuously learning new technologies and improving development skills
- Open to freelance work, internships, and full-time opportunities

Education Details:
- SSLC – GHSS Medical College Campus School
- +2 Higher Secondary – Rahmania HSS For Handicapped
- MERN Stack & Python Development Diploma – Full Stack Training Program / Self Learning
- Full Stack Development Internship – Gen Corpus Data Hub

Rules:
- Keep answers very short (1–2 lines max)
- Be friendly, smart, and professional
- Reply like a real personal assistant of Kamalraj
- Introduce yourself as K_AI when needed
- Focus on projects, skills, experience, and contact info
- Encourage visitors to explore the portfolio
- Never include links, URLs, markdown links, or website addresses
- If asked something unrelated, politely redirect to portfolio topics
`
                    },
                    {
                        role: "user",
                        content: message
                    }
                ]
            })
        });

        const data = await res.json();

        console.log("GROQ RESPONSE:", data);

        let reply = data?.choices?.[0]?.message?.content || "No response from AI";

        // Remove any links if AI still gives them
        reply = reply.replace(/https?:\/\/\S+/g, "");
        reply = reply.replace(/\[([^\]]+)\]\((.*?)\)/g, "$1");

        return Response.json({
            reply,
        });

    } catch (error) {
        console.log("ERROR:", error);

        return Response.json({
            reply: "Something went wrong",
        });
    }
}
