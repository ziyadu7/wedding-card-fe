// app/admin/dashboard/page.tsx
export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold">My Invitations</h1>

      <p className="text-gray-500 mt-2">
        Manage and track your wedding invitations
      </p>

      {/* Empty State */}
      <div className="mt-10 border rounded-xl p-6 text-center">
        <p>No invitations yet</p>

        <a
          href="/admin/create-event"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Your First Invitation
        </a>
      </div>
    </div>
  );
}