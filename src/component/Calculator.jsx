import React, {useState} from 'react'
import { evaluate } from "mathjs";
import {  BackspaceIcon,  DivideIcon, MinusIcon, PlusIcon,  XMarkIcon } from '@heroicons/react/24/solid'
import StopCircleIcon from './StopCircleIcon';


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
      const symbol = [7,8,9,
        <DivideIcon className='size-7   text-black' values='/'/>,
        4,5,6,
        <XMarkIcon className='size-7  text-black' values='*' />,
        1,2,3,
        <PlusIcon className='size-7    text-black' values='+' />
        ,0,
        <StopCircleIcon values = "." />,
        <MinusIcon className='size-7  text-black ' values='-' /> ,
       
       <BackspaceIcon className='size-7  text-black' values='clear' />
    

    
      ]
    return(
        <>
        <div className='absolute left-3 w-1/2  md:inline-flex hidden'>

          <img src='/calculator.png' alt='calculator' />
        </div>
       <div className=" md:w-1/4    absolute -right-10  w-full  md:right-0 md:top-24  p-4 bg-green-400 m-10 ">
       <img src='avatar.jpg' className='w-24 border md:w-16 md:left-12 lg:w-24 lg:left-24 rounded-full relative left-1/3 mb-6' alt='avatar'/>
  {/* Display box for input and output */}
  <div className="grid grid-cols-1 gap-2 mb-4 p-2 border rounded bg-white text-right">
    <div >{input || "0"}</div> {/* Show input or 0 if input is empty */}
    <div className='text-green-800 text-xl'>{result ? `= ${result}` : ""}</div> {/* Show result */}
  </div>
  
  {/* Buttons layout */}
  <div className="grid grid-cols-4 lg:gap-3 md:gap-1  gap-3 ">
    {symbol.map((num,index) => (
      <button
        key={index}
        className={`flex items-center justify-center  h-8 p-4  border rounded ${typeof num === "object" ? "bg-green-500  hover:bg-green-700" : "bg-blue-200 hover:bg-blue-300"}   text-xl`}
        onClick={() =>
          typeof num === "object" && num.props.values
            ?(num.props.values !== "clear")?display(num.props.values): clear() // If it's an icon, use its value
            : display(num) // If it's a number, use the number
        }
      >
        {num}
      </button>
    ))}
    
    <button
      className="col-span-4 p-4  border rounded bg-green-200 hover:bg-green-300 text-xl"
      onClick={handleEvaluate}
    >
      Calculate
    </button>
  </div>
</div>

       </>
    )
}