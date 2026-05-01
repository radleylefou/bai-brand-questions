import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import SignOutButton from "./_components/SignOutButton";

const navItems = [
  { label: "Dashboard", href: "/admin" },
  { label: "Clients", href: "/admin/clients" },
  { label: "Templates", href: "/admin/templates" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  return (
    <div className="flex min-h-screen bg-bg">
      {/* Sidebar */}
      <aside className="flex w-52 shrink-0 flex-col border-r border-[var(--line)]">
        <div className="border-b border-[var(--line)] px-5 py-5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Ferraz Creative
          </span>
          <p className="mt-0.5 text-sm font-medium text-ink">
            Brand Discovery OS
          </p>
        </div>

        <nav className="flex-1 space-y-0.5 p-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center rounded px-3 py-2 text-sm text-soft-ink transition-colors hover:bg-surface hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-[var(--line)] p-4">
          <p className="mb-2 truncate font-mono text-[11px] text-muted">
            {user.email}
          </p>
          <SignOutButton />
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
