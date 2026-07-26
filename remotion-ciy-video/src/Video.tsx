import React from 'react';
import {AbsoluteFill, Series} from 'remotion';
import {
  Chip,
  KineticLine as L,
  OptionCard,
  ProgressBar,
  Scene,
  StepPill,
} from './components';
import {loadFonts} from './fonts';
import {CIY, FONT_MM} from './theme';

loadFonts();

// ---- Scene durations (30 fps) — must sum to 5400 (180 s) ----
const D = {
  hook: 90,
  retention: 210,
  nameSkill: 300,
  steps: 600,
  lateIntro: 240,
  lateSteps: 300,
  latePattern: 240,
  lateSystem: 240,
  lateDebug: 180,
  airportCards: 450,
  airportLesson: 450,
  weakPrompt: 360,
  strongPrompt: 420,
  generateEvaluate: 270,
  closeWisdom: 360,
  closeList: 450,
  endCard: 240,
};

const SectionTag: React.FC<{text: string; dark?: boolean}> = ({
  text,
  dark = false,
}) => (
  <div
    style={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: 28,
      fontWeight: 600,
      letterSpacing: 4,
      textTransform: 'uppercase',
      color: dark ? CIY.amber : CIY.blue,
      marginBottom: 34,
    }}
  >
    {text}
  </div>
);

