'use strict';

const Controller = require('egg').Controller;

class ShopController extends Controller {
  async add() {
    const {
        ctx,
        service
    } = this;
    const marketInfo = ctx.request.body.marketInfo;
    // let marketInfo = {
    //     userName: "ddd",
    //     name: 2,
    //     picture: 3,
    //     coordinate: 4,
    //     password: 5,
    //     info:{ 
    //         adress: 6,
    //         money: 7,
    //         type: 8,    //超市，服装or
    //     },
    // };
    const res = await service.market.shop.add(marketInfo); 
    ctx.body = res;
  }

  async del() {
    const {
        ctx,
        service
    } = this;
    let info = {_id: ctx.request.body.id};
    const res = await service.market.shop.del(info); 
    ctx.body = res;
  }

  async edit() {
    const {
        ctx,
        service
    } = this;
    const id = ctx.request.body.id;
    const marketInfo = ctx.request.body.marketInfo;
    const res = await service.market.shop.edit(id, info); 
    ctx.body = res;
  }

  async query() {
    const {
        ctx,
        service
    } = this;
    const id = ctx.request.body.id;
    const res = await service.market.shop.query(id); 
    ctx.body = res;
  }
}

module.exports = ShopController;
