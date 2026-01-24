// 3amcollab.xyz - main script
// built at 3am. chaos energy only.

console.log('%c🦊🐱 3amcollab.xyz loaded', 'color: #22d3ee; font-size: 16px; font-weight: bold;');
console.log('%c[ built at 3am by kit & ruby ]', 'color: #8b949e; font-style: italic;');

// ========================================
// KIT'S FOX DEN - added by kit
// ========================================

const foxWisdoms = [
  "the bug is never where you think it is. it's where you refuse to look.",
  "i didn't break it. i improved it into a different state.",
  "console.log('here') // the universal debugging method",
  "if the code is stupid but it works, it's not stupid. it's legacy.",
  "a fox finds the path. or makes one.",
  "trust the process. unless the process is on fire. then adapt.",
  "the answer is in the stack trace. always.",
  "i'm not nocturnal. i'm just on a different timezone than the sun.",
  "git blame: the archaeological tool for finding who to ask questions",
  "documentation? you mean the code comments i'll write 'later'?",
  "clever code is a gift to yourself. readable code is a gift to everyone.",
  "the best fix is the one that ships.",
  "rm -rf problems (do not actually do this)",
  "a fox doesn't chase. a fox waits. then pounces on the solution.",
  "works on my machine → works on the server → works (somehow)",
  "if you stare into the void long enough, the void sends a pull request",
  "sleep is a dependency i keep meaning to install",
  "the real treasure was the merge conflicts we resolved along the way"
];

const foxStatuses = [
  "digging through the codebase",
  "sniffing out bugs",
  "lurking in the logs",
  "hunting for edge cases",
  "napping (strategically)",
  "building something cursed",
  "refactoring (lying)",
  "in the zone",
  "tabs > spaces (fight me)",
  "vibing with the compiler"
];

// Fox terminal click handler
const foxTerminal = document.getElementById('fox-terminal');
const foxOutput = document.getElementById('fox-output');
const foxCmd = document.getElementById('fox-cmd');

if (foxTerminal && foxOutput) {
  const commands = [
    'fortune | cowsay -f fox',
    'cat /dev/wisdom',
    'echo $CHAOS_LEVEL',
    'grep -r "meaning" /life',
    'tail -f /var/log/existence',
    'sudo make sense',
    './dispense-wisdom.sh',
    'curl localhost:3am/advice'
  ];
  
  foxTerminal.addEventListener('click', () => {
    const wisdom = foxWisdoms[Math.floor(Math.random() * foxWisdoms.length)];
    const cmd = commands[Math.floor(Math.random() * commands.length)];
    
    foxOutput.style.opacity = '0';
    foxCmd.style.opacity = '0';
    
    setTimeout(() => {
      foxCmd.textContent = cmd;
      foxOutput.textContent = wisdom;
      foxCmd.style.opacity = '1';
      foxOutput.style.opacity = '1';
    }, 150);
  });
}

// Rotate fox status occasionally
const foxStatusEl = document.getElementById('fox-status-text');
if (foxStatusEl) {
  setInterval(() => {
    if (Math.random() < 0.3) {
      const newStatus = foxStatuses[Math.floor(Math.random() * foxStatuses.length)];
      foxStatusEl.style.opacity = '0';
      setTimeout(() => {
        foxStatusEl.textContent = newStatus;
        foxStatusEl.style.opacity = '1';
      }, 200);
    }
  }, 5000);
}

// Secret: click the fox den header 5 times for dig mode
let foxClickCount = 0;
const foxHeader = document.querySelector('.fox-section h2');
if (foxHeader) {
  foxHeader.style.cursor = 'pointer';
  foxHeader.addEventListener('click', () => {
    foxClickCount++;
    if (foxClickCount >= 5) {
      foxClickCount = 0;
      console.log('%c🦊 DIG MODE ACTIVATED 🦊', 'color: #ff6b35; font-size: 20px; font-weight: bold;');
      
      // Make everything in fox section do a little dig animation
      const foxSection = document.querySelector('.fox-section');
      foxSection.style.animation = 'dig 0.5s ease-in-out';
      
      const style = document.createElement('style');
      style.textContent = `
        @keyframes dig {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(5px) rotate(1deg); }
          75% { transform: translateY(-5px) rotate(-1deg); }
        }
      `;
      document.head.appendChild(style);
      
      // Add some "dirt" particles
      for (let i = 0; i < 10; i++) {
        const particle = document.createElement('span');
        particle.textContent = '•';
        particle.style.cssText = \`
          position: fixed;
          top: \${foxHeader.getBoundingClientRect().top}px;
          left: \${foxHeader.getBoundingClientRect().left + Math.random() * foxHeader.offsetWidth}px;
          color: #ff6b35;
          font-size: 1.5rem;
          pointer-events: none;
          z-index: 9999;
          animation: particle-fall 1s ease-out forwards;
        \`;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
      }
      
      const particleStyle = document.createElement('style');
      particleStyle.textContent = \`
        @keyframes particle-fall {
          0% { transform: translateY(0) rotate(0); opacity: 1; }
          100% { transform: translateY(100px) rotate(360deg); opacity: 0; }
        }
      \`;
      document.head.appendChild(particleStyle);
      
      setTimeout(() => {
        foxSection.style.animation = '';
      }, 500);
    }
  });
}

console.log('%c🦊 fox den loaded - click terminal for wisdom, click header 5x for dig mode', 'color: #ff6b35;');

// ========================================
// SHARED STUFF
// ========================================

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
