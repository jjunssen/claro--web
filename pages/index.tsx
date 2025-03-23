import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-between px-4 py-12 text-gray-900">
      <Header />
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-3xl md:text-5xl font-light">Welcome to Claroé</h1>
        <Button href="/tone-test" text="Start Tone Test" />
      </main>
      <Footer />
    </div>
  );
}
