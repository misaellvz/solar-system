import Image from 'next/image';
import React from 'react';

interface SpaceImageProps {
  width: number;
  height: number;
  src: string;
  alt: string;
}

const SpaceImage: React.FC<SpaceImageProps> = ({ src, alt, width, height }) => {
  return (
    <div>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default SpaceImage;