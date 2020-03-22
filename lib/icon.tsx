import React from "react";
import classes from "./helperes/classes";
// import "./icons/wechat.svg";
import "./icon.scss";
import "./importIcons";

interface IconPops extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconPops> = ({
  className,
  name,
  ...restProps
}) => {
  return (
    <svg className={classes("icon", className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
