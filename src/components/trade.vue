<template>
  <div>
    <div>
      <div class="top-info">
        <div class="header">
          GDS交易所
          <i class="iconfont">&#xe636;</i>
        </div>
        <div class="today-price-info">
          <div>
            <div class="items">今日参考价</div>
            <div>
              <span class="today-price">13.41</span>
              <span class="unit">GX</span>
            </div>
          </div>
          <div>
            <div class="items">
              <span>昨日价格</span>
              <span class="today-price">13.41</span>
              <span class="unit">GX</span>
            </div>
            <div>
              <span>涨幅</span>
              <span class="today-price">4.71</span>
              <span class="unit">%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="today-trade-total">
        <div>
          <div class="trade-total">13734</div>
          <div>今日交易量</div>
        </div>
        <div>
          <div class="trade-total">3054217</div>
          <div>当前购买量</div>
        </div>
      </div>
      <div class="current-balance"></div>
      <div class="trade-button"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style >
.top-info {
  background-color: #4969e2;
  padding-bottom: 40px;
}
.header {
  color: #fff;
  font-size: 20px;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.header i {
  float: right;
}
.today-price-info {
  display: flex;
  justify-content: space-around;
  color: #fff;
  width: 100%;
}
.today-price-info .items {
  margin-bottom: 10px;
}
.today-price {
  font-size: 20px;
}
.unit {
  font-size: 14px;
}
.today-trade-total {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 80px;
  margin: -20px auto 20px;
  border-radius: 5px;
  background-color: #fefefe;
}
.trade-total {
  margin-bottom: 5px;
  color: #768cd3;
  text-align: center;
  font-weight: 600;
}
</style>
