/* ============================================================
   SHORTS MASTERY HUB — script.js
   All logic: auth, courses, idea gen, tools, monetization,
   dashboard, quizzes, notifications, dark mode
   ============================================================ */

/* ===================== DATA ===================== */

// Course Data
const COURSES = [
  {
    id: 'yt-growth-1',
    title: 'YouTube Shorts Algorithm Mastery',
    category: 'growth',
    categoryLabel: '📈 Growth',
    emoji: '🚀',
    gradient: 'linear-gradient(135deg,#ff2d55,#ff6b35)',
    desc: 'Decode the Shorts algorithm, optimize for the feed, and grow from 0 to 10K subscribers using proven data-driven strategies.',
    lessons: 8,
    level: 'Beginner',
    featured: true,
    videoId: 'dQw4w9WgXcQ', // placeholder embed
    lessonList: [
      { name: 'How the Shorts Feed Algorithm Works', duration: '8 min' },
      { name: 'Optimizing Your Title & Description', duration: '6 min' },
      { name: 'Thumbnail Psychology for Shorts', duration: '7 min' },
      { name: 'Posting Frequency & Timing', duration: '5 min' },
      { name: 'Using Hashtags Correctly', duration: '4 min' },
      { name: 'Analyzing Your Analytics', duration: '9 min' },
      { name: 'Channel Consistency Framework', duration: '6 min' },
      { name: 'From 1K to 10K: Case Studies', duration: '12 min' },
    ],
    quiz: {
      question: 'What is the most important metric the Shorts algorithm uses to push your video to more viewers?',
      options: ['Subscriber count', 'Watch-through rate', 'Likes', 'Upload frequency'],
      correct: 1,
      explanation: 'Watch-through rate (how many viewers watch your Short to the end) is the #1 signal for the algorithm.'
    }
  },
  {
    id: 'capcut-editing',
    title: 'CapCut Editing for Viral Shorts',
    category: 'editing',
    categoryLabel: '✂️ Editing',
    emoji: '✂️',
    gradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)',
    desc: 'Master CapCut from scratch — transitions, text animations, trending effects and audio sync. Create scroll-stopping edits in 30 minutes.',
    lessons: 10,
    level: 'Beginner',
    featured: true,
    videoId: 'dQw4w9WgXcQ',
    lessonList: [
      { name: 'CapCut Interface Overview', duration: '5 min' },
      { name: 'Cutting & Trimming Like a Pro', duration: '8 min' },
      { name: 'Transitions That Actually Work', duration: '7 min' },
      { name: 'Text Animations & Captions', duration: '9 min' },
      { name: 'Trending Audio & Beat Sync', duration: '8 min' },
      { name: 'Color Grading Your Footage', duration: '6 min' },
      { name: 'CapCut Templates (Use & Create)', duration: '7 min' },
      { name: 'Speed Ramp Effect (Slow Mo)', duration: '6 min' },
      { name: 'Green Screen & Background Removal', duration: '8 min' },
      { name: 'Export Settings for Max Quality', duration: '4 min' },
    ],
    quiz: {
      question: 'Which CapCut feature automatically syncs your cuts to the music beat?',
      options: ['Auto Captions', 'Beat Sync', 'Stabilize', 'Auto Reframe'],
      correct: 1,
      explanation: 'Beat Sync automatically detects the BPM of your audio and places cut points on the beat for you.'
    }
  },
  {
    id: 'content-ideas',
    title: 'Finding Viral Niches & Content Ideas',
    category: 'ideas',
    categoryLabel: '💡 Ideas & Niches',
    emoji: '💡',
    gradient: 'linear-gradient(135deg,#f7971e,#ffd200)',
    desc: 'Discover untapped niches, reverse-engineer viral Shorts, and build a content calendar that keeps you posting consistently for months.',
    lessons: 7,
    level: 'Beginner',
    featured: true,
    videoId: 'dQw4w9WgXcQ',
    lessonList: [
      { name: 'Niche Selection Framework', duration: '10 min' },
      { name: 'Reverse-Engineering Viral Shorts', duration: '8 min' },
      { name: 'The Hook Formula (3 Seconds)', duration: '7 min' },
      { name: 'Content Pillars & Planning', duration: '6 min' },
      { name: 'Using TikTok & Pinterest for Ideas', duration: '5 min' },
      { name: 'Faceless Channel Ideas', duration: '8 min' },
      { name: 'Building a 30-Day Content Calendar', duration: '9 min' },
    ],
    quiz: {
      question: 'How many seconds do you have to hook a viewer before they scroll away from your Short?',
      options: ['5 seconds', '3 seconds', '10 seconds', '1 second'],
      correct: 1,
      explanation: 'Research shows you have approximately 3 seconds to hook the viewer — your opening must be immediately compelling.'
    }
  },
  {
    id: 'monetization-course',
    title: 'Monetization Strategies for Shorts Creators',
    category: 'monetization',
    categoryLabel: '💰 Monetization',
    emoji: '💰',
    gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)',
    desc: 'Turn your views into real income. Learn YPP, affiliate marketing, sponsorship pitching, and digital product creation — step by step.',
    lessons: 9,
    level: 'Intermediate',
    featured: true,
    videoId: 'dQw4w9WgXcQ',
    lessonList: [
      { name: 'YouTube Partner Program 2024', duration: '8 min' },
      { name: 'Best Affiliate Programs for Shorts', duration: '9 min' },
      { name: 'How to Land Your First Sponsorship', duration: '10 min' },
      { name: 'Creating & Selling Digital Products', duration: '8 min' },
      { name: 'Channel Memberships Setup', duration: '5 min' },
      { name: 'Merchandise with Zero Upfront Cost', duration: '7 min' },
      { name: 'Building an Email List from Shorts', duration: '8 min' },
      { name: 'Scaling to $1,000/month', duration: '12 min' },
      { name: 'Tracking Your Income & Expenses', duration: '6 min' },
    ],
    quiz: {
      question: 'How many Shorts views do you need in 90 days to qualify for the YouTube Partner Program?',
      options: ['1 million', '5 million', '10 million', '500K'],
      correct: 2,
      explanation: 'YouTube requires 10 million Shorts views within 90 days (plus 1,000 subscribers) to qualify for YPP.'
    }
  },
  {
    id: 'vn-editing',
    title: 'VN Editor: Professional Shorts Editing',
    category: 'editing',
    categoryLabel: '✂️ Editing',
    emoji: '🎬',
    gradient: 'linear-gradient(135deg,#f093fb,#f5576c)',
    desc: 'A powerful free alternative to CapCut. Master VN editor for cinematic-looking Shorts with advanced color and audio control.',
    lessons: 6,
    level: 'Intermediate',
    featured: false,
    videoId: 'dQw4w9WgXcQ',
    lessonList: [
      { name: 'VN vs CapCut: Which to Use', duration: '5 min' },
      { name: 'VN Interface Walkthrough', duration: '7 min' },
      { name: 'Keyframe Animations in VN', duration: '8 min' },
      { name: 'LUTs & Color Grading', duration: '7 min' },
      { name: 'Multi-Layer Editing', duration: '9 min' },
      { name: 'Exporting for Shorts', duration: '4 min' },
    ],
    quiz: {
      question: 'What is a LUT in video editing?',
      options: ['A type of transition', 'A color grading preset', 'A font style', 'A video format'],
      correct: 1,
      explanation: 'LUT stands for Look-Up Table — it\'s a color grading preset that transforms the colors in your footage with one click.'
    }
  },
  {
    id: 'islamic-shorts',
    title: 'Islamic Shorts: Growing a Halal Channel',
    category: 'ideas',
    categoryLabel: '💡 Ideas & Niches',
    emoji: '🌙',
    gradient: 'linear-gradient(135deg,#0f2027,#2c5364)',
    desc: 'Build a meaningful Islamic content channel. Topics, scripting, ethics, and monetization for dawah-focused creators.',
    lessons: 6,
    level: 'Beginner',
    featured: false,
    videoId: 'dQw4w9WgXcQ',
    lessonList: [
      { name: 'Islamic Content That Goes Viral', duration: '8 min' },
      { name: 'Scripting Reminders & Duas', duration: '7 min' },
      { name: 'Using Quran & Hadith Correctly', duration: '6 min' },
      { name: 'Halal Monetization Options', duration: '8 min' },
      { name: 'Growing a Dawah Community', duration: '7 min' },
      { name: 'Avoiding Common Mistakes', duration: '6 min' },
    ],
    quiz: {
      question: 'Which type of Islamic content tends to perform best on Shorts?',
      options: ['Long debates', 'Short reminders & motivational quotes', 'Full lectures', 'News commentary'],
      correct: 1,
      explanation: 'Short, powerful reminders and motivational Islamic quotes match the Shorts format perfectly and drive high engagement.'
    }
  },
  {
    id: 'gaming-shorts',
    title: 'Gaming Shorts: Clips That Go Viral',
    category: 'growth',
    categoryLabel: '📈 Growth',
    emoji: '🎮',
    gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
    desc: 'Turn your gameplay into viral clips. Learn which moments to capture, how to edit for maximum impact, and how to grow a gaming channel.',
    lessons: 7,
    level: 'Beginner',
    featured: false,
    videoId: 'dQw4w9WgXcQ',
    lessonList: [
      { name: 'Which Games Get the Most Views', duration: '6 min' },
      { name: 'Recording Your Gameplay (OBS, etc.)', duration: '8 min' },
      { name: 'Identifying Clip-Worthy Moments', duration: '7 min' },
      { name: 'Adding Reactions & Commentary', duration: '6 min' },
      { name: 'Sound Effects & Music for Gaming', duration: '5 min' },
      { name: 'Growing Without Showing Your Face', duration: '8 min' },
      { name: 'Getting Brand Deals in Gaming', duration: '9 min' },
    ],
    quiz: {
      question: 'What is the ideal length for a gaming Short to maximize watch-through rate?',
      options: ['60 seconds', '15-30 seconds', '45 seconds', '10 seconds'],
      correct: 1,
      explanation: 'Gaming Shorts between 15-30 seconds tend to have the highest watch-through rates, keeping energy levels high throughout.'
    }
  },
  {
    id: 'affiliate-shorts',
    title: 'Affiliate Marketing Through Shorts',
    category: 'monetization',
    categoryLabel: '💰 Monetization',
    emoji: '🔗',
    gradient: 'linear-gradient(135deg,#11998e,#38ef7d)',
    desc: 'The step-by-step system to earn $500–$2000/month promoting products in your Shorts without being spammy or losing subscribers.',
    lessons: 8,
    level: 'Intermediate',
    featured: false,
    videoId: 'dQw4w9WgXcQ',
    lessonList: [
      { name: 'Choosing the Right Affiliate Programs', duration: '8 min' },
      { name: 'How to Naturally Mention Products', duration: '7 min' },
      { name: 'Amazon Associates for Shorts', duration: '9 min' },
      { name: 'Description Link Optimization', duration: '5 min' },
      { name: 'Tracking Conversions', duration: '6 min' },
      { name: 'Best Niches for Affiliate Shorts', duration: '7 min' },
      { name: 'Creating a Review-Style Short', duration: '8 min' },
      { name: 'Scaling to $1K/month with Affiliates', duration: '10 min' },
    ],
    quiz: {
      question: 'Where should you always put your affiliate link in a Short?',
      options: ['In the comments', 'In the video description', 'Verbal mention only', 'In the thumbnail'],
      correct: 1,
      explanation: 'Always put your affiliate link in the video description — it\'s the only clickable link available and easy for viewers to find.'
    }
  }
];

