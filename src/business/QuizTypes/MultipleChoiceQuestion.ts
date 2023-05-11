import { Question } from "./Question";

import { QuizDataServiceInstance } from "../../../src/business/services/dbservice";

export class MultipleChoiceQuestion extends Question {
  private _options: string[];

  constructor(
    qid: number,
    question: string,
    answer: string,
    subject: string,
    type: string,
    options: string[]
  ) {
    super(qid, question, answer, subject, type);
    this._options = options;
  }

  public get options(): string[] {
    return this._options;
  }

  public set options(options: string[]) {
    this._options = options;
  }

  async isCorrect(answer: string) {
    this.type = await QuizDataServiceInstance.findQuestionType(this.qid);
    this.answer = await QuizDataServiceInstance.findQuestionAnswer(this.qid);

    if (this.type === "MultipleChoice") {
      return this.options.includes(answer) && answer === this.answer;
    } else if (this.type === "MultipleAnswer") {
      const correctAnswers = this.answer
        .split(",")
        .map((answer) => answer.trim());

      return correctAnswers.every((correctAnswer) =>
        this.options.includes(correctAnswer)
      );
    } else {
      // This checks for SingelAnswer type

      return answer === this.answer;
    }
  }
}
