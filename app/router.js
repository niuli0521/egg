'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/data', controller.home.index);
  router.get('/zhName', controller.home.Name);
  router.get('/', controller.home.sudden);
  router.get('/list', controller.home.Data);
  router.get('/home', controller.home.Home);
  

};
