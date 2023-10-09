import { useState } from "react";
import { data } from "./Data";
import styled from "styled-components";

const Wr = styled.div`
    background-color: #f5fdff;
    padding: 70px 50px;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
`;
const Cont = styled.div`
    width: 60%;
    background: #f56775;
    margin: 20px auto;
    overflow: auto;
    padding: 25px;
`;
const Head1 = styled.h1`
    text-align: center;
    margin: 0;
    padding: 0;
    color: #2e84b3;
`;
const Sec = styled.section`
     min-height: 410px;
`;
const Head3 = styled.h3`
    background: #c6db48;
    padding: 10px;
    margin: 10px 0;
    color: #000;
`;
const Btn = styled.button`
    background: #2e84b3;
    border: 0;
    color: #fff;
    padding: 10px 15px;
    cursor: pointer;
    margin-top: 10px;
`;

export const Test = () => {
  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-a", "q2-b", "q3-c", "q4-a", "q5-b"];

  const handleChange = ({ target }) => {
    const nextState = questions.map((question) => {
      if (question.name !== target.name) {
        return question;
      }

      return {
        ...question,
        options: question.options.map((opt) => {
          const checked = opt.radioValue === target.value;
          return {
            ...opt,
            selected: checked,
          };
        }),
        currentAnswer: target.value,
      };
    });
    setQuestions(nextState);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    let counter = 0;
    let flag = false;

    for (const [index, question] of questions.entries()) {
      if (!question.currentAnswer) {
        flag = true;
        alert("Por favor responde la pregunta #" + (index + 1));
        break;
      } else {
        if (question.currentAnswer === answers[index]) {
          ++counter;
        }
      }
    }

    if (!flag) {
      setTotal(counter);
      setSubmitted(true);
    }
  };

  return (
   <Wr id='test' className="wrapp">
    <Cont className="container">
      <>
        <Head1>Short test on React Js</Head1>
        <p>Answer the Following Questions</p>
      </>
      <Sec>
        {submitted && (
          <div className="result">
            <Head3>
            You got {total} of {answers.length} points
            </Head3>
          </div>
        )}
        <form onSubmit={onSubmit}>
          {questions.map((question, idx) => (
            <div key={`group-${idx}`}>
              <h3>
                {idx + 1}. {question.questionText}
              </h3>
              {question.options.map((option, idx) => {
                return (
                  <div key={`option-${idx}`}>
                    <input
                      type="radio"
                      name={question.name}
                      value={option.radioValue}
                      checked={option.selected}
                      onChange={handleChange}
                    />
                    {option.choice}
                  </div>
                );
              })}
            </div>
          ))}
          <Btn className="sendInfo" onClick={onSubmit}>
            Submit
          </Btn>
        </form>
      </Sec>
    </Cont>
    </Wr>
  );
};
