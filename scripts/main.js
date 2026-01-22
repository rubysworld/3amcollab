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
