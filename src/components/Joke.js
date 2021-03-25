import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Joke = ({ clicked, setClicked }) => {
  const url = "https://api.chucknorris.io/jokes/random";
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const response = await fetch(url, {
      method: "GET",
    });
    return response.json();
  };

  useEffect(() => {
    fetchJoke().then((data) => setJoke(data));
  }, [clicked]);

  return (
    <StyledJoke>
      <h2>{joke.value}</h2>
    </StyledJoke>
  );
};

const StyledJoke = styled.div`
  width: 70%;
  margin: auto;
`;

export default Joke;
