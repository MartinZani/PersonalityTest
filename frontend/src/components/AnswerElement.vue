<template>
  <div
    class="container rounded border border-solid border-gray-300 p-3 my-3 answer flex justify-between items-center w-full"
    :class="{'border-green-700':selected}"
    :style="{'background-color': (selected ? 'rgba(21, 128, 61, 0.2)': 'unset')}"
    @click="fire"
  >
    <div>{{ element.title }}</div>
    <div
      v-if="selected"
    >
      <i class="el-icon-check text-green-700" />
    </div>
  </div>
</template>

<script>
export default {
	name: "AnswerElement",
	props:{
		element:{
			type: Object,
			default(){
				return {}
			}
		},
		selected: {
			type: Boolean,
			default: false
		}
	},
	methods:{
		fire(){
			this.$emit('selectElement', this.element)
		}
	}
}
</script>

<style>

</style>
