import dice from "../images/icon-dice.svg";
import mobile from "../images/pattern-divider-mobile.svg";
import desktop from "../images/pattern-divider-desktop.svg";

import {AdviceWrapper} from "./styles/AdviceWrapper.sc";

export default function Advice({id, advice, getAdvice}) {
  return (
    <AdviceWrapper>
      <div>
        <h1>Advice #{id}</h1>
        <p>{advice}</p>
        <picture>
          <source media={"(min-width: 540px)"} srcSet={desktop} />
          <img src={mobile} alt={""} aria-hidden />
        </picture>
        <button>
          <img src={dice} alt={"dice"} onClick={getAdvice} />
        </button>
      </div>
    </AdviceWrapper>
  );
}
