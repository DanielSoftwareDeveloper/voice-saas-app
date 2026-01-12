"use client";

import { motion, type Variants } from "framer-motion";

import MainWrapper from "@/components/shared/ui/MainWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Container variants for staggered animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // ✨ Stagger effect: items appear one after another
    },
  },
};

// Variants for each accordion item
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 }, // ✨ Start invisible and slightly below
  show: {
    opacity: 1,
    y: 0, // ✨ Move to original position
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function Faq() {
  return (
    <section id="faq" className="py-20">
      <MainWrapper>
        {/* Section title animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Listen to real examples of our AI voice technology in action
            </p>
          </div>
        </motion.div>

        {/* Accordion container with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-card grid grid-cols-1 rounded-xl border px-6 py-4"
        >
          <Accordion type="single" collapsible>
            {[
              {
                value: "item-1",
                question: "What is this platform for?",
                answer:
                  "This platform lets you convert text into audio automatically using AI-generated voices. It’s perfect for narration, audiobooks, educational content, podcasts, videos, and more.",
              },
              {
                value: "item-2",
                question: "Can I use my own text?",
                answer:
                  "Yes. You can paste your own text or any written content and convert it into audio.",
              },
              {
                value: "item-3",
                question: "Does it support multiple languages?",
                answer:
                  "Yes. You can generate audio in multiple languages and accents, depending on the language selected and used in the input text.",
              },
              {
                value: "item-4",
                question: "Can I choose different voices?",
                answer:
                  "Absolutely. You can choose from different voices, narration styles, tones, and speaking speeds to match your content.",
              },
              {
                value: "item-5",
                question: "Can I customize the audio output?",
                answer:
                  "Yes. You can adjust settings like tone, pacing, pauses, and reading style to get a more natural or professional result.",
              },
              {
                value: "item-6",
                question: "Can I use the audio for commercial purposes?",
                answer:
                  "Of course. You can use the generated audio for personal and commercial projects.",
              },
            ].map((item) => (
              // Each accordion item is animated individually
              <motion.div key={item.value} variants={itemVariants}>
                <AccordionItem value={item.value}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </MainWrapper>
    </section>
  );
}

export default Faq;
