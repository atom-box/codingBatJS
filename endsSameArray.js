let wa = [5, 6, 45, 99, 13, 5, 6];
let wl = 1;
let xa = [5, 6, 45, 99, 13, 5, 6];
let xl = 2;
let ya = [5, 6, 45, 99, 13, 5, 6];
let yl = 3;

// bursts An array of burst counts
// duration How many from each end 
function endsSame (bursts, duration) {
  console.log(`Counting in we see ${bursts[duration - 1]} and ${bursts[bursts.length - duration]}.`);
  // endsAreOkay Flag to describe ends.
  let endsAreOkay = true;

  // gap How far from left integer to right integer
  const GAP = bursts.length - duration;
  for (let i = 0; i <= duration - 1; i++) {
    console.log(`Let's compare these:  ${bursts[i]} and  ${bursts[i + GAP] }.`);
    if (bursts[i] !== bursts[i + GAP]) { endsAreOkay = false; }
  }
  return endsAreOkay;
}

console.log(`For array ${xa}, counting in ${xl} positions, the result is: `);
console.log(endsSame(xa, xl));

/*----------------------------------------
@evangenest
Coding Bat
December 12, 2018
Dev Diary: This was pleasant. 70 minutes: slow!
Looked up style guides several times though.
----------------------------------------*/

/*----------------------------------------
Return true if the group of N numbers at the start and end of the array are the same. For example, with {5, 6, 45, 99, 13, 5, 6}, the ends are the same for n=0 and n=2, and false for n=1 and n=3. You may assume that n is in the range 0..nums.length inclusive.

sameEnds([5, 6, 45, 99, 13, 5, 6], 1) → false
sameEnds([5, 6, 45, 99, 13, 5, 6], 2) → true
sameEnds([5, 6, 45, 99, 13, 5, 6], 3) → false
----------------------------------------*/

