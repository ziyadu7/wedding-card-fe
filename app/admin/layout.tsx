// app/admin/layout.tsx
import Link from "next/link";

export default function AdminLayout({ children }: any) {
  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Wedding SaaS</h2>

        <nav className="flex flex-col gap-3">
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/create-event">Create Event</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6">
        {children}
      </main>
    </div>
  );
}