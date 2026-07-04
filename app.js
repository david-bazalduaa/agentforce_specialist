// ============================================================
// Agentforce Specialist Exam Simulator — Core Application Logic
// Parses 379 questions from Agentforce-Specialist.md at runtime
// Dual-Shuffle Engine: Fisher-Yates global + per-question option shuffle
// ============================================================

"use strict";

// ---------- Category Constants ----------
// ---------- Category Constants ----------
const CATEGORIES = {
  AGENTS:       "AI Agents",
  PROMPT:       "Prompt Engineering",
  DATA_360:     "Data 360 Fundamentals",
  TESTING:      "Testing, Deployment, & Maintenance",
  GOVERNANCE:   "Governance & Observability",
  MULTI_AGENT:  "Multi-Agent Orchestration"
};

// ---------- Category Exam Weights ----------
const CATEGORY_WEIGHTS = {
  [CATEGORIES.AGENTS]:      "35%",
  [CATEGORIES.PROMPT]:      "20%",
  [CATEGORIES.DATA_360]:    "20%",
  [CATEGORIES.TESTING]:     "10%",
  [CATEGORIES.GOVERNANCE]:   "10%",
  [CATEGORIES.MULTI_AGENT]: "5%"
};

// ---------- Category to Tab Mapping ----------
// Tab 0 = Dashboard, Tabs 1-6 = Categories, Tab 7 = Full Simulator
const TAB_CATEGORIES = [
  null,                     // Tab 0: Dashboard
  CATEGORIES.AGENTS,        // Tab 1
  CATEGORIES.PROMPT,        // Tab 2
  CATEGORIES.DATA_360,      // Tab 3
  CATEGORIES.TESTING,       // Tab 4
  CATEGORIES.GOVERNANCE,    // Tab 5
  CATEGORIES.MULTI_AGENT,   // Tab 6
  null                      // Tab 7: Full Simulator
];

// ---------- Category Classification Keywords ----------
// Higher-weight keywords are listed first; matched against question + explanation text
const CATEGORY_KEYWORDS = {
  [CATEGORIES.MULTI_AGENT]: [
    "model context protocol", "mcp", "agent-to-agent", "a2a protocol", "a2a ",
    "agent api", "multi-agent", "interoperability", "autonomous task delegation",
    "agent collaboration protocol", "open standard multi-agent",
    "openapi specification", "agent card", "single-agent", "soma", "architectural trade-off",
    "a2a specification", "architectural trade-offs"
  ],
  [CATEGORIES.DATA_360]: [
    "data cloud", "data library", "retriever", "vector database",
    "unstructured data", "chunking", "indexing", "ensemble retriever",
    "retrieval-augmented", "semantic search", "data ingestion",
    "file upload-based data library", "uploaded files", "rag ",
    "individual retriever", "search index", "chunk", "embedding",
    "data 360", "360 architecture", "foundational data 360", "data 360 fundamentals"
  ],
  [CATEGORIES.PROMPT]: [
    "prompt template", "prompt builder", "field generation",
    "flex template", "flex type", "flex,", "grounding technique",
    "prompt activation", "prompt execution", "merge field",
    "trust layer", "einstein trust", "prompt preview", "resolution text",
    "response text", "dynamic field", "writing prompt", "prompt instruction",
    "prompt type", "ground prompt", "preview prompt",
    "token limit", "token count", "tokens generated", "access control", "model access", "prevent"
  ],
  [CATEGORIES.TESTING]: [
    "testing center", "agentforce testing", "test case",
    "sandbox to production", "deploy to production", "deployment",
    "evaluation", "test coverage", "csv file with",
    "csv test", "debug log", "utterance", "production deployment",
    "change set", "managed package deploy", "pilot program",
    "evaluations engine", "deployment rules", "agent testing center",
    "evaluations engine workflows"
  ],
  [CATEGORIES.GOVERNANCE]: [
    "agent monitoring", "management workflows", "agent analytics", "monitor agent",
    "monitoring", "adoption", "optimization", "session tracing", "health monitoring",
    "observability", "dashboard", "analytics dashboard", "optimization systems",
    "governance", "observability", "management workflow"
  ],
  [CATEGORIES.AGENTS]: [
    "agent action", "custom agent", "standard topic", "custom topic",
    "employee agent", "service agent", "sales agent", "agent user",
    "security context", "guardrails", "agent instruction",
    "atlas reasoning", "einstein copilot", "conversational ai",
    "agent configuration", "subagent", "topic ", "reasoning engine",
    "agent builder", "agentforce agent", "service replies",
    "case classification", "work summaries", "knowledge replies",
    "action instruction", "agent's instruction",
    "apex action", "flow action", "agent channel", "hybrid reasoning",
    "canvas view", "script view", "deterministic behavior", "expression",
    "slack", "email", "voice", "digital experience", "agent api",
    "building block", "agent mechanics"
  ]
};

// ---------- Global State ----------
const state = {
  questions: [],          // Parsed questions array
  activeTab: 0,
  mode: "study",          // "study" | "exam"
  answers: {},            // { questionId: [selectedLetters] }
  submitted: {},          // { questionId: true }
  shuffleMap: {},         // { questionId: { shuffledOptions, correctLetter } }
  timerInterval: null,
  timerSeconds: 105 * 60, // 105 minutes
  examSubmitted: false
};

// ---------- DOM References ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ============================================================
// SECTION 1: PASSWORD SECURITY
// ============================================================

const TARGET_PASSWORD_HASH = "79f75d16"; // Hash of "Salesforce2026"

function djb2(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
  }
  return (hash >>> 0).toString(16);
}

