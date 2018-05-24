'use strict';
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const InfoSchema = new Schema({
        userName: String,
        name: String,
        picture: String,
        coordinate: String,
        password: String,
        info: Object,
        data: Object
    });                                 //商户信息
    return mongoose.model('MarketShop', InfoSchema);
}