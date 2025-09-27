/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
      if (s.length !== t.length) return false;
    
    const mapST = {};
    const mapTS = {};
    
    for (let i = 0; i < s.length; i++) {
        const c1 = s[i];
        const c2 = t[i];
        
        if ((mapST[c1] && mapST[c1] !== c2) || (mapTS[c2] && mapTS[c2] !== c1)) {
            return false;
        }
        
        mapST[c1] = c2;
        mapTS[c2] = c1;
    }
    
    return true;
};