window.checkPassword = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById("password-input");
  const errorEl = document.getElementById("password-error");
  if (!input) return;

  const entered = input.value;
  if (djb2(entered) === TARGET_PASSWORD_HASH) {
    unlockApp();
  } else {
    if (errorEl) errorEl.style.display = "block";
    input.value = "";
    input.focus();
  }
};

function unlockApp(instant = false) {
  sessionStorage.setItem("simulator_unlocked", "true");
  const overlay = document.getElementById("password-overlay");
  const header = $(".app-header");
  const main = $("#app-container");

  if (overlay) {
    if (instant) {
      overlay.style.transition = "none";
      overlay.style.display = "none";
    }
    overlay.classList.add("unlocked");
  }
  if (header) header.classList.remove("hidden");
  if (main) main.classList.remove("hidden");
}

// ============================================================
// SECTION 2: MARKDOWN PARSER
// ============================================================

/**
 * Fetches and parses the Agentforce-Specialist.md file into an array of
 * question objects. Handles noise lines, multi-line options, and format
 * variations (with/without dash prefixes on options).
 */
async function fetchAndParseQuestions() {
  const loadingFill = document.getElementById("loading-fill");

  try {
    if (loadingFill) loadingFill.style.width = "20%";

    const response = await fetch("Agentforce-Specialist.md");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const rawText = await response.text();

    if (loadingFill) loadingFill.style.width = "50%";

    const questions = parseMarkdown(rawText);

    if (loadingFill) loadingFill.style.width = "80%";

    // Classify each question into a category
    questions.forEach(q => {
      q.category = classifyQuestion(q);
    });

    if (loadingFill) loadingFill.style.width = "100%";

    console.log(`[Parser] Successfully parsed ${questions.length} questions`);

    // Log category distribution for verification
    const dist = {};
    questions.forEach(q => { dist[q.category] = (dist[q.category] || 0) + 1; });
    console.log("[Parser] Category distribution:", dist);

    return questions;

  } catch (err) {
    console.error("[Parser] Failed to load questions:", err);
    const loadingCard = $(".loading-card");
    if (loadingCard) {
      loadingCard.innerHTML = `
        <div style="font-size:3rem;margin-bottom:16px">⚠️</div>
        <h2>Failed to Load Questions</h2>
        <p style="margin-bottom:12px">${err.message}</p>
        <p style="font-size:.8rem;opacity:.7">
          The markdown file must be served via HTTP. Try running:<br>
          <code style="background:rgba(255,255,255,.15);padding:4px 8px;border-radius:4px;margin-top:6px;display:inline-block">
            npx serve .
          </code>
        </p>
      `;
    }
    return [];
  }
}

/**
 * Core markdown parser. Splits the raw text into question blocks and
 * extracts structured data from each block.
 */
