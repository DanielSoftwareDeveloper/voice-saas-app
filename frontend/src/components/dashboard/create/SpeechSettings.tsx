"use client";

import { Globe, Volume2, Upload, Settings, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import type { Language, VoiceFile, UploadedVoice } from "@/types/tts";

interface SpeechSettingsProps {
  languages: Language[];
  voiceFiles: VoiceFile[];
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  selectedVoice: string;
  setSelectedVoice: (voice: string) => void;
  exaggeration: number;
  setExaggeration: (value: number) => void;
  cfgWeight: number;
  setCfgWeight: (value: number) => void;
  userUploadedVoices: UploadedVoice[];
  isUploadingVoice: boolean;
  handleVoiceUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  isGenerating: boolean;
  onGenerate: () => void;
}

export default function SpeechSettings({
  languages,
  voiceFiles,
  selectedLanguage,
  setSelectedLanguage,
  selectedVoice,
  setSelectedVoice,
  exaggeration,
  setExaggeration,
  cfgWeight,
  setCfgWeight,
  userUploadedVoices,
  isUploadingVoice,
  handleVoiceUpload,
  text,
  isGenerating,
  onGenerate,
}: SpeechSettingsProps) {
  const creditsNeeded = Math.max(1, Math.ceil(text.length / 100));

  return (
    <Card>
      <CardContent className="space-y-6">
        {/* Header */}
        <div>
          <h3 className="text-base font-semibold">Speech settings</h3>
          <p className="text-xs text-muted-foreground">
            Ajusta cómo quieres que suene la voz
          </p>
        </div>

        {/* Language */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Language
          </label>

          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>

            <SelectContent>
              {languages.map((lang: Language) => (
                <SelectItem key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Voice */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold flex items-center gap-2">
            <Volume2 className="h-4 w-4" />
            Voice
          </label>

          <Select value={selectedVoice} onValueChange={setSelectedVoice}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select voice" />
            </SelectTrigger>

            <SelectContent>
              {userUploadedVoices.map((v: UploadedVoice) => (
                <SelectItem key={v.id} value={v.s3Key}>
                  🎤 {v.name}
                </SelectItem>
              ))}

              {voiceFiles.map((v: VoiceFile) => (
                <SelectItem key={v.s3_key} value={v.s3_key}>
                  {v.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Upload */}
        <div className="space-y-2">
          <label className="text-xs font-semibold flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Upload your voice
          </label>

          {isUploadingVoice ? (
            <div className="flex items-center gap-2 text-sm">
              <Loader2 className="h-4 w-4 animate-spin" />
              Subiendo archivo…
            </div>
          ) : (
            <input
              type="file"
              accept="audio/*"
              onChange={handleVoiceUpload}
              className="text-xs"
            />
          )}

          <p className="text-xs text-muted-foreground">
            WAV o MP3. La voz aparecerá en la lista de arriba.
          </p>
        </div>

        {/* Emotion */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Emotion / Intensity
            </span>
            <span className="text-muted-foreground">
              {exaggeration.toFixed(1)}
            </span>
          </div>

          <Slider
            value={[exaggeration]}
            min={0}
            max={1}
            step={0.1}
            onValueChange={(v) => setExaggeration(v[0])}
          />

          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Calm</span>
            <span>Expressive</span>
          </div>
        </div>

        {/* Pacing */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Pacing control
            </span>
            <span className="text-muted-foreground">
              {cfgWeight.toFixed(1)}
            </span>
          </div>

          <Slider
            value={[cfgWeight]}
            min={0}
            max={1}
            step={0.1}
            onValueChange={(v) => setCfgWeight(v[0])}
          />

          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Fast</span>
            <span>Accurate</span>
          </div>
        </div>

        {/* Cost */}
        {text.trim() && (
          <div className="rounded-md bg-primary/10 py-2 text-center">
            <p className="text-xs">
              Cost:{" "}
              <strong>
                {creditsNeeded} credit{creditsNeeded > 1 && "s"}
              </strong>{" "}
              ({text.length} characters)
            </p>
          </div>
        )}

        {/* Button */}
        <Button
          disabled={isGenerating || !text.trim()}
          onClick={onGenerate}
          className="w-full gap-2"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating…
            </>
          ) : (
            <>
              <Settings className="h-4 w-4" />
              Generate speech
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
