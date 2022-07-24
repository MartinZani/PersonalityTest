<template>
  <div>
    <el-menu
      :default-active="$route.name"
      mode="horizontal"
      class="flex justify-center"
      @select="handleSelect"
    >
      <el-menu-item
        index="Main"
        :route="{name: 'Main'}"
      >
        Home
      </el-menu-item>
      <el-menu-item
        index="PersonalityTest"
        :route="{name: 'PersonalityTest'}"
      >
        Personality Test
      </el-menu-item>
    </el-menu>
    <div class="md:px-8 sm:px-2 md:py-12 sm:py-4">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
	methods: {
		handleSelect(key){
			this.$router.push({
				name: key,
			})
		}
	},
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