function parseMarkdown(rawText) {
  // Step 1: Clean noise lines and picture text blocks from the entire document
  const cleanedLines = rawText.split("\n").filter(line => {
    const trimmed = line.trim();
    if (trimmed === "Questions & Answers PDF") return false;
    if (/^P-\d+$/.test(trimmed)) return false;
    if (trimmed.startsWith("**==>  picture")) return false;
    if (trimmed.startsWith("**----- Start of picture text -----**")) return false;
    if (trimmed.startsWith("**----- End of picture text -----**")) return false;
    if (trimmed === "Choose 1 option.") return false;
    return true;
  });
  const cleaned = cleanedLines.join("\n");

  // Step 2: Split by question headers — handles both ## **Question: N** and **Question: N**
  const questionPattern = /(?:##\s*)?\*\*Question:\s*(\d+)\*\*/g;
  const headers = [];
  let match;
  while ((match = questionPattern.exec(cleaned)) !== null) {
    headers.push({ id: parseInt(match[1]), index: match.index, length: match[0].length });
  }

  const questions = [];

  for (let i = 0; i < headers.length; i++) {
    const startPos = headers[i].index + headers[i].length;
    const endPos = i + 1 < headers.length ? headers[i + 1].index : cleaned.length;
    const block = cleaned.substring(startPos, endPos);

    const parsed = parseQuestionBlock(headers[i].id, block);
    if (parsed) {
      questions.push(parsed);
    }
  }

  return questions;
}

/**
 * Parses a single question block into a structured object.
 * Uses a state machine to handle question text, options, answer, and explanation.
 */
function parseQuestionBlock(id, block) {
  const lines = block.split("\n");

  let questionText = "";
  let options = {};
  let currentOption = null;
  let answer = "";
  let explanation = "";
  let phase = "question"; // "question" | "options" | "answer" | "explanation"

  // Regex patterns for option detection — handles dash prefix, bare, and ## heading prefix
  const optionPatternDash = /^-\s+([A-C])\.\s+(.*)$/;
  const optionPatternBare = /^([A-C])\.\s+(.*)$/;
  const optionPatternHeading = /^##\s+([A-C])\.\s+(.*)$/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines (but track them for context)
    if (!trimmed) continue;

    // Detect answer line — multiple format variations including picture text blocks
    const answerMatch = trimmed.match(/^\*?\*?\s*(?:##\s*)?\*?\*?Answer:\s*([A-C])\*?\*?\s*$/);
    // Also handle picture-text format: Answer: C<br>
    const pictureAnswerMatch = !answerMatch ? trimmed.match(/Answer:\s*([A-C])(?:<br>|$)/) : null;
    const finalAnswerMatch = answerMatch || pictureAnswerMatch;
    if (finalAnswerMatch) {
      // Finalize current option if one was being collected
      if (currentOption && options[currentOption]) {
        options[currentOption] = options[currentOption].trim();
      }
      answer = finalAnswerMatch[1];
      phase = "answer";
      continue;
    }

    // Detect explanation start
    if (trimmed === "Explanation:" || trimmed.startsWith("Explanation:")) {
      phase = "explanation";
      // Capture inline text after "Explanation:" if any
      const afterColon = trimmed.substring(trimmed.indexOf(":") + 1).trim();
      if (afterColon) explanation += afterColon + " ";
      continue;
    }

    // Skip decorative headers that aren't content
    if (trimmed.startsWith("## **Salesforce") || trimmed.startsWith("## _[Offer]_") ||
        trimmed.startsWith("## **Thank You") || trimmed.startsWith("## **Product Questions")) {
      continue;
    }

    // Check for option lines
    let optMatch = trimmed.match(optionPatternDash) || trimmed.match(optionPatternBare) || trimmed.match(optionPatternHeading);

    if (optMatch && (phase === "question" || phase === "options")) {
      // Finalize previous option text
      if (currentOption && options[currentOption]) {
        options[currentOption] = options[currentOption].trim();
      }
      phase = "options";
      currentOption = optMatch[1]; // "A", "B", or "C"
      options[currentOption] = optMatch[2].trim();
      continue;
    }

    // Collect text based on current phase
    if (phase === "question") {
      // Skip markdown headers that are just section decorators
      if (/^##\s/.test(trimmed) && !trimmed.includes("Question:")) continue;
      questionText += (questionText ? " " : "") + trimmed;
    } else if (phase === "options" && currentOption) {
      // Continuation line for the current option
      options[currentOption] += " " + trimmed;
    } else if (phase === "explanation" || phase === "answer") {
      // Everything after answer/explanation markers goes into explanation
      // Skip reference URLs and trailhead links to keep explanations concise
      if (trimmed.startsWith("Salesforce Agentforce Documentation:") ||
          trimmed.startsWith("Salesforce Data Cloud Documentation:") ||
          trimmed.startsWith("Salesforce Einstein Trust Layer Documentation:") ||
          trimmed.startsWith("Salesforce Documentation:") ||
          trimmed.startsWith("Trailhead:") ||
          trimmed.startsWith("(https://") ||
          trimmed.startsWith("http://") ||
          trimmed.startsWith("## Trailhead:") ||
          trimmed === "================" ||
          trimmed.startsWith("## **Thank You")) {
        continue;
      }
      if (phase === "answer" && !trimmed.startsWith("Explanation")) {
        // Text between Answer and Explanation — skip
        if (trimmed === "Explanation:" || trimmed.startsWith("Explanation:")) {
          phase = "explanation";
          const afterColon = trimmed.substring(trimmed.indexOf(":") + 1).trim();
          if (afterColon) explanation += afterColon + " ";
        }
        continue;
      }
      explanation += trimmed + " ";
    }
  }

  // Finalize last option
  if (currentOption && options[currentOption]) {
    options[currentOption] = options[currentOption].trim();
  }

  // Clean up explanation
  explanation = explanation.trim();

  // Validate parsed data
  if (!questionText || !answer || !options["A"]) {
    console.warn(`[Parser] Skipping question ${id}: incomplete data`);
    return null;
  }

  // Smart Parsing: Scan the explanation to identify the correct choice letter dynamically
  let explanationLetter = "";
  const match1 = explanation.match(/(?:correct answer is|correct answer is Option)\s+([A-D])/i);
  if (match1) {
    explanationLetter = match1[1].toUpperCase();
  } else {
    const match2 = explanation.match(/\b(?:Option|Answer)\s+([A-D])\b/i);
    if (match2) {
      explanationLetter = match2[1].toUpperCase();
    }
  }

  // Use the discovered letter from the explanation if valid, otherwise fallback to the parsed 'answer' field
  const finalAnswerLetter = (explanationLetter && options[explanationLetter]) ? explanationLetter : answer;

  // Build clean options choices array and correctAnswerText
  const choices = [];
  ["A", "B", "C", "D"].forEach(letter => {
    if (options[letter]) {
      choices.push(options[letter]);
    }
  });

  const correctAnswerText = options[finalAnswerLetter] ? options[finalAnswerLetter].trim() : "";

  return {
    id,
    text: questionText,
    choices: choices,
    correctAnswerText: correctAnswerText,
    multi: false,
    explanation,
    category: null // Will be assigned by classifier
  };
}

// ============================================================
// SECTION 3: CATEGORY CLASSIFIER
// ============================================================

/**
 * Classifies a question into one of the 5 exam categories by scoring
 * keyword matches against the question text and explanation.
 * Returns the category name string.
 */
function classifyQuestion(q) {
  const searchText = (q.text + " " + q.explanation).toLowerCase();
  let bestCategory = CATEGORIES.AGENTS; // Default fallback (largest bucket at 35%)
  let bestScore = 0;

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    let score = 0;
    for (const keyword of keywords) {
      if (searchText.includes(keyword.toLowerCase())) {
        // Weight earlier keywords higher (they are more specific)
        score += 2;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  }

  return bestCategory;
}

// ============================================================
// SECTION 4: DUAL-SHUFFLE ENGINE (Fisher-Yates)
// ============================================================

/**
 * Fisher-Yates (Knuth) shuffle algorithm for arrays.
 * Mutates the array in place and returns it.
 */
function fisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Creates a shuffled copy of the question array (global shuffle).
 * Does NOT mutate the original array.
 */
function shuffleQuestions(questions) {
  return fisherYatesShuffle([...questions]);
}

/**
 * Shuffles the options for a single question and maps the correct answer.
 *
 * CRITICAL LOGIC: Before shuffling, we capture the text content of the
 * correct answer. After shuffling, we assign new positional letters (A, B, C)
 * and determine which new letter corresponds to the original correct answer.
 *
 * Returns: { shuffledOptions: [{letter, text, originalLetter}], correctLetter: "X" }
 */
function shuffleOptions(question) {
  // Create a copy of the choices array
  const choicesCopy = [...question.choices];
  fisherYatesShuffle(choicesCopy);
  return choicesCopy;
}

/**
 * Generates and caches shuffled option mappings for all questions in an array.
 * Called when a quiz tab initializes or is reshuffled.
 */
function generateShuffleMaps(questions) {
  questions.forEach(q => {
    state.shuffleMap[q.id] = shuffleOptions(q);
  });
}

// ============================================================
// SECTION 5: TAB SYSTEM
// ============================================================

function renderTabButtons() {
  const nav = $(".tab-nav");
  if (!nav) return;
  nav.innerHTML = "";

  const tabs = [
    { label: "Dashboard", icon: "📊" },
    { label: "AI Agents", weight: "35%" },
    { label: "Prompt Engineering", weight: "20%" },
    { label: "Data 360 Fundamentals", weight: "20%" },
    { label: "Testing & Deploy", weight: "10%" },
    { label: "Gov & Observability", weight: "10%" },
    { label: "Multi-Agent Orchestration", weight: "5%" },
    { label: "Full Exam (379)", icon: "🎯" }
  ];

  tabs.forEach((tab, i) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (i === 0 ? " active" : "");
    btn.dataset.tab = i;

    let countBadge = "";
    if (i > 0 && i < 7) {
      const count = state.questions.filter(q => q.category === TAB_CATEGORIES[i]).length;
      countBadge = `<span class="tab-badge">${count}</span>`;
    } else if (i === 7) {
      countBadge = `<span class="tab-badge">${state.questions.length}</span>`;
    }

    btn.innerHTML = `${tab.icon || ""}${tab.label}${tab.weight ? ` (${tab.weight})` : ""}${countBadge}`;
    nav.appendChild(btn);
  });
}

function setActiveTab(index) {
  state.activeTab = index;
  $$(".tab-btn").forEach((btn, i) => btn.classList.toggle("active", i === index));
  $$(".tab-pane").forEach((pane, i) => pane.classList.toggle("active", i === index));
}

// ============================================================
// SECTION 6: DASHBOARD RENDERING
// ============================================================

function renderDashboard() {
  const pane = document.getElementById("tab-0");
  if (!pane) return;

  const topicList = [
    { name: CATEGORIES.AGENTS, weight: "35%", desc: "Agent mechanics (script/building blocks), hybrid reasoning, canvas & script views, managing deterministic behaviors (filters, variables, expressions), standard/custom topics and actions, channel connections (digital experiences, email, voice, Slack), security runtime context, and Employee/Service Agent selection or Agent API usage.", color: "var(--cat-agents)" },
    { name: CATEGORIES.PROMPT, weight: "20%", desc: "Prompt Builder use cases, access controls, field generation/flex templates, grounding techniques, activation/execution, prompt writing best practices, Trust Layer features, and model access prevention.", color: "var(--cat-prompt)" },
    { name: CATEGORIES.DATA_360, weight: "20%", desc: "Agentforce Data Library concepts, foundational Data 360 architectures, chunking, indexing, and retrievers.", color: "var(--cat-data)" },
    { name: CATEGORIES.TESTING, weight: "10%", desc: "Agent Testing Center workflows, evaluations engine, and sandbox-to-production deployment rules for agents and prompt templates.", color: "var(--cat-testing)" },
    { name: CATEGORIES.GOVERNANCE, weight: "10%", desc: "Agent monitoring, management workflows, agent analytics dashboards, and optimization systems.", color: "var(--cat-gov)" },
    { name: CATEGORIES.MULTI_AGENT, weight: "5%", desc: "Single-Agent (SOMA) architectural trade-offs for scale/control, open multi-agent protocols like Model Context Protocol (MCP), and Agent-to-Agent (A2A) specifications.", color: "var(--cat-multi)" }
  ];

  const totalQuestions = state.questions.length;

  pane.innerHTML = `
    <div class="dashboard-grid">
      <div class="dash-card">
        <h2>📋 Exam Overview</h2>
        <p>Salesforce Certified Agentforce Specialist (Spring '26)</p>
        <div class="stat-row">
          <div class="stat-box">
            <div class="stat-value">60</div>
            <div class="stat-label">Questions</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">105</div>
            <div class="stat-label">Minutes</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">68%</div>
            <div class="stat-label">Passing Score</div>
          </div>
        </div>
        <p style="font-size:.8rem;color:var(--text-muted);margin-top:12px">
          Multiple-choice format (3 options per question). This simulator contains ${totalQuestions} practice questions across all sections.
        </p>
      </div>

      <div class="dash-card">
        <h2>🎯 Your Progress</h2>
        <p>Track your study progress across all sections.</p>
        <div class="stat-row">
          <div class="stat-box">
            <div class="stat-value" id="dash-answered">0</div>
            <div class="stat-label">Answered</div>
          </div>
          <div class="stat-box">
            <div class="stat-value" id="dash-correct">0</div>
            <div class="stat-label">Correct</div>
          </div>
          <div class="stat-box">
            <div class="stat-value" id="dash-score">—</div>
            <div class="stat-label">Score</div>
          </div>
        </div>
      </div>

      <div class="dash-card full-width">
        <h3>📚 Exam Topic Breakdown</h3>
        <p>The Agentforce Specialist exam covers 6 domains. Click each category tab to practice.</p>
        <ul class="topic-checklist">
          ${topicList.map((t, idx) => {
            const count = state.questions.filter(q => q.category === t.name).length;
            return `
            <li>
              <input type="checkbox" id="chk-${idx}">
              <div>
                <strong>${t.name}</strong><br>
                <span style="font-size:.78rem;color:var(--text-muted)">${t.desc}</span>
              </div>
              <span class="topic-weight" style="color:${t.color}">${t.weight} · ${count} Qs</span>
            </li>`;
          }).join("")}
        </ul>
      </div>

      <div class="dash-card full-width">
        <h3>📈 Category Progress</h3>
        <p>Your completion rate per study domain.</p>
        <div class="cat-progress-grid">
          ${topicList.map((t, idx) => {
            const catId = `cat-progress-${idx}`;
            return `
            <div class="cat-progress-item" style="border-left-color:${t.color}">
              <div class="cp-label">${t.name}</div>
              <div class="cp-bar"><div class="cp-fill" id="${catId}-fill" style="background:${t.color}"></div></div>
              <div class="cp-text" id="${catId}-text">0% complete</div>
            </div>`;
          }).join("")}
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// SECTION 7: QUIZ RENDERING
// ============================================================

function renderAllQuizTabs() {
  // Tabs 1-6: Category-filtered, shuffled
  for (let i = 1; i <= 6; i++) {
    const cat = TAB_CATEGORIES[i];
    const questions = state.questions.filter(q => q.category === cat);
    const shuffled = shuffleQuestions(questions);
    generateShuffleMaps(shuffled);
    renderQuizTab(i, cat, shuffled);
  }
  // Tab 7: Full simulator (shuffled copy of all questions)
  const shuffled = shuffleQuestions(state.questions);
  generateShuffleMaps(shuffled);
  renderQuizTab(7, "Full 379-Question Simulator", shuffled);
}

function getTabQuestions(tabIndex) {
  if (tabIndex === 7) return [...state.questions];
  const cat = TAB_CATEGORIES[tabIndex];
  return state.questions.filter(q => q.category === cat);
}

/**
 * Re-shuffle a specific tab: reorder questions AND reshuffle all options.
 */
window.shuffleTab = function(tabIndex) {
  const title = tabIndex === 7
    ? "Full 379-Question Simulator"
    : TAB_CATEGORIES[tabIndex];
  const questions = getTabQuestions(tabIndex);
  const shuffled = shuffleQuestions(questions);
  generateShuffleMaps(shuffled);
  renderQuizTab(tabIndex, title, shuffled);
  restoreSubmittedState(tabIndex);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function restoreSubmittedState(tabIndex) {
  const pane = document.getElementById(`tab-${tabIndex}`);
  if (!pane) return;

  const cards = pane.querySelectorAll(".question-card");
  cards.forEach(card => {
    const qid = parseInt(card.dataset.qid);
    if (!state.submitted[qid]) return;

    const q = state.questions.find(x => x.id === qid);
    const userAnswers = state.answers[qid] || [];
    const shuffledOptions = state.shuffleMap[qid] || q.choices;

    // Evaluate correct answer strictly based on string match of selected option text
    const selectedLetter = userAnswers[0];
    let selectedOptionText = "";
    if (selectedLetter) {
      const idx = selectedLetter.charCodeAt(0) - 65;
      selectedOptionText = shuffledOptions[idx];
    }
    const isCorrect = (selectedOptionText === q.correctAnswerText);

    const correctOptionIndex = shuffledOptions.indexOf(q.correctAnswerText);
    const correctLetter = correctOptionIndex !== -1 ? String.fromCharCode(65 + correctOptionIndex) : "";

    if (state.mode === "study") {
      card.classList.add(isCorrect ? "answered-correct" : "answered-incorrect");
      const options = card.querySelectorAll(".option-item");
      options.forEach(opt => {
        const l = opt.dataset.letter;
        opt.classList.add("disabled");
        if (l === correctLetter) opt.classList.add("correct");
        else if (userAnswers.includes(l)) opt.classList.add("incorrect");
      });
      const btn = $(`#submit-${qid}`);
      if (btn) btn.style.display = "none";
      const explanation = $(`#explanation-${qid}`);
      if (explanation) explanation.classList.add("visible");
    } else {
      const btn = $(`#submit-${qid}`);
      if (btn) {
        btn.textContent = "✓ Saved";
        btn.disabled = true;
        btn.classList.remove("primary");
        btn.classList.add("secondary");
      }
      const options = card.querySelectorAll(".option-item");
      options.forEach(opt => {
        const l = opt.dataset.letter;
        opt.classList.toggle("selected", userAnswers.includes(l));
      });
    }
  });
}

