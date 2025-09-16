/**
 * @param {number[]} arr
 * @return {boolean}
 */
function validMountainArray(arr) {
  let n = arr.length;
  if (n < 3) return false; // need at least 3

  let i = 0;

  // walk uphill
  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }

  // peak can't be first or last
  if (i === 0 || i === n - 1) return false;

  // walk downhill
  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
  }

  // if we reached the end, it's a valid mountain
  return i === n - 1;
}

