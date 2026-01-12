"use client";

import { Music, Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

import type { GeneratedAudio, Language } from "@/types/tts";

interface AudioHistoryProps {
  generatedAudios: GeneratedAudio[];
  languages: Language[];
  onPlay: (audio: GeneratedAudio) => void;
  onDownload: (audio: GeneratedAudio) => void;
}

export default function AudioHistory({
  generatedAudios,
  languages,
  onPlay,
  onDownload,
}: AudioHistoryProps) {
  return (
    <div className="border-t py-3 sm:py-4 mt-6">
      <div className="mb-6 text-center lg:text-start">
        <h2 className="text-primary text-xl font-bold">Recent Generations</h2>
      </div>
      {generatedAudios.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {generatedAudios.map((audio, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border-2 bg-card p-4 transition-all duration-200 hover:border-primary hover:shadow-lg"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                      <Music className="h-4 w-4 text-white dark:text-black" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold">
                        {languages.find((l) => l.code === audio.language)?.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(audio.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mb-3 line-clamp-3 text-xs">{audio.text}</p>
                <div className="flex gap-2">
                  <Button
                    onClick={() => onPlay(audio)}
                    variant="outline"
                    size="sm"
                    className="h-7 flex-1 gap-1 px-2 text-xs"
                  >
                    <Play className="h-3 w-3" />
                    Play
                  </Button>
                  <Button
                    onClick={() => onDownload(audio)}
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 px-2 text-xs"
                  >
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="py-16 text-center">
          <div className="relative mx-auto mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-32  rounded-full bg-primary/20"></div>
            </div>
            <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-neutral-300 dark:border-neutral-500 bg-white dark:bg-neutral-800">
              <Music className="h-10 w-10 text-gray-400" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">
              No generations yet
            </h3>
            <p className="text-muted-foreground mx-auto max-w-md text-lg leading-relaxed">
              Start by entering some text and generating your first speech
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