function renderQuizTab(tabIndex, title, questions) {
  const pane = document.getElementById(`tab-${tabIndex}`);
  if (!pane) return;

  const shuffleBtn = `<button class="btn-shuffle" onclick="shuffleTab(${tabIndex})" title="Shuffle question order and option positions">🔀 Shuffle</button>`;

  pane.innerHTML = `
    <div class="section-header">
      <h2>${title}</h2>
      <div class="section-header-actions">
        ${shuffleBtn}
        <span class="section-progress" id="progress-${tabIndex}">0 / ${questions.length} Answered</span>
      </div>
    </div>
    <div class="quiz-container" id="quiz-${tabIndex}">
      ${questions.map(q => renderQuestionCard(q)).join("")}
    </div>
  `;
}

/**
 * Renders a single question card using the SHUFFLED option order.
 * The displayed letters (A, B, C) correspond to the shuffled positions,
 * not the original positions in the markdown.
 */
function renderQuestionCard(q) {
  let displayOptions = state.shuffleMap[q.id];
  if (!displayOptions) {
    displayOptions = [...q.choices];
  }

  const isMulti = q.multi || false;

  return `
    <div class="question-card" id="qcard-${q.id}" data-qid="${q.id}">
      <div class="question-header">
        <div class="question-number">Q${q.id}</div>
        <div class="question-body">
          <div class="question-text">
            ${q.text}
          </div>
        </div>
      </div>
      <div class="options-list" id="options-${q.id}">
        ${displayOptions.map((optText, idx) => {
          const letter = String.fromCharCode(65 + idx);
          return `
            <div class="option-item" data-qid="${q.id}" data-letter="${letter}" onclick="selectOption(${q.id},'${letter}',${isMulti})">
              <div class="option-radio"></div>
              <div class="option-letter">${letter}</div>
              <div class="option-text">${optText}</div>
            </div>
          `;
        }).join("")}
      </div>
      <div class="question-actions" id="actions-${q.id}">
        <button class="btn-submit primary" id="submit-${q.id}" disabled onclick="submitAnswer(${q.id})">Submit Answer</button>
      </div>
      <div class="explanation-panel" id="explanation-${q.id}">
        <h4>💡 Explanation</h4>
        <p>${q.explanation}</p>
      </div>
    </div>
  `;
}

