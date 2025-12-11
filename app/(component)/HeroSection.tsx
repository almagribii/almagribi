import TextType from "@/components/TextType";
import { FiDownload, FiFolder } from "react-icons/fi";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="flex min-h-[80vh] md:min-h-screen items-center justify-center flex-col pt-24 md:py-0">
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between p-4 space-y-10 md:space-y-0 md:space-x-12">
        {/* Sisi Kiri - Konten Teks */}
        <div className="w-full md:w-1/2 p-0 md:p-4 text-center md:text-left">
          <p className="text-xs sm:text-sm tracking-widest text-foreground mb-4 border-2 border-card-foreground inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full">
            Welcome To My Site
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">
            Hi I am <span className="text-card-foreground">Brucad</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            <TextType
              text={[
                "Software Engineer",
                "Problem Solver",
                "Full Stack Developer",
                "Tech Enthusiast",
              ]}
              typingSpeed={40}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h2>
          <p className="text-base sm:text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            Passionate Software Engineer specializing in building robust and
            scalable applications. I transform complex ideas into clean,
            efficient, and user-friendly code, constantly embracing new
            technologies to deliver exceptional digital experiences.
          </p>

          <div
            className="relative bg-linear-to-br from-[#DAB45D]/5 via-transparent to-[#0A203F]/5 border border-gradient-to-r border-[#DAB45D]/30 rounded-2xl p-4 my-6 backdrop-blur-md shadow-2xl overflow-hidden aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            <div className="absolute top-3 left-4 text-[#DAB45D] opacity-40">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"></path>
              </svg>
            </div>
            <blockquote className="text-center lg:text-left italic font-medium text-sm relative z-10 pl-6">
              "The best code is not just about what it does, but how easily it
              can be understood and maintained."
            </blockquote>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 mt-8">
            <a
              href="https://drive.google.com/file/d/16mUrbuBwimo8RNnvPkgvhxXR1D_yQM_X/view?usp=sharing"
              download
              target="_blank"
              className="bg-card font-medium py-3 px-6 sm:px-8 rounded-full transition duration-300 shadow-lg flex items-center justify-center space-x-2 w-full sm:w-auto text-card-foreground hover:bg-card/90 hover:shadow-card-foreground/50 transform hover:-translate-y-1"
            >
              <FiDownload className="h-5 w-5" />
              <span>Download CV</span>
            </a>

            <a
              href="/#portfolio"
              className="font-medium py-3 px-6 sm:px-8 rounded-full border border-card-foreground transition duration-300 shadow-lg flex items-center justify-center  space-x-2 w-full sm:w-auto hover:bg-card/20 hover:border-primary hover:text-primary transform hover:-translate-y-1"
            >
              <FiFolder className="h-5 w-5" />
              <span>View Projects</span>
            </a>
          </div>
        </div>

        {/* Sisi Kanan - CARD PROFIL */}
        <div className="w-full md:w-1/2 flex justify-center p-4 order-first md:order-last">
          <div
            className="bg-card text-card-foreground p-8 rounded-3xl shadow-2xl max-w-sm w-full transition duration-500 hover:shadow-primary/50 transform hover:scale-[1.02]"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <div className="relative w-40 h-40 mx-auto mb-6">
              <Image
                src="/brucad.jpeg"
                alt="Foto Profil Brucad"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-primary"
              />
              <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-card shadow-lg"></span>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-1">Brucad Al Magribi</h3>
              <p className="text-card-foreground/80 font-semibold mb-4">
                Software Engineer
              </p>
              <div className="border-b"></div>

              <div className="space-y-2 mt-4">
                <p className="text-base font-semibold transition duration-300 hover:text-primary/80">
                  Informatic Engineering
                </p>
                <p className="text-base font-semibold transition duration-300 hover:text-primary/80">
                  20 Years Old
                </p>
                <p className="text-base font-semibold transition duration-300 hover:text-primary/80">
                  Ponorogo, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
