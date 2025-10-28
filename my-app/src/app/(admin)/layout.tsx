import AdminHeader from "@/components/AdminHeader";

export const metadata = { title: "Admin Panel" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <AdminHeader/>
    <div className="bg-gray-100 min-h-screen">
      {children}
    </div>
    </>
  );
}
