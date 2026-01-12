"use client";

import { useState, useEffect } from "react";
import { Share, Download } from "lucide-react";

export default function InstallBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // 1. Detect if already installed (standalone mode)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) return; // Don't show if already installed

    // 2. Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // 3. Android/Desktop: Listen for the native install prompt
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // If iOS, just show it (since there's no event to listen for)
    if (isIosDevice) {
      setShowBanner(true);
    }

    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          setShowBanner(false);
        }
        setDeferredPrompt(null);
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="w-full bg-red-600 text-white p-3 flex flex-col md:flex-row items-center justify-between gap-3 text-sm md:text-base">
      
      <div className="flex items-center gap-2">
        <div className="bg-white/20 p-2 rounded-full">
          <Download size={20} />
        </div>
        <span className="font-medium">
          {isIOS ? "Install app to use Offline" : "Get the App to Use Offline"}
        </span>
      </div>

      {isIOS ? (
        // iOS Instructions
        <div className="flex items-center gap-2 text-xs bg-black/20 px-3 py-1 rounded">
          <span>Tap</span>
          <Share size={14} />
          <span>then "Add to Home Screen"</span>
        </div>
      ) : (
        // Android/Desktop Button
        <button 
          onClick={handleInstallClick}
          className="bg-white text-red-600 px-4 py-1.5 rounded-full font-bold uppercase text-xs tracking-wider"
        >
          Install
        </button>
      )}
    </div>
  );
}
