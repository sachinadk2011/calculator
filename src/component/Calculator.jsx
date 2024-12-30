import React, {useState} from 'react'
import { evaluate } from "mathjs";

export default function Calculator(){
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const display = (num)=>{
        
        setInput((prevInput) => prevInput + num.toString());
    }
    /* const handleInputChange= (e)=>{
       setInput(e.target.innerText) ;
    }; */
    const clear = ()=>{
        setInput("");
        setResult('');
    }
    const handleEvaluate = () => {
        try {
          // Use `eval()` to calculate the result (Note: This is not secure for untrusted input)
          const evaluation = evaluate(input); 
          setResult(evaluation);
        } catch (error) {
          setResult("Error"); // Handle invalid expressions
        }
      };
    return(
        <>
       <div className="container lg:w-1/3 lg:mr-0 mx-auto p-4 bg-green-400">
  
  
  {/* Display box for input and output */}
  <div className="grid grid-cols-1 gap-2 mb-4 p-2 border rounded bg-white text-right">
    <div >{input || "0"}</div> {/* Show input or 0 if input is empty */}
    <div className='text-green-800 text-xl'>{result ? `= ${result}` : ""}</div> {/* Show result */}
  </div>
  
  {/* Buttons layout */}
  <div className="grid grid-cols-4 gap-2">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/", "."].map((num) => (
      <button
        key={num}
        className="p-4 border rounded bg-blue-200 hover:bg-blue-300 text-xl"
        onClick={() => display(num)}
      >
        {num}
      </button>
    ))}
    <button
      
      onClick={clear}
    >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
</svg>

    </button>
    <button
      className="col-span-4 p-4 border rounded bg-green-200 hover:bg-green-300 text-xl"
      onClick={handleEvaluate}
    >
      Calculate
    </button>
  </div>
</div>

       </>
    )
}