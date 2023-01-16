import React from "react";

const Answers = (props) => {
  let combinedArray = [];
  if (props.questions) {
    for (let i = 0; i < props.questions.length; i++) {
      const exObj = {
        question: props.questions[i],
        answer: props.answers[i],
      };
      combinedArray.push(exObj);
    }
  }
  console.log(combinedArray);
  return (
    <>
      {combinedArray.map((el, i) => {
        return (
          <div key={`el ${i}`}>
            <p>Your question: {el.question}</p>
            <p>Answer: {el.answer}</p>
          </div>
        );
      })}
    </>
  );
};

export default Answers;
