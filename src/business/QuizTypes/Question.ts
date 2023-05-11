export abstract class Question {
    protected _qid: number;
    protected _question: string;
    protected _answer: string;
    protected _subject: string;
    protected _type: string;

    constructor(qid: number,question: string, answer: string, subject: string, type: string) {
        this._qid = qid; 
        this._question = question;
        this._answer = answer;
        this._subject = subject;
        this._type = type;
    }

    // Getter methods

    public get qid(): number{
        return this._qid;
    }

    public get question(): string {
        return this._question;
    }

    public get answer(): string {
        return this._answer;
    }

    public get subject(): string {
        return this._subject;
    }

    public get type(): string {
        return this._type;
    }

    // Setter methods

    public set qid(qid: number){
        this._qid = qid;
    }
    public set question(question: string) {
        this._question = question;
    }

    public set answer(answer: string) {
        this._answer = answer;
    }

    public set subject(subject: string) {
        this._subject = subject;
    }

    public set type(type: string) {
        this._type = type;
    }

    public abstract isCorrect(answer: string): boolean;
}