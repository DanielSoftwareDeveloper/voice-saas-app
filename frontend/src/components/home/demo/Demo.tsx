"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { multilingualSamples, naturalSpeechSamples } from "./demo-list";
import { motion } from "framer-motion";

function Demo() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handlePlay = (id: string, audioUrl: string) => {
    if (playingId === id) {
      const audio = document.getElementById(id) as HTMLAudioElement;
      audio?.pause();
      setPlayingId(null);
      return;
    }

    if (playingId) {
      const currentAudio = document.getElementById(
        playingId
      ) as HTMLAudioElement;
      currentAudio?.pause();
      currentAudio.currentTime = 0;
    }

    const audio = document.getElementById(id) as HTMLAudioElement;

    if (audio) {
      audio
        .play()
        .then(() => setPlayingId(id))
        .catch(() => {
          alert("Unable to play audio.");
        });

      audio.onended = () => setPlayingId(null);
      audio.onerror = () => setPlayingId(null);
    }
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="demo" className="py-20 md:py-22 lg:py-26">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight">
            Experience the <span className="text-primary">Difference</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Listen to real examples of our AI voice technology in action
          </p>
        </motion.div>

        {/* Natural speech */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="mb-12 rounded-2xl border bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-center">
                Natural & Expressive Speech
              </CardTitle>
            </CardHeader>

            <CardContent>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {naturalSpeechSamples.map((sample) => (
                  <motion.div
                    key={sample.id}
                    variants={item}
                    animate={
                      playingId === sample.id ? { scale: 1.01 } : { scale: 1 }
                    }
                    className={`flex flex-col gap-4 rounded-xl border bg-card p-4 transition sm:flex-row sm:items-center sm:justify-between ${
                      playingId === sample.id
                        ? "ring-1 ring-primary/40"
                        : "hover:shadow-sm"
                    }`}
                  >
                    {/* Text */}
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">
                        Text sample
                      </p>
                      <p className="mt-1 text-foreground">“{sample.text}”</p>
                    </div>

                    {/* Voice */}
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {sample.voiceType}
                    </span>

                    {/* Audio */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Button
                        variant={
                          playingId === sample.id ? "default" : "outline"
                        }
                        size="sm"
                        className="gap-2"
                        onClick={() => handlePlay(sample.id, sample.audioUrl)}
                      >
                        {playingId === sample.id ? (
                          <>
                            <Pause className="h-4 w-4" /> Pause
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4" /> Play
                          </>
                        )}
                      </Button>
                    </motion.div>

                    <audio
                      id={sample.id}
                      src={sample.audioUrl}
                      preload="metadata"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Multilingual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl border bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-center">
                Multilingual Support
              </CardTitle>
            </CardHeader>

            <CardContent>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {multilingualSamples.map((sample) => (
                  <motion.div
                    key={sample.id}
                    variants={item}
                    animate={
                      playingId === sample.id ? { scale: 1.01 } : { scale: 1 }
                    }
                    className={`flex flex-col gap-4 rounded-xl border bg-card p-4 transition sm:flex-row sm:items-center sm:justify-between ${
                      playingId === sample.id
                        ? "ring-1 ring-primary/40"
                        : "hover:shadow-sm"
                    }`}
                  >
                    <span className="w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium">
                      {sample.language}
                    </span>

                    <p className="flex-1 text-foreground">“{sample.text}”</p>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Button
                        variant={
                          playingId === sample.id ? "default" : "outline"
                        }
                        size="sm"
                        className="gap-2"
                        onClick={() => handlePlay(sample.id, sample.audioUrl)}
                      >
                        {playingId === sample.id ? (
                          <>
                            <Pause className="h-4 w-4" /> Pause
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4" /> Play
                          </>
                        )}
                      </Button>
                    </motion.div>

                    <audio
                      id={sample.id}
                      src={sample.audioUrl}
                      preload="metadata"
                      crossOrigin="anonymous"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default Demo;