// Idea Generator Data
const IDEAS = {
  funny: [
    { text: '5 Things Only Broke People Understand 😂', hook: 'Hook: "If you\'ve ever counted coins for gas..."' },
    { text: 'Texting Your Crush vs Texting Your Mom', hook: 'Hook: "The anxiety is NOT the same..."' },
    { text: 'Me at 3am vs Me at 3pm', hook: 'Hook: "Two completely different species."' },
    { text: 'When You Finally Understand a Math Problem After the Test', hook: 'Hook: "The betrayal is REAL..."' },
    { text: '10 Types of Students in Every Class', hook: 'Hook: "Which one are YOU?"' },
  ],
  facts: [
    { text: '5 Psychological Facts That Will Change How You Think', hook: 'Hook: "Number 3 explained my entire personality..."' },
    { text: 'Why Your Brain Lies to You Every Single Day', hook: 'Hook: "Everything you feel is a construction..."' },
    { text: '3 Historical Events That Sound Fake But Are 100% Real', hook: 'Hook: "The history books skipped this..."' },
    { text: 'Scientists Found This Inside a 3000-Year-Old Mummy', hook: 'Hook: "Nobody was prepared for this discovery..."' },
    { text: '7 Animals That Shouldn\'t Exist But Do', hook: 'Hook: "Nature was not following the rules here..."' },
  ],
  islamic: [
    { text: 'The Dua You Should Say Every Morning (and its meaning)', hook: 'Hook: "This changed how I start every day..."' },
    { text: '3 Reminders from Surah Al-Kahf That Hit Different', hook: 'Hook: "Recite this every Friday. Here\'s why..."' },
    { text: 'What Islam Says About Overthinking', hook: 'Hook: "This hadith gave me peace I can\'t explain..."' },
    { text: 'The Story of Yunus (AS) in 60 Seconds', hook: 'Hook: "A prophet swallowed by a whale. Here\'s what happened..."' },
    { text: '5 Sunnah Habits That Are Scientifically Proven', hook: 'Hook: "Islam said it 1400 years ago. Science just caught up."' },
  ],
  gaming: [
    { text: 'I Used ONLY Default Weapons and This Happened...', hook: 'Hook: "Nobody expected this to work..."' },
    { text: '5 Video Game Easter Eggs You\'ve Never Seen', hook: 'Hook: "Hidden for 10 years and nobody noticed..."' },
    { text: 'The RAREST Item in [Popular Game] and How to Get It', hook: 'Hook: "99% of players never find this..."' },
    { text: 'What Happens If You Stay AFK for 24 Hours in [Game]', hook: 'Hook: "I tested it so you don\'t have to..."' },
    { text: 'One Bug That Broke the Entire Game', hook: 'Hook: "The developers didn\'t see this coming..."' },
  ],
  motivation: [
    { text: 'The 5am Rule That Changed My Life in 30 Days', hook: 'Hook: "I was miserable. Then I tried this..."' },
    { text: 'What Nobody Tells You About Being Broke at 20', hook: 'Hook: "This is the information I needed at 18..."' },
    { text: 'Stop Consuming. Start Creating. Here\'s Why.', hook: 'Hook: "Social media is designed to keep you a viewer, not a creator..."' },
    { text: '3 Books That Will Make You Smarter in 60 Days', hook: 'Hook: "I read 100 books. These 3 changed everything..."' },
    { text: 'The Uncomfortable Truth About Why You\'re Not Growing', hook: 'Hook: "It\'s not talent. It\'s not luck. It\'s this..."' },
  ],
  all: []
};
// Fill "all" category
IDEAS.all = [...IDEAS.funny, ...IDEAS.facts, ...IDEAS.islamic, ...IDEAS.gaming, ...IDEAS.motivation];

