import { FaXTwitter } from "react-icons/fa6";
import Button from "../ui/Button";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT - FORM */}
        <div className="flex flex-col gap-6">

          <h1 className="text-4xl md:text-5xl font-bold text-[#43423F] uppercase tracking-tight">
            Contact Us
          </h1>

          <p className="text-gray-500 text-sm max-w-md">
            Have questions about StroQ workouts or training plans?
            Send us a message and our team will get back to you.
          </p>

          <form className="text-gray-900 flex flex-col gap-4 mt-4">

            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-500 rounded-md p-3 outline-none text-sm"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-500 rounded-md p-3 outline-none text-sm"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="border border-gray-500 rounded-md p-3 outline-none text-sm"
            />

            <Button text="Send Message" />

          </form>

        </div>

        {/* RIGHT - INFO */}
        <div className="flex flex-col gap-8">

          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-orange-600 font-semibold">
              Stroq Fitness
            </p>

            <h2 className="text-3xl font-bold text-[#43423F] mt-2">
              Precision Performance Training
            </h2>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed max-w-md">
            StroQ helps athletes and fitness enthusiasts generate powerful
            workout routines with zero guesswork. Built for performance,
            designed for results.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <p>Email: abhishek9877@gmail.com</p>

            <p>Location: Online Training Platform</p>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-3">
            <p className="uppercase text-xs tracking-[0.25em] text-gray-500 font-semibold">
              Follow Us
            </p>

            <div className="flex gap-3">

              <a
                href="https://x.com/abhishekmahara_"
                className="border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2 text-sm text-gray-600 hover:bg-gray-100 transition"
              >
                <FaXTwitter />
                Twitter
              </a>

              <a
                href="https://github.com/abhishekmahara"
                className="border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2 text-sm text-gray-600 hover:bg-gray-100 transition"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/abhishekmahara/"
                className="border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2 text-sm text-gray-600 hover:bg-gray-100 transition"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-10 pt-6 border-t border-gray-200">
            <div>
              <p className="text-orange-600 font-bold">PRO</p>
              <p className="text-xs text-gray-500 uppercase">Workouts</p>
            </div>

            <div>
              <p className="text-orange-600 font-bold">SMART</p>
              <p className="text-xs text-gray-500 uppercase">Training</p>
            </div>

            <div>
              <p className="text-orange-600 font-bold">ZERO</p>
              <p className="text-xs text-gray-500 uppercase">Guesswork</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;