import { useEffect, useState } from "react";

function Leet0001TwoSum() {
  // const nums = [3, 2, 4];
  // const target = 6;

  // const twoSum = (nums, target) => {
  //   const previousValues = {};

  //   for (let i = 0; i < nums.length; i++) {
  //     const neededValue = target - nums[i];

  //     if (previousValues[neededValue] != null) {
  //       return [previousValues[neededValue], i];
  //     } else {
  //       previousValues[nums[i]] = i;
  //     }
  //   }
  // };

  const [counter, setCounter] = useState(0);
  const [previousValues] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    const nums = [3, 2, 4];
    const target = 6;

    result === null &&
      setTimeout(() => {
        const neededValue = target - nums[counter];

        if (
          previousValues[neededValue] != null &&
          previousValues[neededValue] !== counter
        ) {
          console.log(
            "Finished:",
            JSON.stringify(previousValues[neededValue]),
            " ",
            JSON.stringify(counter)
          );
          setResult([previousValues[neededValue], counter]);
        } else {
          previousValues[nums[counter]] = counter;
        }
        setCounter(counter + 1);
      }, 1000);
  }, [counter, result, previousValues]);

  return (
    <div>
      <h1>1. Two Sum</h1>
      <h4>
        Given an array of integers nums and an integer target, return indices of
        the two numbers such that they add up to target. You may assume that
        each input would have exactly one solution, and you may not use the same
        element twice. You can return the answer in any order.
      </h4>
      <p>Input: nums = [2,7,11,15]</p>
      <p>target = 9 Output: [0,1]</p>
      <p>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p>
      <p>{counter}</p>
      <p>{JSON.stringify(previousValues)}</p>
      <p>
        {result !== null
          ? `Result: ${JSON.stringify(result)}`
          : "Loading Result..."}
      </p>
    </div>
  );
}

export default Leet0001TwoSum;
