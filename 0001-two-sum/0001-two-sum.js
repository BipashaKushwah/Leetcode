
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    for (let key in map) {
      if (+key === complement) {
        return [map[key], i];
      }
    }

    map[nums[i]] = i;
  }

  return [];
};

