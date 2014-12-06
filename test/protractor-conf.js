exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/src/',

  framework: 'jasmine'
};
