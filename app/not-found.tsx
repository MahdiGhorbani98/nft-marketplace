import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4 h-screen">
      <h2 className="w-fit font-bold">404 Not Found</h2>
      <p className="w-fit">Could not find requested resource</p>
      <Link href="/" className="text-primary">
        Return Home
      </Link>
    </div>
  );
}
