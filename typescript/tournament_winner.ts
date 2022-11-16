export function tournamentWinner(competitions: string[][], results: number[]) {
    const teams: any = {}
    
    for (let i: number = 0; i < competitions.length; i++ ) {
      if (results[i] == 1) {
        if (teams[`${competitions[i][0]}`]) {
          teams[`${competitions[i][0]}`] += 3
        } else {
          teams[`${competitions[i][0]}`] = 3
        }
      } else {
        if (teams[`${competitions[i][1]}`]) {
          teams[`${competitions[i][1]}`] += 3
        } else {
          teams[`${competitions[i][1]}`] = 3
        }
      }
    }
  
    const keys:      string[] = Object.keys(teams);
    let   max_team:  string   = "";
    let   max_value: number   = 0;
    
    for (let i: number = 0; i < keys.length; i++) {
      if (teams[keys[i]] > max_value) {
        max_value = teams[keys[i]];
        max_team = keys[i];
      }
    }
  
    return max_team
  }