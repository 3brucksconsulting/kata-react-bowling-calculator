export function addRoll(frames, roll) {
  let frame = getLastFrame(frames);

  if (isNewGame(frames)) {
    return [[roll]];
  } else if (isTenthFrame(frames)) {
    frame.push(roll);
  } else if (isEndOfFrame(frame)) {
    frames.push([roll]);
  } else {
    frame.push(roll);
  }

  return frames;
}

export function calculateCurrentFrame(frames) {
  let frame = getLastFrame(frames);

  if (isNewGame(frames)) {
    return 1;
  } else if (isTenthFrame(frames)) {
    return 10;
  } else if (isEndOfFrame(frame)) {
    return frames.length + 1;
  } else {
    return frames.length;
  }
}

export function calculateNextAvailablePins(frames) {
  let frame = getLastFrame(frames);

  if (isEndOfFrame(getLastFrame(frames))) {
    return 10;
  } else {
    return 10 - getFrameTotal(frame);
  }
}

export function calculateScores(frames) {
  let scores = [];

  frames.forEach((frame, i) => {
    let frameTotal = getFrameTotal(frame);
    const frameNumber = i + 1;
    const previousScore = getPreviousScores(scores);

    if (isOpenFrame(frame)) {
      scores.push(frameTotal + previousScore);
    } else if (isEndOfTenthFrame(frameNumber, frame)) {
      scores.push(frameTotal + previousScore);
    } else {
      let bonusRolls = getBonusRolls(frames, frameNumber);

      if (canScoreStrike(frame, bonusRolls)) {
        frameTotal += bonusRolls[0] + bonusRolls[1];
        scores.push(frameTotal + previousScore);
      }

      if (canScoreSpare(frame, bonusRolls)) {
        frameTotal += bonusRolls[0];
        scores.push(frameTotal + previousScore);
      }
    }
  });

  return scores;
}

const canScoreSpare = (frame, bonusRolls) => {
  return frame.length === 2 && bonusRolls.length > 0;
};

const canScoreStrike = (frame, bonusRolls) => {
  return frame.length === 1 && bonusRolls.length > 1;
};

const getBonusRolls = (frames, frameNumber) => {
  return frames.slice(frameNumber).reduce((prev, current) => {
    return prev.concat(current);
  }, []);
};

const getFrameTotal = frame => {
  return frame.reduce((a, b) => a + b, 0);
};

const getLastFrame = frames => {
  return frames[frames.length - 1];
};

const getPreviousScores = scores => {
  return scores.length === 0 ? 0 : scores[scores.length - 1];
};

const isEndOfFrame = frame => {
  return frame.length > 1 || getFrameTotal(frame) === 10;
};

const isEndOfTenthFrame = (frameNumber, frame) => {
  return (
    frameNumber === 10 &&
    ((frame.length > 1 && getFrameTotal(frame) < 10) || frame.length === 3)
  );
};

const isNewGame = frames => {
  return frames.length === 0;
};

const isOpenFrame = frame => {
  return getFrameTotal(frame) < 10 && frame.length > 1;
};

const isTenthFrame = frames => {
  return frames.length === 10;
};
