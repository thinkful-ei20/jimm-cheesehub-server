'use strict';

module.exports = {
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  MONGODB_URI: 
    process.env.MONGODB_URI || 'mongodb://localhost/cheesehub',
  DATABASE_URL:
    'mongodb://dev:dev@ds135810.mlab.com:35810/cheesehub',
  // TEST_DATABASE_URL:
  //     process.env.TEST_DATABASE_URL ||
  //     mongodb://localhost/thinkful-backend-test'
  
  
  // DATABASE_URL:
  //     process.env.DATABASE_URL || 'postgres://localhost/thinkful-backend',
  // TEST_DATABASE_URL:
  //     process.env.TEST_DATABASE_URL ||
  //     'postgres://localhost/thinkful-backend-test'
};
