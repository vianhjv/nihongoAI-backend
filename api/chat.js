export default async function handler(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const userMessage = req.body.message;

  try {
    const gptRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Bạn là giáo viên tiếng Nhật, luôn trả lời bằng tiếng Nhật đơn giản cho người mới học."
          },
          {
            role: "user",
            content: userMessage
          }
        ]
      })
    });

    const data = await gptRes.json();
    const reply = data.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (error) {
    res.status(500).json({ error: "Lỗi GPT server" });
  }
}
