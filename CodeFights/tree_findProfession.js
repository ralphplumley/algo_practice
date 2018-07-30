function findProfession(level, pos) {

  // Base case
  if (level === 1) {
    return 'Engineer';
  }

  // Recursively find parent's profession.
  
  // If parent is a doctor,
    // this node will be a doctor if it is at odd position,
    // and an engineer if at even position

  if (findProfession(level - 1, Math.floor((pos + 1) / 2)) === 'Doctor') {
    return (pos % 2 > 0) ? 'Doctor' : 'Engineer';
  }

  // If parent is an engineer,
    // then current node will be an engineer if at odd position,
    // and a doctor if at even position

  return (pos % 2 > 0) ? 'Engineer' : 'Doctor';
}

console.log(findProfession(8,100));
