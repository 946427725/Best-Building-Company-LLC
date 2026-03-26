import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, message } = req.body;
  
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

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
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'Markdown'
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Telegram API error:", errorData);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  return res.status(200).json({ success: true, message: "Message received" });
}
