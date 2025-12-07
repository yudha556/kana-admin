export default function Badge({ status = "healthy", children }) {
  const base =
    "px-3 py-1 rounded-lg text-sm w-fit";

  const variants = {
    healthy: "bg-green-100 text-green-700 border border-green-300",
    warning: "bg-yellow-100 text-yellow-700 border border-yellow-300",
    error: "bg-red-100 text-red-700 border border-red-300",
  };

  return (
    <span className={`${base} ${variants[status]}`}>
      {children || status}
    </span>
  );
}
