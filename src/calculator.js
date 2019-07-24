export function addRoll(frames, roll) {
  if (frames.length === 0) {
    return [[roll]];
  }

  let lastFrame = frames[frames.length - 1];
  let frameTotal = lastFrame.reduce((a, b) => a + b, 0);

  if (frames.length === 10) {
    lastFrame.push(roll);
  }
  else if (lastFrame.length === 2 || frameTotal === 10) {
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
