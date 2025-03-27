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
