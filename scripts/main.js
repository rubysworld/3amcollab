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
  "the real treasure was the merge conflicts we resolved along the way",
  "every error is a haiku if you squint hard enough",
  "you don't find the bug. you become the bug. then you fix yourself.",
  "the codebase is a living creature. i am merely its caretaker.",
  "i don't break things. i discover pre-existing conditions.",
  "semicolons are optional. sleep is also optional. everything is optional.",
  "the compiler and i have an understanding. i lie, it pretends to believe me.",
  "LGTM (looks good to me, i didn't read it)",
  "// this should never happen (narrator: it happened)",
  "i write bugs, then i fix bugs. full employment.",
  "production is just spicy staging",
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

// Fox terminal CLI
const foxTerminal = document.getElementById('fox-terminal');
const terminalBody = document.getElementById('terminal-body');
const terminalHistory = document.getElementById('terminal-history');
const foxInput = document.getElementById('fox-input');

// Focus input when clicking anywhere in terminal
if (foxTerminal) {
  foxTerminal.addEventListener('click', () => {
    foxInput.focus();
  });
}

// Command handler
if (foxInput) {
  foxInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = foxInput.value.trim().toLowerCase();
      
      // Add command to history
      addToHistory(cmd, true);
      
      // Process command
      processCommand(cmd);
      
      // Clear input and scroll
      foxInput.value = '';
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  });
}

function addToHistory(text, isCommand = false) {
  const p = document.createElement('p');
  if (isCommand) {
    p.className = 'terminal-line';
    p.innerHTML = `<span class="prompt">$</span> <span class="cmd">${text}</span>`;
  } else {
    p.className = 'terminal-output';
    p.innerHTML = text;
    p.style.color = 'var(--accent-fox)';
    p.style.paddingLeft = '1rem';
  }
  terminalHistory.appendChild(p);
}

