const numbers: number[] = [12, 5, 27, 8, 19, 3];

function findmax (numbers: number[]) {
  let maxnum = numbers[0]!;

  for(let i = 1; i < numbers.length; i++) {
    if(numbers[i]! > maxnum){
      maxnum = numbers[i]!;
    }
  }

  return maxnum;
}

console.log(findmax(numbers));



