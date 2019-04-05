import { get } from './helpers';

const getSeller = get('api/seller');
const getGoods = get('api/goods');
const getRatings = get('api/ratings');
// 设计json文件的时候，配置了可以通过api/seller这个地址拿到商家数据
export {
  getSeller,
  getGoods,
  getRatings
};