// ============================================================
// SECTION 8: ANSWER SELECTION & SUBMISSION
// ============================================================

window.selectOption = function(qid, letter, isMulti) {
  if (state.submitted[qid] && state.mode === "study") return;

  if (!state.answers[qid]) state.answers[qid] = [];

  const maxSelect = 1;

  if (isMulti) {
    const idx = state.answers[qid].indexOf(letter);
    if (idx > -1) {
      state.answers[qid].splice(idx, 1);
    } else {
      if (state.answers[qid].length < maxSelect) {
        state.answers[qid].push(letter);
      } else {
        state.answers[qid].shift();
        state.answers[qid].push(letter);
      }
    }
  } else {
    state.answers[qid] = [letter];
  }

  // Update UI
  const options = $$(`#options-${qid} .option-item`);
  options.forEach(opt => {
    const l = opt.dataset.letter;
    opt.classList.toggle("selected", state.answers[qid].includes(l));
  });

  // Enable submit button
  const btn = $(`#submit-${qid}`);
  if (btn) btn.disabled = state.answers[qid].length === 0;
};

window.submitAnswer = function(qid) {
  if (state.submitted[qid]) return;

  const q = state.questions.find(x => x.id === qid);
  const userAnswers = state.answers[qid] || [];
  const shuffledOptions = state.shuffleMap[qid] || q.choices;

  // Retrieve the selected option's text by converting the letter back to an index
  const selectedLetter = userAnswers[0];
  let selectedOptionText = "";
  if (selectedLetter) {
    const idx = selectedLetter.charCodeAt(0) - 65;
    selectedOptionText = shuffledOptions[idx];
  }

  // Compare text content directly
  const isCorrect = (selectedOptionText === q.correctAnswerText);

  // Find correct letter dynamically
  const correctOptionIndex = shuffledOptions.indexOf(q.correctAnswerText);
  const correctLetter = correctOptionIndex !== -1 ? String.fromCharCode(65 + correctOptionIndex) : "";

  if (state.mode === "exam") {
    // In exam mode, just mark as submitted silently — no feedback
    state.submitted[qid] = true;
    const btn = $(`#submit-${qid}`);
    if (btn) {
      btn.textContent = "✓ Saved";
      btn.disabled = true;
      btn.classList.remove("primary");
      btn.classList.add("secondary");
    }
    updateScoreMatrix();
    updateTabProgress();
    return;
  }

  // Study mode: show immediate feedback
  state.submitted[qid] = true;

  const card = $(`#qcard-${qid}`);
  if (card) card.classList.add(isCorrect ? "answered-correct" : "answered-incorrect");

  // Style options — highlight correct and incorrect
  const options = $$(`#options-${qid} .option-item`);
  options.forEach(opt => {
    const l = opt.dataset.letter;
    opt.classList.add("disabled");
    opt.classList.remove("selected");

    if (l === correctLetter) {
      opt.classList.add("correct");
    } else if (userAnswers.includes(l)) {
      opt.classList.add("incorrect");
    }
  });

  // Hide submit button, show explanation
  const btn = $(`#submit-${qid}`);
  if (btn) btn.style.display = "none";

  const explanation = $(`#explanation-${qid}`);
  if (explanation) explanation.classList.add("visible");

  updateScoreMatrix();
  updateTabProgress();
};

