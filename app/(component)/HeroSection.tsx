import ThemeChanger from "@/components/theme-changer";

export const HeroSection = () => {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <ThemeChanger/>
      </div>
    );
}