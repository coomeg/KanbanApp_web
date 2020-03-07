<template>
  <el-container class="home">
    <KbnSideMenu />
    <KbnBoardNavigation />
  </el-container>
</template>

<script>
import KbnBoardNavigation from "@/components/molecules/KbnBoardNavigation.vue"
import KbnSideMenu from "@/components/molecules/KbnSideMenu.vue"

export default {
  name: "KbnHomeView",

  components: {
    KbnBoardNavigation,
    KbnSideMenu
  },

  data() {
    const item = {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<style scoped>
.home {
  border: 1px solid #eee;
  height: 100%;
  width: 100%;
}
</style>