// Tools Data
const TOOLS = [
  { icon: '✂️', name: 'CapCut', tag: 'free', tagLabel: 'Free', desc: 'The #1 mobile editor for Shorts. AI captions, templates, beat sync, transitions — everything in one app.' },
  { icon: '🎬', name: 'VN Editor', tag: 'free', tagLabel: 'Free', desc: 'Powerful multi-layer editor with LUT support and keyframe animations. Perfect for cinematic Shorts.' },
  { icon: '🖼️', name: 'Canva', tag: 'freemium', tagLabel: 'Freemium', desc: 'Create stunning thumbnails, channel art, and story overlays. Thousands of templates included.' },
  { icon: '🤖', name: 'ChatGPT', tag: 'freemium', tagLabel: 'Freemium', desc: 'Generate hooks, scripts, captions, and content ideas instantly. Your 24/7 creative partner.' },
  { icon: '🎙️', name: 'ElevenLabs', tag: 'freemium', tagLabel: 'Freemium', desc: 'Ultra-realistic AI voiceover for faceless channels. Multiple languages & voices available.' },
  { icon: '📊', name: 'TubeBuddy', tag: 'freemium', tagLabel: 'Freemium', desc: 'YouTube SEO tool for keyword research, tag suggestions, A/B thumbnail testing, and analytics.' },
  { icon: '🔍', name: 'vidIQ', tag: 'freemium', tagLabel: 'Freemium', desc: 'Track competitors, find viral topics, and get AI-powered recommendations directly in YouTube.' },
  { icon: '🎵', name: 'Epidemic Sound', tag: 'paid', tagLabel: 'Paid', desc: 'License-free music library with thousands of tracks. Never get your Short muted or demonetized.' },
  { icon: '📱', name: 'OBS Studio', tag: 'free', tagLabel: 'Free', desc: 'Free screen & gameplay recorder for PC. Essential for gaming Shorts and tutorial content.' },
  { icon: '🌐', name: 'Later', tag: 'freemium', tagLabel: 'Freemium', desc: 'Schedule and auto-post your Shorts in advance. Consistent posting without daily effort.' },
  { icon: '📝', name: 'Notion', tag: 'free', tagLabel: 'Free', desc: 'Plan your content calendar, track ideas, and manage your channel strategy in one workspace.' },
  { icon: '🎨', name: 'Adobe Express', tag: 'freemium', tagLabel: 'Freemium', desc: 'Quick thumbnail maker with AI-powered background removal and brand kit features.' },
];

