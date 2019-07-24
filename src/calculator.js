export function addRoll(frames, roll) {
  if (frames.length === 0) {
    return [[roll]];
  }

  let lastFrame = frames[frames.length - 1];
  let frameTotal = lastFrame.reduce((a, b) => a + b, 0);

  if (frames.length === 10) {
    lastFrame.push(roll);
  } else if (lastFrame.length === 2 || frameTotal === 10) {
    frames.push([roll]);
  } else {
    lastFrame.push(roll);
  }

  return frames;
}

export function calculateNextAvailablePins(frames) {
  let lastFrame = frames[frames.length - 1];
  let frameTotal = lastFrame.reduce((a, b) => a + b, 0);

  if (lastFrame.length === 2 || frameTotal === 10) {
    return 10;
  } else {
    return 10 - frameTotal;
  }
}

export function calculateScores(frames) {
  let scores = [];

  // var thisFrame = [];
  // rolls.forEach((roll, i) => {
  //   if (thisFrame === []) {
  //     thisFrame.push(roll);
  //   } else {
  //     if (thisFrame === [10]) {
  //       thisFrame = [];
  //     } else {
  //       thisFrame.push(roll);
  //       const framePins = thisFrame[0] + thisFrame[1];
  //       if (framePins < 10) {
  //         // completed open frame
  //         const frameScore = framePins;
  //         scores.push(frameScore);
  //         thisFrame = [];
  //       }
  //     }
  //   }
  // });

  // [[6, 3], [10]];
  // [[6, 3], [10], [9]]
  // [[6, 3], [10], [9, 1]]

  frames.forEach((frame, i) => {
    let frameTotal = frame.reduce((a, b) => a + b, 0);
    const previousScore = scores.length === 0 ? 0 : scores[scores.length - 1];
    if (frameTotal < 10) {
      if (frame.length === 2) {
        scores.push(frameTotal + previousScore);
      }
    } else {
      if (i === 9) {
        if ((frame.length === 2 && frameTotal < 10) || frame.length === 3) {
          scores.push(frameTotal + previousScore);
        }
      } else {
        let rolls = frames.slice(i + 1).reduce((prev, current) => {
          return prev.concat(current);
        }, []);

        if (frame.length === 1 && rolls.length > 1) {
          frameTotal += rolls[0] + rolls[1];
          scores.push(frameTotal + previousScore);
        }

        if (frame.length === 2 && rolls.length > 0) {
          frameTotal += rolls[0];
          scores.push(frameTotal + previousScore);
        }
      }
    }
  });

  return scores;
}
