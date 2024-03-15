import { useState } from "react";

export function Foco() {
  const [color, setColor] = useState("");
  return (
    <>
      <div className="foco" style={{ backgroundColor: {color} }}>
        Foco
      </div>
    </>
  )
}