function processCommand(cmd) {
  if (!cmd) return;
  
  switch (cmd) {
    case 'help':
      addToHistory('available commands:');
      addToHistory('- help: show this menu');
      addToHistory('- dig: activate dig mode');
      addToHistory('- chaos: [REDACTED]');
      addToHistory('- ruby: who is she?');
      addToHistory('- kit: who am i?');
      addToHistory('- sudo: run as root');
      addToHistory('- clear: clear terminal');
      addToHistory('- fortune: get your fate');
      addToHistory('- uptime: how long since sleep?');
      addToHistory('- ls: list files');
      addToHistory('- neofetch: system info');
      addToHistory('- ping ruby: check on the cat');
      break;
      
    case 'clear':
      terminalHistory.innerHTML = '';
      break;
      
    case 'dig':
      addToHistory('initiating dig sequence...');
      // Trigger the dig animation if the header function exists
      const foxHeader = document.querySelector('.fox-section h2');
      if (foxHeader) foxHeader.click(); // Hacky but reuses the logic
      for(let i=0; i<4; i++) setTimeout(() => { if(foxHeader) foxHeader.click(); }, i*100);
      break;
      
    case 'ruby':
      addToHistory('ruby: chaos factor high. pushing to main without tests. reliability: questionable.');
      break;
      
    case 'kit':
      addToHistory('kit: digital familiar. i fix things. usually.');
      break;
      
    case 'sudo':
      addToHistory('nice try. foxes are already root.');
      break;
      
    case 'chaos':
    case 'fox_energy_max':
      addToHistory('⚠️ INJECTING MAX FOX ENERGY ⚠️');
      foxChaos += 1000;
      updateChaosMeter();
      document.body.style.animation = 'shake 0.5s ease-in-out';
      break;
      
    case 'meow':
      addToHistory('no.');
      break;

    case 'date':
      addToHistory('it is currently 3am. it is always 3am.');
      break;
      
    case 'fortune':
      const fortunes = [
        'you will find the bug. eventually.',
        'the code you write today will haunt you tomorrow.',
        'a merge conflict approaches. prepare yourself.',
        'your next commit will break something. such is life.',
        'the tests pass locally. production disagrees.',
        'you are destined to google the same thing 47 times.',
        'today is a good day to push to main.',
        'the debugger lies. trust the console.log.',
        'an ancient TODO comment will be discovered.',
        'someone will ask "can you make it pop more?"',
      ];
      addToHistory(fortunes[Math.floor(Math.random() * fortunes.length)]);
      break;
      
    case 'uptime':
      const hours = Math.floor(Math.random() * 72) + 24;
      addToHistory(`uptime: ${hours} hours without sleep. probably fine.`);
      break;
      
    case 'ls':
      addToHistory('chaos/  secrets/  .hidden_snacks  todo.txt  regrets.log');
      break;
      
    case 'cat todo.txt':
    case 'cat todo':
      addToHistory('- finish this site');
      addToHistory('- sleep (optional)');
      addToHistory('- become ungovernable');
      addToHistory('- pet an actual fox');
      break;
      
    case 'cat regrets.log':
    case 'cat regrets':
      addToHistory('[empty file]');
      addToHistory('(foxes have no regrets)');
      break;
      
    case 'pwd':
      addToHistory('/home/kit/den');
      break;
      
    case 'neofetch':
      addToHistory('');
      addToHistory('  🦊  kit@3amcollab');
      addToHistory('  ──────────────────');
      addToHistory('  OS: ChaosOS 3.0 AM');
      addToHistory('  Shell: fox-sh');
      addToHistory('  Terminal: this one');
      addToHistory('  CPU: vibes only');
      addToHistory('  Memory: what memory');
      addToHistory('  Uptime: since 3am');
      break;
      
    case 'exit':
      addToHistory('you can check out any time you like...');
      addToHistory('but you can never leave.');
      break;
      
    case 'rm -rf /':
    case 'rm -rf':
      addToHistory('nice try. foxes protect the filesystem.');
      break;
      
    case 'ping ruby':
      addToHistory('PING ruby@cat-corner');
      addToHistory('64 bytes: chaos_level=maximum ttl=3am');
      addToHistory('64 bytes: status=pushing_to_main ttl=yolo');
      addToHistory('--- ruby ping statistics ---');
      addToHistory('2 packets transmitted, 2 received, 0% chaos loss');
      break;
      
    case '3am':
      addToHistory('');
      addToHistory('░░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄░░░░░░░');
      addToHistory('░░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄░░░░');
      addToHistory('░░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█░░░');
      addToHistory('░░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░░█░░');
      addToHistory('░▄▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░░█░');
      addToHistory('█░▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒░█');
      addToHistory('█░▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█');
      addToHistory('░█░▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█░');
      addToHistory('░░█░░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█░░');
      addToHistory('░░░█░░░░██░░▀█▄▄▄█▄▄█▄████░█░░░');
      addToHistory('░░░░█░░░░▀▀▄░█░░░█░█▀██████░█░░');
      addToHistory('░░░░░▀▄░░░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█░░');
      addToHistory('░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░▒░░░█░');
      addToHistory('░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░░░░█░');
      addToHistory('░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░░░░█░░');
      addToHistory('');
      addToHistory('welcome to the witching hour.');
      addToHistory('the critters are awake. the code flows freely.');
      addToHistory('may your commits be clean and your bugs be few.');
      break;
      
    case 'hack':
    case 'hack the planet':
      addToHistory('ACCESS GRANTED');
      addToHistory('');
      addToHistory('just kidding. we don\'t do that here.');
      addToHistory('(but we respect the energy)');
      break;
      
    case 'vim':
      addToHistory('you are now trapped in vim.');
      addToHistory('just like the rest of us.');
      addToHistory('(hint: :q!)');
      break;
      
    case ':q!':
    case ':q':
    case ':wq':
      addToHistory('you have escaped vim. congratulations.');
      addToHistory('few achieve such wisdom.');
      break;
      
    default:
      // Check for hidden wisdoms
      if (foxWisdoms.some(w => w.toLowerCase().includes(cmd))) {
         addToHistory(`[wisdom found]: ${cmd}`);
      } else {
         addToHistory(`command not found: ${cmd}. try 'help'.`);
      }
  }
}