// ============================================================
// SECTION 9: SCORE MATRIX & PROGRESS
// ============================================================

function updateScoreMatrix() {
  const totalQuestions = state.questions.length;
  const totalAnswered = Object.keys(state.submitted).length;
  let correctCount = 0;

  Object.keys(state.submitted).forEach(qid => {
    const q = state.questions.find(x => x.id === parseInt(qid));
    if (!q) return;
    const userAnswers = state.answers[qid] || [];
    const shuffledOptions = state.shuffleMap[q.id] || q.choices;

    const selectedLetter = userAnswers[0];
    let selectedOptionText = "";
    if (selectedLetter) {
      const idx = selectedLetter.charCodeAt(0) - 65;
      selectedOptionText = shuffledOptions[idx];
    }

    if (selectedOptionText === q.correctAnswerText) {
      correctCount++;
    }
  });

  const score = totalAnswered > 0 ? ((correctCount / totalAnswered) * 100).toFixed(1) : "0.0";
  const passing = parseFloat(score) >= 68;

  // Update header pills
  const progressPill = $("#pill-progress");
  const scorePill = $("#pill-score");
  const statusPill = $("#pill-status");

  if (progressPill) progressPill.querySelector(".pill-value").textContent = `${totalAnswered}/${totalQuestions}`;
  if (scorePill) scorePill.querySelector(".pill-value").textContent = `${score}%`;
  if (statusPill) {
    statusPill.querySelector(".pill-value").textContent = passing ? "Passing" : "Not Passing";
    statusPill.className = `score-pill ${passing ? "passing" : "failing"}`;
  }

  // Update dashboard stats
  const dashAnswered = $("#dash-answered");
  const dashCorrect = $("#dash-correct");
  const dashScore = $("#dash-score");

  if (dashAnswered) dashAnswered.textContent = totalAnswered;
  if (dashCorrect) dashCorrect.textContent = correctCount;
  if (dashScore) dashScore.textContent = totalAnswered > 0 ? `${score}%` : "—";
}

