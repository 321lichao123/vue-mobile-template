<template>
  <div>
    <van-tabs :active="active">
      <van-tab v-for="index in 2" :key="index" :title=title[index-1]>
        <div v-if="index == 1">
          id:{{id}}
          name:{{name}}
        </div>
        <div v-if="index == 2">内容2</div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant'
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      active: 2,
      id:'',
      name:'',
      title:['正在热映','即将上映'],
      data:{}
    }
  },
  created(){
    this.getMoiveList()
  },
  methods:{
    getMoiveList(){
      this.$http.get(
        '../static/data/example.json'
      ).then(res => {
        this.id = res.data.data.id
        this.name = res.data.data.name
      })
    }
  }
}
</script>

