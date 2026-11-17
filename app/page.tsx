import Hero from "@/components/Hero";
import Spaces from "@/components/Spaces";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Safety from "@/components/Safety";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      {/* Rebuilt Hero section with embedded Header */}
      <Hero />

      {/* Spacer 1:1 like webild.io (h-35 md:h-45 = 140px mobile, 180px desktop) */}
      <div className="h-[140px] md:h-[180px]" aria-hidden="true" />

      {/* 1st Section after Hero: Spaces with image swapper */}
      <Spaces />

      {/* Spacer 1:1 like webild.io */}
      <div className="h-[140px] md:h-[180px]" aria-hidden="true" />

      {/* 2nd Section: How It Works */}
      <HowItWorks />

      {/* 3rd Section: Pricing (replacing space owners section) */}
      <Pricing />

      {/* 4th Section: Safety & Trust (rebuilt framed panel) */}
      <Safety />

      {/* Final CTA Section */}
      <section
        id="cta"
        className="w-full bg-band text-white py-[clamp(72px,9vw,128px)] scroll-mt-[96px]"
      >
        <div className="wrap flex flex-col items-center justify-center text-center">
          <h2 className="text-white font-bold text-[clamp(34px,4.2vw,56px)] leading-[1.1] tracking-[-0.025em] [text-wrap:balance] max-w-[12em] mx-auto">
            Find a spot, or share yours.
          </h2>
          <p className="mt-5 text-[#B9C6DA] text-[18px] leading-[1.5] max-w-[28em] mx-auto text-center">
            Join ParkShare and make the most of the parking your neighbourhood
            already has.
          </p>
          <div className="mt-9 flex flex-col min-[480px]:flex-row items-center justify-center gap-3 w-full">
            {/* TODO: Connect real app or search link */}
            <Button
              href="#spaces"
              size="lg"
              className="w-full min-[480px]:w-auto max-w-[320px] min-[480px]:max-w-none justify-between min-[480px]:justify-center"
            >
              Find parking
            </Button>
            {/* TODO: Connect real signup or host registration link */}
            <Button
              href="#owners"
              size="lg"
              className="w-full min-[480px]:w-auto max-w-[320px] min-[480px]:max-w-none justify-between min-[480px]:justify-center"
            >
              List a spot
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