// Quizzes indexed by courseId (stored in COURSES array above)

/* ===================== STATE ===================== */
let currentUser = null;
let selectedCategory = 'all';
let previousPage = 'home';
let currentCourseId = null;
let enrolledCourses = {};  // { courseId: { progress: 0, lessonsCompleted: [] } }
let streak = 0;

/* ===================== INIT ===================== */
document.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  renderFeaturedCourses();
  renderAllCourses();
  renderTools();
  animateEarningStats();
  checkScrollNavbar();
  updateStreak();
  window.addEventListener('scroll', checkScrollNavbar);

  // Show welcome notification after short delay
  setTimeout(() => {
    showNotification('👋 Welcome!', 'Start exploring courses or generate a viral Shorts idea below.', 'info');
  }, 1500);
});

/* ===================== LOCAL STORAGE ===================== */
function loadStateFromStorage() {
  const saved = localStorage.getItem('smh_user');
  if (saved) {
    currentUser = JSON.parse(saved);
    updateAuthUI();
  }
  const savedEnrolled = localStorage.getItem('smh_enrolled');
  if (savedEnrolled) enrolledCourses = JSON.parse(savedEnrolled);

  const savedStreak = localStorage.getItem('smh_streak');
  if (savedStreak) streak = parseInt(savedStreak);
}

