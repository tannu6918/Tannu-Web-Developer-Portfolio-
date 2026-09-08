import { useEffect, useRef } from 'react';

export function useMouseParallax(intensity = 20) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      el.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
    };

    const handleLeave = () => {
      el.style.transform = 'translate(0, 0)';
    };

    const parent = el.parentElement;
    parent?.addEventListener('mousemove', handleMove);
    parent?.addEventListener('mouseleave', handleLeave);

    return () => {
      parent?.removeEventListener('mousemove', handleMove);
      parent?.removeEventListener('mouseleave', handleLeave);
    };
  }, [intensity]);

  return ref;
}
