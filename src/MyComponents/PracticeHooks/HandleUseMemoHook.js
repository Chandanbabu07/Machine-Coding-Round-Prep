import React, { useMemo, useState } from "react";

function HandleUseMemoHook() {
  const [state, setState] = useState(0);
  const [input, setInput] = useState(0);
  const [show, setShow] = useState(false);

  const handleSubmit = useMemo(() => {
    setTimeout(() => {
      setState(Number(state) + Number(input));
    }, 1000);
  }, [state]);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <p style={{ color: "whitesmoke" }}>{`OutPut :${state}`}</p>
        {show && (
          <p
            style={{ color: "whitesmoke" }}
          >{`Calculated Values: :${state} + ${input}`}</p>
        )}

        <input
          type="number"
          placeholder="enter number"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button
          style={{ backgroundColor: "whitesmoke", color: "black" }}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button onClick={() => handleShow()}>{show ? "Hide" : "Show"}</button>
      </div>
    </>
  );
}

export default HandleUseMemoHook;
