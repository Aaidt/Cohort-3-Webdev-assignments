import { useState } from "react";

export const Problems = ({ filter }) => {
    const questions = [
        { id: "1", question: "solve this linked list problem.", difficulty: "easy" },
        { id: "2", question: "solve this linked list problem.", difficulty: "medium" },
        { id: "3", question: "solve this linked list problem.", difficulty: "easy" },
        { id: "4", question: "solve this linked list problem.", difficulty: "hard" },
        { id: "5", question: "solve this linked list problem.", difficulty: "easy" },
        { id: "6", question: "solve this linked list problem.", difficulty: "medium" }
    ]

    const filteredQuestions = questions.filter(q => filter[q.difficulty])

    return (
        <div className="md:flex md:flex-col grid col-span-3 gap-10 text-white">
            {filteredQuestions.length > 0 ? (
                filteredQuestions.map(q => (
                    <div key={q.id} className="flex justify-between p-2 w-110 h-10 bg-gray-700 rounded-lg text-white">
                        <p>{q.question}</p>
                        <p className="capitalize">{q.difficulty}</p>
                    </div>
                ))
            ) : (
                <div>Please select a difficulty first.</div>
            )}
        </div>
    )
}