'use client';
import { planetRender } from '@/utils/planet-render';
import { useEffect, useRef } from 'react';

export const ThreeAnimation = ({ texture }: { texture: string }) => {
  // Create a ref to store the reference to the container element
  const containerRef = useRef<HTMLDivElement>(null);

  // Run the planetRender function when the component mounts or when the texture prop changes
  useEffect(() => {
    planetRender(containerRef.current, texture);
  }, [texture]);

  return <div id="threejs-container" ref={containerRef} />;
};
