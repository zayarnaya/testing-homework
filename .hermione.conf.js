module.exports = {
  sets: {
    desktop: {
      files: "test/hermione",
    },
  },

  browsers: {
    chrome: {
      automationProtocol: "devtools",
      desiredCapabilities: {
        browserName: "chrome",
        // retry: 2,
      },
      compositeImage: true,
      retry: 2,
    },
  },
  plugins: {
    "html-reporter/hermione": {
      enabled: true,
      path: "hermione-html-report"
    },
  },
};