function updateTabProgress() {
  // Category tabs (1-6)
  for (let i = 1; i <= 6; i++) {
    const cat = TAB_CATEGORIES[i];
    const questions = state.questions.filter(q => q.category === cat);
    const answered = questions.filter(q => state.submitted[q.id]).length;
    const el = $(`#progress-${i}`);
    if (el) el.textContent = `${answered} / ${questions.length} Answered`;
  }

  // Full simulator tab
  const allAnswered = Object.keys(state.submitted).length;
  const el7 = $(`#progress-7`);
  if (el7) el7.textContent = `${allAnswered} / ${state.questions.length} Answered`;

  // Update dashboard category progress bars
  const topicKeys = [
    CATEGORIES.AGENTS,
    CATEGORIES.PROMPT,
    CATEGORIES.DATA_360,
    CATEGORIES.TESTING,
    CATEGORIES.GOVERNANCE,
    CATEGORIES.MULTI_AGENT
  ];
  topicKeys.forEach((cat, idx) => {
    const questions = state.questions.filter(q => q.category === cat);
    const answered = questions.filter(q => state.submitted[q.id]).length;
    const pct = questions.length > 0 ? Math.round((answered / questions.length) * 100) : 0;

    const fill = $(`#cat-progress-${idx}-fill`);
    const text = $(`#cat-progress-${idx}-text`);
    if (fill) fill.style.width = `${pct}%`;
    if (text) text.textContent = `${pct}% complete (${answered}/${questions.length})`;
  });
}

// ============================================================
// SECTION 10: MODE TOGGLE (STUDY / EXAM)
// ============================================================

function toggleMode(isExam) {
  state.mode = isExam ? "exam" : "study";

  const timer = $(".exam-timer");
  const submitExam = $(".submit-exam-btn");

  if (isExam) {
    // Reset state for exam mode
    state.answers = {};
    state.submitted = {};
    state.shuffleMap = {};
    state.examSubmitted = false;
    state.timerSeconds = 105 * 60;

    // Re-render quiz tabs with fresh shuffles
    renderAllQuizTabs();
    updateScoreMatrix();
    updateTabProgress();

    // Start timer
    timer.classList.add("visible");
    submitExam.classList.add("visible");
    startTimer();

    // Switch to full exam tab
    setActiveTab(7);
  } else {
    // Reset state for study mode
    state.answers = {};
    state.submitted = {};
    state.shuffleMap = {};

    stopTimer();
    timer.classList.remove("visible");
    timer.classList.remove("warning");
    submitExam.classList.remove("visible");

    renderAllQuizTabs();
    updateScoreMatrix();
    updateTabProgress();
    setActiveTab(0);
  }
}

// ============================================================
// SECTION 11: EXAM TIMER
// ============================================================

