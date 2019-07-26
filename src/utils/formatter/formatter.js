export function formatFrames(frames) {
  let formattedFrames = [
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', '', '']
  ];

  frames.forEach((frame, i) => {
    const frameTotal = frame.reduce((a, b) => a + b, 0);

    if (i === 9) {
      if (frame[0] === 10) {
        formattedFrames[i][0] = 'X';
      } else if (frame[0] === 0) {
        formattedFrames[i][0] = '-';
      } else {
        formattedFrames[i][0] = frame[0];
      }

      if (frame.length > 1) {
        if (frame[1] === 10) {
          formattedFrames[i][1] = 'X';
        } else if (frame[0] + frame[1] === 10) {
          formattedFrames[i][1] = '/';
        } else if (frame[1] === 0) {
          formattedFrames[i][1] = '-';
        } else {
          formattedFrames[i][1] = frame[1];
        }

        if (frame.length > 2) {
          if (frame[2] === 10) {
            formattedFrames[i][2] = 'X';
          } else if (frame[1] + frame[2] === 10) {
            formattedFrames[i][2] = '/';
          } else {
            formattedFrames[i][2] = frame[2] === 0 ? '-' : frame[2];
          }
        }
      }
    } else {
      if (frameTotal === 10) {
        if (frame[0] < 10) {
          formattedFrames[i][0] = frame[0] === 0 ? '-' : frame[0];
          formattedFrames[i][1] = '/';
        } else {
          formattedFrames[i][1] = 'X';
        }
      } else {
        formattedFrames[i][0] = frame[0] === 0 ? '-' : frame[0];
        if (frame.length > 1) {
          formattedFrames[i][1] = frame[1] === 0 ? '-' : frame[1];
        }
      }
    }
  });

  return formattedFrames;
}
