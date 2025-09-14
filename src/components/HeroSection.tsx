export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">DSRT</h1>
      <p className="text-xl md:text-2xl mb-8">Digital Smart Revise Technology</p>
      <p className="text-gray-300 max-w-3xl text-center text-lg md:text-xl leading-relaxed mb-8">
        DSRT is a cutting-edge digital platform designed to revolutionize the way individuals and businesses 
        approach learning, revision, and workflow optimization. By integrating advanced AI-driven tools 
        with a user-friendly interface, DSRT ensures that your tasks are performed efficiently, 
        securely, and intelligently, delivering measurable productivity gains and seamless digital experiences.
      </p>
      <a href="#features" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full shadow-lg transition">
        Get Started
      </a>
    </section>
  )
}
