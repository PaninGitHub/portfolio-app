import React, { useState, useEffect } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: { clientX: any; clientY: any; }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updatePosition);

    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-[1]"
      style={{
        background: "transparent", // Ensures it doesn't interfere visually
      }}
    >
      <div
        className="absolute w-[300px] h-[300px] bg-white opacity-[2%] rounded-full blur-3xl"
        style={{
          transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
          transition: "transform 0.05s ease-out",
        }}
      />
    </div>
  );
};

export default MouseFollower;
