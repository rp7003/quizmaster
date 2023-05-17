import React from "react";
import { useState } from "react";
import { BootstrapQuestion } from "../question/BootstrapQuestion";
import Scoreboard from "../Scoreboard";
import BootstrapSvg from "../langIconData/BootstrapSvg.js";

function BootstrapQuiz() {
  const [queIndex, setQueIndex] = useState(0);

  const [trackClick, SetTrackClick] = useState(0);

  function changeQue() {
    if (queIndex < BootstrapQuestion.length - 1) {
      setQueIndex(queIndex + 1);
      updateScore();
    } else {
      return;
    }
  }

  function priQue() {
    if (queIndex > 0) {
      setQueIndex(queIndex - 1);
    } else {
      return;
    }
  }
  const [changeScore, setChangeScore] = useState(0);

  function updateScore() {
    if (trackClick === BootstrapQuestion[queIndex].ans) {
      setChangeScore(changeScore + 1);
    } else {
      console.log(BootstrapQuestion[queIndex].ans);
    }
  }

  return (
    <div>
      <div>
        <div className="container">
          <div className="score-section d-flex">
            <Scoreboard allQuestion={BootstrapQuestion.length} nowScore={changeScore} />
            <>
              <div className="d-flex m-2 w-100 rounded border justify-content-center align-items-center">
                <span className="svg d-block mx-2 p-1">
                  <BootstrapSvg width="60" />
                </span>
                <span className="name d-block mx-2 fs-2 ">Bootstrap Language</span>
              </div>
            </>
          </div>
        </div>
        <div className="container-fluid mt-5 m-auto p-2 p-sm-3 p-md-5 rounded question-sction">
          <div className="row">
            <div className="col-12">
              <div className="mb-5">
                <span className="d-block fs-2  w-100 text-center">
                  {queIndex + 1}.{BootstrapQuestion[queIndex].question}
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                {BootstrapQuestion[queIndex].option.map((option, i) => {
                  return (
                    <button
                      className="btn position-relative w-75 btn-option shadow rounded-1 border-1 my-2 fs-5 p-2"
                      onClick={function trackScore() {
                        SetTrackClick(i + 1);
                      }}
                    >
                      <span className=" position-absolute que-number">
                        {i + 1}.{" "}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="d-flex mt-5 justify-content-center w-100">
            <button
              className="btn priv-btn shadow-sm d-block mx-auto p-2 rounded-2 w-25"
              onClick={priQue}
            >
              Prev
            </button>
            <button
              className="btn next-btn shadow-sm d-block mx-auto p-2 rounded-2 w-25"
              onClick={changeQue}
            >
              Save & Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BootstrapQuiz;
