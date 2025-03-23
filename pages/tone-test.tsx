import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ToneTest() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-between px-4 py-12 text-gray-900">
      <Header />
      <main className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-light">Upload your photo</h2>
        <p className="text-sm text-gray-500">AI tone analysis coming soon!</p>
      </main>
      <Footer />
    </div>
  );
}
