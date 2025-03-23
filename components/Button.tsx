export default function Button({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-neutral-800 transition"
    >
      {text}
    </a>
  );
}
