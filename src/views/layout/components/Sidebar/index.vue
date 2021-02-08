<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="$route.path"
        :collapse="isCollapse"
        :router="true"
        active-text-color="#1E90FF"
        mode="vertical"
      >
        <!--        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />-->
        <el-menu-item index="/dashboard">
          <template slot="title">
            <i class="el-icon-emsicon_huabanfuben" style="vertical-align: -0.2em;"/>
            首页
          </template>
        </el-menu-item>
        <el-submenu v-for="(route, index) in permission_routes" v-if="route.name" :key="index" :index="route.path" popper-append-to-body>
          <template slot="title">
            <i class="el-icon-emsicon_huabanfuben"/>
            {{ route.name }}
          </template>
          <el-menu-item v-for="(child,index) in route.children" v-if="child.name" :key="index" :index="child.path">
            {{ child.name }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style scoped>

</style>
