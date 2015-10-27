Package.describe({
  name: 'anthonyzou:lti',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'ims-lti bindings for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:Anthonyzou/ims-lti.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.addFiles(['lti.js'], 'server');
  api.export('lti', 'server')
});

Npm.depends({
  'ims-lti': '3.0.1'
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('onlea:lti');
  api.addFiles('lti-tests.js');
});
