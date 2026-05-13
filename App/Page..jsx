// ImageFlows - Beginner Starter Website
// Next.js + React + TailwindCSS

"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState("");

  const generateVideo = async () => {
    setLoading(true);

    // Demo wait
    setTimeout(() => {
      setVideo("https://samplelib.com/lib/preview/mp4/sample-5s.mp4");
      setLoading(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Navbar */}
        <nav className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold text-green-400">
            ImageFlows
          </h1>

          <button className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl font-semibold">
            Get Started
          </button>
        </nav>

        {/* Hero */}
        <section className="text-center py-12">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Turn Images Into <span className="text-green-400">Stunning Videos</span> Instantly
          </h2>

          <p className="text-zinc-400 mt-5 text-lg max-w-2xl mx-auto">
            Upload any image, describe what you want, and let AI generate cinematic videos in seconds.
          </p>
        </section>

        {/* Generator Card */}
        <section className="mt-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-xl">

            <h3 className="text-2xl font-semibold mb-6 text-green-400">
              Create Video
            </h3>

            {/* Upload */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full bg-zinc-800 p-3 rounded-xl mb-4"
            />

            {/* Prompt */}
            <textarea
              placeholder="Describe your video... (camera motion, effects, cinematic scene)"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-zinc-800 p-4 rounded-xl min-h-[150px] mb-4 outline-none"
            />

            {/* Button */}
            <button
              onClick={generateVideo}
              className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl text-lg font-bold transition"
            >
              {loading ? "Generating Video..." : "Generate Video Free"}
            </button>

          </div>
        </section>

        {/* Loading */}
        {loading && (
          <div className="text-center mt-8">
            <div className="animate-pulse text-green-400 text-lg">
              AI is creating your masterpiece...
            </div>
          </div>
        )}

        {/* Result */}
        {video && !loading && (
          <section className="mt-10">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Your Video Is Ready
              </h3>

              <video
                src={video}
                controls
                className="w-full rounded-2xl"
              />

              <a
                href={video}
                download
                className="block mt-5 text-center bg-green-500 hover:bg-green-600 py-3 rounded-xl font-bold"
              >
                Download Video
              </a>

            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="text-center text-zinc-500 mt-16 pb-6">
          © 2026 ImageFlows. All rights reserved.
        </footer>

      </div>
    </main>
  );
}
