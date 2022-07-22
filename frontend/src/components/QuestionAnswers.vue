<template>
  <div
    class="content rounded-lg shadow-md bg-slate-100 w-full"
  >
    <div
      v-if="questionAnswers"
      class="question m-4 question"
    >
      {{ questionAnswers.question }}
    </div>
    <div
      v-if="questionAnswers"
      class="answer-container container"
    >
      <AnswerElement
        v-for="a in questionAnswers.answers"
        :key="a.id"
        :element="a"
        :selected="selectedAnswer === a.id"
        @selectElement="setSelectedAnswer"
      />
    </div>
    <slot />
  </div>
</template>

<script>
import AnswerElement from "@/components/AnswerElement"
export default {
	name: "QuestionAnswers",
	components: {
		AnswerElement
	},
	props:{
		questionAnswers: {
			type: Object,
			default(){
				return {
				}
			}
		},
		selectedAnswer:{
			type: String,
			default: ""
		}
	},
	methods: {
		setSelectedAnswer(el){
			this.$emit('answerSelected', el)
		}
	}
}
</script>

<style lang="scss">
</style>
