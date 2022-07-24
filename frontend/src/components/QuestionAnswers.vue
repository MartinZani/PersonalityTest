<template>
  <div
    class="content rounded-lg shadow-md bg-slate-100 w-full"
  >
    <div
      v-if="!$slots.default"
      class="text-xs italic flex justify-center"
    >
      *All questions are required!
    </div>
    <transition
      name="fade"
      mode="out-in"
    >
      <div :key="questionAnswers.question">
        <div
          v-if="questionAnswers"
          class="m-4 question"
        >
          {{ questionAnswers.question }}
        </div>
        <div
          v-if="questionAnswers"
          class="answer-container container"
        >
          <AnswerElement
            v-for="a in questionAnswers.Answers"
            :key="a.id"
            :element="a"
            :selected="selectedAnswer === a.id"
            @selectElement="setSelectedAnswer"
          />
        </div>
        <slot />
      </div>
    </transition>
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
<style scoped>
	.desclimer {
		font-family: 'Edu SA Beginner', cursive;
		user-select: none;
	}
</style>
