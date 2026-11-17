import Hero from "@/components/Hero";
import Spaces from "@/components/Spaces";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Safety from "@/components/Safety";
import Footer from "@/components/Footer";
import CtaPair from "@/components/CtaPair";

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

      {/* Spacer 1:1 like webild.io */}
      <div className="h-[140px] md:h-[180px]" aria-hidden="true" />

      {/* 3rd Section: Pricing (replacing space owners section) */}
      <Pricing />

      {/* Spacer 1:1 like webild.io */}
      <div className="h-[140px] md:h-[180px]" aria-hidden="true" />

      {/* 4th Section: Safety & Trust (rebuilt framed panel) */}
      <Safety />

      {/* Spacer before CTA */}
      <div className="h-[100px] md:h-[120px]" aria-hidden="true" />

      {/* Final CTA Section: Clean pure white background, no blue bg, no divider line */}
      <section
        id="cta"
        className="w-full bg-white text-navy scroll-mt-[96px]"
      >
        <div className="wrap flex flex-col items-center justify-center text-center">
          <h2 className="text-navy font-medium text-[clamp(28px,3.8vw,50px)] leading-[1.15] tracking-[-0.025em] [text-wrap:balance] max-w-[14em] mx-auto">
            Find a spot, or share yours.
          </h2>
          <p className="mt-4 text-[#566070] text-[17px] sm:text-[18px] leading-[1.5] max-w-none mx-auto text-center whitespace-normal sm:whitespace-nowrap">
            Join ParkShare and make the most of the parking your neighbourhood
            already has.
          </p>
          <div className="mt-8 w-full">
            <CtaPair size="lg" align="center" stackBelow={480} />
          </div>
        </div>
      </section>

      {/* Spacer before footer */}
      <div className="h-[80px] md:h-[100px]" aria-hidden="true" />

      {/* Glassmorphic White Footer */}
      <Footer />
    </main>
  );
}
