import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM4 18V6H20L20.002 18H4Z" />
      <path d="M12 14H18V16H12V14ZM6 10L8.293 12.293L6 14.586L7.414 16L11.121 12.293L7.414 8.586L6 10Z" />
    </Svg>
  );
};

export default Icon;
