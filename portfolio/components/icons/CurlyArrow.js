const CurlyArrowIcon = ({ width, height, darkMode, lightMode }) => {
    let color = darkMode ? "#000000" : "#FFFFFF"; 
    if (lightMode) {
      color = "#FFFFFF"
    }
  
    return (
      <svg
        width="212px"
        height="212px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <g>
          <path
            fill={color}
            d="M 45.5,31.5 C 52.6877,29.9881 58.5211,31.9881 63,37.5C 85.4391,89.7557 114.439,137.756 150,181.5C 175.298,146.105 209.798,129.939 253.5,133C 308.011,140.843 342.511,171.343 357,224.5C 361.168,246.836 357.168,267.502 345,286.5C 335.046,297.895 322.546,304.729 307.5,307C 277.786,308.988 250.119,302.322 224.5,287C 200.31,271.823 178.143,253.99 158,233.5C 149.391,275.179 155.724,314.512 177,351.5C 192.482,375.942 214.648,390.442 243.5,395C 253.092,396.706 262.759,397.706 272.5,398C 296.845,398.269 321.179,398.936 345.5,400C 382.143,402.101 414.976,414.267 444,436.5C 442.779,423.162 441.112,409.828 439,396.5C 437.876,386.851 437.543,377.185 438,367.5C 440.536,357.976 446.703,354.143 456.5,356C 463.176,358.516 466.509,363.349 466.5,370.5C 465.712,378.8 465.879,387.134 467,395.5C 470.343,416.57 472.843,437.737 474.5,459C 474.798,476.194 466.465,483.027 449.5,479.5C 425.837,478.845 402.17,478.345 378.5,478C 370.325,475.485 366.825,469.985 368,461.5C 369.298,456.726 372.132,453.226 376.5,451C 388.5,450.667 400.5,450.333 412.5,450C 394.577,438.247 374.911,431.247 353.5,429C 325.538,427.057 297.538,426.057 269.5,426C 198.708,425.525 153.541,391.358 134,323.5C 122.723,285.256 123.223,247.256 135.5,209.5C 94.1962,159.948 61.1962,105.114 36.5,45C 37.3852,38.9722 40.3852,34.4722 45.5,31.5 Z M 234.5,160.5 C 276.717,160.011 306.884,178.678 325,216.5C 331.315,230.938 331.982,245.605 327,260.5C 322.851,271.327 315.017,277.494 303.5,279C 284.497,280.333 266.497,276.666 249.5,268C 219.539,251.395 193.039,230.228 170,204.5C 169.685,203.092 170.018,201.759 171,200.5C 186.115,177.55 207.282,164.217 234.5,160.5 Z"
          />
        </g>
      </svg>
    );
  };
  
  export default CurlyArrowIcon;