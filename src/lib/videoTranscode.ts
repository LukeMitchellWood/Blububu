import HandBreak from 'handbrake-js';

HandBreak.spawn({
  input: 'static/img/assets/ducks-and-frog-loop-animation.mp4',
  output: 'static/img/assets/duckloop.mp4',
  preset: 'Social 8 MB 3 Minutes 360p30',
})
  .on('error', (err) => {
    console.error(err.message);
  })
  .on('progress', (progress) => {
    console.log(
      'Percent complete: %s, ETA: %s',
      progress.percentComplete,
      progress.eta
    );
  });
