import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";
import RetroGrid from "../ui/retro-grid";

const CTA = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
      <Container>
        <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-foreground/10 rounded-3xl overflow-hidden relative">
          {/* Glow Effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]" />

          {/* Main CTA Content */}
          <div className="flex flex-col items-center justify-center w-full z-20">
            <h2 className="text-4xl md:text-6xl font-heading font-semibold !leading-tight mt-6">
              Elevate your <br className="hidden md:block" />
              experience with us
            </h2>
            <p className="text-base md:text-lg text-accent-foreground/80 max-w-xl mx-auto mt-6">
              Ready to take the next step? Join us today and unlock powerful
              tools designed to help you grow faster, work smarter, and achieve
              more.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6 w-full">
              <Button asChild size="lg" className="w-full md:w-auto">
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full md:w-auto"
              >
                <Link href="/learn-more">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Background Effects */}
          <RetroGrid />
          <Particles
            refresh
            ease={80}
            color="#d4d4d8"
            quantity={100}
            className="absolute inset-0 size-full"
          />
        </div>
      </Container>
    </section>
  );
};

export default CTA;
