<template>
  <div id="app">
    <header>
      <!-- <van-search
        v-model="value"
        show-action
        @search="onSearch">
        <div slot="action" @click="onSearch">搜索</div>
      </van-search> -->
    </header>
    <router-view></router-view>
    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item>
          <router-link tag="div" class="tab-item" to="/moiveIndex">
            <i class="iconfont">&#xe605;</i>
            <span>交易</span>
          </router-link>
        </van-tabbar-item>
        <van-tabbar-item>
          <router-link tag="div" class="tab-item" to="/ranking">
            <i class="iconfont">&#xe6c0;</i>
            <span>公告</span>
          </router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="contact">
          <router-link tag="div" class="tab-item" to="/user">
            <span>我的</span>
          </router-link>
        </van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
import { Cell, CellGroup, Icon, Button, Tabbar, TabbarItem, Search } from 'vant';

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Search.name]: Search
  },
  data() {
    return {
      active: 0,
      value: ''
    };
  },
  methods: {
    onSearch() {
      console.log(this.value);
    }
  }
};

</script>

<style>
body {
  background-color: #f8f8f8;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
.iconfont {
  display: block;
  font-size: 18px;
  margin:0 auto 5px;
  text-align: center;
}
</style>
