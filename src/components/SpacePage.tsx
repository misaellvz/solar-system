import React from 'react';
import SpaceImage from './SpaceImage';
import { getStaticProps } from './getStaticProps';

interface SpacePageProps {
  spaceImage: {
    media_type: string;
    url: string;
    title: string;
    explanation: string;
  };
}

const SpacePage: React.FC<SpacePageProps> = ({ spaceImage }) => {
  return (
    <div>
      <SpaceImage spaceImage={spaceImage} />
    </div>
  );
};

export default SpacePage;

export const getStaticProps: GetStaticProps = getStaticProps; 