import React from 'react';
import './sparkles.css';

// [left%, top%, size(px), colorIdx, delay(s), duration(s), burst?]
const STARS = [
  [5,  8,  8,  0, 0.0, 2.5, false],
  [12, 25, 5,  1, 0.7, 3.2, false],
  [20, 65, 10, 2, 1.4, 2.8, true ],
  [28, 15, 6,  0, 0.3, 3.5, false],
  [35, 80, 8,  1, 2.1, 2.3, false],
  [42, 45, 5,  2, 0.9, 3.8, false],
  [50, 10, 12, 0, 1.6, 2.6, true ],
  [57, 70, 7,  1, 0.5, 3.1, false],
  [64, 30, 5,  2, 1.9, 2.9, false],
  [70, 88, 9,  0, 0.2, 3.4, false],
  [78, 55, 6,  1, 1.3, 2.7, false],
  [85, 20, 11, 2, 0.8, 3.6, true ],
  [92, 75, 5,  0, 2.4, 2.2, false],
  [97, 40, 8,  1, 1.1, 3.0, false],
  [8,  50, 6,  2, 0.6, 2.4, false],
  [22, 90, 10, 0, 1.8, 3.3, true ],
  [45, 60, 5,  1, 0.4, 2.7, false],
  [60, 5,  8,  2, 2.0, 3.9, false],
  [75, 35, 6,  0, 1.5, 2.5, false],
  [88, 92, 9,  1, 0.1, 3.7, true ],
  [15, 72, 5,  2, 2.3, 2.8, false],
  [38, 28, 7,  0, 1.0, 3.2, false],
  [55, 50, 10, 1, 0.7, 2.6, true ],
  [82, 62, 6,  2, 1.7, 3.4, false],
  [95, 18, 8,  0, 2.2, 2.9, false],
  // Refuerzo en la zona inferior
  [10, 78, 6,  1, 1.2, 2.6, false],
  [30, 95, 8,  2, 0.5, 3.1, true ],
  [50, 85, 5,  0, 1.8, 2.4, false],
  [68, 97, 9,  1, 0.3, 3.5, false],
  [85, 82, 6,  2, 2.0, 2.8, true ],
  [3,  93, 7,  0, 1.5, 3.0, false],
  [48, 76, 5,  2, 0.9, 2.9, false],
];

const COLORS = [
  'rgba(255, 182, 193, 0.92)',   // rosa Gabby
  'rgba(200, 162, 200, 0.90)',   // lila
  'rgba(255, 248, 130, 0.95)',   // amarillo brillante
];

const SHOOTS = [
  { top: '10%', delay: '1s',   dur: '9s'  },
  { top: '38%', delay: '5.5s', dur: '12s' },
  { top: '68%', delay: '10s',  dur: '8s'  },
];

const Sparkles = () => (
  <div className="sparkles-layer" aria-hidden="true">
    {STARS.map(([l, t, s, c, d, r, burst], i) => (
      <span
        key={i}
        className={`sparkle${burst ? ' sparkle-burst' : ''}`}
        style={{
          left: `${l}%`,
          top: `${t}%`,
          width: `${s}px`,
          height: `${s}px`,
          background: COLORS[c],
          animationDelay: `${d}s`,
          animationDuration: `${r}s`,
        }}
      />
    ))}
    {SHOOTS.map(({ top, delay, dur }, i) => (
      <span
        key={`sh${i}`}
        className="shooting-star"
        style={{ top, animationDelay: delay, animationDuration: dur }}
      />
    ))}
  </div>
);

export default React.memo(Sparkles);