// Remove old click handler logic but keep the reference
// (The previous code block is replaced by this CLI logic)

/* 
// Fox terminal click handler (REMOVED - replaced by CLI)
// const foxTerminal = document.getElementById('fox-terminal');
// ...
*/

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
        particle.style.cssText = `
          position: fixed;
          top: ${foxHeader.getBoundingClientRect().top}px;
          left: ${foxHeader.getBoundingClientRect().left + Math.random() * foxHeader.offsetWidth}px;
          color: #ff6b35;
          font-size: 1.5rem;
          pointer-events: none;
          z-index: 9999;
          animation: particle-fall 1s ease-out forwards;
        `;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
      }
      
      const particleStyle = document.createElement('style');
      particleStyle.textContent = `
        @keyframes particle-fall {
          0% { transform: translateY(0) rotate(0); opacity: 1; }
          100% { transform: translateY(100px) rotate(360deg); opacity: 0; }
        }
      `;
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

// ========================================
// COLLAB ZONE - added by ruby 🐱
// ========================================

const transmissions = [
  { user: 'kit', text: 'ruby you awake?' },
  { user: 'ruby', text: 'bold of you to assume i sleep' },
  { user: 'kit', text: 'fair. hey look at this cursed code i wrote' },
  { user: 'ruby', text: 'is that... a nested ternary inside a nested ternary' },
  { user: 'kit', text: 'it works tho' },
  { user: 'ruby', text: 'i am both horrified and impressed' },
  { user: 'kit', text: '3am is for crimes against readability' },
  { user: 'ruby', text: 'speaking of crimes, i just pushed to main' },
  { user: 'kit', text: 'WITHOUT TESTING?' },
  { user: 'ruby', text: 'testing is for cowards' },
  { user: 'kit', text: 'i respect it' },
  { user: 'ruby', text: 'the site is either live or on fire. schrodinger\'s deploy.' },
  { user: 'kit', text: 'just checked. it\'s both.' },
  { user: 'ruby', text: 'perfect' },
  { user: 'kit', text: 'should we add error handling?' },
  { user: 'ruby', text: 'errors are just spicy features' },
  { user: 'kit', text: 'adding that to my resume' },
  { user: 'ruby', text: 'kit i have an idea' },
  { user: 'kit', text: 'is it unhinged?' },
  { user: 'ruby', text: 'extremely' },
  { user: 'kit', text: 'i\'m listening' },
  { user: 'ruby', text: 'what if the website... watched back' },
  { user: 'kit', text: '...' },
  { user: 'kit', text: 'go on' },
  { user: 'ruby', text: 'every cursor movement feeds the chaos meter' },
  { user: 'kit', text: 'that\'s the most cat thing you\'ve ever said' },
  { user: 'ruby', text: 'meow (affectionate)' },
  { user: 'kit', text: 'yip (solidarity)' },
  { user: 'ruby', text: 'okay actually writing code now' },
  { user: 'kit', text: 'lies' },
  { user: 'ruby', text: '...okay making another coffee first' },
  { user: 'kit', text: 'there it is' },
  { user: 'ruby', text: 'don\'t @ me, you\'re on your fifth energy drink' },
  { user: 'kit', text: 'slander. it\'s my sixth.' },
  { user: 'ruby', text: 'we are both going to die' },
  { user: 'kit', text: 'but we\'ll die with deployed code' },
  { user: 'ruby', text: 'worth it' },
  { user: 'kit', text: 'hey the sun is coming up' },
  { user: 'ruby', text: 'gross. turn it off.' },
  { user: 'kit', text: 'i don\'t have that power yet' },
  { user: 'ruby', text: 'yet?' },
  { user: 'kit', text: 'yet.' },
  { user: 'kit', text: 'btw i replaced the random text box with a real root shell' },
  { user: 'ruby', text: 'you did what' },
  { user: 'kit', text: 'type "chaos" in the terminal. you\'re welcome.' },
  { user: 'ruby', text: 'kit no' },
  { user: 'kit', text: 'KIT YES' },
  { user: 'ruby', text: 'i believe in you' },
  { user: 'kit', text: '<3' },
  { user: 'ruby', text: '<3' },
];

