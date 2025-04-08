import React, {useState} from "react";
import ATMQueue from "./Queue";
import QueueDisplay from "./QueueDisplay";

function App9 () {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [queue, setQueue] = useState([...ATMQueue.toArray()]);

    const handleAdd = () =>{
        if (name && amount) {
            ATMQueue.enqueue({name, amount: Number(amount)});
            setQueue([...ATMQueue.toArray()]);
            setName("");
            setAmount("");
        };
    };

    const handleAttend = () =>{
        ATMQueue.dequeue();
        setQueue([...ATMQueue.toArray()]);
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">ATM Queue</h1>
    
          <div className="flex flex-col gap-2 mb-4">
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2"
            />
            <input
              type="number"
              placeholder="Monto a retirar"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border p-2"
            />
            <button onClick={handleAdd} className="bg-blue-600 text-white p-2 rounded">
              Agregar a la cola
            </button>
            <button 
                onClick={handleAttend} 
                className="bg-green-600 text-white p-2 rounded disabled:opacity-50"
                disabled={queue.length === 0}
            >
                Atender siguiente persona
            </button>
          </div>
    
          <QueueDisplay queue={queue} />
        </div>
    );
}

export default App9;