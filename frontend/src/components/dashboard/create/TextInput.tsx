"use client";

import { X, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { GeneratedAudio } from "@/types/tts";

interface TextInputProps {
  text: string;
  setText: (text: string) => void;
  currentAudio: GeneratedAudio | null;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  onDownload: (audio: GeneratedAudio) => void;
}

export default function TextInput({
  text,
  setText,
  currentAudio,
  audioRef,
  onDownload,
}: TextInputProps) {
  const max = 500;

  return (
    <Card className="bg-card border-border backdrop-blur">
      <CardContent>
        <div className="mb-4">
          <h3 className="text-base font-semibold">Your Text</h3>
          <p className="text-muted-foreground text-xs">
            Enter the text you want to convert to speech
          </p>
        </div>

        <div className="space-y-3">
          <div className="relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste your text here... Maximum 500 characters."
              maxLength={500}
              className="w-full rounded-xl border bg-muted/30 px-4 py-3 text-sm shadow-sm outline-none transition focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 min-h-[180px] max-h-[260px] resize-y overflow-y-auto"
              rows={4}
            />

            {text && (
              <Button
                onClick={() => setText("")}
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 h-7 w-7 rounded-full bg-background/70"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Characters: {text.length}/{max}
            </span>
            <div className="h-1 w-28 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${(text.length / max) * 100}%` }}
              />
            </div>
          </div>

          {currentAudio && (
            <div className="rounded-xl border bg-gradient-to-br from-primary/5 to-secondary/10 p-4 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <h4 className="text-xs font-semibold">Latest Generation</h4>

                <Button
                  onClick={() => onDownload(currentAudio)}
                  variant="outline"
                  size="sm"
                  className="h-7 gap-1 rounded-full"
                >
                  <Download className="h-3 w-3" />
                  Download
                </Button>
              </div>

              <p className="mb-3 line-clamp-2 text-xs text-muted-foreground">
                {currentAudio.text}
              </p>

              <div className="rounded-lg border bg-background/70 p-2">
                <audio
                  ref={audioRef}
                  controls
                  className="w-full"
                  key={currentAudio.s3_key}
                  style={{ height: "32px" }}
                >
                  <source src={currentAudio.audioUrl} type="audio/wav" />
                </audio>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
