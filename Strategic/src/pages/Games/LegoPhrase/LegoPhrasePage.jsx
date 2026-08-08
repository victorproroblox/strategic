import React from 'react';
import GamePageLayout from '../GamePageLayout';
import PhraseSwapGame from '../engine/PhraseSwapGame';
import { GAME_TITLE, legoPhraseConfig } from './legoPhraseData';

const LegoPhrasePage = () => {
  return (
    <GamePageLayout title={GAME_TITLE} topic={legoPhraseConfig.tema}>
      <PhraseSwapGame config={legoPhraseConfig} />
    </GamePageLayout>
  );
};

export default LegoPhrasePage;
