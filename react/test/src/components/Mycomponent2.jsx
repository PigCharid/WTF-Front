import React, { useState } from "react";

const Mycomponent2 = () => {
  console.log("Mycomponent2");
  const [test, setTest] = useState(0);
  return (
    <div>
      {test}
      <button
        onClick={() => {
          setTest(test + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Mycomponent2;
