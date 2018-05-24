'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/market/card/add', controller.market.card.add);
  router.get('/market/card/del', controller.market.card.del);
  router.get('/market/card/edit', controller.market.card.edit);
  router.get('/market/card/query', controller.market.card.query);

  router.post('/market/discount/add', controller.market.discount.add);
  router.get('/market/discount/del', controller.market.discount.del);
  router.get('/market/discount/edit', controller.market.discount.edit);
  router.get('/market/discount/query', controller.market.discount.query);
  
  router.post('/market/info/add', controller.market.info.add);
  router.get('/market/info/del', controller.market.info.del);
  router.get('/market/info/edit', controller.market.info.edit);
  router.get('/market/info/query', controller.market.info.query);

  router.post('/market/shop/add', controller.market.shop.add);
  router.get('/market/shop/del', controller.market.shop.del);
  router.get('/market/shop/edit', controller.market.shop.edit);
  router.get('/market/shop/query', controller.market.shop.query);

  router.post('/user/card/add', controller.user.card.add);
  router.get('/user/card/del', controller.user.card.del);
  router.get('/user/card/edit', controller.user.card.edit);
  router.get('/user/card/query', controller.user.card.query);

  router.post('/user/discount/add', controller.user.discount.add);
  router.get('/user/discount/del', controller.user.discount.del);
  router.get('/user/discount/edit', controller.user.discount.edit);
  router.get('/user/discount/query', controller.user.discount.query);
  
  router.post('/user/info/add', controller.user.info.add);
  router.get('/user/info/del', controller.user.info.del);
  router.get('/user/info/edit', controller.user.info.edit);
  router.get('/user/info/query', controller.user.info.query);

  router.post('/user/shop/add', controller.user.shop.add);
  router.get('/user/shop/del', controller.user.shop.del);
  router.get('/user/shop/edit', controller.user.shop.edit);
  router.get('/user/shop/query', controller.user.shop.query);
};
