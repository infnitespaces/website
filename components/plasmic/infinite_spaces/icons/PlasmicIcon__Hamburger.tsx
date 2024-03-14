// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HamburgerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HamburgerIcon(props: HamburgerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 5000 5000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#231f20"} strokeWidth={"0"} d={"M0 0h5000v5000H0z"}></path>

      <g strokeWidth={"0"} fill={"#fff"}>
        <rect
          x={"1675"}
          y={"1995.83"}
          width={"1650"}
          height={"200"}
          rx={"100"}
          ry={"100"}
        ></rect>

        <rect
          x={"1675"}
          y={"2400"}
          width={"1650"}
          height={"200"}
          rx={"100"}
          ry={"100"}
        ></rect>

        <rect
          x={"1675"}
          y={"2804.17"}
          width={"1650"}
          height={"200"}
          rx={"100"}
          ry={"100"}
        ></rect>

        <path
          d={
            "M2500 3886.46c-187.14 0-368.72-36.67-539.69-108.99-82.17-34.75-161.42-77.77-235.54-127.84-73.4-49.59-142.42-106.53-205.14-169.25s-119.67-131.74-169.25-205.14c-50.08-74.12-93.09-153.37-127.84-235.54-72.32-170.98-108.99-352.56-108.99-539.69s36.67-368.72 108.99-539.7c34.76-82.17 77.77-161.42 127.84-235.54 49.59-73.4 106.53-142.42 169.25-205.14s131.74-119.67 205.14-169.25c74.12-50.08 153.37-93.09 235.54-127.84 170.98-72.32 352.56-108.99 539.69-108.99s368.72 36.67 539.69 108.99c82.17 34.76 161.42 77.77 235.54 127.84 73.4 49.59 142.42 106.53 205.14 169.25s119.67 131.74 169.25 205.14c50.08 74.12 93.09 153.37 127.84 235.54 72.32 170.98 108.99 352.56 108.99 539.7s-36.67 368.72-108.99 539.69c-34.75 82.17-77.77 161.42-127.84 235.54-49.59 73.4-106.53 142.42-169.25 205.14s-131.74 119.67-205.14 169.25c-74.12 50.08-153.37 93.09-235.54 127.84-170.98 72.32-352.56 108.99-539.69 108.99zm0-2622.92c-681.79 0-1236.46 554.67-1236.46 1236.46S1818.21 3736.46 2500 3736.46 3736.46 3181.79 3736.46 2500 3181.79 1263.54 2500 1263.54z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default HamburgerIcon;
/* prettier-ignore-end */
