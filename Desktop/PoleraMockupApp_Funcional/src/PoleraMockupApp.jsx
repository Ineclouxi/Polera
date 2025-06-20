import React from "react";
import { ImageIcon } from "lucide-react";

export default function PoleraMockupApp() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-900">
      <ImageIcon className="w-10 h-10 text-blue-500" />
      <h1 className="text-2xl font-bold mt-4">¡Bienvenido a ImaginaWear!</h1>
      <p className="text-gray-600 mt-2">Sube tu diseño y genera un mockup realista.</p>
    </div>
  );
}