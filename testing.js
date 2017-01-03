var getTrack = (...args) => {
  console.log(args);
  return args[0] + ' ' + args[1];
}

console.log(getTrack('Artist', 'Track'));