export const CIYVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: CIY.white}}>
      <Series>
        {/* 0:00–0:03 — GOLDEN HOOK */}
        <Series.Sequence durationInFrames={D.hook}>
          <Scene bg={CIY.blue} align="center" duration={D.hook}>
            <L t="AI ခေတ်မှာ" size={58} color={CIY.white} delay={0} />
            <L
              t="ကလေးတွေ အရင်ဆုံးသင်ရမယ့် Skill က"
              size={52}
              color={CIY.white}
              delay={8}
              mt={10}
            />
            <L
              t="«Coding မဟုတ်ဘူး။»"
              size={84}
              weight={900}
              color={CIY.white}
              delay={20}
              mt={26}
            />
          </Scene>
        </Series.Sequence>

        {/* 0:03–0:10 — RETENTION HOOK */}
        <Series.Sequence durationInFrames={D.retention}>
          <Scene duration={D.retention}>
            <L t="ဒီ Skill မရှိတဲ့ကလေးက" size={50} delay={0} />
            <L
              t="AI ပြောသမျှကို «ယုံမယ်။»"
              size={62}
              weight={900}
              delay={18}
              mt={6}
            />
            <L t="ရှိတဲ့ကလေးကတော့" size={50} delay={70} mt={50} />
            <L
              t="AI ရဲ့အဖြေကို «ပြန်စစ်မယ်။»"
              size={62}
              weight={900}
              accent={CIY.blue}
              delay={88}
              mt={6}
            />
            <L
              t="အနာဂတ်မှာ ကွာခြားချက်က ဒီတစ်ချက်တည်း။"
              size={40}
              weight={400}
              color={CIY.greyText}
              delay={140}
              mt={60}
            />
          </Scene>
        </Series.Sequence>

        {/* 0:10–0:20 — NAME THE SKILL */}
        <Series.Sequence durationInFrames={D.nameSkill}>
          <Scene duration={D.nameSkill}>
            <L t="အဲဒီ Skill ကို" size={50} delay={0} />
            <L
              t="«Computational Thinking»"
              size={64}
              weight={900}
              accent={CIY.blue}
              delay={16}
              mt={8}
              en
            />
            <L t="လို့ ခေါ်တယ်။" size={50} delay={34} mt={8} />
            <L
              t="ကွန်ပျူတာလို တွေးတာ မဟုတ်ဘူး။"
              size={46}
              weight={400}
              delay={110}
              mt={70}
            />
            <L
              t="ပြဿနာတစ်ခုကို «ရှင်းလင်းစွာ» တွေးတတ်တာ။"
              size={54}
              weight={900}
              delay={150}
              mt={14}
            />
          </Scene>
        </Series.Sequence>

        {/* 0:20–0:40 — THE 5 STEPS */}
        <Series.Sequence durationInFrames={D.steps}>
          <Scene bg={CIY.blue} duration={D.steps}>
            <L
              t="Computational Thinking ="
              size={54}
              weight={700}
              color={CIY.white}
              delay={0}
              en
            />
            <StepPill num="၁" text="ပြဿနာကို ခွဲခြမ်းခြင်း" delay={60} dark />
            <StepPill
              num="၂"
              text="ပုံစံကို ရှာဖွေခြင်း"
              sub="Pattern Recognition"
              delay={150}
              dark
            />
            <StepPill
              num="၃"
              text="အရေးကြီးတာကို ရွေးချယ်ခြင်း"
              delay={240}
              dark
            />
            <StepPill
              num="၄"
              text="လုပ်ငန်းစဉ် တည်ဆောက်ခြင်း"
              delay={330}
              dark
            />
            <StepPill
              num="၅"
              text="စမ်းသပ်ပြီး ပြန်ပြင်ခြင်း"
              sub="Debugging"
              delay={420}
              dark
            />
          </Scene>
        </Series.Sequence>

        {/* 0:40–0:48 — STORY: ALWAYS LATE */}
        <Series.Sequence durationInFrames={D.lateIntro}>
          <Scene duration={D.lateIntro}>
            <SectionTag text="Story 01" />
            <L
              t="မနက်တိုင်း ကျောင်းနောက်ကျတဲ့ ကလေးတစ်ယောက်။"
              size={54}
              weight={900}
              delay={0}
            />
            <L
              t="မိဘတွေက အော်တယ် — «မြန်မြန်လုပ်!»"
              size={48}
              delay={60}
              mt={50}
            />
            <L
              t="ဒါပေမဲ့ အော်တာက ပြဿနာကို မဖြေရှင်းပေးဘူး။"
              size={44}
              weight={400}
              color={CIY.greyText}
              delay={130}
              mt={30}
            />
          </Scene>
        </Series.Sequence>

        {/* 0:48–0:58 — BREAK THE MORNING INTO STEPS */}
        <Series.Sequence durationInFrames={D.lateSteps}>
          <Scene duration={D.lateSteps}>
            <L t="မနက်ခင်းကို «အပိုင်းလိုက်» ခွဲကြည့်ပါ။" size={50} delay={0} />
            <div style={{marginTop: 40}}>
              <Chip text="အိပ်ရာထ" delay={40} />
              <Chip text="ရေချိုး" delay={60} />
              <Chip text="အဝတ်လဲ" delay={80} />
              <Chip text="မနက်စာ" delay={100} />
              <Chip text="အိတ်ထည့်" delay={120} />
              <Chip text="အိမ်ကထွက်" delay={140} />
            </div>
            <L
              t="ဘယ်အဆင့်မှာ အချိန် အများဆုံး ကုန်နေလဲ။"
              size={50}
              weight={900}
              delay={200}
              mt={70}
            />
          </Scene>
        </Series.Sequence>

        {/* 0:58–1:06 — PATTERN FOUND */}
        <Series.Sequence durationInFrames={D.latePattern}>
          <Scene duration={D.latePattern}>
            <SectionTag text="Pattern Recognition" />
            <L
              t="နိုးပြီးတိုင်း ဖုန်းကို «၁၅ မိနစ်» ကြည့်မိတယ်။"
              size={54}
              weight={900}
              delay={0}
            />
            <L
              t="ပြဿနာကြီး မဟုတ်တော့ဘူး။"
              size={46}
              weight={400}
              delay={80}
              mt={60}
            />
            <L
              t="«ပြဿနာသေး» ဖြစ်သွားပြီ။"
              size={58}
              weight={900}
              accent={CIY.blue}
              delay={120}
              mt={10}
            />
          </Scene>
        </Series.Sequence>

        {/* 1:06–1:14 — BUILD A SYSTEM */}
        <Series.Sequence durationInFrames={D.lateSystem}>
          <Scene bg={CIY.blue} duration={D.lateSystem}>
            <StepPill num="၁" text="ညကတည်းက အိတ်ပြင်ထားမယ်။" delay={0} dark />
            <StepPill num="၂" text="မနက် ၆:၃၀ မှာ နိုးမယ်။" delay={45} dark />
            <StepPill
              num="၃"
              text="မနက်စာစားပြီးမှ ဖုန်းကြည့်မယ်။"
              delay={90}
              dark
            />
            <L
              t="ဒါ Motivation မဟုတ်ဘူး။ «System» ပါ။"
              size={56}
              weight={900}
              color={CIY.white}
              delay={160}
              mt={70}
            />
          </Scene>
        </Series.Sequence>

        {/* 1:14–1:20 — DEBUGGING */}
        <Series.Sequence durationInFrames={D.lateDebug}>
          <Scene duration={D.lateDebug}>
            <SectionTag text="Debugging" />
            <L t="နောက်ကျပြန်ရင် —" size={46} weight={400} delay={0} />
            <L
              t="«ဘယ်အဆင့်မှာ Delay ဖြစ်လဲ» လို့ ပြန်စစ်တယ်။"
              size={52}
              delay={30}
              mt={14}
            />
            <L
              t="Coding မရေးရသေးဘူး။"
              size={44}
              weight={400}
              color={CIY.greyText}
              delay={90}
              mt={60}
            />
            <L
              t="ဒါပေမဲ့ ကလေးက «Programmer လို» စဉ်းစားနေပြီ။"
              size={54}
              weight={900}
              delay={115}
              mt={10}
            />
          </Scene>
        </Series.Sequence>

        {/* 1:20–1:35 — AIRPORT: 3 OPTIONS */}
        <Series.Sequence durationInFrames={D.airportCards}>
          <Scene duration={D.airportCards}>
            <SectionTag text="Story 02" />
            <L t="လေဆိပ်သွားဖို့ နည်းလမ်း «၃» မျိုး။" size={54} delay={0} />
            <OptionCard
              title="Taxi"
              pro="မြန်တယ်"
              con="ဈေးကြီးတယ်"
              delay={50}
            />
            <OptionCard
              title="Bus"
              pro="ဈေးသက်သာတယ်"
              con="နှေးတယ်"
              delay={120}
            />
            <OptionCard
              title="Train"
              pro="အချိန်ခန့်မှန်းလို့ရတယ်"
              con="အိတ်သယ်ပြီး လမ်းလျှောက်ရတယ်"
              delay={190}
            />
            <L
              t="အဖြေမှန် တစ်ခုတည်း မရှိဘူး။ အခြေအနေပေါ် မူတည်တယ်။"
              size={44}
              weight={900}
              delay={290}
              mt={50}
            />
          </Scene>
        </Series.Sequence>

        {/* 1:35–1:50 — CHEAPEST ≠ BEST */}
        <Series.Sequence durationInFrames={D.airportLesson}>
          <Scene duration={D.airportLesson}>
            <L t="Bus က «$10» သက်သာတယ်။" size={52} delay={0} />
            <L
              t="ဒါပေမဲ့ လေယာဉ်လွတ်ရင် «ရာနဲ့ချီ» ကုန်မယ်။"
              size={52}
              delay={55}
              mt={16}
            />
            <L
              t="ဈေးသက်သာတာ ≠ အကောင်းဆုံး"
              size={64}
              weight={900}
              accent={CIY.blue}
              delay={140}
              mt={80}
            />
            <L
              t="Computational Thinking က ဈေးနှုန်းတင် မကြည့်ဘဲ"
              size={42}
              weight={400}
              color={CIY.greyText}
              delay={230}
              mt={70}
            />
            <L
              t="«Consequence» ကိုပါ ကြည့်တတ်အောင် သင်ပေးတယ်။"
              size={48}
              delay={260}
              mt={8}
            />
          </Scene>
        </Series.Sequence>

        {/* 1:50–2:02 — WEAK PROMPT */}
        <Series.Sequence durationInFrames={D.weakPrompt}>
          <Scene duration={D.weakPrompt}>
            <SectionTag text="Asking AI" />
            <L t="AI ကို ဒီလိုမေးရင် —" size={46} weight={400} delay={0} />
            <div
              style={{
                backgroundColor: '#F0F3F7',
                border: `3px solid ${CIY.grey}`,
                borderRadius: 40,
                padding: '30px 46px',
                marginTop: 30,
                fontFamily: "'Poppins', sans-serif",
                fontSize: 48,
                fontWeight: 600,
                color: CIY.ink,
              }}
            >
              “Plan my holiday.”
            </div>
            <L
              t="အထွေထွေ အဖြေတစ်ခုပဲ ပြန်ရမယ်။"
              size={48}
              delay={90}
              mt={60}
            />
            <L
              t="ကိုယ့်မိသားစုနဲ့ သင့်တော်မယ်လို့ အာမခံလို့ မရဘူး။"
              size={42}
              weight={400}
              color={CIY.greyText}
              delay={150}
              mt={16}
            />
          </Scene>
        </Series.Sequence>

        {/* 2:02–2:16 — STRONG PROMPT */}
        <Series.Sequence durationInFrames={D.strongPrompt}>
          <Scene duration={D.strongPrompt}>
            <L t="ပိုကောင်းတဲ့ မေးခွန်းက «Constraint» ပါတယ်။" size={50} delay={0} />
            <div style={{marginTop: 36}}>
              <Chip text="လူကြီး ၂ + ကလေး ၂" delay={50} highlight />
              <Chip text="ဘန်ကောက် ၃ ရက်" delay={75} highlight />
              <Chip text="Budget $500" delay={100} highlight />
              <Chip text="ကလေးသင့်တော်တဲ့ နေရာ" delay={125} highlight />
              <Chip text="သွားလာချိန်" delay={150} highlight />
              <Chip text="မိုးရွာရင် Backup Plan" delay={175} highlight />
            </div>
            <L
              t="Constraint ရှင်းရင် အဖြေ ရှင်းတယ်။"
              size={54}
              weight={900}
              delay={240}
              mt={70}
            />
            <L
              t="ဒါပေမဲ့ — အဖြေရတာနဲ့ မပြီးသေးဘူး။ «ပြန်စစ်ရမယ်။»"
              size={44}
              delay={310}
              mt={30}
            />
          </Scene>
        </Series.Sequence>

        {/* 2:16–2:25 — GENERATE vs EVALUATE */}
        <Series.Sequence durationInFrames={D.generateEvaluate}>
          <Scene bg={CIY.blue} align="center" duration={D.generateEvaluate}>
            <L
              t="AI can generate."
              size={76}
              weight={700}
              color={CIY.white}
              delay={0}
              en
            />
            <L
              t="Humans must evaluate."
              size={76}
              weight={700}
              color={CIY.amber}
              delay={45}
              mt={16}
              en
            />
            <L
              t="AI က အဖြေထုတ်ပေးတယ်။"
              size={40}
              weight={400}
              color={CIY.white}
              delay={120}
              mt={90}
            />
            <L
              t="ယုံသင့်၊ မယုံသင့်ကတော့ လူက ဆုံးဖြတ်ရတယ်။"
              size={40}
              weight={400}
              color={CIY.white}
              delay={150}
              mt={8}
            />
          </Scene>
        </Series.Sequence>

        {/* 2:25–2:37 — CLOSING: NO WISDOM */}
        <Series.Sequence durationInFrames={D.closeWisdom}>
          <Scene duration={D.closeWisdom}>
            <L t="AI က Option ပေးနိုင်တယ်။" size={54} delay={0} />
            <L
              t="«Wisdom» မပေးနိုင်ဘူး။"
              size={64}
              weight={900}
              delay={55}
              mt={16}
            />
            <L
              t="အနာဂတ်မှာ အနိုင်ရမယ့်ကလေးက"
              size={46}
              weight={400}
              delay={150}
              mt={80}
            />
            <L
              t="AI အသုံးအများဆုံး ကလေး မဟုတ်ဘူး။"
              size={52}
              delay={185}
              mt={10}
            />
          </Scene>
        </Series.Sequence>

        {/* 2:37–2:52 — CLOSING: THE LIST + CTA */}
        <Series.Sequence durationInFrames={D.closeList}>
          <Scene duration={D.closeList}>
            <L t="ပြဿနာကို «မှန်မှန်မြင်တတ်»၊" size={50} delay={0} />
            <L t="အပိုင်းလိုက် «ခွဲတတ်»၊" size={50} delay={40} mt={6} />
            <L t="အချက်အလက်ကို «စစ်တတ်»၊" size={50} delay={80} mt={6} />
            <L
              t="မအောင်မြင်ရင် «ပြန်ပြင်တတ်»တဲ့ကလေး ဖြစ်မယ်။"
              size={50}
              delay={120}
              mt={6}
            />
            <L
              t="ကလေးကို Coding သင်ပေးပါ။"
              size={46}
              weight={400}
              delay={230}
              mt={80}
            />
            <L
              t="ဒါပေမဲ့ အဲဒါ မတိုင်ခင် —"
              size={46}
              weight={400}
              color={CIY.greyText}
              delay={270}
              mt={10}
            />
            <L
              t="«ဘယ်လိုတွေးရမလဲ» ဆိုတာ အရင်သင်ပေးပါ။"
              size={58}
              weight={900}
              accent={CIY.blue}
              delay={310}
              mt={14}
            />
          </Scene>
        </Series.Sequence>

        {/* 2:52–3:00 — END CARD */}
        <Series.Sequence durationInFrames={D.endCard}>
          <Scene bg={CIY.blue} align="center" duration={D.endCard}>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 84,
                fontWeight: 700,
                color: CIY.white,
                letterSpacing: 2,
              }}
            >
              CIY CLUB
            </div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 40,
                fontWeight: 600,
                color: CIY.white,
                letterSpacing: 10,
                marginTop: 4,
              }}
            >
              MYANMAR
            </div>
            <div
              style={{
                width: 220,
                height: 10,
                borderRadius: 999,
                backgroundColor: CIY.amber,
                margin: '44px 0',
              }}
            />
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 44,
                fontWeight: 600,
                color: CIY.amber,
              }}
            >
              Consumer to Creator
            </div>
            <div
              style={{
                fontFamily: FONT_MM,
                fontSize: 34,
                fontWeight: 400,
                color: CIY.white,
                marginTop: 30,
                lineHeight: 1.6,
              }}
            >
              ၇–၁၇ နှစ် ကလေးတွေအတွက် Tech Education
            </div>
          </Scene>
        </Series.Sequence>
      </Series>
      <ProgressBar />
    </AbsoluteFill>
  );
};
