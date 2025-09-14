export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 bg-gray-800 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl font-bold mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <span className="text-4xl text-indigo-400 mb-4">
              ⚡
            </span>
            <h3 className="text-xl font-semibold mb-2">Fast & Smart</h3>
            <p className="text-gray-400">Experience high-speed performance with optimized smart features.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <span className="text-4xl text-indigo-400 mb-4">
              🔒
            </span>
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-gray-400">Your data is protected with industry-leading security protocols.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <span className="text-4xl text-indigo-400 mb-4">
              📱
            </span>
            <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
            <p className="text-gray-400">Optimized for all devices: mobile, tablet, and desktop.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
