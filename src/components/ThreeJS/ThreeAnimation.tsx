'use client';
import { planetRender } from '@/utils/planet-render';
import { useEffect, useRef } from 'react';

export const ThreeAnimation = ({ texture }: { texture: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    planetRender(containerRef.current, texture);
  }, [texture]);
  return <div id="threejs-container" ref={containerRef} />;
};
