export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#9DAA7E] max-w-6xl mx-auto px-6">
      {children}
    </div>
  );
}