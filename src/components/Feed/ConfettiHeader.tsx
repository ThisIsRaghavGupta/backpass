import styles from './ConfettiHeader.module.css';

export default function ConfettiHeader() {
  return (
    <div className={styles.confettiWrapper}>
      <svg
        className={styles.confettiSvg}
        viewBox="0 0 700 60"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Left side confetti */}
        <path d="M40 40 C46 28, 56 28, 62 40 C68 52, 78 48, 84 38" stroke="#e74c3c" strokeWidth="2.5" fill="none" opacity="0.8" />
        <path d="M90 18 C96 8, 106 8, 112 18 C118 28, 128 28, 134 18" stroke="#2ecc71" strokeWidth="2.5" fill="none" opacity="0.75" />
        <circle cx="70" cy="28" r="3" fill="#f1c40f" opacity="0.85" />
        <path d="M150 44 L156 32 L162 44" stroke="#ff6b9d" strokeWidth="2.5" fill="none" opacity="0.75" />

        {/* Center-left confetti */}
        <path d="M200 22 C206 10, 216 10, 222 22" stroke="#3498db" strokeWidth="2.5" fill="none" opacity="0.7" />
        <circle cx="180" cy="14" r="2.5" fill="#3498db" opacity="0.75" />
        <rect x="240" y="38" width="7" height="7" rx="1" fill="#9b59b6" opacity="0.6" transform="rotate(45 243 41)" />
        <path d="M260 12 C266 22, 276 22, 282 12" stroke="#f39c12" strokeWidth="2.5" fill="none" opacity="0.75" />

        {/* Center confetti */}
        <circle cx="320" cy="45" r="2.5" fill="#e74c3c" opacity="0.7" />
        <path d="M350 8 L356 20 L362 8" stroke="#f1c40f" strokeWidth="2.5" fill="none" opacity="0.8" />

        {/* Center-right confetti */}
        <path d="M400 38 C406 26, 416 26, 422 38 C428 50, 438 48, 444 38" stroke="#2ecc71" strokeWidth="2.5" fill="none" opacity="0.8" />
        <circle cx="460" cy="15" r="3" fill="#ff6b9d" opacity="0.75" />
        <path d="M480 42 C486 30, 496 30, 502 42" stroke="#e74c3c" strokeWidth="2.5" fill="none" opacity="0.7" />

        {/* Right side confetti */}
        <path d="M530 18 C536 6, 546 6, 552 18 C558 30, 568 28, 574 18" stroke="#9b59b6" strokeWidth="2.5" fill="none" opacity="0.7" />
        <circle cx="520" cy="40" r="2.5" fill="#f39c12" opacity="0.7" />
        <rect x="590" y="34" width="6" height="6" rx="1" fill="#3498db" opacity="0.6" transform="rotate(30 593 37)" />
        <path d="M620 10 C626 22, 636 22, 642 10" stroke="#2ecc71" strokeWidth="2.5" fill="none" opacity="0.75" />
        <circle cx="660" cy="30" r="2.5" fill="#f1c40f" opacity="0.7" />
      </svg>

      <div className={styles.confettiContainer}>
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className={`${styles.confettiPiece} ${styles[`piece${(i % 6) + 1}`]}`}
            style={{
              left: `${6 + i * 7.5}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3.5 + (i % 3) * 0.8}s`,
            }}
          />
        ))}
      </div>

      <span className={styles.label}>Your Submission</span>
    </div>
  );
}
