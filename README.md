# 🤖 AI Code Reviewer

An intelligent backend-powered system that allows users to submit code snippets for automated AI-based review. It provides instant feedback, best practice suggestions, and possible improvements using natural language.

---

## 🚀 Features

- ✨ **AI-Powered Code Review**  
  Uses Google Gemini to understand submitted code and return meaningful suggestions, improvements, and error fixes.

- 🔐 **Authentication System**  
  Role-based authentication using JWT and Express middleware.

- 📝 **RESTful API**  
  Structured API to handle code submissions and user management.

- 📦 **Modular Architecture**  
  Organized with controllers, routes, middleware, and services.

---

## 🛠️ Tech Stack

| Layer        | Tech                        |
|--------------|-----------------------------|
| Backend      | Node.js, Express            |
| AI Service   | Google Gemini API           |
| Database     | MongoDB + Mongoose          |
| Auth         | JWT                         |
| Email (Optional) | Nodemailer + Mailtrap  |
| Dev Tools    | dotenv, cors, bcrypt        |

---

## 📁 Project Structure

```bash
ai-code-reviewer/
├── controllers/        # Request handlers
├── models/             # Mongoose schemas
├── routes/             # API endpoints
├── middleware/         # Auth, error handling
├── services/           # Gemini AI interaction
├── utils/              # Email and helpers
├── server.js           # Main Express server
├── .env                # Configuration
└── README.md           # This file
```

---

## ⚙️ Environment Variables

Create a `.env` file at the root with:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_google_gemini_api_key
```

---

## 🚀 Getting Started

### 🔧 Install Dependencies

```bash
npm install
```

### ▶️ Run the App

```bash
npm run dev
```

The server will start on `http://localhost:3000` (or your `.env` port).

---

## 🔐 Authentication Routes

| Method | Endpoint            | Description                 |
|--------|---------------------|-----------------------------|
| POST   | /api/auth/signup    | Register a new user         |
| POST   | /api/auth/login     | Login and receive JWT       |
| GET    | /api/auth/me        | Get current user info       |

---

## 🧠 AI Code Review Endpoints

| Method | Endpoint            | Description                        |
|--------|---------------------|------------------------------------|
| POST   | /api/review         | Submit code snippet for review     |
| GET    | /api/review/history | Get review history for user        |

---

## 📬 Email Integration (Optional)

To enable email feedback (if implemented):

```env
MAILTRAP_SMTP_HOST=smtp.mailtrap.io
MAILTRAP_SMTP_PORT=2525
MAILTRAP_SMTP_USER=your_user
MAILTRAP_SMTP_PASS=your_pass
```

---

## 🔄 Code Review Flow

1. **User submits a code snippet** via `POST /api/review`
2. The backend calls the **Gemini API** to analyze the code
3. Gemini returns:
   - Suggestions
   - Optimizations
   - Errors (if any)
4. The system stores and optionally emails the results

```json
{
  "code": "function add(a, b) { return a + b; }",
  "language": "javascript"
}
```

📌 Response:
```json
{
  "feedback": "This function works well. Consider adding type checks or JSDoc comments."
}
```

---

## 🧪 Testing

Use tools like [Postman](https://www.postman.com/) or CURL:

```bash
curl -X POST http://localhost:3000/api/review \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-d '{"code": "print(\"Hello\")", "language": "python"}'
```

---

## 🐞 Troubleshooting

### 🧠 Gemini API Errors

- Ensure `GEMINI_API_KEY` is correctly set in `.env`
- Check for API usage limits or invalid payload formats

### 🧾 MongoDB Errors

- Confirm your `MONGO_URI` is correct
- MongoDB service should be running locally or hosted

### 🛑 JWT/Authorization Issues

- Always include `Authorization: Bearer <token>` header
- Make sure the token hasn’t expired
- Confirm the secret matches the one used during login

---

## 📚 Key Dependencies

```json
{
  "bcrypt": "^5.1.1",
  "cors": "^2.8.5",
  "dotenv": "^16.5.0",
  "express": "^5.1.0",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.13.2",
  "nodemailer": "^6.10.1",
  "@google/generative-ai": "latest"
}
```

---

## 📈 Possible Future Features

- Syntax highlighting and live preview in frontend
- Language-specific linters (e.g., ESLint, flake8) integration
- Admin dashboard for reviewing flagged code
- AI summary or rubric-based grading
- Discord/Slack integration for dev teams

---

## 🙏 Acknowledgments

- 📡 **Google Gemini** — for code intelligence and review
- 📨 **Mailtrap** — for safe email testing
- 🗄 **MongoDB** — for robust data storage
- 🔐 **JWT** — for secure authentication

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 🧑‍💻 Author

Made with ❤️ by [Ansuman Das].  
For collaboration, reach out via email or GitHub.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

