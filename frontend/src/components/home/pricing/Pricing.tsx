"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const pricingFeatures = [
  "Voice Cloning",
  "Natural Speech Synthesis",
  "Multiple Languages & Voices",
  "High-Quality Audio Downloads",
  "Fast Processing",
  "Cloud Storage",
];

function Pricing() {
  return (
    <section id="pricing" className="bg-card py-20 md:py-22 lg:py-26">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Start Creating <span className="text-primary">For Free</span>
          </h2>
          <p className="mt-4 text-lg">
            No credit card required. Begin transforming your text into speech
            instantly.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="mx-auto max-w-lg"
        >
          <Card className="relative overflow-hidden border">
            {/* Badge */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="absolute right-0 top-0 bg-emerald-500 px-4 py-1 text-sm font-medium text-white"
            >
              Free to Start
            </motion.div>

            <CardContent className="p-8">
              {/* Price */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-8 text-center"
              >
                <h3 className="text-2xl font-bold">Free Plan</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-bold">$0</span>
                  <span className="ml-2">to start</span>
                </div>
                <p className="mt-2">Try all features with free credits</p>
              </motion.div>

              {/* Features */}
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.08 },
                  },
                }}
                className="mb-8 space-y-4"
              >
                {pricingFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-sm">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA */}
              <Link href="/dashboard">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button className="w-full cursor-pointer gap-2" size="lg">
                    <Sparkles className="h-4 w-4" />
                    Try It Free Now
                  </Button>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="mt-4 text-center text-xs text-muted-foreground"
                >
                  Includes 10 free credits • No credit card required
                </motion.p>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
