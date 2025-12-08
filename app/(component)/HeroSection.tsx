import LogoLoop from "@/components/LogoLoop";
import TextType from "@/components/TextType";
import { FaFacebookF, FaTelegramPlane, FaPinterestP } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];
export const HeroSection = () => {
  return (
    <section className="flex min-h-screen items-center justify-center flex-col ">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between p-4 space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 p-4">
            <p className="text-sm tracking-widest text-foreground mb-2 border-b-2 border-card-foreground inline-block pb-1">
              Welcome To My Site
            </p>
            <h1 className="text-6xl font-bold mb-4">
              Hi I am <span className="text-card-foreground">Brucad</span>
            </h1>
            <h2 className="text-3xl font-semibold mb-6">
              <TextType
                text={["Web Developer", "Tech Enthusiast"]}
                typingSpeed={40}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h2>
            <p className="text-lg mb-10 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              sit fugit, architecto assumenda, mollitia aspernatur nam ea sint
              ratione excepturi possimus dignissimos unde cumque dolore facere
              rerum distinctio enim velit.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-card font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg">
                {" "}
                Get In Touch
              </button>
              <div className="flex space-x-3">
                <a
                  href=""
                  className="w-8 h-8 bg-card rounded-full flex items-center justify-center"
                >
                  <FaTelegramPlane />
                </a>
                <a
                  href=""
                  className="w-8 h-8 bg-card rounded-full flex items-center justify-center"
                >
                  <FaFacebookF />
                </a>
                <a
                  href=""
                  className="w-8 h-8 bg-card rounded-full flex items-center justify-center"
                >
                  <FaPinterestP />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center p-4"></div>
        </div>
      {/* <div className="max-w-5xl mx-auto w-full mt-16 px-4">
        <LogoLoop
          className="max-w-7xl bottom-0"
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div> */}
    </section>
  );
};
