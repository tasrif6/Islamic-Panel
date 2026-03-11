"use client";

import {
  AlignStartVertical,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CopyCheck,
  Globe,
  Type,
} from "lucide-react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useState } from "react";
import { ThemeToggle } from "@/app/theme-toggle";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";

export function RightPanel() {
  const [openSection, setOpenSection] = useState(false);

  // Toggle states
  const [showArabic, setShowArabic] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [showReference, setShowReference] = useState(true);

  // Language section
  const [showlang, setShowLang] = useState(false);
  const [showLangPanel, setShowLangPanel] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const language = [{ name: "English" }, { name: "Bangla" }];

  // Font section
  const [showArabicFont, setShowArabicFont] = useState(false);
  const [arabValue, setArabValue] = useState([30]);
  const [transValue, setTransValue] = useState([20]);

  // Appearance
  const [showAppearance, setShowAppearance] = useState(true);

  return (
    <div className="relative overflow-hidden h-full">

      {/* ================= MAIN PANEL ================= */}
      <div
        className={`absolute w-full transition-transform duration-300
        ${showLangPanel ? "-translate-x-full" : "translate-x-0"}`}
      >
        <div className="flex flex-col space-y-2">

          {/* LANGUAGE SETTINGS */}
          <div className="w-full">
            <button
              className="flex items-center justify-between gap-4 px-6 py-2 w-full hover:bg-black"
              onClick={() => setShowLang(!showlang)}
            >
              <div className="flex gap-4 items-center">
                <Globe className="text-emerald-800" />
                Language Settings
              </div>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  showlang ? "rotate-180" : ""
                }`}
              />
            </button>

            {showlang && (
              <div className="py-4 px-6">

                <button
                  className="flex items-center justify-between w-full opacity-60"
                  onClick={() => setShowLangPanel(true)}
                >
                  Selected Language
                  <ChevronRight />
                </button>

              </div>
            )}
          </div>

          {/* FONT SETTINGS */}
          <div className="w-full">
            <button
              className="flex items-center justify-between gap-4 px-6 py-2 w-full hover:bg-black"
              onClick={() => setShowArabicFont(!showArabicFont)}
            >
              <Type className="text-emerald-800" />
              Font Setting

              <ChevronDown
                className={`transition-transform duration-300 ${
                  showArabicFont ? "rotate-180" : ""
                }`}
              />
            </button>

            {showArabicFont && (
              <div className="px-6 py-4 space-y-6">

                <div>Arabic Font Face</div>

                <div className="space-y-4">
                  <Label>
                    Arabic Font Size
                    <span className="text-emerald-900 ml-2">
                      {arabValue[0]}
                    </span>
                  </Label>

                  <Slider
                    value={arabValue}
                    onValueChange={setArabValue}
                    min={0}
                    max={100}
                    step={1}
                  />
                </div>

                <div className="space-y-4">
                  <Label>
                    Translation Font Size
                    <span className="text-emerald-900 ml-2">
                      {transValue[0]}
                    </span>
                  </Label>

                  <Slider
                    value={transValue}
                    onValueChange={setTransValue}
                    min={0}
                    max={100}
                    step={1}
                  />
                </div>

              </div>
            )}
          </div>

          {/* VIEW SETTINGS */}
          <div className="w-full">
            <button
              className="flex items-center justify-between gap-4 px-6 py-2 w-full hover:bg-black"
              onClick={() => setOpenSection(!openSection)}
            >
              <CopyCheck className="text-emerald-800" />
              View Setting

              <ChevronDown
                className={`transition-transform duration-300 ${
                  openSection ? "rotate-180" : ""
                }`}
              />
            </button>

            {openSection && (
              <div className="px-6 py-4 space-y-4 bg-slate-50 dark:bg-slate-900">

                <div className="flex justify-between">
                  <Label>Show Arabic</Label>
                  <Switch
                    checked={showArabic}
                    onCheckedChange={setShowArabic}
                  />
                </div>

                <div className="flex justify-between">
                  <Label>Show Translation</Label>
                  <Switch
                    checked={showTranslation}
                    onCheckedChange={setShowTranslation}
                  />
                </div>

                <div className="flex justify-between">
                  <Label>Show Transliteration</Label>
                  <Switch
                    checked={showTransliteration}
                    onCheckedChange={setShowTransliteration}
                  />
                </div>

                <div className="flex justify-between">
                  <Label>Show Reference</Label>
                  <Switch
                    checked={showReference}
                    onCheckedChange={setShowReference}
                  />
                </div>

              </div>
            )}
          </div>

          {/* APPEARANCE */}
          <div className="w-full">
            <button
              className="flex items-center justify-between gap-4 px-6 py-2 w-full hover:bg-black"
              onClick={() => setShowAppearance(!showAppearance)}
            >
              <AlignStartVertical className="text-emerald-800" />
              Appearance Settings

              <ChevronDown
                className={`transition-transform duration-300 ${
                  showAppearance ? "rotate-180" : ""
                }`}
              />
            </button>

            {showAppearance && (
              <div className="px-6 py-4 flex gap-2">
                <Button><ThemeToggle /></Button>
                <Button><ThemeToggle /></Button>
                <Button><ThemeToggle /></Button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ================= LANGUAGE PANEL ================= */}
      <div
        className={`absolute top-0 w-full h-full bg-gray-900 transition-transform duration-300
        ${showLangPanel ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* HEADER */}
        <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-700">

          <button onClick={() => setShowLangPanel(false)}>
            <ChevronLeft />
          </button>

          <span className="font-semibold">Select Language</span>

        </div>

        {/* LANGUAGE LIST */}
        <div className="space-y-4">
          {language.map((lang, i) => (
            <button
              key={i}
              onClick={() => setSelectedLang(lang.name)}
              className="flex ml-4 mt-4 items-center gap-3 w-full cursor-pointer"
            >
              
              <span
                className={`w-3 h-3 rounded-full border ${
                  selectedLang === lang.name
                    ? "bg-white border-black"
                    : "border-gray-400"
                }`}
              ></span>

              {lang.name}

            </button>
          ))}
        </div>

      </div>

    </div>
  );
}