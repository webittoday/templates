import React from "react";
import "../style/cards.scss";
import { RiLightbulbFlashLine } from "react-icons/ri";
function Cards() {
  return (
    <div>
      <div className="image__grid container">
        <div className="block">
          <div className="overlay" />
          <div className="block--text">
            <div className="text--head">Dreams</div>
            <div className="text--quote">
              “All our dreams can come true, if we have the courage to pursue
              them.”
            </div>
            <div className="text--person">Walt Disney</div>
          </div>
        </div>
        <div className="block">
          <div className="overlay" />
          <div className="block--text">
            <div className="text--head">Never Give Up</div>
            <div className="text--quote">
              “It’s hard to beat a person who never gives up.”
            </div>
            <div className="text--person">Babe Ruth</div>
          </div>
        </div>
        <div className="block">
          <div className="overlay" />
          <div className="block--text">
            <div className="text--head">Do it</div>
            <div className="text--quote">
              “Do one thing every day that scares you.”
            </div>
            <div className="text--person">Eleanor Roosevelt</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
