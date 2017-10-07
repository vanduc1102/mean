'use strict';

var frontEndLibs = [
  'angular',
  'angular-animate',
  'angular-ui-bootstrap',
  'angular-messages',
  'angular-mocks',
  'angular-resource',
  'angular-ui-notification',
  'angular-ui-router',
  'bootstrap',
  'ng-file-upload',
  'owasp-password-strength-test',
  'font-awesome'
];
var css = [
  'public/lib/bootstrap/dist/css/bootstrap.css',
  'public/lib/bootstrap/dist/css/bootstrap-theme.css',
  'public/lib/angular-ui-notification/dist/angular-ui-notification.css'
];
var js = [
  'public/lib/angular/angular.js',
  'public/lib/angular-animate/angular-animate.js',
  'public/lib/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
  'public/lib/ng-file-upload/dist/ng-file-upload.js',
  'public/lib/angular-messages/angular-messages.js',
  'public/lib/angular-mocks/angular-mocks.js',
  'public/lib/angular-resource/angular-resource.js',
  'public/lib/angular-ui-notification/dist/angular-ui-notification.js',
  'public/lib/angular-ui-router/release/angular-ui-router.js',
  'public/lib/owasp-password-strength-test/owasp-password-strength-test.js'
];
var tests = ['public/lib/angular-mocks/angular-mocks.js'];

module.exports = {
  libs: frontEndLibs,
  css: css,
  js: js,
  tests: tests
};
