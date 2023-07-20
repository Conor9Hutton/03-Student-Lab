"use strict";

//  Question 1
const submissions = [
  {
    name: "Jane",
    score: 95,
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    passed: true,
  },
];

// Questions 2
const addSubmission = (array, newName, newScore) => {
  array.push({ name: newName, score: newScore, passed: newScore >= 60 });
};

// addSubmission(submissions, "James", 100);

// Question 3

const deleteSubmissionByIndex = (array, index) => array.splice(index, 1);
// deleteSubmissionByIndex(submissions, 0);

// Question 4

const deleteSubmissionsByName = (array, name) => {
  const indexOfName = array.findIndex((item) => item.name === name);
  array.splice(indexOfName, 1);
};
// deleteSubmissionByIndex(submissions, "Joe");
// console.log(submissions);

// Question 5
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index.passed] = score >= 60;
};

//  Question 6
const findSubmissionByName = (array, name) =>
  array.find((item) => item.name === name);

// console.log(findSubmissionByName(submissions, "Joe"));

// Question 7
// pv = array [0]    cv = array [1] if not defined
// loop through array, if cv.score is less than pv.score, return cv, if not, return pv
const findLowestScore = (array) => {
  return array.reduce((pv, cv) => (cv.score < pv.score ? cv : pv));
};

//   let currentLowest = array[0];
//   array.forEach((item) => {
//     if (item.score < currentLowest.score) currentLowest = item;
//   });
//   return currentLowest;
// };

// console.log(findLowestScore(submissions));

// const findAverageScore = (array) => {
//   let averageScore = array[0];
//   array.forEach((item) => {
//     if ((item.score += averageScore)) averageScore = item;
//   });
//   return averageScore;
// };

// console.log(findAverageScore(submissions));

// Question 8

const findAverageScore = (array) => {
  return array.reduce((pv, cv) => pv + cv.score, 0) / array.length;
};
console.log(findAverageScore(submissions));

//Question 9
const filterPassing = (array) => array.filter((item) => item.passed);
// console.log(filterPassing(submissions));

// #10

const filter90AndAbove = (array) => array.filter((item) => item.score >= 90);
console.log(filter90AndAbove(submissions));
