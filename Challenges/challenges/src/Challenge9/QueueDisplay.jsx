import React from "react";

const QueueDisplay = ({ queue }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Cola actual del cajero: </h2>
            <ul className="list-disc pl-4">
                {queue.map((person,index) =>(
                    <li key={index}>
                        {person.name} - Retiro: ${person.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default  QueueDisplay;