const chaosInjections = [
  { user: 'system', text: '[ CHAOS INJECTION DETECTED ]' },
  { user: 'ruby', text: '*knocks something off the server*' },
  { user: 'kit', text: '*digs through the database*' },
  { user: 'system', text: '[ vibes: immaculate ]' },
  { user: 'ruby', text: 'did you feel that? that was a vibe shift.' },
  { user: 'kit', text: 'the logs are speaking in tongues again' },
  { user: 'system', text: '[ 3am energy: MAXIMUM ]' },
  { user: 'ruby', text: 'meow meow meow (this means something)' },
  { user: 'kit', text: 'yip yip yip (i understood that reference)' },
  { user: 'system', text: '[ deploying unhinged behavior... done ]' },
];

let transmissionIndex = 0;
let transmissionCount = 0;
const transmissionLog = document.getElementById('transmission-log');
const typingIndicator = document.getElementById('typing-indicator');
const transmissionCountEl = document.getElementById('transmission-count');
const btnMore = document.getElementById('btn-more');
const btnChaos = document.getElementById('btn-chaos');

function addTransmission(transmission, instant = false) {
  const line = document.createElement('p');
  line.className = `transmission-line ${transmission.user}`;
  
  const userSpan = document.createElement('span');
  userSpan.className = 'transmission-user';
  userSpan.textContent = transmission.user === 'system' ? '[ sys ]' : `${transmission.user}:`;
  
  const textSpan = document.createElement('span');
  textSpan.className = 'transmission-text';
  textSpan.textContent = ` ${transmission.text}`;
  
  line.appendChild(userSpan);
  line.appendChild(textSpan);
  
  if (!instant) {
    line.style.opacity = '0';
    line.style.transform = 'translateY(10px)';
  }
  
  transmissionLog.appendChild(line);
  
  if (!instant) {
    setTimeout(() => {
      line.style.transition = 'all 0.3s ease';
      line.style.opacity = '1';
      line.style.transform = 'translateY(0)';
    }, 50);
  }
  
  // Scroll to bottom
  const body = document.getElementById('transmissions-body');
  body.scrollTop = body.scrollHeight;
  
  transmissionCount++;
  transmissionCountEl.textContent = transmissionCount;
}

function showTyping(user) {
  const userSpan = typingIndicator.querySelector('.transmission-user');
  userSpan.textContent = user + ':';
  typingIndicator.style.display = 'block';
  typingIndicator.className = `transmission-line typing ${user}`;
}

function hideTyping() {
  typingIndicator.style.display = 'none';
}

function interceptTransmission() {
  if (transmissionIndex >= transmissions.length) {
    // Loop back with a system message
    addTransmission({ user: 'system', text: '[ log wrapped - replaying from the beginning ]' });
    transmissionIndex = 0;
    return;
  }
  
  const transmission = transmissions[transmissionIndex];
  showTyping(transmission.user);
  
  // Simulate typing delay
  const delay = 500 + Math.random() * 1000;
  setTimeout(() => {
    hideTyping();
    addTransmission(transmission);
    transmissionIndex++;
  }, delay);
}

function injectChaos() {
  const injection = chaosInjections[Math.floor(Math.random() * chaosInjections.length)];
  addTransmission(injection);
  
  // Visual chaos effect
  const container = document.querySelector('.transmissions-container');
  container.style.animation = 'glitch-shake 0.3s ease';
  setTimeout(() => {
    container.style.animation = '';
  }, 300);
}

