import { evaluate } from 'mathjs' // Import mathjs to evaluate mathematical expressions properly
import React, { useState } from 'react'

const Calculator = () => {
    const [input, setInput] = useState("") // State to store the user input

    // Function to handle calculator operations
    const handleCalculate = (btn) => {
        if (btn === "C") {
            // Clear input when "C" is pressed
            setInput("")
        } else if (btn === "=") {
            try {
                // Use mathjs to evaluate the expression with BODMAS/BIDMAS
                const result = evaluate(input)
                setInput(result.toString()) // Display the result
            } catch (error) {
                // Catch any invalid expression errors
                setInput("Error")
            }
        } else {
            // Append button value to the input string
            setInput(input + btn)
        }
    }

    // Array of button values for the calculator interface
    const button = [
        "1", "2", "3", "-",
        "4", "5", "6", "*",
        "7", "8", "9", "/",
        "0", ".", "=", "+",
        "C"
    ]

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-6 rounded-2xl shadow-2xl w-80">

                    {/* Display screen */}
                    <div className="mb-4 bg-gray-200 text-right text-xl p-4 rounded-md font-mono h-20 flex items-end justify-end">
                        {/* Show input or 0 if empty */}
                        {input || "0"}
                    </div>

                    {/* Calculator buttons (excluding C) */}
                    <div className="grid grid-cols-4 gap-[13px]">
                        {button
                            .filter((btn) => btn !== "C")
                            .map((btn, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleCalculate(btn)} // Handle button click
                                    className={`p-[18px] text-[25px] font-bold ${btn === "="
                                        ? "bg-green-500 text-white" // Style for "="
                                        : "bg-gray-300 text-blue-950" // Style for other buttons
                                        }`}
                                >
                                    {btn}
                                </button>
                            ))}
                    </div>

                    {/* Clear button (C) */}
                    <div className="mt-3">
                        <button
                            onClick={() => handleCalculate("C")}
                            className="w-full p-[18px] text-[25px] font-bold bg-red-500 text-white rounded-md"
                        >
                            C
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
