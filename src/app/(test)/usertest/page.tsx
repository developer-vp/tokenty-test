import { getSession } from "@/auth";
import { redirect } from "next/navigation";

export default async function ReminderPage() {
  // const { data } = useSession();
  const session = await getSession();
  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="ml-10 mt-10 h-screen w-screen">
      <h1>User Page</h1>
      <p>Only users can see this page.</p>
      <pre className="mt-10 rounded-lg bg-slate-800 p-5 text-white">
        {JSON.stringify(session.user, null, 2)}
      </pre>
    </div>
  );
}