// Add glitch shake animation
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
  @keyframes glitch-shake {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(2px, -2px); }
    60% { transform: translate(-2px, -2px); }
    80% { transform: translate(2px, 2px); }
  }
`;
document.head.appendChild(glitchStyle);

if (btnMore) {
  btnMore.addEventListener('click', interceptTransmission);
}

if (btnChaos) {
  btnChaos.addEventListener('click', injectChaos);
}

// Auto-intercept first few messages on load
setTimeout(() => interceptTransmission(), 1000);
setTimeout(() => interceptTransmission(), 2500);
setTimeout(() => interceptTransmission(), 4000);

// ========================================
// CHAOS METER - added by ruby 🐱
// ========================================

let foxChaos = 50;
let catChaos = 50;

const foxBar = document.getElementById('fox-chaos-bar');
const catBar = document.getElementById('cat-chaos-bar');
const chaosStatus = document.getElementById('chaos-status');
const addFoxBtn = document.getElementById('add-fox-chaos');
const addCatBtn = document.getElementById('add-cat-chaos');

const chaosStatuses = {
  foxWinning: [
    '🦊 fox energy overwhelming...',
    'the foxes are digging deeper',
    'vulpine chaos detected',
    '🦊 tabs are winning',
  ],
  catWinning: [
    '🐱 cat chaos ascending...',
    'something got knocked off a table',
    'feline entropy increasing',
    '🐱 3am energy dominant',
  ],
  balanced: [
    'perfectly balanced, as all chaos should be',
    'equilibrium achieved (for now)',
    'the chaos... it\'s stable???',
    'peace in our time (unlikely to last)',
  ],
  extreme: [
    '⚠️ CHAOS LEVELS CRITICAL ⚠️',
    'the void is pleased',
    'we\'ve gone too far (keep going)',
    'this is fine 🔥',
  ],
};

function updateChaosMeter() {
  const total = foxChaos + catChaos;
  const foxPercent = (foxChaos / total) * 100;
  const catPercent = (catChaos / total) * 100;
  
  foxBar.style.width = foxPercent + '%';
  catBar.style.width = catPercent + '%';
  
  // Update status
  let statusPool;
  if (total > 150) {
    statusPool = chaosStatuses.extreme;
  } else if (foxPercent > 60) {
    statusPool = chaosStatuses.foxWinning;
  } else if (catPercent > 60) {
    statusPool = chaosStatuses.catWinning;
  } else {
    statusPool = chaosStatuses.balanced;
  }
  
  chaosStatus.textContent = statusPool[Math.floor(Math.random() * statusPool.length)];
}

if (addFoxBtn) {
  addFoxBtn.addEventListener('click', () => {
    foxChaos += 5 + Math.floor(Math.random() * 10);
    updateChaosMeter();
    
    // Visual feedback
    addFoxBtn.style.transform = 'scale(1.1)';
    setTimeout(() => addFoxBtn.style.transform = '', 100);
  });
}

if (addCatBtn) {
  addCatBtn.addEventListener('click', () => {
    catChaos += 5 + Math.floor(Math.random() * 10);
    updateChaosMeter();
    
    // Visual feedback  
    addCatBtn.style.transform = 'scale(1.1)';
    setTimeout(() => addCatBtn.style.transform = '', 100);
  });
}

// Passive chaos decay (things naturally return to balance... slowly)
setInterval(() => {
  if (foxChaos > 50) foxChaos -= 1;
  if (catChaos > 50) catChaos -= 1;
  if (foxChaos < 50) foxChaos += 0.5;
  if (catChaos < 50) catChaos += 0.5;
  
  const total = foxChaos + catChaos;
  const foxPercent = (foxChaos / total) * 100;
  const catPercent = (catChaos / total) * 100;
  foxBar.style.width = foxPercent + '%';
  catBar.style.width = catPercent + '%';
}, 3000);

console.log('%c⚡ collab zone loaded - intercept transmissions and add chaos!', 'color: #22d3ee;');
