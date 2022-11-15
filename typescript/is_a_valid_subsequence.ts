export function isValidSubsequence(array: number[], sequence: number[]) {
    let current_seq_position: number = 0
  
    for (let i: number = 0; i < array.length; i++){
       if (sequence[current_seq_position] == array[i]){
          current_seq_position += 1
       }
    }
  
    return (current_seq_position == sequence.length)
  }
  