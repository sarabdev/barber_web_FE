import React from "react";
import { RegisterForm } from "../../components/custom/Signup";
import { SparklesCore } from "../../components/ui/sparkle";

export default function page() {
  return (
    <div className="min-h-screen  relative flex items-center px-4">
      <div className="w-full absolute inset-0 h-full z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={200}
          className="w-full h-full z-0"
          particleColor="#FFFFFF"
        />
      </div>
      <RegisterForm />
    </div>
  );
}
