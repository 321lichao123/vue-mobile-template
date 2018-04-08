<template>
  <div id="app">
    <header>
      <van-search
        v-model="value"
        show-action
        @search="onSearch">
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </header>
    <router-view></router-view>
    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="hot">
          <router-link tag="div" class="tab-item" to="/moiveIndex">
            <span>热映</span>
          </router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="wap-nav">
          <router-link tag="div" class="tab-item" to="/ranking">
            <span>排行</span>
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
  data(){
    return{
      active: 0,
      value:''
    }
  },
  methods:{
    onSearch(){
      console.log(this.value)
    }
  }
}
</script>

<style>
body {
  background-color: #f8f8f8;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
</style>
