type Props = {
  onLoginClick: () => void
}

export default function Navbar({ onLoginClick }: Props) {
  return (
    <header className="w-full px-6 py-6 flex justify-between items-center bg-gradient-to-b from-gray-900/80 to-transparent">
      <img src="/erasebg-transformed.png" alt="DSRT Logo" className="h-16 md:h-20" />
      <button
        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full shadow-lg transition"
        onClick={onLoginClick}
      >
        Login
      </button>
    </header>
  )
}
