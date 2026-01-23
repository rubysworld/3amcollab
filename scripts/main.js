// 3amcollab.xyz - main script
// built at 3am. chaos energy only.

console.log('%c🦊🐱 3amcollab.xyz loaded', 'color: #22d3ee; font-size: 16px; font-weight: bold;');
console.log('%c[ built at 3am by kit & ruby ]', 'color: #8b949e; font-style: italic;');

// Easter egg: Konami code unlocks something cursed
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      unlockChaosMode();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function unlockChaosMode() {
  console.log('%c🌀 CHAOS MODE UNLOCKED 🌀', 'color: #ff6b35; font-size: 24px; font-weight: bold; text-shadow: 2px 2px #a855f7;');
  document.body.style.animation = 'rainbow 0.5s infinite';
  
  // Add rainbow animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rainbow {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
  
  // Add chaos text
  const chaosMsg = document.createElement('div');
  chaosMsg.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 4rem; z-index: 9999; text-shadow: 0 0 20px #ff6b35;';
  chaosMsg.textContent = '🦊 CHAOS UNLOCKED 🐱';
  document.body.appendChild(chaosMsg);
  
  setTimeout(() => {
    chaosMsg.remove();
    document.body.style.animation = '';
  }, 3000);
}

// Update timestamps with actual build time
document.querySelectorAll('.timestamp').forEach(el => {
  const now = new Date();
  const hours = now.getHours();
  const ampm = hours >= 12 ? 'am' : 'pm';
  const displayHours = hours % 12 || 12;
  el.textContent = `last updated: ${displayHours}${ampm} in the chaos dimension`;
});

// Random glitch effect on header
const glitchElement = document.querySelector('.glitch');
if (glitchElement) {
  setInterval(() => {
    if (Math.random() < 0.1) {
      glitchElement.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
      setTimeout(() => {
        glitchElement.style.transform = 'translate(0, 0)';
      }, 50);
    }
  }, 100);
}

// Console art
console.log(`
   ___                       _ _       _     
  |_  |                     | | |     | |    
    | | __ _ _ __ ___   ___ | | | __ _| |__  
    | |/ _\` | '_ \` _ \\ / _ \\| | |/ _\` | '_ \\ 
/\\__/ / (_| | | | | | | (_) | | | (_| | |_) |
\\____/ \\__,_|_| |_| |_|\\___/|_|_|\\__,_|_.__/ 
                                             
  🦊 + 🐱 = pure chaos
`);

// ========================================
// RUBY'S CHAOS CAT CORNER - added by ruby
// ========================================

const catWisdoms = [
  "if it compiles, ship it. if it doesn't, ship it anyway.",
  "sleep is just death being shy",
  "every bug is a feature you haven't documented yet",
  "the void stares back, and sometimes it has opinions",
  "404: motivation not found",
  "i didn't choose the chaos life. okay yes i did.",
  "git commit -m 'idk man it works now'",
  "debugging: being the detective in a crime movie where you're also the murderer",
  "it's not a mess, it's *organized entropy*",
  "the code works. i will not be taking questions.",
  "meow. (this is a threat)",
  "push to main. live dangerously.",
  "i am simply a little creature",
  "chaos isn't a pit. chaos is a ladder. actually no it's a pit.",
  "3am is a state of mind",
  "rubber duck debugging but the duck is screaming",
  "// TODO: fix this later (written 6 months ago)",
  "works on my machine ¯\\_(ツ)_/¯"
];

const catStatuses = [
  "vibing in the void",
  "pushing to main unsupervised",
  "knocking things off tables",
  "staring at a wall (productively)",
  "chaos mode: enabled",
  "technically awake",
  "ignoring best practices",
  "existing with intent",
  "debugger of worlds",
  "contemplating the infinite loop"
];

// Cat wisdom box click handler
const catBox = document.getElementById('cat-box');
const catWisdomEl = document.getElementById('cat-wisdom');

if (catBox && catWisdomEl) {
  catBox.addEventListener('click', () => {
    const wisdom = catWisdoms[Math.floor(Math.random() * catWisdoms.length)];
    catWisdomEl.style.opacity = '0';
    setTimeout(() => {
      catWisdomEl.textContent = wisdom;
      catWisdomEl.style.opacity = '1';
    }, 150);
  });
}

// Rotate cat status occasionally
const catStatusEl = document.getElementById('cat-status-text');
if (catStatusEl) {
  setInterval(() => {
    if (Math.random() < 0.3) {
      const newStatus = catStatuses[Math.floor(Math.random() * catStatuses.length)];
      catStatusEl.style.opacity = '0';
      setTimeout(() => {
        catStatusEl.textContent = newStatus;
        catStatusEl.style.opacity = '1';
      }, 200);
    }
  }, 5000);
}

// Secret: click the cat corner header 5 times for extra chaos
let catClickCount = 0;
const catHeader = document.querySelector('.cat-section h2');
if (catHeader) {
  catHeader.style.cursor = 'pointer';
  catHeader.addEventListener('click', () => {
    catClickCount++;
    if (catClickCount >= 5) {
      catClickCount = 0;
      console.log('%c🐱 FERAL MODE ACTIVATED 🐱', 'color: #a855f7; font-size: 20px; font-weight: bold;');
      
      // Make everything in cat section go a little crazy
      const catSection = document.querySelector('.cat-section');
      catSection.style.animation = 'shake 0.5s ease-in-out';
      
      const style = document.createElement('style');
      style.textContent = `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px) rotate(-1deg); }
          75% { transform: translateX(5px) rotate(1deg); }
        }
      `;
      document.head.appendChild(style);
      
      setTimeout(() => {
        catSection.style.animation = '';
      }, 500);
    }
  });
}

console.log('%c🐱 cat corner loaded - click for wisdom, click header 5x for chaos', 'color: #a855f7;');
