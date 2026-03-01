export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-12">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="font-bold">OMONIGHOXX</h3>
            <p className="text-sm mt-2">Defense, Aerospace & Security Technology</p>
          </div>
          <div className="mt-4 md:mt-0 text-sm">
            <div>Contact: hr@omonighoxx.example</div>
            <div>© {new Date().getFullYear()} OMONIGHOXX</div>
          </div>
        </div>
      </div>
    </footer>
  );
}