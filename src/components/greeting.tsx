const words = ["Hello\u00A0😊", "Bonjour\u00A0😄", "안녕하십니까\u00A0🙂"] as const;

function isEmoji(char: string) {
  return /\p{Extended_Pictographic}/u.test(char);
}

const typeMs = 90;
const deleteMs = 50;
const holdMs = 1400;
const gapMs = 280;

function wordSpan(word: string) {
  return word.length * typeMs + holdMs + word.length * deleteMs + gapMs;
}

const cycleMs = words.reduce((total, word) => total + wordSpan(word), 0);

function percent(ms: number) {
  return Number(((ms / cycleMs) * 100).toFixed(3));
}

function animationCss() {
  let cursor = 0;
  const rules: string[] = [];

  words.forEach((word, wordIndex) => {
    const start = cursor;
    const holdEnd = start + word.length * typeMs + holdMs;
    const deleteEnd = holdEnd + word.length * deleteMs;
    cursor += wordSpan(word);

    const caretStart = percent(start);
    const caretEnd = percent(deleteEnd);
    const caretFrames =
      start === 0
        ? `0%, ${caretEnd}% { opacity: 1; } ${Math.min(caretEnd + 0.05, 100)}%, 100% { opacity: 0; }`
        : `0%, ${caretStart}% { opacity: 0; } ${caretStart + 0.05}%, ${caretEnd}% { opacity: 1; } ${Math.min(caretEnd + 0.05, 100)}%, 100% { opacity: 0; }`;

    rules.push(`@keyframes greet-caret-${wordIndex} { ${caretFrames} }`);

    [...word].forEach((char, charIndex) => {
      const appear = percent(start + (charIndex + 1) * typeMs);
      const disappear = percent(holdEnd + (word.length - charIndex) * deleteMs);
      const width = isEmoji(char) ? "1.75em" : "1.5em";
      rules.push(
        `@keyframes greet-${wordIndex}-${charIndex} { 0%, ${appear}% { max-width: 0; } ${appear + 0.05}%, ${disappear}% { max-width: ${width}; } ${Math.min(disappear + 0.05, 100)}%, 100% { max-width: 0; } }`,
      );
    });
  });

  rules.push(
    `@media (prefers-reduced-motion: reduce) {
      .greet-char { animation: none !important; max-width: 1.5em !important; }
      .greet-emoji { max-width: 1.75em !important; }
      .greet-word:not(:first-child) { display: none; }
      .greet-caret { display: none; }
    }`,
  );

  return rules.join("\n");
}

export function Greeting() {
  return (
    <h1
      aria-label={words[0]}
      className="min-h-[27px] text-[18px] font-semibold leading-[27px] text-ink md:min-h-[38px] md:text-[32px] md:leading-[38px] md:tracking-[0.16px]"
    >
      <style>{animationCss()}</style>
      <span aria-hidden="true" className="inline-grid align-bottom">
        {words.map((word, wordIndex) => (
          <span key={word} className="greet-word col-start-1 row-start-1 whitespace-nowrap">
            {[...word].map((char, charIndex) => (
              <span
                key={`${word}-${charIndex}`}
                className={`greet-char inline-block max-w-0 overflow-hidden whitespace-pre${isEmoji(char) ? " greet-emoji" : ""}`}
                style={{
                  animation: `greet-${wordIndex}-${charIndex} ${cycleMs}ms linear infinite`,
                }}
              >
                {char}
              </span>
            ))}
            <span
              className="greet-caret ml-[3px] inline-block w-[2px] align-middle"
              style={{ animation: `greet-caret-${wordIndex} ${cycleMs}ms linear infinite` }}
            >
              <span className="block h-[0.85em] w-[2px] bg-current [animation:caret-blink_1s_step-end_infinite]" />
            </span>
          </span>
        ))}
      </span>
    </h1>
  );
}
