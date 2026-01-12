"use client";

import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

function Banner() {
  return (
    <section id="about" className="bg-card relative py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="
    mb-8 inline-flex items-center gap-2 rounded-full
    border border-primary/20
    bg-primary/10
    px-4 py-2 text-sm
    backdrop-blur
    dark:border-primary/30
    dark:bg-primary/20
  "
          >
            <Sparkles className="h-4 w-4 text-primary dark:text-purple-300" />
            <span className="font-medium text-primary dark:text-purple-300">
              Powered with AI
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Transform Text into{" "}
            <span className="text-primary">Natural Speech</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl"
          >
            <span className="block">
              Professional voice synthesis powered by artificial intelligence.
            </span>
            <span className="block">
              Convert text to speech with lifelike voices in multiple languages,
              all in seconds.
            </span>
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Link href="/auth/sign-in">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  className="cursor-pointer gap-2 px-8 py-6 text-base"
                >
                  <Play className="h-5 w-5" />
                  Try It for Free
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="mt-16 text-center"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="mb-8 text-sm"
          >
            Trusted by thousands of creators worldwide
          </motion.p>

          <div className="grid grid-cols-2 items-center justify-center gap-6 opacity-80 sm:grid-cols-5">
            {[
              { value: "50K+", label: "Voices Generated" },
              { value: "5K+", label: "Active Users" },
              { value: "99.9%", label: "Uptime" },
              { value: "4.8★", label: "User Rating", accent: true },
              { value: "24/7", label: "Voice Synthesis" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`text-center ${
                  i === 4 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div
                  className={`text-2xl font-bold ${
                    stat.accent
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-slate-700 dark:text-slate-200"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Banner;
