<template>
  <div>
    <div class="flex flex-col items-center md:text-3xl sm:text-xl header-title">
      <img
        class="sm:w-full sm:h-auto sm:p-1 md:w-2/5"
        src="https://files.brainfall.com/wp-content/uploads/2015/10/myers_briggs_are_you_extroverted_or_introverted_featured1.jpg"
      >

      <div class="mt-5">
        Take this survey to find out.
      </div>
    </div>
    <el-main class="flex flex-col items-center">
      <el-button
        round
        @click="startSurvey"
      >
        Start the survey
      </el-button>
    </el-main>
  </div>
</template>

<script>

export default {
	name: 'HomeView',
	components: {
	},
	methods:{
		startSurvey(){
			this.$router.push('test')
		}
	}
}
</script>

<style scoped>
	.centered {
		display: flex;
		align-items: center;
		flex-flow: column;
	}

	.header-title {
		font-family: 'Edu TAS Beginner', cursive, 'Lato', sans-serif;
	}
</style>
