import styled from "styled-components";

export const AdviceWrapper = styled.section`
  background-color: #313a48;
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
  border-radius: 10px;
  padding: 40px 24px 0;

  div {
    width: 295px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  h1 {
    color: #53ffaa;
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 3px;
  }

  p::before {
    content: open-quote;
  }

  p::after {
    content: close-quote;
  }

  p {
    quotes: "“" "”";
    font-size: 24px;
    line-height: 33px;

    color: #cee3e9;
  }

  button {
    width: 64px;
    height: 64px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #53ffaa;
    border-radius: 50%;
    margin-bottom: -32px;
  }

  @media (min-width: 540px) {
    padding: 48px 48px 0;
    div {
      width: 444px;
    }

    h1 {
      font-size: 13px;
      line-height: 18px;
      letter-spacing: 4px;
    }

    p {
      font-size: 28px;
      line-height: 38px;
    }

    button {
      cursor: pointer;
      transition: all 500ms;
    }

    button:hover {
      box-shadow: 0 0 40px #53ffaa;
    }
  }
`;
