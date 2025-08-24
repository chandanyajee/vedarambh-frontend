function Card({ children }) {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      {children}
    </div>
  );
}

function CardHeader({ children }) {
  return <div className="mb-2 font-semibold">{children}</div>;
}

function CardTitle({ children }) {
  return <h2 className="text-lg font-bold">{children}</h2>;
}

function CardContent({ children }) {
  return <div>{children}</div>;
}

export { Card, CardHeader, CardTitle, CardContent };
