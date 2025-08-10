"use client";

import Container from "../global/container";
import Icons from "../global/icons";
import Images from "../global/images";
import MagicCard from "../ui/magic-card";
import { Ripple } from "../ui/ripple";
import { SectionBadge } from "../ui/section-bade";

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <SectionBadge title="Core Features" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            AI tools that work <br /> better together
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
            From idea generation to analytics, ObliviAI’s connected suite helps
            you plan, create, optimize, and share content faster — all while
            letting each AI tool feed insights into the others.
          </p>
        </div>
      </Container>

      <div className="mt-16 w-full">
        <div className="flex flex-col items-center gap-5 lg:gap-5 w-full">
          {/* First Row */}
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_.65fr] w-full gap-5 lg:gap-5">
              <MagicCard
                particles
                className="flex flex-col items-start size-full bg-primary/[0.08]"
              >
                <div className="bento-card flex items-center justify-center min-h-72">
                  <span className="text-muted-foreground group-hover:text-foreground mx-auto relative">
                    <Icons.stars className="w-20 h-20" />
                  </span>
                  <Ripple />
                </div>
              </MagicCard>
              <MagicCard
                particles
                className="flex flex-col items-start w-full bg-primary/[0.08]"
              >
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full h-40">
                    <Images.analytics className="w-full h-full" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-heading font-medium heading">
                      Unified analytics
                    </h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Whether it’s audience data from ContenGen AI, finance
                      insights from Geldify AI, or usage stats from PruneUrl —
                      see it all in one place.
                    </p>
                  </div>
                </div>
              </MagicCard>
            </div>
          </Container>

          {/* Second Row */}
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 lg:gap-5">
              <MagicCard
                particles
                className="flex flex-col items-start w-full bg-primary/[0.08]"
              >
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full h-52 relative">
                    <Images.ideation className="w-full h-full" />
                  </div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-heading font-medium heading">
                      AI-powered ideation
                    </h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Instantly brainstorm post ideas in Nuvonote, then send
                      them straight into ContenGen AI for ready-to-publish
                      content.
                    </p>
                  </div>
                </div>
              </MagicCard>

              <MagicCard
                particles
                className="flex flex-col items-start w-full bg-primary/[0.08] h-32"
              >
                <div className="bento-card w-full relative items-center justify-center">
                  <p className="text-base text-muted-foreground text-justify [mask-image:radial-gradient(50%_50%_at_50%_50%,#BAB3FF_0%,rgba(186,179,255,0)_90.69%)]">
                    ObliviAI tools are built to talk to each other — meaning
                    your image edits from VisualAIze can be used instantly in
                    social posts, or your mapping data from TerraNovoa AI can
                    power location-aware campaigns.
                  </p>
                </div>
              </MagicCard>

              <MagicCard
                particles
                className="flex flex-col items-start w-full bg-primary/[0.08]"
              >
                <div className="bento-card w-full flex-row gap-6">
                  <div className="flex flex-col mb-auto">
                    <h4 className="text-xl font-heading font-medium heading">
                      Seamless integrations
                    </h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Plug into your workflow — export images to Canva, push
                      links to social media, and connect your data to any
                      third-party tool you use.
                    </p>
                  </div>
                  <div className="w-full h-28 relative">
                    <Images.integration className="w-full h-full" />
                  </div>
                </div>
              </MagicCard>
            </div>
          </Container>

          {/* Third Row */}
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[.40fr_1fr] w-full gap-5 lg:gap-5">
              <MagicCard
                particles
                className="flex flex-col items-start w-full bg-primary/[0.08]"
              >
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full">
                    <Images.image className="w-full h-40 lg:h-auto" />
                  </div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-heading font-medium heading">
                      AI image generation
                    </h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Use VisualAIze to create stunning visuals, then instantly
                      add them to your campaigns or presentations.
                    </p>
                  </div>
                </div>
              </MagicCard>

              <MagicCard
                particles
                className="flex flex-col items-start w-full bg-primary/[0.08]"
              >
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full">
                    <Images.hash className="w-full h-40 lg:h-52" />
                  </div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-heading font-medium heading">
                      Smart hashtag suggestions
                    </h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Let ContenGen AI analyze your content and audience to
                      recommend hashtags that boost engagement automatically.
                    </p>
                  </div>
                </div>
              </MagicCard>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Features;
