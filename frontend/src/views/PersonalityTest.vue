<template>
  <div class="flex flex-col items-center md:text-3xl sm:text-xl header-title p-2">
    <el-steps
      :active="active"
      finish-status="success"
      class="w-full md:w-3/5 p-5"
    >
      <el-step
        v-for="question in questions"
        :key="question.id"
      />
    </el-steps>

    <QuestionAnswers
      class="p-3 sm:m-8 sm:p-8 sm:w-full md:w-4/5 lg:2-3/5 xl:2-2/5"
      :question-answers="questions[active]"
      :selected-answer="selectedAnswers[active]"
      @answerSelected="selectAnswer"
    >
      <div
        v-if="active === questions.length && questions.length > 0"
        class="p-2"
      >
        <div
          v-for="(q,i) in questions"
          :key="q.id"
        >
          <div class="question">
            {{ q.question }}
          </div>
          <div class="answer mx-3 my-3">
            {{ q.answers.find(answer => answer.id === selectedAnswers[i]).title }}
          </div>
        </div>

        <div class="w-full flex justify-center">
          <el-button
            type="success"
            icon="el-icon-check"
            round
            plain
          >
            Submit
          </el-button>
        </div>
      </div>
    </QuestionAnswers>

    <div class="mt-5">
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
        :disabled="!hasSelectedAnswer"
        @click="next"
      >
        Next step
      </el-button>
    </div>
  </div>
</template>

<script>
import QuestionAnswers from "@/components/QuestionAnswers"
export default {
	name: "PersonalityTest",
	components: {
		QuestionAnswers
	},
	data() {
		return {
			active: 0,
			selectedAnswers:[],
			questions: [{
				id: 1,
				question: "The question 1",
				answers:[
					{id:1, title:"The first answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:2, title:"The second answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:3, title:"The third answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:4, title:"The forth answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
				]
			},{
				id: 2,
				question: "The question 2",
				answers:[
					{id:1, title:"The first answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:2, title:"The second answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:3, title:"The third answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:4, title:"The forth answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
				]
			},{
				id: 3,
				question: "The question 3",
				answers:[
					{id:1, title:"The first answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:2, title:"The second answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:3, title:"The third answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:4, title:"The forth answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
				]
			},{
				id: 4,
				question: "The question 4",
				answers:[
					{id:1, title:"The first answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:2, title:"The second answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:3, title:"The third answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:4, title:"The forth answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
				]
			},{
				id: 5,
				question: "The question 5",
				answers:[
					{id:1, title:"The first answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:2, title:"The second answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:3, title:"The third answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
					{id:4, title:"The forth answer asdf aksd fas jkas kajhsf kjlasdf lkjahsd flkgajsdf hklgasd fghalsdfg lasdg fla fsgs"},
				]
			},],
		}
	},
	computed:{
		hasSelectedAnswer(){
			return !!this.selectedAnswers[this.active]
		}
	},
	created(){
		this.shuffleAllAnswers()
	},
	methods: {
		previous() {
			if (this.active-- < 1) this.active = 0
		},
		next() {
			if (this.active++ > this.questions.length - 1) {
				this.active = this.questions.length - 1
			}
		},
		selectAnswer(element){
			this.$set(this.selectedAnswers, this.active, element.id)
		},
		shuffleAllAnswers(){
			this.questions.forEach(question => {
				this.$set(question, 'answers', this.shuffleArray(question.answers))
			})
		},
		shuffleArray(array){
			return array.sort(() => 0.5 - Math.random())
		}
	}
}
</script>

<style lang="scss">
	.question {
		font-family: 'Edu VIC WA NT Beginner', cursive;
		font-size: larger;
		user-select: none;
	}
	.answer {
		font-family: 'Edu SA Beginner', cursive;
		font-size: smaller;
		user-select: none;
	}
</style>
