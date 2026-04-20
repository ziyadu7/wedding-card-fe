"use client";

import { useState } from "react";

export default function CreateEvent() {
  const [form, setForm] = useState({
    bride: "",
    groom: "",
    date: "",
    location: "",
    template: "classic",
  });

  const handleSubmit = () => {
    console.log(form);
    // later → API call
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Create Invitation</h1>

      <div className="grid gap-4 max-w-xl">

        <input
          placeholder="Bride Name"
          className="border p-2 rounded"
          onChange={(e) => setForm({ ...form, bride: e.target.value })}
        />

        <input
          placeholder="Groom Name"
          className="border p-2 rounded"
          onChange={(e) => setForm({ ...form, groom: e.target.value })}
        />

        <input
          type="date"
          className="border p-2 rounded"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          placeholder="Location"
          className="border p-2 rounded"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        {/* Template Selection */}
        <select
          className="border p-2 rounded"
          onChange={(e) => setForm({ ...form, template: e.target.value })}
        >
          <option value="classic">Classic</option>
          <option value="modern">Modern</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 rounded"
        >
          Create Invitation
        </button>
      </div>
    </div>
  );
}