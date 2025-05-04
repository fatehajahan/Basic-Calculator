import { evaluate } from 'mathjs'
import React, { useState } from 'react'

const Calculator = () => {
    const [input, setInput] = useState("")

    const handleCalculate = (btn) => {
        if (btn == "C") {
            setInput("") // it will clear the display
        } else if (btn == "=") {
            try {
                const result = evaluate(input)
                setInput(result.toString());
            } catch (error) {
                setInput("Error")
            }
        } else {
            setInput(input + btn) // it will add the button value to the display besides the number.
        }
    }

    //all buttons for the calculator
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
                    {/* Display */}
                    <div className="mb-4 bg-gray-200 text-right text-xl p-4 rounded-md font-mono h-20 flex items-end justify-end">
                        {input || "0"}
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-4 gap-[13px]">
                        {button
                            .filter((btn) => btn !== "C")
                            .map((btn, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleCalculate(btn)}
                                    className={`p-[18px] text-[25px] font-bold ${btn === "="
                                            ? "bg-green-500 text-white"
                                            : "bg-gray-300 text-blue-950"
                                        }`}
                                >
                                    {btn}
                                </button>
                            ))}
                    </div>

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