function saveEnrolled() {
  localStorage.setItem('smh_enrolled', JSON.stringify(enrolledCourses));
}

/* ===================== THEME ===================== */
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  document.getElementById('theme-toggle').textContent = next === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('smh_theme', next);
  showNotification('🎨 Theme Changed', `Switched to ${next} mode.`, 'info');
}

// Apply saved theme on load
(function () {
  const saved = localStorage.getItem('smh_theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.textContent = saved === 'dark' ? '🌙' : '☀️';
  }
})();

/* ===================== NAVBAR ===================== */
function checkScrollNavbar() {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 20) {
    nav.style.background = 'var(--bg-2)';
  } else {
    nav.style.background = '';
  }
}

function toggleMobileMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('open');
}

/* ===================== PAGE ROUTING ===================== */
function showPage(pageId) {
  // Close mobile menu
  document.getElementById('nav-links').classList.remove('open');

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.add('hidden');
    p.classList.remove('active');
  });

  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Dashboard requires login
  if (pageId === 'dashboard') {
    if (!currentUser) {
      openModal('auth-modal');
      showPage('home');
      return;
    }
    renderDashboard();
  }

  previousPage = pageId !== 'course-detail' ? pageId : previousPage;
}

function goBack() {
  showPage(previousPage || 'courses');
}

/* ===================== AUTH ===================== */
function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach((b, i) => {
    b.classList.toggle('active', (i === 0 && tab === 'login') || (i === 1 && tab === 'signup'));
  });
  document.getElementById('login-form').classList.toggle('hidden', tab !== 'login');
  document.getElementById('signup-form').classList.toggle('hidden', tab !== 'signup');
}

function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value.trim();
  if (!email || !pass) { showNotification('⚠️ Error', 'Please fill in all fields.', 'error'); return; }

  // Simulate auth with localStorage
  const name = email.split('@')[0];
  currentUser = { name, email };
  localStorage.setItem('smh_user', JSON.stringify(currentUser));
  updateAuthUI();
  closeModal('auth-modal');
  showNotification('✅ Welcome back!', `Logged in as ${name}.`, 'success');
  showPage('dashboard');
}

function handleSignup() {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const pass = document.getElementById('signup-pass').value.trim();
  if (!name || !email || !pass) { showNotification('⚠️ Error', 'Please fill in all fields.', 'error'); return; }

  currentUser = { name, email };
  localStorage.setItem('smh_user', JSON.stringify(currentUser));
  updateAuthUI();
  closeModal('auth-modal');
  showNotification('🎉 Account Created!', `Welcome to Shorts Mastery Hub, ${name}!`, 'success');
  streak = 1;
  localStorage.setItem('smh_streak', streak);
  showPage('dashboard');
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('smh_user');
  updateAuthUI();
  showPage('home');
  showNotification('👋 Logged Out', 'See you next time!', 'info');
}

function updateAuthUI() {
  const authBtns = document.getElementById('auth-buttons');
  const userMenu = document.getElementById('user-menu');
  const dashNav = document.getElementById('dashboard-nav');
  if (currentUser) {
    authBtns.classList.add('hidden');
    userMenu.classList.remove('hidden');
    dashNav.classList.remove('hidden');
    document.getElementById('user-greeting').textContent = `Hi, ${currentUser.name} 👋`;
  } else {
    authBtns.classList.remove('hidden');
    userMenu.classList.add('hidden');
    dashNav.classList.add('hidden');
  }
}

/* ===================== MODALS ===================== */
function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

