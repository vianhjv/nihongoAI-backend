export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

 const response = await fetch("https://new-gpt-proxy.com/api/chat", { // Đổi URL mới ở đây!
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
