// app/admin/events/[id]/page.tsx
export default function EventDetails() {
  return (
    <div>
      <h1 className="text-xl font-bold">Rahul & Anjali Wedding</h1>

      <p className="text-gray-500">Feb 10, 2026 • Kochi</p>

      {/* Share Link */}
      <div className="mt-4">
        <input
          value="https://yourapp.com/invite/rahul-anjali"
          readOnly
          className="border p-2 w-full rounded"
        />
      </div>

      {/* RSVP Summary */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-4 border rounded">Yes: 50</div>
        <div className="p-4 border rounded">No: 10</div>
        <div className="p-4 border rounded">Maybe: 5</div>
      </div>
    </div>
  );
}