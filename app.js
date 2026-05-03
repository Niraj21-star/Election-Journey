const GEMINI_API_KEY = window.CONFIG?.GEMINI_API_KEY || "YOUR_API_KEY_HERE";

// ── DOM refs ──
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const situationBtns = $$('.situation-btn');
const guidanceTitle = $('#guidance-title');
const guidanceSubtitle = $('#guidance-subtitle');
const guidanceSteps = $('#guidance-steps');
const aiInput = $('#ai-input');
const aiSendBtn = $('#ai-send-btn');
const aiChatArea = $('#ai-chat-area');
const aiStatus = $('#ai-status');

const SITUATIONS = {
  'first-time': {
    title: 'First-time Voter Registration',
    subtitle: 'Follow these steps:',
    steps: [
      'Fill Form 6 online',
      'Upload documents',
      'Wait for verification',
      'Check voter list',
      'Download e-EPIC',
      'Vote on election day'
    ]
  },
  'lost-id': {
    title: 'Lost Voter ID',
    subtitle: 'Recover it easily:',
    steps: [
      'Search your name online',
      'Note EPIC number',
      'Apply via Form 8',
      'Download e-EPIC'
    ]
  },
  'shifted-city': {
    title: 'Shifted City',
    subtitle: 'Update your address:',
    steps: [
      'Login to portal',
      'Fill Form 8',
      'Upload new address proof',
      'Track status'
    ]
  }
};

function init() {
  situationBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      situationBtns.forEach(b => b.classList.remove('selected'));
      e.currentTarget.classList.add('selected');
      renderGuidance(e.currentTarget.dataset.situation);
    });
  });

  aiSendBtn.addEventListener('click', handleAiSend);
  aiInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleAiSend();
  });
}

function renderGuidance(id) {
  const data = SITUATIONS[id];
  guidanceTitle.textContent = data.title;
  guidanceSubtitle.textContent = data.subtitle;

  guidanceSteps.innerHTML = data.steps
    .map((s, i) => `<li>${i + 1}. ${s}</li>`)
    .join('');
}

async function handleAiSend() {
  const question = aiInput.value.trim();
  if (!question) return;

  aiChatArea.innerHTML += `<p><b>You:</b> ${question}</p>`;
  aiInput.value = "";

  try {
    aiStatus.textContent = "Thinking...";

    const response = await callGeminiApi(question);

    aiChatArea.innerHTML += `<p><b>AI:</b> ${response}</p>`;
  } catch (err) {
    aiChatArea.innerHTML += `<p style="color:red;">Error: ${err.message}</p>`;
  }

  aiStatus.textContent = "Ready";
}

async function callGeminiApi(prompt) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      })
    }
  );

  const data = await response.json();

  if (data.candidates) {
    return data.candidates[0].content.parts[0].text;
  } else {
    throw new Error(JSON.stringify(data));
  }
}

init();