import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Chatbot } from "popcat-chatbot";
import Answers from "./Answers";

const Home = () => {
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const inputRef = useRef();
  useEffect(() => {
    const initialStateQ = JSON.parse(localStorage.getItem("questions")) || [];
    const initialStateA = JSON.parse(localStorage.getItem("answers")) || [];
    console.log(initialStateQ);
    if (initialStateQ !== []) {
      setQuestion(initialStateQ);
    }
    if (initialStateA !== []) {
      setAnswer(initialStateA);
    }
  }, []);

  let ourBot = new Chatbot()
    .setName("Big Bot")
    .setGender("Male")
    .setOwner("EEF");

  const submitHandler = async (event) => {
    event.preventDefault();

    let typedInput = inputRef.current.value;

    setQuestion((questions) => {
      return [typedInput, ...questions];
    });

    inputRef.current.value = " ";

    const ourBotAns = await ourBot.chat(typedInput);

    setAnswer((answers) => {
      return [ourBotAns, answers];
    });
    localStorage.setItem("questions", JSON.stringify(question));
    localStorage.setItem("answers", JSON.stringify(answer));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} />
        <button type="submit">Send</button>
      </form>
      <Answers questions={question} answers={answer} />
    </>
  );
};

export default Home;
