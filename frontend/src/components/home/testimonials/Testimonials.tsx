"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "./testimonials-list";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const starsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const starItemVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const, // ✅ FIX TS
      stiffness: 300,
      damping: 18,
    },
  },
};

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-22 lg:py-26">
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
            Loved by <span className="text-primary">Creators</span>
          </h2>
          <p className="mt-4 text-lg">
            See what our users are saying about AI Voice Studio
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{
                type: "spring" as const,
                stiffness: 260,
                damping: 20,
              }}
            >
              <Card className="relative h-full transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  {/* Stars */}
                  <motion.div
                    variants={starsContainerVariants}
                    className="mb-4 flex items-center gap-1"
                  >
                    {Array.from({
                      length: Number(testimonial.rating),
                    }).map((_, i) => (
                      <motion.div key={i} variants={starItemVariants}>
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Content */}
                  <p className="mb-4 italic text-muted-foreground">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
