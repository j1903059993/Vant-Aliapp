var antmove_export = {};

function get(type, color, plain) {
  if (plain) {
    return color ? color : '#c9c9c9';
  }

  if (type === 'default') {
    return '#c9c9c9';
  }

  return 'white';
}

antmove_export = get;
export default antmove_export;