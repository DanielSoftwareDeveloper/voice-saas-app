"use client";

import { features } from "./features-list";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

function Features() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="bg-card py-20 md:py-22 lg:py-26">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Powerful AI Voices at Your{" "}
            <span className="text-primary">Fingertips</span>
          </h2>
          <p className="mt-4 text-lg">
            Everything you need to create natural-sounding speech with the power
            of artificial intelligence
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Card className="bg-card h-full transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className={`${feature.bgColor} mb-4 inline-flex items-center justify-center rounded-lg p-3 ${feature.color}`}
                    >
                      <Icon />
                    </motion.div>

                    <h3 className="mb-2 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
