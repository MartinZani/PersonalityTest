<template>
  <div class="flex flex-col items-center md:text-3xl sm:text-xl header-title p-2">
    <el-steps
      :active="active"
      finish-status="success"
      class="w-full p-5 m-1 md:w-96 "
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
        v-if="active === questions.length && questions.length > 0 && !hasResults"
        class="p-2"
      >
        <div
          v-for="(q,i) in questions"
          :key="q.id"
        >
          <div class="question">
            {{ q.question }}
          </div>
          <div class="answer mx-3 my-3 text-lime-500">
            <i class="el-icon-caret-right" />{{ q.Answers.find(answer => answer.id === selectedAnswers[i]).title }}
          </div>
          <div
            v-if="i < questions.length - 1"
            class="my-2"
          >
            <div class="border w-full" />
          </div>
        </div>

        <div class="w-full flex justify-center mt-10">
          <el-button
            type="success"
            icon="el-icon-check"
            round
            plain
            @click="submit"
          >
            Submit
          </el-button>
        </div>
      </div>

      <div v-if="hasResults">
        <div class="title">
          {{ resultsObj.title }}
        </div>
        <div class="description">
          {{ resultsObj.message }}
        </div>

        <div class="w-full flex justify-center mt-10">
          <el-button
            type="success"
            icon="el-icon-check"
            round
            plain
            @click="reset"
          >
            Retake test
          </el-button>
        </div>
      </div>
    </QuestionAnswers>

    <div class="mt-5" v-if="!hasResults">
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
import {postRequest} from "@/utils"
export default {
	name: "PersonalityTest",
	components: {
		QuestionAnswers
	},
	data() {
		return {
			active: 0,
			selectedAnswers:[],
			questions: [],
			hasResults: false,
			resultsObj:{}
		}
	},
	computed:{
		hasSelectedAnswer(){
			return !!this.selectedAnswers[this.active]
		}
	},
	created(){
		postRequest("/question/all").then(res => {
			if(Array.isArray(res?.data)){
				this.questions = res.data
				// this.shuffleAllAnswers()
			}
		}).catch(err => {
			console.log(err)
		})
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
				this.$set(question, 'Answers', this.shuffleArray(question.Answers))
			})
		},
		shuffleArray(array){
			return array.sort(() => 0.5 - Math.random())
		},
		submit(){
			let questionAnswersObj = this.questions.map((el, i) => Object.assign({[el.id]: this.selectedAnswers[i]}))
			postRequest("/question/submit",{questionAnswersObj}).then(res => {
				if(res?.data){
					this.hasResults = true
					this.resultsObj = Object.assign(res.data)
				}
			}).catch(err => {
				console.log(err)
			})
		},
		reset(){
			this.active = 0,
			this.selectedAnswers = []
			this.hasResults = false
			this.resultsObj = Object.assign({})
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
	.title {
		font-family: 'Edu VIC WA NT Beginner', cursive;
		user-select: none;
	}
	.answer {
		font-family: 'Edu SA Beginner', cursive;
		font-size: smaller;
		user-select: none;
	}
	.description {
		font-family: 'Edu SA Beginner', cursive;
		font-size: smaller;
		user-select: none;
	}
</style>