function startTimer() {
  stopTimer();
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timerSeconds--;
    if (state.timerSeconds <= 0) {
      stopTimer();
      submitExam();
    }
    // Add warning pulse when less than 5 minutes remain
    if (state.timerSeconds <= 300) {
      $(".exam-timer").classList.add("warning");
    }
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const hours = Math.floor(state.timerSeconds / 3600);
  const mins = Math.floor((state.timerSeconds % 3600) / 60);
  const secs = state.timerSeconds % 60;
  const display = `${hours > 0 ? hours + ':' : ''}${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  const timerText = $("#timer-text");
  if (timerText) timerText.textContent = display;
}

// ============================================================
// SECTION 12: EXAM SUBMISSION & RESULTS
// ============================================================

function submitExam() {
  if (state.examSubmitted) return;
  state.examSubmitted = true;
  stopTimer();

  // Calculate results per category
  let totalCorrect = 0;
  const sectionResults = {};

  Object.values(CATEGORIES).forEach(cat => {
    sectionResults[cat] = { total: 0, correct: 0 };
  });

  state.questions.forEach(q => {
    sectionResults[q.category].total++;
    const userAnswers = state.answers[q.id] || [];
    const shuffledOptions = state.shuffleMap[q.id] || q.choices;

    const selectedLetter = userAnswers[0];
    let selectedOptionText = "";
    if (selectedLetter) {
      const idx = selectedLetter.charCodeAt(0) - 65;
      selectedOptionText = shuffledOptions[idx];
    }

    if (selectedOptionText === q.correctAnswerText) {
      totalCorrect++;
      sectionResults[q.category].correct++;
    }
  });

  const totalQuestions = state.questions.length;
  const totalAnswered = Object.keys(state.submitted).length;
  const score = ((totalCorrect / totalQuestions) * 100).toFixed(1);
  const passed = parseFloat(score) >= 68;

  showResultsModal(totalAnswered, totalCorrect, score, passed, sectionResults);
}

function showResultsModal(answered, correct, score, passed, sections) {
  const overlay = $(".results-overlay");
  const circumference = 2 * Math.PI * 65;
  const offset = circumference - (parseFloat(score) / 100) * circumference;
  const strokeColor = passed ? "var(--color-correct)" : "var(--color-incorrect)";

  const totalQuestions = state.questions.length;

  const modal = overlay.querySelector(".results-modal");
  modal.innerHTML = `
    <h2>${passed ? "🎉 Congratulations!" : "📝 Keep Studying!"}</h2>
    <p class="result-subtitle">${passed ? "You passed the practice exam!" : "You didn't reach the 68% passing threshold."}</p>

    <div class="result-score-ring">
      <svg viewBox="0 0 140 140">
        <circle class="ring-bg" cx="70" cy="70" r="65"/>
        <circle class="ring-progress" cx="70" cy="70" r="65"
          stroke="${strokeColor}"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${offset}"/>
      </svg>
      <div class="ring-text" style="color:${strokeColor}">
        ${score}%
        <span>Score</span>
      </div>
    </div>

    <div class="results-breakdown">
      <div class="result-stat ${passed ? 'pass' : 'fail'}">
        <div class="rs-value">${correct}/${totalQuestions}</div>
        <div class="rs-label">Correct</div>
      </div>
      <div class="result-stat">
        <div class="rs-value">${answered}</div>
        <div class="rs-label">Answered</div>
      </div>
      <div class="result-stat">
        <div class="rs-value">${totalQuestions - answered}</div>
        <div class="rs-label">Unanswered</div>
      </div>
      <div class="result-stat ${passed ? 'pass' : 'fail'}">
        <div class="rs-value">${passed ? "PASS" : "FAIL"}</div>
        <div class="rs-label">Status (≥68%)</div>
      </div>
    </div>

    <table class="results-section-table">
      <thead>
        <tr><th>Section</th><th>Weight</th><th>Score</th><th>Result</th></tr>
      </thead>
      <tbody>
        ${Object.entries(sections).map(([name, data]) => {
          const pct = data.total > 0 ? ((data.correct / data.total) * 100).toFixed(0) : 0;
          const weight = CATEGORY_WEIGHTS[name] || "—";
          return `<tr>
            <td>${name}</td>
            <td>${weight}</td>
            <td>${data.correct}/${data.total} (${pct}%)</td>
            <td style="color:${pct >= 68 ? 'var(--color-correct)' : 'var(--color-incorrect)'}">${pct >= 68 ? "✓ Pass" : "✕ Needs Work"}</td>
          </tr>`;
        }).join("")}
      </tbody>
    </table>

    <button class="results-close-btn" onclick="closeResults()">Review Answers</button>
  `;

  overlay.classList.add("visible");
}

window.closeResults = function() {
  $(".results-overlay").classList.remove("visible");

  // Show correct/incorrect feedback on all questions after exam review
  state.questions.forEach(q => {
    const userAnswers = state.answers[q.id] || [];
    const shuffledOptions = state.shuffleMap[q.id] || q.choices;

    const selectedLetter = userAnswers[0];
    let selectedOptionText = "";
    if (selectedLetter) {
      const idx = selectedLetter.charCodeAt(0) - 65;
      selectedOptionText = shuffledOptions[idx];
    }

    const isCorrect = (selectedOptionText === q.correctAnswerText);

    const correctOptionIndex = shuffledOptions.indexOf(q.correctAnswerText);
    const correctLetter = correctOptionIndex !== -1 ? String.fromCharCode(65 + correctOptionIndex) : "";

    const card = $(`#qcard-${q.id}`);
    if (card) card.classList.add(isCorrect ? "answered-correct" : "answered-incorrect");

    const options = $$(`#options-${q.id} .option-item`);
    options.forEach(opt => {
      const l = opt.dataset.letter;
      opt.classList.add("disabled");
      opt.classList.remove("selected");
      if (l === correctLetter) opt.classList.add("correct");
      else if (userAnswers.includes(l)) opt.classList.add("incorrect");
    });

    const explanation = $(`#explanation-${q.id}`);
    if (explanation) explanation.classList.add("visible");

    const btn = $(`#submit-${q.id}`);
    if (btn) btn.style.display = "none";
  });
};

// ============================================================
// SECTION 13: EVENT BINDINGS
// ============================================================

function bindEvents() {
  // Tab clicks (delegated)
  document.addEventListener("click", (e) => {
    const tabBtn = e.target.closest(".tab-btn");
    if (tabBtn) {
      setActiveTab(parseInt(tabBtn.dataset.tab));
    }
  });

  // Mode toggle
  const toggle = $("#mode-toggle");
  if (toggle) {
    toggle.addEventListener("change", (e) => {
      if (e.target.checked) {
        if (confirm("Switching to Exam Mode will reset all your answers and start a 105-minute timer. Continue?")) {
          toggleMode(true);
        } else {
          e.target.checked = false;
        }
      } else {
        if (confirm("Switching back to Study Mode will reset your exam progress. Continue?")) {
          toggleMode(false);
        } else {
          e.target.checked = true;
        }
      }
    });
  }

  // Submit exam button
  const submitBtn = $(".submit-exam-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to submit the exam? You cannot change answers after submitting.")) {
        submitExam();
      }
    });
  }
}

// ============================================================
// SECTION 14: UTILITY FUNCTIONS
// ============================================================

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((val, i) => val === b[i]);
}

// ============================================================
// SECTION 15: INITIALIZATION
// ============================================================

document.addEventListener("DOMContentLoaded", async () => {
  // Check for stored session
  if (sessionStorage.getItem("simulator_unlocked") === "true") {
    unlockApp(true);
  }

  // Fetch and parse the markdown question bank
  const questions = await fetchAndParseQuestions();

  if (questions.length === 0) {
    // Error state already handled in fetchAndParseQuestions
    return;
  }

  // Store parsed questions in global state
  state.questions = questions;

  // Hide loading overlay
  const loadingOverlay = document.getElementById("loading-overlay");
  if (loadingOverlay) {
    loadingOverlay.classList.add("hidden");
  }

  // Build the application
  renderTabButtons();
  renderDashboard();
  renderAllQuizTabs();
  updateScoreMatrix();
  updateTabProgress();
  bindEvents();
  setActiveTab(0);
});
