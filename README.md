# nihongoAI-backend
api nihongoAI- 
# NihongoAI - Chatbot Học Tiếng Nhật

Dự án **NihongoAI** cung cấp một **chatbot học tiếng Nhật** thông qua **AI GPT-3.5**. Đây là một hệ thống sử dụng **Vercel** để triển khai backend và kết nối với **OpenAI** để trả lời các câu hỏi tiếng Nhật.

## 🚀 Cách triển khai

1. **Tạo API Key OpenAI**:
   - Vào [OpenAI API](https://platform.openai.com/account/api-keys) và tạo một API Key.
   - Thêm key vào **Environment Variables** trong Vercel với tên `OPENAI_API_KEY`.

2. **Triển khai dự án trên Vercel**:
   - Vào [Vercel](https://vercel.com/) và **import** repo này vào Vercel.
   - Cấu hình môi trường như sau:
     - Biến môi trường: `OPENAI_API_KEY = sk-xxxxxx`

3. **Cách sử dụng**:
   - Dự án này sẽ cung cấp một API ở đường dẫn:
     ```
     https://<your-vercel-app>.vercel.app/api/chat
     ```
   - API nhận yêu cầu `POST` với dữ liệu JSON như sau:
     ```json
     {
       "message": "Câu hỏi tiếng Nhật của bạn"
     }
     ```

4. **Cách kết nối từ frontend**:
   - Sử dụng fetch để gọi API backend, ví dụ trong `script.js`:
     ```javascript
     const response = await fetch("https://<your-vercel-app>.vercel.app/api/chat", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ message: "こんにちは!" })
     });
     const data = await response.json();
     console.log(data.reply);
     ```

## 🛡️ Bảo mật

- **Đừng bao giờ để lộ API Key** trong mã nguồn client (frontend).
- **Sử dụng backend** để bảo mật key và xử lý API requests.

## 🛠️ Công nghệ sử dụng

- **Vercel**: Dịch vụ deploy frontend và backend
- **Node.js**: Backend API chạy trên serverless function
- **OpenAI GPT-3.5**: AI chatbot xử lý ngôn ngữ tự nhiên
- **GitHub**: Quản lý mã nguồn

## 📌 Hướng dẫn đóng góp

1. Fork repo này về.
2. Clone repo xuống máy của bạn.
3. Thực hiện các thay đổi cần thiết.
4. Gửi Pull Request để đóng góp.

---

## 🗣️ Liên hệ

- Email: [mocatochinh@gmail.com](mailto:mocatochinh@gmail.com)
- Website: [https://vianhjv.github.io/nihongoAI](https://vianhjv.github.io/nihongoAI)

