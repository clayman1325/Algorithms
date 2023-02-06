function stableInternships(interns, teams) {
  const chosenInterns = {};
  const freeInterns = interns.map((_,i) => i);
  const currentInternChoices = new Array(interns.length).fill(0);

  const teamsMaps = [];
  for (const team of teams) {
    let rank = {};
    team.forEach((internNum, i) => {
      rank[internNum] = i;
    })
    teamsMaps.push(rank);
    console.log(rank)
  }

  while(freeInterns.length > 0) {
    const internNum = freeInterns.pop();

    const intern = interns[internNum];
    const teamPreference = intern[currentInternChoices[internNum]];
    currentInternChoices[internNum] += 1;

    if(!(teamPreference in chosenInterns)) {
      chosenInterns[teamPreference] = internNum;
      continue;
    }

    const previousIntern = chosenInterns[teamPreference];
    const previousInternRank = teamsMaps[teamPreference][previousIntern];
    const currentInternRank = teamsMaps[teamPreference][internNum];

    if(currentInternRank < previousInternRank) {
      freeInterns.push(previousIntern);
      chosenInterns[teamPreference] = internNum;
    } else {
      freeInterns.push(internNum)
    }
  }

  const matches = Object.entries(chosenInterns).map(
    ([teamNum, internNum]) => [
      internNum,
      parseInt(teamNum)
    ]
  );
  return matches;
}

// Do not edit the line below.
exports.stableInternships = stableInternships;
