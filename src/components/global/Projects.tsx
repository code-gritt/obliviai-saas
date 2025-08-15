"use client";

import React, { useState } from "react";
import { AnimatedPinDemo } from "./animated-pin-demo";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Toaster, toast } from "sonner";
import emailjs from "@emailjs/browser";

const Projects = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    feedback: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_ycpmjtb";
    const templateID = "template_enneme7";
    const publicKey = "i3jrTDHjuHznTDQVn";

    const payload = {
      from_name: formData.name,
      from_email: formData.email,
      contact: formData.contact || "Not provided",
      feedback: formData.feedback,
    };

    try {
      await emailjs.send(serviceID, templateID, payload, publicKey);
      toast.success("Thanks for your message! We’ll get back to you shortly.");
      setFormData({ name: "", email: "", contact: "", feedback: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        <AnimatedPinDemo
          title="Nuvonote"
          subtitle="Minimalistic notepad powered by structured prompts"
          href="https://nuvonote.vercel.app"
          videoUrls={["/notes.mp4"]}
        />

        <AnimatedPinDemo
          title="Workafloat AI"
          subtitle="Use AI to uncover insights about job roles and search smarter"
          href="https://workafloat-ai.vercel.app"
          videoUrls={["/work.mp4"]}
        />
        <AnimatedPinDemo
          title="ContenGen AI"
          subtitle="Helps businesses generate powerful social media content for growth, engagement"
          href="https://contengen-ai.vercel.app/"
          videoUrls={["/saasmon.mp4"]}
        />
        <AnimatedPinDemo
          title="TerraNovoa AI"
          subtitle="Explore AI-powered geospatial mapping and insights for a sustainable future"
          href="https://terranovoa-ai.vercel.app/"
          videoUrls={["/renew1.mp4"]}
        />
        <AnimatedPinDemo
          title="VisualAIze"
          subtitle="Professional image editing powered by AI. Crop, resize, adjust colors, remove backgrounds"
          href="https://visualaize-vert.vercel.app/"
          videoUrls={["/ren1.mp4"]}
        />
        <AnimatedPinDemo
          title="LernKarte AI"
          subtitle="Generate intelligent flashcards instantly using AI. Learn faster and smarter with LernKarte AI"
          href="https://lernkarte-ai.vercel.app/"
          videoUrls={["/renfield.mp4"]}
        />
        <AnimatedPinDemo
          title="Geldify AI"
          subtitle="Geldify AI control your finances with real-time insights, automated tracking"
          href="https://geldify-ai.vercel.app/"
          videoUrls={["/ren.mp4"]}
        />
        <AnimatedPinDemo
          title="PruneUrl"
          subtitle="URL shortener with AI-powered safety checks, real-time analytics, and QR generation"
          href="https://prune-url.vercel.app/"
          videoUrls={["/videogen.mp4"]}
        />
        <AnimatedPinDemo
          title="Resumesque AI"
          subtitle="A polished, AI professional resume for free — then share it instantly with a unique link"
          href="https://resumesque-ai.vercel.app/"
          videoUrls={["/res.mp4"]}
        />
        <AnimatedPinDemo
          title="Orqly AI"
          subtitle="Connecting Voices, Bridging Worlds, Linking Minds, Shaping Futures"
          href="https://orqly-ai.vercel.app/"
          videoUrls={["/lang.mp4"]}
        />
      </div>

      {/* Contact/Feedback Form */}
      <div className="mx-auto w-full max-w-md mt-20 p-6 md:rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg relative z-[30]">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
          Request a Demo or Share Feedback
        </h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Fill out the form below to request a demo or provide feedback. We’ll
          respond as soon as we can.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <FormGroup label="Name" id="name">
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500"
            />
          </FormGroup>

          <FormGroup label="Email Address" id="email">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500"
            />
          </FormGroup>

          <FormGroup label="Contact Number (Optional)" id="contact">
            <Input
              id="contact"
              name="contact"
              type="tel"
              placeholder="Your contact number"
              value={formData.contact}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500"
            />
          </FormGroup>

          <FormGroup label="Your Message" id="feedback">
            <Textarea
              id="feedback"
              name="feedback"
              placeholder="Let us know your feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className="min-h-[100px] bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500"
            />
          </FormGroup>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative mt-4 block h-10 w-full rounded-md bg-gradient-to-br from-violet-600 to-indigo-600 font-medium text-white hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Submit"}
            <BottomGradient />
          </button>
        </form>
      </div>

      <Toaster position="top-right" richColors />
    </div>
  );
};

export default Projects;

const FormGroup = ({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-4">
      <Label htmlFor={id}>{label}</Label>
      <div className="mt-1">{children}</div>
    </div>
  );
};

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);
