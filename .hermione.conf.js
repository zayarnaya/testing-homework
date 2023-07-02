module.exports = {
  sets: {
    desktop: {
      files: "test/hermione"
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
      transformResponse: (resp, options) => {
        resp.data = [
          {
              id: 123,
              name: 'Fake#1',
              price: 12,
          },
          {
              id: 1,
              name: 'Fake#2',
              price: 122,
          },
          {
              id: 33,
              name: 'Fake#3',
              price: 458,
          },
      
      ]
        return resp;
        
      }
    },
    // chromecat: {
    //   automationProtocol: "devtools",
    //   desiredCapabilities: {
    //     browserName: "chromecat",
    //   },
    //   compositeImage: true,
    //   retry: 2,
    //   transformResponse: (resp, options) => {
    //     resp.data = [
    //       {
    //           id: 123,
    //           name: 'Fake#1',
    //           price: 12,
    //       },
    //       {
    //           id: 1,
    //           name: 'Fake#2',
    //           price: 122,
    //       },
    //       {
    //           id: 33,
    //           name: 'Fake#3',
    //           price: 458,
    //       },
      
    //   ]
    //     return resp;
        
    //   }
    // }
  },
  plugins: {
    "html-reporter/hermione": {
      enabled: true,
      path: "hermione-html-report"
    },
  },
};
