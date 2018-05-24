'use strict';
const Service = require('egg').Service;
class BaseService extends Service {
    async add(post) {
        const info = await this.ctx.model.Market.Info.create(marketInfo);
        return {
            code: 20000,
            status: true,
            data: {data: info}
        }
    }

    async del(marketInfo) {
        const info = await this.ctx.model.Market.Info.remove(marketInfo);
        return {
            code: 20000,
            status: true,
            data: {data: info}
        }
    }

    async edit(id, post) {
        const info = await this.ctx.model.Market.Info.findByIdAndUpdate(id,marketInfo);
        return {
            code: 20000,
            status: true,
            data: info
        }
    }

    async query(id) {
        const info = await this.ctx.model.Market.Info.findById(id);
        return {
            code: 20000,
            status: true,
            data: info
        }
    }
}
module.exports = BaseService;