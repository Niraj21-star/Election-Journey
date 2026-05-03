const GEMINI_API_KEY = window.ENV?.GEMINI_API_KEY || 'YOUR_API_KEY_HERE';

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
    subtitle: 'Welcome! Follow these steps to get your Voter ID and cast your first vote.',
    steps: [
      'Fill Form 6 online via the Voter Portal or Voter Helpline App.',
      'Upload age and address proofs (Aadhaar, PAN, or 10th marksheet).',
      'Wait for the BLO (Booth Level Officer) verification at your address.',
      'Check your name in the Electoral Roll (voter list).',
      'Download your e-EPIC or wait for the physical Voter ID to arrive via post.',
      'On election day, carry your Voter ID (or any authorized ID) to the polling booth!'
    ]
  },
  'lost-id': {
    title: 'Lost Voter ID Recovery',
    subtitle: 'Don\'t worry! If you lost your Voter ID, recovering it or getting a replacement is easy.',
    steps: [
      'Search your name on the Electoral Search portal (electoralsearch.eci.gov.in) using your details.',
      'Note down your EPIC number from the search results.',
      'Log in to the Voter Portal and select "Replacement of EPIC" (Form 8).',
      'Choose the reason as "Lost" (an FIR/Police report might be required for lost cases, else choose "Mutilated").',
      'Alternatively, if your mobile number is registered, directly download your e-EPIC (Digital Voter ID).',
      'Use the e-EPIC to vote or as a valid ID proof.'
    ]
  },
  'shifted-city': {
    title: 'Shifted City or Constituency',
    subtitle: 'Moved to a new place? Keep your vote valid by transferring your constituency.',
    steps: [
      'Log in to the Voter Portal or use the Voter Helpline App.',
      'Select "Shifting of Residence" in Form 8.',
      'Provide your existing EPIC number.',
      'Enter your new address and upload proof of the new address (Rental agreement, utility bill, etc.).',
      'Submit the form and note the reference number to track its status.',
      'Once approved, your name will be added to the new constituency\'s electoral roll.'
    ]
  }
};

function init() {
  situationBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Update ARIA and styling
      situationBtns.forEach(b => {
        b.setAttribute('aria-pressed', 'false');
        b.classList.remove('selected');
      });
      const target = e.currentTarget;
      target.setAttribute('aria-pressed', 'true');
      target.classList.add('selected');
      
      const situationId = target.dataset.situation;
      renderGuidance(situationId);
    });
  });

  if (aiSendBtn) {
    aiSendBtn.addEventListener('click', handleAiSend);
  }
  if (aiInput) {
    aiInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleAiSend(); });
  }
}

function renderGuidance(situationId) {
  const data = SITUATIONS[situationId];
  if (!data) return;

  guidanceTitle.textContent = data.title;
  guidanceSubtitle.textContent = data.subtitle;
  
  guidanceSteps.innerHTML = data.steps.map((step, i) => `
    <li class="step-item expanded">
      <div class="step-header" style="cursor:default;">
        <div class="step-number">${i + 1}</div>
        <div class="step-title-text">${step}</div>
      </div>
    </li>
  `).join('');
}

async function handleAiSend() {
  const question = aiInput.value.trim();
  if (!question) return;

  aiChatArea.classList.add('has-messages');
  
  // Add User Message
  const qDiv = document.createElement('div');
  qDiv.className = 'chat-message';
  qDiv.innerHTML = `<div class="chat-q">You: ${escapeHtml(question)}</div>`;
  aiChatArea.appendChild(qDiv);

  // Clear Input
  aiInput.value = '';

  // Add Typing Indicator
  const typingDiv = document.createElement('div');
  typingDiv.className = 'typing-indicator';
  typingDiv.innerHTML = '<span></span><span></span><span></span>';
  aiChatArea.appendChild(typingDiv);
  aiChatArea.scrollTop = aiChatArea.scrollHeight;

  try {
    aiStatus.textContent = '● Thinking...';
    aiStatus.style.color = 'var(--accent-amber)';
    
    // Call Gemini API
    const responseText = await callGeminiApi(question);
    
    typingDiv.remove();
    const aDiv = document.createElement('div');
    aDiv.className = 'chat-message';
    aDiv.innerHTML = `<div class="chat-a">🤖 ${escapeHtml(responseText).replace(/\n/g, '<br/>')}</div>`;
    aiChatArea.appendChild(aDiv);
    
  } catch (error) {
    typingDiv.remove();
    const errorDiv = document.createElement('div');
    errorDiv.className = 'chat-message';
    errorDiv.innerHTML = `<div class="chat-a" style="color: var(--accent-red)">⚠️ ${escapeHtml(error.message)}</div>`;
    aiChatArea.appendChild(errorDiv);
  } finally {
    aiStatus.textContent = 'Powered by Google Gemini';
    aiStatus.style.color = 'var(--accent-teal)';
    aiChatArea.scrollTop = aiChatArea.scrollHeight;
  }
}

async function callGeminiApi(prompt) {
  if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_API_KEY_HERE') {
    throw new Error("Gemini API Key is missing. Please add it to config.js or window.ENV.");
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  
  const systemInstructions = "You are the Election Navigator AI. Answer questions briefly and simply about the Indian election process. Do not use complex jargon.";
  
  const payload = {
    contents: [
      { role: "user", parts: [{ text: `System Instruction: ${systemInstructions}\n\nUser: ${prompt}` }] }
    ]
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Failed to fetch from Gemini API. Check your API key or network.');
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  return text || "I couldn't process that.";
}

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

init();
