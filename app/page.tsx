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
        className="py-[100px] md:py-[140px] bg-white text-navy text-center border-t border-[#10294B]/[0.08]"
      >
        <div className="wrap max-w-3xl mx-auto">
          <h2 className="font-medium text-navy text-[clamp(32px,4.2vw,52px)] leading-[1.08] tracking-[-0.025em] mb-4">
            Find a spot, or share yours.
          </h2>
          <p className="text-[#566070] text-base sm:text-lg max-w-[30em] mx-auto mb-9 leading-relaxed">
            Join ParkShare and make the most of the parking your neighbourhood
            already has.
          </p>
          <div className="flex flex-col min-[480px]:flex-row items-center justify-center gap-3">
            <Button
              href="#top"
              size="lg"
              className="w-full min-[480px]:w-auto max-w-[320px] min-[480px]:max-w-none justify-between min-[480px]:justify-center"
            >
              Find parking
            </Button>
            <Button
              href="#pricing"
              size="lg"
              className="w-full min-[480px]:w-auto max-w-[320px] min-[480px]:max-w-none justify-between min-[480px]:justify-center"
            >
              List your space
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
