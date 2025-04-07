
const express = require('express');
const app = express();
app.use(express.json());

app.post('/gpt-reply', async (req, res) => {
  res.send({ reply: "GPT відповідає: Привіт! Як можу допомогти?" });
});

app.post('/tts', async (req, res) => {
  res.send({ audioUrl: "https://example.com/fake-audio.mp3" });
});

app.post('/stt-stream', async (req, res) => {
  res.send({ transcript: "Розпізнано: Так, мені цікаво." });
});

app.listen(3000, () => console.log('Server running on port 3000'));
