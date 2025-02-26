require("@tensorflow/tfjs-node");
const tf = require("@tensorflow/tfjs");
const loadCSV = require("./load-csv");

let { features, labels, testFeatures, testLabels } = loadCSV(
  "kc_house_data.csv",
  {
    shuffle: true,
    splitTest: 10,
    dataColumns: ["lat", "long"],
    labelColumns: ["price"],
  }
);

console.log(testFeatures);
console.log(testLabels);

// const predictionPoint = tf.tensor([-121, 47]);
// const k = 2;

// features
//   .sub(predictionPoint)
//   .pow(2)
//   .sum(1)
//   .pow(0.5)
//   .expandDims(1)
//   .concat(labels, 1)
//   .unstack()
//   .sort((a, b) => a.get(0) - b.get(0))
//   .slice(0, k)
//   .reduce((acc, pair) => acc + pair.get(1), 0) / k;
