import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setDisplayedText(""); 
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (indexRef.current < text.length) {
        const nextChar = text.charAt(indexRef.current);
        setDisplayedText((prev) => prev + nextChar);
        indexRef.current += 1;
      } else {
        clearInterval(intervalRef.current);
      }
    }, speed);

    return () => clearInterval(intervalRef.current); 
  }, [text, speed]);

  return (
    <motion.p
      className="text-[1.3rem] text-base text-center text-gray-800 p-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayedText}
      <span className="cursor-blink">|</span> 
    </motion.p>
  );
};

export default TypewriterText;
