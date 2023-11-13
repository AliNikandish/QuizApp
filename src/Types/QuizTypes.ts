export type QuizContextType={
    question:string;
    choices:string[];
    currQuestion:number;
    onClickNext:()=>void;
    onAnswerSelected:(answer:string,index:number)=>void;
    selectedAnswerIndex:number | null;
    questions:{
      question: string;
      choices: string[];
      type: string;
      correctAnswer: string;
    }[];
    remainTime:number;
    type:string,
    result:resultType,
    
   
  }


  export type resultType={
    score:number,
    correctAnswers:number,
    wrongAnswers:number
  }


  export type answerProp={
    choice:string
    index:number
}