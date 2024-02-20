"use client";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";

const MultipleChoiceQuestionPage: FC = () => {
  const router = useRouter();
  const [showHint, setShowHint] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState("bob");
  const [index, setIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const handleChoiceClick = (choice: string) => {
    console.log(choice);
    setSelectedChoice(choice);
    setIsCorrect(choice === questions[index].answer);
  };





  const questions = [
    {
      "question": "What is a state machine?",
      "choices": ["A device that manages state transitions based on input", "A programming language feature", "A type of memory storage", "A digital circuit that does arithmetic operations"],
      "answer": "A device that manages state transitions based on input",
      "hint": "Think about systems that change states based on certain conditions."
    },
    {
      "question": "Which of the following is NOT a valid state for Dave the Funky Dancing Robot Crab?",
      "choices": ["Dancing", "Charging with 1 charge", "Charging with 2 charges", "Sleeping"],
      "answer": "Sleeping",
      "hint": "Dave's states are related to its charging and dancing capabilities."
    },
    {
      "question": "How many bits are needed to represent a state machine with 20 states in a one-hot encoding?",
      "choices": ["20", "5", "10", "15"],
      "answer": "20",
      "hint": "In one-hot encoding, each state is represented by a unique bit."
    },
    {
      "question": "What does a Karnaugh Map (K-Map) simplify?",
      "choices": ["Boolean expressions", "Arithmetic operations", "Memory storage techniques", "Programming algorithms"],
      "answer": "Boolean expressions",
      "hint": "K-Maps are used for simplification in digital logic design."
    },
    {
      "question": "What is the purpose of tri-state buffers in the LC-3 datapath?",
      "choices": ["Store data", "Simplify Boolean expressions", "Control data flow onto the bus", "Perform arithmetic operations"],
      "answer": "Control data flow onto the bus",
      "hint": "Think about the component that ensures only one value is on the bus at a time."
    },
    {
      "question": "What type of logic does a D Flip-Flop represent?",
      "choices": ["Combinational", "Sequential", "Arithmetic", "Configurable"],
      "answer": "Sequential",
      "hint": "D Flip-Flops are used to store bits and are a basic building block of sequential logic."
    },
    {
      "question": "In a binary encoded state machine, how many bits are required to represent 17 states?",
      "choices": ["4", "5", "6", "17"],
      "answer": "5",
      "hint": "Binary encoding uses the minimum number of bits to represent states."
    },
    {
      "question": "Which component of the LC-3 is responsible for arithmetic operations?",
      "choices": ["The Bus", "Tri-state buffer", "ALU", "Memory"],
      "answer": "ALU",
      "hint": "This component performs arithmetic and logical operations."
    },
    {
      "question": "What is the main difference between combinational and sequential logic?",
      "choices": ["Combinational logic is faster", "Sequential logic can store data", "Combinational logic uses more power", "Sequential logic does not use clocks"],
      "answer": "Sequential logic can store data",
      "hint": "Consider the type of logic that depends on both current and previous inputs."
    },
    {
      "question": "How does a state machine differ from event-driven programming?",
      "choices": ["State machines are not locked to a clock", "State machines can only have one state", "State machines are locked to the clock", "There is no difference"],
      "answer": "State machines are locked to the clock",
      "hint": "Think about the timing aspect of state machines."
    },
    {
      "question": "What does the LC-3's PC (Program Counter) hold?",
      "choices": ["The current instruction", "The next instruction's address", "Data to be executed", "Results of computations"],
      "answer": "The next instruction's address",
      "hint": "The PC is crucial for sequencing through instructions."
    },
    {
      "question": "Which LC-3 component is used to move data around?",
      "choices": ["Control signals", "The Bus", "Memory", "ALU"],
      "answer": "Control signals",
      "hint": "These signals determine the path data takes through the system."
    },
    {
      "question": "What role do K-Maps play in digital circuit design?",
      "choices": ["Memory optimization", "Boolean expression simplification", "Increasing processing speed", "Data encryption"],
      "answer": "Boolean expression simplification",
      "hint": "K-Maps help reduce the complexity of logicaldesigns."
    },
    {
      "question": "What is the result of asserting the GatePC signal in the LC-3?",
      "choices": ["Data is written to the PC", "Data from the PC is placed onto the bus", "The PC is incremented", "A new instruction is fetched"],
      "answer": "Data from the PC is placed onto the bus",
      "hint": "Gate signals control the flow of data onto the bus."
    },
    {
      "question": "Which statement best describes the function of the LC-3 microcontroller?",
      "choices": ["Performs memory operations only", "Controls the datapath and executes instructions", "Stores data temporarily", "Manages external devices"],
      "answer": "Controls the datapath and executes instructions",
      "hint": "Think about the component that manages instruction execution."
    },
    {
      "question": "What is the primary purpose of the LC-3's condition codes (CC)?",
      "choices": ["To direct the flow of data on the bus", "To perform arithmetic calculations", "To indicate the result of operations", "To manage memory operations"],
      "answer": "To indicate the result of operations",
      "hint": "Condition codes provide feedback about operations' outcomes."
    },
    {
      "question": "Which of the following is NOT a component of the LC-3 datapath?",
      "choices": ["ALU", "The Bus", "Clock", "Hard drive"],
      "answer": "Hard drive",
      "hint": "Consider which components are directly involved in data processing."
    },
    {
      "question": "How does the LC-3 distinguish between instruction and data addresses?",
      "choices": ["Using different memory banks", "By the instruction set architecture", "It does not distinguish", "Through special flags in memory"],
      "answer": "It does not distinguish",
      "hint": "Think about the LC-3's perspective on memory contents."
    },
    {
      "question": "What is the significance of a register in the LC-3 architecture?",
      "choices": ["It stores instructions", "It holds temporary data for quick access", "It controls the clock signals", "It manages external device inputs"],
      "answer": "It holds temporary data for quick access",
      "hint": "Registers are essential for fast data access within the processor."
    },
    {
      "question": "In sequential logic, what determines the output of a circuit?",
      "choices": ["Only the current inputs", "The power supply level", "Both current inputs and previous inputs", "The size of the logic gates"],
      "answer": "Both current inputs and previous inputs",
      "hint": "Sequential logic builds upon the past to determine the present."
    },
    {
      "question": "What is the main function of the LC-3 bus?",
      "choices": ["To store data", "To execute instructions", "To transfer data between components", "To simplify Boolean expressions"],
      "answer": "To transfer data between components",
      "hint": "The bus is a communication pathway for data."
    },
    {
      "question": "Why are Karnaugh Maps used in digital logic design?",
      "choices": ["To increase memory capacity", "To simplify Boolean expressions", "To speed up processing times", "To encrypt data"],
      "answer": "To simplify Boolean expressions",
      "hint": "Simplification leads to more efficient circuit designs."
    },
    {
      "question": "What role does the program counter (PC) play in the LC-3 architecture?",
      "choices": ["Stores the currently executing instruction", "Indicates the next instruction to execute", "Holds the result of the last ALU operation", "Manages data transfer on the bus"],
      "answer": "Indicates the next instruction to execute",
      "hint": "The PC guides the sequence of instruction execution."
    },
    {
      "question": "Which of the following best describes the purpose of the LC-3 ALU?",
      "choices": ["To manage input/output operations", "To perform arithmetic and logic operations", "To store program instructions", "To control data flow on the bus"],
      "answer": "To perform arithmetic and logic operations",
      "hint": "The ALU is central to computation within the processor."
    },
    {
      "question": "What is the main advantage of using tri-state buffers in a digital system?",
      "choices": ["They reduce power consumption", "They simplify logic expressions", "They control the direction of data flow", "They increase processing speed"],
      "answer": "They control the direction of data flow",
      "hint": "Tri-state buffers are key to managing bus access."
    },
  ]
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="flex flex-col items-center w-full max-w-lg px-4 py-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-purple-300">
          {questions[index].question}
        </h1>
        <div className="flex flex-col w-full">
          {questions[index].choices.map((choice, index) => (
            <button
              key={index}
              className={`mb-4 px-4 py-2 rounded-md text-purple-700 font-semibold  ${selectedChoice === choice ? (isCorrect ? "bg-green-300" : "bg-red-300") : "bg-purple-200"}`}
              onClick={() => handleChoiceClick(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
        <button
          className="mt-6 px-4 py-2 bg-green-200 rounded-md text-green-700 font-semibold hover:bg-green-300"
          onClick={() => setShowHint(!showHint)}
        >
          {showHint ? "Hide" : "Show"} Hint
        </button>
        {showHint ? (
          <div className="mt-4 px-4 py-2 bg-yellow-100 rounded-md text-yellow-700">
            {questions[index].hint}
          </div>
        ) : (
          <div className="pb-10 pt-1"></div>
        )}
        <div className="flex justify-between w-full mt-6">
          <button onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
              setSelectedChoice("");
              setShowHint(false);
            }
          }}
          
          className="px-4 py-2 bg-blue-200 rounded-md text-blue-700 font-semibold hover:bg-blue-300">
            Previous
          </button>
          <button onClick={() => {
            if (index < questions.length - 1) {
              setIndex(index + 1);
              setSelectedChoice("");
              setShowHint(false);
            }
          }}
          
          className="px-4 py-2 bg-blue-200 rounded-md text-blue-700 font-semibold hover:bg-blue-300">
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default MultipleChoiceQuestionPage;