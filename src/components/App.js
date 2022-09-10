import {GlobalStyle} from "./styles/GlobalStyle.sc";
import Advice from "./Advice.cp";
import {useEffect, useState} from "react";
import axios from "axios";

export default function App() {
  const [advice, setAdvice] = useState(null);

  function getAdvice() {
    const headers = {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    };
    const promise = axios.get("https://api.adviceslip.com/advice", {headers});
    promise.then(res => setAdvice(res.data.slip));
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Advice id={advice?.id} advice={advice?.advice} getAdvice={getAdvice} />
    </>
  );
}
