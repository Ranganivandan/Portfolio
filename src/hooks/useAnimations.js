import { useEffect, useState, useRef } from 'react';

/**
 * Native typewriter — no external deps, no ESM issues
 */
export const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (!deleting && charIndex <= current.length) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c + 1);
      }, charIndex === current.length ? pause : speed);
      return () => clearTimeout(timeout);
    }

    if (!deleting && charIndex > current.length) {
      setDeleting(true);
      return;
    }

    if (deleting && charIndex >= 0) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c - 1);
      }, speed / 2);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex < 0) {
      setDeleting(false);
      setWordIndex(w => (w + 1) % words.length);
      setCharIndex(0);
    }
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
};

/**
 * Native count-up — no external deps
 */
export const useCountUp = (end, duration = 2000, started = false) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);
  const startTime = useRef(null);

  useEffect(() => {
    if (!started) return;
    startTime.current = null;

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(eased * end);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [started, end, duration]);

  return count;
};