// Close modal on backdrop click
document.querySelectorAll('.modal-overlay').forEach(el => {
  el.addEventListener('click', (e) => {
    if (e.target === el) closeModal(el.id);
  });
});

/* ===================== IDEA GENERATOR ===================== */
let lastIdeaIndex = -1;

function setCategory(btn, cat) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedCategory = cat;
}

function generateIdea() {
  const pool = IDEAS[selectedCategory] || IDEAS.all;
  let idx;
  do { idx = Math.floor(Math.random() * pool.length); } while (idx === lastIdeaIndex && pool.length > 1);
  lastIdeaIndex = idx;
  const idea = pool[idx];

  const display = document.getElementById('idea-display');
  const textEl = document.getElementById('idea-text');
  const hookEl = document.getElementById('idea-hook');

  // Animate out
  display.style.opacity = '0';
  display.style.transform = 'translateY(10px)';
  setTimeout(() => {
    textEl.textContent = idea.text;
    hookEl.textContent = idea.hook;
    display.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    display.style.opacity = '1';
    display.style.transform = 'translateY(0)';
  }, 200);

  showNotification('💡 Idea Generated!', 'Your viral Short idea is ready.', 'success');
}

/* ===================== COURSES RENDER ===================== */
function renderFeaturedCourses() {
  const grid = document.getElementById('featured-courses-grid');
  if (!grid) return;
  const featured = COURSES.filter(c => c.featured).slice(0, 4);
  grid.innerHTML = featured.map(c => courseCardHTML(c)).join('');
}

function renderAllCourses(filter = 'all') {
  const grid = document.getElementById('all-courses-grid');
  if (!grid) return;
  const filtered = filter === 'all' ? COURSES : COURSES.filter(c => c.category === filter);
  grid.innerHTML = filtered.map(c => courseCardHTML(c)).join('');
}

function courseCardHTML(course) {
  const enrolled = enrolledCourses[course.id];
  const progress = enrolled ? Math.round((enrolled.lessonsCompleted.length / course.lessons) * 100) : 0;
  const isEnrolled = !!enrolled;
  return `
    <div class="course-card" onclick="openCourse('${course.id}')">
      <div class="course-thumb" style="background:${course.gradient}">
        <span class="course-thumb-emoji">${course.emoji}</span>
        <span class="course-badge">${course.level}</span>
      </div>
      <div class="course-body">
        <div class="course-category">${course.categoryLabel}</div>
        <div class="course-title">${course.title}</div>
        <div class="course-desc">${course.desc}</div>
        <div class="course-meta">
          <span class="course-lessons">📹 ${course.lessons} lessons</span>
          <span class="course-level">${course.level}</span>
        </div>
        ${isEnrolled ? `
        <div class="course-progress-wrap">
          <div class="progress-label">
            <span>Progress</span><span>${progress}%</span>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar" style="width:${progress}%"></div>
          </div>
        </div>` : ''}
        <button class="course-enroll-btn ${isEnrolled ? 'enrolled' : ''}" onclick="event.stopPropagation(); enrollCourse('${course.id}')">
          ${isEnrolled ? '✅ Continue Learning' : '🚀 Enroll for Free'}
        </button>
      </div>
    </div>`;
}

function filterCourses(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAllCourses(cat);
}

/* ===================== ENROLL ===================== */
function enrollCourse(courseId) {
  if (!currentUser) {
    showNotification('🔒 Login Required', 'Please login to enroll in courses.', 'info');
    openModal('auth-modal');
    return;
  }
  if (!enrolledCourses[courseId]) {
    enrolledCourses[courseId] = { lessonsCompleted: [], enrolledAt: Date.now() };
    saveEnrolled();
    showNotification('🎉 Enrolled!', 'You\'ve successfully enrolled. Start learning now!', 'success');
    renderFeaturedCourses();
    renderAllCourses();
  }
  openCourse(courseId);
}

