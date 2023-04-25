import React from "react";
import {
  container,
  wrapper,
  exploreHeading,
  secondHeading,
  storyWrapper,
  story,
} from "../css/EWV.module.css";

export default function Ewv() {
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={exploreHeading}>Sail with Us</div>
        <div className={secondHeading}>
          {" "}
          <a
            href="https://www.youtube.com/@svseasenora"
            textDecoration="none"
            target="_blank"
            rel="noopener noreferrer"
          >
            A Travel Site
          </a>
        </div>
        <div className={storyWrapper}>
          <div className={story}>
            It’s a big wide world out there. A world of cultural charms and
            natural wonders; mega-cities and remote outposts; paths to cross and
            lessons to learn; limitless kindness and harsh realities.
          </div>
          <div className={story}>
            We believe that sailing is a wonderful way (for families) to bond,
            explore and create unforgettable memories together.
          </div>
          <div className={story}>
            We travel to enquire, hear stories, and be awestruck by incredible
            scenery. To be humbled by the history of yesterday, and excited by
            the possibilities of tomorrow. Our videos feature breathtaking
            footage of some of the most beautiful sailing locations around the
            world. Whether you're a seasoned sailor, just getting started or
            just want to enjoy, our content is designed to inspire and educate.
          </div>
          <div className={story}>
            The moments that moved us, the characters we encountered, and the
            stage upon which it is all set. It’s a big wide world out there.
            Come and sail it with us.
          </div>
        </div>
      </div>
    </div>
  );
}
