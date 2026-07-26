import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {CIY, FONT_MM} from './theme';

// Renders text with «highlight» markers in an accent color
export const Hi: React.FC<{text: string; accent?: string}> = ({
  text,
  accent = CIY.amber,
}) => {
  const parts = text.split(/«|»/g);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <span key={i} style={{color: accent}}>
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
};

export type LineSpec = {
  t: string;
  size?: number;
  weight?: 400 | 700 | 900;
  color?: string;
  accent?: string;
  delay?: number;
  mt?: number;
  en?: boolean;
};

export const KineticLine: React.FC<LineSpec> = ({
  t,
  size = 54,
  weight = 700,
  color = CIY.ink,
  accent = CIY.amber,
  delay = 0,
  mt = 0,
  en = false,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const prog = spring({
    frame: frame - delay,
    fps,
    config: {damping: 200, stiffness: 90},
  });
  const y = interpolate(prog, [0, 1], [46, 0]);
  return (
    <div
      style={{
        fontFamily: en ? "'Poppins', sans-serif" : FONT_MM,
        fontSize: size,
        fontWeight: weight,
        color,
        lineHeight: 1.65,
        marginTop: mt,
        opacity: prog,
        transform: `translateY(${y}px)`,
      }}
    >
      <Hi text={t} accent={accent} />
    </div>
  );
};

// Scene wrapper: bg color, padding, fade in/out at the edges
export const Scene: React.FC<{
  bg?: string;
  align?: 'left' | 'center';
  duration: number;
  children: React.ReactNode;
}> = ({bg = CIY.white, align = 'left', duration, children}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, 10, duration - 10, duration],
    [0, 1, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
  );
  return (
    <AbsoluteFill style={{backgroundColor: bg}}>
      <AbsoluteFill
        style={{
          opacity,
          padding: '140px 90px 200px 90px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: align === 'center' ? 'center' : 'flex-start',
          textAlign: align,
        }}
      >
        {children}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Pill row with a numbered badge, used for step lists
export const StepPill: React.FC<{
  num: string;
  text: string;
  sub?: string;
  delay: number;
  dark?: boolean;
}> = ({num, text, sub, delay, dark = false}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const prog = spring({
    frame: frame - delay,
    fps,
    config: {damping: 16, stiffness: 120},
  });
  const x = interpolate(prog, [0, 1], [70, 0]);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 30,
        backgroundColor: dark ? 'rgba(255,255,255,0.12)' : CIY.white,
        borderRadius: 999,
        padding: '22px 42px 22px 24px',
        marginTop: 26,
        opacity: prog,
        transform: `translateX(${x}px)`,
        boxShadow: dark ? 'none' : '0 4px 24px rgba(10,10,10,0.07)',
        alignSelf: 'flex-start',
      }}
    >
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          backgroundColor: dark ? CIY.amber : CIY.blue,
          color: dark ? CIY.ink : CIY.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: FONT_MM,
          fontSize: 36,
          fontWeight: 900,
          flexShrink: 0,
        }}
      >
        {num}
      </div>
      <div>
        <div
          style={{
            fontFamily: FONT_MM,
            fontSize: 38,
            fontWeight: 700,
            color: dark ? CIY.white : CIY.ink,
            lineHeight: 1.5,
          }}
        >
          {text}
        </div>
        {sub ? (
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 26,
              fontWeight: 600,
              color: dark ? CIY.amber : CIY.blue,
              lineHeight: 1.3,
            }}
          >
            {sub}
          </div>
        ) : null}
      </div>
    </div>
  );
};

// Small rounded chip (morning-routine steps, prompt constraints)
export const Chip: React.FC<{
  text: string;
  delay: number;
  highlight?: boolean;
}> = ({text, delay, highlight = false}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const prog = spring({
    frame: frame - delay,
    fps,
    config: {damping: 14, stiffness: 140},
  });
  return (
    <div
      style={{
        display: 'inline-block',
        backgroundColor: highlight ? CIY.amber : '#F0F3F7',
        color: CIY.ink,
        border: highlight ? 'none' : `2px solid ${CIY.grey}`,
        borderRadius: 999,
        padding: '16px 34px',
        margin: '12px 12px 0 0',
        fontFamily: FONT_MM,
        fontSize: 34,
        fontWeight: 700,
        lineHeight: 1.5,
        opacity: prog,
        transform: `scale(${interpolate(prog, [0, 1], [0.6, 1])})`,
      }}
    >
      {text}
    </div>
  );
};

// Option card for the airport comparison
export const OptionCard: React.FC<{
  title: string;
  pro: string;
  con: string;
  delay: number;
}> = ({title, pro, con, delay}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const prog = spring({
    frame: frame - delay,
    fps,
    config: {damping: 18, stiffness: 110},
  });
  return (
    <div
      style={{
        backgroundColor: CIY.white,
        borderRadius: 44,
        border: `3px solid ${CIY.grey}`,
        padding: '34px 44px',
        marginTop: 28,
        width: '100%',
        opacity: prog,
        transform: `translateY(${interpolate(prog, [0, 1], [60, 0])}px)`,
      }}
    >
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 44,
          fontWeight: 700,
          color: CIY.blue,
          lineHeight: 1.3,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONT_MM,
          fontSize: 34,
          fontWeight: 400,
          color: CIY.ink,
          lineHeight: 1.6,
          marginTop: 8,
        }}
      >
        ✓ {pro}
      </div>
      <div
        style={{
          fontFamily: FONT_MM,
          fontSize: 34,
          fontWeight: 400,
          color: CIY.greyText,
          lineHeight: 1.6,
        }}
      >
        ✕ {con}
      </div>
    </div>
  );
};

// Thin progress bar shown across the whole video
export const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const w = interpolate(frame, [0, durationInFrames], [0, 100]);
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 14,
        backgroundColor: 'rgba(193,200,209,0.35)',
      }}
    >
      <div
        style={{
          width: `${w}%`,
          height: '100%',
          backgroundColor: CIY.amber,
        }}
      />
    </div>
  );
};
