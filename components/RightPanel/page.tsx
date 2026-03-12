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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
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
  const [showFontPanel, setShowFontPanel] = useState(false)
  const [arabValue, setArabValue] = useState([30]);
  const [transValue, setTransValue] = useState([20]);
  const Uthmani = ["KFGQ", "Me Quran", "Al Mushaf", "PDMS Saleem Quran", "PDMS Islamic", "Al Qalam Quran Majeed", "Amiri Quran"]
  const Indopak = ["Noor E Huda", "Noor E Hedayat", "Noor E Hira"]
  const [selectedFont, setSelectedFont] = useState("KFGQ")

  // Appearance
  const [showAppearance, setShowAppearance] = useState(true);

  return (
    <div className="relative overflow-hidden h-full">

      {/* ================= MAIN PANEL ================= */}
        <div className="flex flex-col space-y-2">

          {/* LANGUAGE SETTINGS */}
          <div className="w-full">
            <button
              className="flex items-center justify-between gap-4 px-6 py-2 w-full hover:bg-black"
              onClick={() => setShowLang(!showlang)}
            >
              <div className="flex gap-4 items-center cursor-pointer">
                <Globe className={`${showlang ? "text-emerald-900": "text-emerald-700"}`} />
                <span className={`${showlang ? "text-emerald-600" : ""}`}>Language Settings</span>
              </div>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  showlang ? "rotate-180" : ""
                }`}
              />
            </button>

            {showlang && (
              <div className="py-4 px-6">
                <span className="items-center justify-left">Selected Language</span>
                <button
                  className="flex mt-6 items-center justify-between w-full opacity-60 cursor-pointer"
                  onClick={() => setShowLangPanel(true)}
                >
                  English
                  <ChevronRight />
                </button>

              </div>
            )}
          </div>

          {/* FONT SETTINGS */}
          <div className="w-full">
            <button
              className="flex items-center justify-between gap-4 cursor-pointer px-6 py-2 w-full hover:bg-black"
              onClick={() => setShowArabicFont(!showArabicFont)}
            >
              <Type className={`${showArabicFont ? "text-emerald-900": "text-emerald-700"}`} />
              <span className={`${showArabicFont ? "text-emerald-600" : ""}`}>Font Setting</span>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  showArabicFont ? "rotate-180" : ""
                }`}
              />
            </button>

            {showArabicFont && (
              <div className="px-6 py-4 space-y-6">

                <div><span>Arabic Font Face</span>
                <button className="flex mt-6 w-full items-center justify-between opacity-60" onClick={() => setShowFontPanel(!showFontPanel)}>KFGQ <ChevronRight/></button></div>

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
                    max={56}
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
                    max={44}
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
      

      {/* ================= LANGUAGE PANEL ================= */}
      <div
        className={`absolute top-0 w-full h-full bg-gray-900 transition-transform duration-300
        ${showLangPanel ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* HEADER */}
        <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-700">

          <button className="flex space-x-4 cursor-pointer" onClick={() => setShowLangPanel(false)}>
            <ChevronLeft />
          

          <span className="font-semibold">Select Language</span></button>

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
                className={`w-4 h-4 rounded-full border ${
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

      {/* Font Transitioning */}
      <div
        className={`absolute top-0 w-full h-full bg-gray-900 transition-transform duration-300
        ${showFontPanel ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header Back Button*/}
        <div><button className="flex items-center justify-left p-4 space-x-4 cursor-pointer" onClick={() => setShowFontPanel(false)}><ChevronLeft className={`${showArabicFont ? "text-emerald-700" : ""}`}/><span className={`${showArabicFont ? "text-emerald-700" : ""}`}>Select Font</span></button></div>
        
        {/* List of Fonts */}
        <Tabs defaultValue="Uthmani" className="w-700px p-6 items-center justify-center space-x-4">
          <TabsList>
            <TabsTrigger value="Uthmani">Uthmani</TabsTrigger>
            <TabsTrigger value="Indopak">Indopak</TabsTrigger>
          </TabsList>
          <TabsContent value="Uthmani">
            {Uthmani.map((fonts) => (
              <button
                  onClick={() => setSelectedFont(fonts)}
                  className="flex mt-4 items-center gap-3 w-full cursor-pointer"
                >
                  
                  <span
                    className={`w-3 h-3 rounded-full border ${
                      selectedFont === fonts
                        ? "bg-emerald-600 border-emerald-800"
                        : "border-gray-400"
                    }`}
                  ></span>
                  {fonts}
                </button>
            ))}
            
          </TabsContent>
          <TabsContent value="Indopak">{Indopak.map((infonts)=> (
            <button onClick={() => setSelectedFont(infonts)} className="flex mt-4 items-center gap-3 w-full cursor-pointer">
              <span className={`w-3 h-3 rounded-full border ${selectedFont === infonts ? "bg-white border-black" : "border-gray-400"}`}> </span>
              {infonts}
            </button>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}