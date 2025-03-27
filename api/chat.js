export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const userMessage = req.body.message;

  try {
    const response = await fetch("https://gptproxy.online/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: "Bạn là giáo viên tiếng Nhật. Trả lời bằng tiếng Nhật đơn giản."
          },
          {
            role: "user",
            content: userMessage
          }
        ]
      })
    });

    const data = await response.json();

    const reply = data?.choices?.[0]?.message?.content || "Không có phản hồi";

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Lỗi GPT proxy:", error.message);
    res.status(500).json({ error: "Lỗi GPT proxy" });
  }
}
