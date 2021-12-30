const routes = require("./configs/router");

module.exports = {
  // reactStrictMode: true,
};

const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
  "@mui/icons-material", // If @mui/icons-material is being used
]);

// module.exports = withTM({
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@mui/styled-engine": "@mui/styled-engine-sc",
//     };
//     return config;
//   },
// });

module.exports = {
  webpack: (config) => {
    config.resolve.alias["@material-ui/styled-engine"] =
      "@material-ui/styled-engine-sc";
    return config;
  },
};
