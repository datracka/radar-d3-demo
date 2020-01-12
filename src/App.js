import React from "react";
import * as d3 from "d3";
import RadarChart from "./radar-chart";

import "./App.css";

const width = 300;
const height = 300;

// Config for the Radar chart
const config = {
  w: width,
  h: height,
  levels: 5,
  maxValue: 100,
  ExtraWidthX: 300
};

const App = () => {
  const divRef = React.useRef();
  const [param1, setParam1] = React.useState(80);
  const [param2, setParam2] = React.useState(80);
  const [param3, setParam3] = React.useState(80);
  const [param4, setParam4] = React.useState(80);
  const [param5, setParam5] = React.useState(80);
  const [param6, setParam6] = React.useState(80);
  const [param7, setParam7] = React.useState(80);

  const handleChange = (setParam, event) => setParam(event.target.value);
  const handleParam1 = event => handleChange(setParam1, event);
  const handleParam2 = event => handleChange(setParam2, event);
  const handleParam3 = event => handleChange(setParam3, event);
  const handleParam4 = event => handleChange(setParam4, event);
  const handleParam5 = event => handleChange(setParam5, event);
  const handleParam6 = event => handleChange(setParam6, event);
  const handleParam7 = event => handleChange(setParam7, event);

  const data = [
    [
      { area: "Value1 ", value: param1 },
      { area: "Value2", value: param2 },
      { area: "Value3 ", value: param3 },
      { area: "Value4 ", value: param4 },
      { area: "Value5 ", value: param5 },
      { area: "Value6 ", value: param6 },
      { area: "Value7 ", value: param7 }
    ]
  ];

  React.useEffect(() => {
    if (divRef.current != null) {
      // console.log(divRef.current);
      RadarChart(divRef.current, data, config);
    }
  }, []);

  React.useEffect(() => {
    RadarChart(divRef.current, data, config);
  }, [param1, param2, param3, param4, param5, param6, param7]);

  return (
    <>
      <h2>Demo Radar</h2>
      <div ref={divRef} />
      <p>Rellena tus propios valores: </p>
      <ul>
        <li>
          Value 1: <input value={param1} onChange={handleParam1} />
        </li>
        <li>
          Value 2: <input value={param2} onChange={handleParam2} />
        </li>
        <li>
          Value 3: <input value={param3} onChange={handleParam3} />
        </li>
        <li>
          Value 4: <input value={param4} onChange={handleParam4} />
        </li>
        <li>
          Value 5: <input value={param5} onChange={handleParam5} />
        </li>
        <li>
          Value 6: <input value={param6} onChange={handleParam6} />
        </li>
        <li>
          Value 7: <input value={param7} onChange={handleParam7} />
        </li>
      </ul>
    </>
  );
};

export default App;
