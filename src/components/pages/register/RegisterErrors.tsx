"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const RegisterErrors = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  if (error)
    return (
      <Link
        href={"/signin"}
        className="fixed bottom-7 right-7 flex max-w-80 cursor-pointer gap-1 rounded-md border border-red-300 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 shadow-md"
      >
        {/* <CircleAlert className="fill-red-600 text-white" size={18} />{" "} */}
        {error}
      </Link>
    );
};

export default RegisterErrors;
