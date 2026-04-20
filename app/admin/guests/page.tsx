"use client";

import { useState } from "react";
import Papa from "papaparse";

export default function GuestsPage() {
    const [guests, setGuests] = useState<any[]>([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    // ➕ Manual Add
    const addGuest = () => {
        if (!name) return;

        setGuests([...guests, { name, phone }]);
        setName("");
        setPhone("");
    };

    // 📂 CSV Upload
    const handleFileUpload = (e: any) => {
        const file = e.target.files[0];

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results: { data: any[] }) => {
                setGuests(results.data as any[]);
            },
        });
    };

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Add Guests</h1>

            {/* Manual Input */}
            <div className="flex gap-2 mb-4">
                <input
                    placeholder="Name"
                    className="border p-2 rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    placeholder="Phone"
                    className="border p-2 rounded"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button
                    onClick={addGuest}
                    className="bg-blue-500 text-white px-4 rounded"
                >
                    Add
                </button>
            </div>

            {/* CSV Upload */}
            <div className="mb-4">
                <input type="file" accept=".csv" onChange={handleFileUpload} />
            </div>

            {/* Preview Table */}
            <table className="w-full border">
                <thead>
                    <tr className="border">
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {guests.map((g, i) => (
                        <tr key={i} className="border">
                            <td>{g.name}</td>
                            <td>{g.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}