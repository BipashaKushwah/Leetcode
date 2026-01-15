/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s.length === 0 || s[0] === "0") return 0;

  const n = s.length;
  const dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    const oneDigit = s[i - 1];
    const twoDigits = s.substring(i - 2, i);

    // Single digit decode (1–9)
    if (oneDigit !== "0") {
      dp[i] += dp[i - 1];
    }

    // Two digit decode (10–26)
    if (twoDigits >= "10" && twoDigits <= "26") {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
};
