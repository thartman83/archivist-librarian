import { useState } from "react";

type ScannerOption = {
  name: string,
  description: string,
  py_name: string,
  size: number,
  option_type: number,
  unit: number,
  value: any,
  constraint: {}
};

enum ScanUnit {
  Bool = 0,
  Int,
  Fixed,
  String
}

const ScannerOption = (props) => {
  const optionData = props.optionData;
  const [optionValue, setOptionValue ] = useState(props.optionData.value);
  let inputEl = <div/>;

  switch (optionData.option_type) {
    case ScanUnit.Bool:
      inputEl = <div className="control-checkbox-group">
        <label>
          <input
            key={optionData.name+"bool-inputTrue"}
            name={optionData.name} id={optionData.name + "-true"}
            type="radio" value="1"
            defaultChecked={optionValue == 1} />Yes
        </label>
        <label>
          <input
            key={optionData.name+"bool-inputFalse"}
            name={optionData.name} id={optionData.name + "-false"}
            type="radio" value="0"
            defaultChecked={optionValue == 0} />No
        </label>
      </div>;
      break;
    case ScanUnit.String:
    case ScanUnit.Int:
      const opts = optionData.constraint.map((val: string) => {
        return <option
                 key={optionData.name+"-opt-"+val}value={val}>{val}</option>;
      });

    inputEl = <select name={optionData.name} id={optionData.name}
                      key={optionData.name+"select-input"}
                      defaultValue={optionValue}>
        {opts}
      </select>;
      break;
    case ScanUnit.Fixed:
    const [ min, max, step ] = optionData.constraint.map(i => {
      return Number.parseFloat(i).toFixed(2);
    });
    const value = Number.parseFloat(optionValue).toFixed(2);
    inputEl = <div className="form-fixed-group">
                <input className="form-fixed-slider"
                       key={optionData.name+"slider-input"}
                       type="range" min={min} max={max} step={step}
                       value={value}
                       onChange={
                         (e) => setOptionValue(prev => e.target.value)
                       }

                />
                <input className="input-fixed-number" type="number"
                       key={optionData.name+"number-input"}
                       value={value}
                       onChange={
                         (e) => setOptionValue(prev => e.target.value)
                       }
                />
              </div>;
    break;

  }

  return (
    <div key={optionData.name} className="form-group">
      <label>{optionData.name}
        <span className="form-hint" data-hint={optionData.description}>i</span>
      </label>
      {inputEl}
    </div>
  );
};

export default ScannerOption;