/* ===================== COURSE DETAIL ===================== */
function openCourse(courseId) {
  currentCourseId = courseId;
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;

  const enrolled = enrolledCourses[courseId];
  const completed = enrolled ? enrolled.lessonsCompleted : [];
  const progress = enrolled ? Math.round((completed.length / course.lessons) * 100) : 0;

  const lessonsHTML = course.lessonList.map((l, i) => {
    const isDone = completed.includes(i);
    return `
    <div class="lesson-item ${isDone ? 'completed' : ''}" onclick="completeLesson('${courseId}',${i})">
      <div class="lesson-num">${isDone ? '✓' : i + 1}</div>
      <span class="lesson-name">${l.name}</span>
      <span class="lesson-duration">${l.duration}</span>
    </div>`;
  }).join('');

  const content = document.getElementById('course-detail-content');
  content.innerHTML = `
    <div class="course-detail-layout">
      <div class="detail-main">
        <div class="detail-video-wrap">
          <iframe src="https://www.youtube.com/embed/${course.videoId}?rel=0" allowfullscreen loading="lazy"></iframe>
        </div>
        <h1 class="detail-title">${course.title}</h1>
        <p class="detail-desc">${course.desc}</p>
        <h3 style="margin-bottom:16px;font-family:var(--font-display)">📋 Course Lessons</h3>
        <div class="lessons-list">${lessonsHTML}</div>
      </div>
      <div class="detail-sidebar">
        <div class="detail-sidebar-card">
          <h4>Your Progress</h4>
          <div class="detail-progress-section">
            <div class="progress-label"><span>Completion</span><span>${progress}%</span></div>
            <div class="progress-bar-wrap">
              <div class="progress-bar" id="detail-progress-bar" style="width:${progress}%"></div>
            </div>
          </div>
          ${!enrolled ? `<button class="btn-primary full-width" onclick="enrollCourse('${courseId}')">🚀 Enroll for Free</button>` : ''}
          <div class="quiz-btn-wrap">
            <button class="btn-ghost full-width" onclick="openQuiz('${courseId}')" style="margin-top:12px">
              🧠 Take Course Quiz
            </button>
          </div>
          <div style="margin-top:20px;border-top:1px solid var(--border);padding-top:16px">
            <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:8px">📹 ${course.lessons} Lessons</div>
            <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:8px">🏅 ${course.level}</div>
            <div style="font-size:0.8rem;color:var(--text-muted)">🔓 Lifetime Access</div>
          </div>
        </div>
      </div>
    </div>`;

  showPage('course-detail');
}

function completeLesson(courseId, lessonIndex) {
  if (!currentUser) {
    showNotification('🔒 Login Required', 'Login to track your progress.', 'info');
    openModal('auth-modal');
    return;
  }
  if (!enrolledCourses[courseId]) {
    enrolledCourses[courseId] = { lessonsCompleted: [], enrolledAt: Date.now() };
  }
  const done = enrolledCourses[courseId].lessonsCompleted;
  if (!done.includes(lessonIndex)) {
    done.push(lessonIndex);
    saveEnrolled();

    // Update streak
    streak = Math.min(streak + 1, 365);
    localStorage.setItem('smh_streak', streak);

    showNotification('✅ Lesson Complete!', 'Great job! Keep going to finish the course.', 'success');
    // Re-render detail
    openCourse(courseId);
  }
}

/* ===================== QUIZ ===================== */
function openQuiz(courseId) {
  const course = COURSES.find(c => c.id === courseId);
  if (!course || !course.quiz) return;
  const q = course.quiz;

  const optionsHTML = q.options.map((opt, i) =>
    `<button class="quiz-opt" id="quiz-opt-${i}" onclick="answerQuiz(${i},${q.correct},'${q.explanation.replace(/'/g, "\\'")}')">${opt}</button>`
  ).join('');

  document.getElementById('quiz-content').innerHTML = `
    <div>
      <div class="quiz-title">🧠 Course Quiz</div>
      <div class="quiz-question">${q.question}</div>
      <div class="quiz-options">${optionsHTML}</div>
      <div id="quiz-feedback"></div>
    </div>`;

  openModal('quiz-modal');
}

function answerQuiz(selected, correct, explanation) {
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((opt, i) => {
    opt.disabled = true;
    if (i === correct) opt.classList.add('correct');
    else if (i === selected) opt.classList.add('wrong');
  });

  const feedback = document.getElementById('quiz-feedback');
  if (selected === correct) {
    feedback.innerHTML = `<div class="quiz-feedback success">✅ Correct! ${explanation}</div>
      <button class="btn-primary" onclick="closeModal('quiz-modal')">Continue Learning →</button>`;
    showNotification('🏆 Correct!', 'You nailed the quiz question!', 'success');
  } else {
    feedback.innerHTML = `<div class="quiz-feedback fail">❌ Not quite. ${explanation}</div>
      <button class="btn-primary" onclick="closeModal('quiz-modal')">Got It →</button>`;
    showNotification('📚 Keep Learning', 'Review the lesson and try again!', 'info');
  }
}

