// startTime = [1,1,2,3,3], endTime = [3,2,3,5,6], profit = [50,10,20,40,70]

let  a = [
  {s: 1, e: 3, p: 50},
  {s: 2, e: 4, p: 10},
  {s: 3, e: 5, p: 40},
  {s: 3, e: 6, p: 70},
];

a = a.sort((a,b) => a.e - b.e);

function findLatestNonConflictJob(arr, i) {
  for (let j = i -1; j >= 0; j--) {
    if (arr[j].e <= arr[i].s) {
      return j;
    }
  }
  return -1;
}

function maxJob(startTimes, endTimes, profits) {
  const totalJobs = startTimes.length;
  let jobs = [];
  for (let i = 0; i < totalJobs; i++) {
    jobs[i] = { s: startTimes[i], e: endTimes[i], p: profits[i] };
  }
  jobs = jobs.sort((a, b) => a.e - b.e);
  let memo = [];
  memo[0] = jobs[0].p;
  let maxCount  = 0;
  for (let i = 1; i < totalJobs; i++) {
    let cp = jobs[i].p;
    let l = findLatestNonConflictJob(jobs, i);
    if (l !== -1) {
      cp += memo[l];
      maxCount++;
    }
    memo[i] = Math.max(cp, memo[i-1]);
    console.log('Hello....',i, l, memo);
  }
  return maxCount || memo[totalJobs-1];
}

console.log(maxJob([1,1,2,3,3], [3,2,3,5,6],[50,10,20,40,70]));


