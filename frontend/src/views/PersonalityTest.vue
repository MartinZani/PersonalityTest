<template>
  <div class="flex flex-col items-center md:text-3xl sm:text-xl header-title">
    <el-steps
      :active="active"
      finish-status="success"
      class="w-full md:w-3/5 p-5"
    >
      <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" />
      <el-step title="Step 4" />
      <el-step title="Step 5" />
    </el-steps>
    <div>
      <el-button
        v-if="active > 0"
        style="margin-top: 12px;"
        @click="previous"
      >
        Previous step
      </el-button>
      <el-button
        v-if="active < 5"
        style="margin-top: 12px;"
        @click="next"
      >
        Next step
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
	name: "PersonalityTest",
	data() {
		return {
			active: 0
		}
	},
	methods: {
		previous() {
			if (this.active-- < 0) this.active = 0
		},
		next() {
			if (this.active++ > 4) this.active = 0
		},
	}
}
</script>

<style lang="scss" scoped>

</style>
