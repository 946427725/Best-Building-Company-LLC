import "dotenv/config";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/contact", async (req, res) => {
    const { name, phone, message } = req.body;
    
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // THIS IS THE DEBUG LOG YOU SHOULD SEE
    console.log("DEBUG: Environment variables check:", { 
      hasToken: !!botToken, 
      hasChatId: !!chatId 
    });

    if (botToken && chatId) {
      const text = `
🏢 *Yangi so'rov (Best Building)*
━━━━━━━━━━━━━━━━━━━━
👤 *Ism:* ${name}
📞 *Tel:* ${phone}
💬 *Xabar:* ${message || 'Xabar qoldirilmagan'}
━━━━━━━━━━━━━━━━━━━━
📅 *Sana:* ${new Date().toLocaleString('uz-UZ')}
      `;

      try {
        console.log("DEBUG: Attempting to send Telegram message...");
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: 'Markdown'
          })
        });
        
        const result = await response.json();
        if (!response.ok) {
          console.error("DEBUG: Telegram API error response:", result);
        } else {
          console.log("DEBUG: Telegram message sent successfully!");
        }
      } catch (error) {
        console.error("DEBUG: Fetch error:", error);
      }
    } else {
      console.warn("DEBUG: Telegram message skipped because botToken or chatId is missing.");
    }

    console.log("Contact form submission:", { name, phone, message });
    res.json({ success: true, message: "Message received" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
