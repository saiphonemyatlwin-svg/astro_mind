import React from 'react';
import {Composition} from 'remotion';
import {CIYVideo} from './Video';

export const Root: React.FC = () => {
  return (
    <Composition
      id="CIYVideo"
      component={CIYVideo}
      durationInFrames={5400}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
