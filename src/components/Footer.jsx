import LoginF from "./app/login/LoginForm";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="font-semibold">© {new Date().getFullYear()} VedArambh – A Sanatan Initiative</p>
        <p className="text-sm">Founder: Chandan Kumar Yajee | 📞 7370057723</p>
      </div>
      <LoginF/>
    </footer>
  );
}
