import { MenuAdmin } from "@/components/admin/MenuAdmin/indes";


type AdminPostLayoutProps = {
  children: React.ReactNode;
};

export default function AdminPostLayout({
  children
}: Readonly<AdminPostLayoutProps>) {
  return (
  <>
    <MenuAdmin />
    {children}
  </>
  )
}
