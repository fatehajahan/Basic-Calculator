import React, { useState } from 'react'

const Calculator = () => {
    const [input, setInput] = useState("")
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
                        0
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-4 gap-[13px]">
                        {button.map((btn, index) => (
                            <button
                                key={index}
                                className={`p-[18px] text-[25px] font-bold ${btn === "="
                                        ? "bg-green-500 text-white"
                                        : btn === "C"
                                            ? "bg-red-500 text-white col-span-4"
                                            : "bg-gray-300 text-blue-950"
                                    }`}
                            >
                                {btn}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator