export default {
  default: {
    require: [
      'ts-node/register',
      'tests/page-objects/**/*.ts',
      'tests/steps/**/*.ts',
    ],
    format: ['progress', 'json:reports/cucumber-report.json'],
    paths: ['tests/features/**/*.feature'],
    publishQuiet: true
  }
};
// module.exports = {
//   default: {
//     require: [
//       'ts-node/register',
//       'tests/page-objects/**/*.ts',
//       'tests/steps/**/*.ts',
//     ],
//     format: ['progress', 'json:reports/cucumber-report.json'],
//     paths: ['tests/features/**/*.feature'],
//     publishQuiet: true
//   }
// };