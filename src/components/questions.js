import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Answares from "./answares";
import { useNavigate } from "react-router-dom";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow"
      )
      .then(function (response) {
        setQuestions(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [0]);
  return (
    <div>
      {questions.map((question) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{question?.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Link onClick={() => navigate(`/answare/:${question?.question_id}`)}>
                View Answare
              </Card.Link>
              <Card.Link href={question?.link}>Open on stack</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