/* ===================== TOOLS ===================== */
function renderTools() {
  const grid = document.getElementById('tools-grid');
  if (!grid) return;
  grid.innerHTML = TOOLS.map(t => `
    <div class="tool-card">
      <div class="tool-icon">${t.icon}</div>
      <div class="tool-name">${t.name}</div>
      <div class="tool-desc">${t.desc}</div>
      <span class="tool-tag ${t.tag}">${t.tagLabel}</span>
    </div>`).join('');
}

/* ===================== MONETIZATION STATS ===================== */
function animateEarningStats() {
  animateCounter('stat-month', 0, 1247, '$', '');
  animateCounter('stat-total', 0, 8930, '$', '');
  animateCounter('stat-views', 0, 284000, '', '');
  animateCounter('stat-subs', 0, 12400, '', '');
}

function animateCounter(id, from, to, prefix, suffix) {
  const el = document.getElementById(id);
  if (!el) return;
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(from + (to - from) * eased);
    el.textContent = prefix + value.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ===================== DASHBOARD ===================== */
function renderDashboard() {
  if (!currentUser) return;
  document.getElementById('dashboard-welcome').textContent = `Welcome back, ${currentUser.name}! 🔥`;

  const list = document.getElementById('enrolled-courses-list');
  const enrolledIds = Object.keys(enrolledCourses);

  if (enrolledIds.length === 0) {
    list.innerHTML = `<div class="empty-state">
      <div class="empty-state-icon">📚</div>
      <p>You haven't enrolled in any courses yet.</p>
      <button class="btn-primary" onclick="showPage('courses')">Browse Courses</button>
    </div>`;
  } else {
    list.innerHTML = enrolledIds.map(id => {
      const c = COURSES.find(co => co.id === id);
      if (!c) return '';
      const data = enrolledCourses[id];
      const progress = Math.round((data.lessonsCompleted.length / c.lessons) * 100);
      return `
        <div class="enrolled-course-item" onclick="openCourse('${c.id}')">
          <div class="enrolled-thumb" style="background:${c.gradient}">${c.emoji}</div>
          <div class="enrolled-info">
            <div class="enrolled-title">${c.title}</div>
            <div class="enrolled-meta">${data.lessonsCompleted.length}/${c.lessons} lessons • ${progress}% complete</div>
            <div class="progress-bar-wrap">
              <div class="progress-bar" style="width:${progress}%"></div>
            </div>
          </div>
          <button class="continue-btn">Continue →</button>
        </div>`;
    }).join('');
  }

  // Overall progress
  const allLessons = enrolledIds.reduce((sum, id) => {
    const c = COURSES.find(co => co.id === id);
    return sum + (c ? c.lessons : 0);
  }, 0);
  const allCompleted = enrolledIds.reduce((sum, id) => sum + enrolledCourses[id].lessonsCompleted.length, 0);
  const overall = allLessons > 0 ? Math.round((allCompleted / allLessons) * 100) : 0;

  const bar = document.getElementById('overall-progress-bar');
  const pct = document.getElementById('overall-progress-pct');
  if (bar) bar.style.width = overall + '%';
  if (pct) pct.textContent = overall + '%';

  document.getElementById('streak-display').textContent = streak + ' day' + (streak !== 1 ? 's' : '');
}

/* ===================== STREAK ===================== */
function updateStreak() {
  const last = localStorage.getItem('smh_last_visit');
  const today = new Date().toDateString();
  if (last !== today) {
    localStorage.setItem('smh_last_visit', today);
    if (last) {
      const diff = (new Date(today) - new Date(last)) / 86400000;
      if (diff <= 1) {
        streak++;
      } else {
        streak = 1;
      }
    } else {
      streak = streak || 1;
    }
    localStorage.setItem('smh_streak', streak);
  }
}

/* ===================== NOTIFICATIONS ===================== */
function showNotification(title, message, type = 'info') {
  const icons = { success: '✅', info: 'ℹ️', error: '❌' };
  const container = document.getElementById('notification-container');
  const notif = document.createElement('div');
  notif.className = `notification ${type}`;
  notif.innerHTML = `
    <span class="notif-icon">${icons[type]}</span>
    <div class="notif-body">
      <div class="notif-title">${title}</div>
      <div class="notif-msg">${message}</div>
    </div>`;
  container.appendChild(notif);
  setTimeout(() => {
    notif.style.opacity = '0';
    notif.style.transform = 'translateX(30px)';
    notif.style.transition = '0.3s ease';
    setTimeout(() => notif.remove(), 300);
  }, 4000);
}

/* ===================== KEYBOARD & MISC ===================== */
// Close modals with ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(m => m.classList.add('hidden'));
    document.getElementById('nav-links').classList.remove('open');
  }
});
