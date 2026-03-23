/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = [];

    const backtrack = (start, path) => {
        // agar 4 parts ban gaye
        if (path.length === 4) {
            // agar pura string use ho gaya
            if (start === s.length) {
                result.push(path.join("."));
            }
            return;
        }

        // 1–3 length ke segment try karo
        for (let len = 1; len <= 3; len++) {
            if (start + len > s.length) break;

            let segment = s.substring(start, start + len);

            // leading zero check
            if (segment.length > 1 && segment[0] === "0") continue;

            // range check
            if (Number(segment) > 255) continue;

            path.push(segment);

            backtrack(start + len, path);

            path.pop(); // backtrack
        }
    };

    backtrack(0, []);
    return result;
};