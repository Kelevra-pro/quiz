import React, {Component} from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
    state = {
        results: {}, // {[id]: success error}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' 'error' }
        quiz: [
            {
                question: 'Какой транспорт лишний?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                    {text: 'Автомобиль', id: 1},
                    {text: 'Фургон', id: 2},
                    {text: 'Самолет', id: 3},
                    {text: 'Грузовик', id: 4}
                ]
            },
            {
                question: 'Какой предмет лишний?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'Кеды', id: 1},
                    {text: 'Пуловер', id: 2},
                    {text: 'Рубашка', id: 3},
                    {text: 'Футболка', id: 4}
                ]
            }
        ]
    };

    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: {[answerId]: 'success'},
                results
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000);

        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }
    };

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
      this.setState({
          activeQuestion: 0,
          answerState: null,
          isFinished: false,
          results: {}
      })
    };

    componentDidMount() {
        console.log('Quiz ID', this.props.match.params.id)
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }

                </div>
            </div>
        )
    }
}

export default Quiz
