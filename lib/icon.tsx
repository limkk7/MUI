import React from "react";
// import "./icons/wechat.svg";
import "./importIcons";

interface IconPops {
  name: string;
}

const Icon = (props: IconPops) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`} />
      </svg>
    </span>
  );
};

export default Icon;
