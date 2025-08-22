import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <h1
        className="text-6xl font-bold mb-4"
        style={{ color: "var(--highlight-color)" }}
      >
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg text-white font-medium shadow-md"
        style={{ backgroundColor: "var(--button-color)" }}
      >
        Return Home
      </Link>
    </div>
  );
}
