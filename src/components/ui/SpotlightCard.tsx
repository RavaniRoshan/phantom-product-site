import { useRef, type Key, type MouseEvent, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

export function SpotlightCard({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  key?: Key;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn('spotlight relative overflow-hidden rounded-xl', className)}
      {...rest}
    >
      {children}
    </div>
  );
}
