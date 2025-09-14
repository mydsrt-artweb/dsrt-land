type Props = {
  open: boolean
  onClose: () => void
}

export default function LoginModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-gray-900 rounded-xl p-8 w-80 md:w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="p-3 rounded bg-gray-800 text-white focus:outline-none" />
          <input type="password" placeholder="Password" className="p-3 rounded bg-gray-800 text-white focus:outline-none" />
          <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition">Submit</button>
        </form>
        <button
          className="mt-4 w-full text-sm text-gray-400 hover:text-white text-center"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
