import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://image.cdn2.seaart.me/2025-06-02/d0ur81le878c73dd81mg/b64032dadcfe4c14138dbb6a810bbba1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-overlay z-10"></div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            <span className="bg-gradient-glow bg-clip-text text-transparent">
              Turn desires into reality
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Step into a world of emotions made just for you.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              variant="romantic"
              size="lg"
              className="text-lg px-12 py-6 rounded-full font-semibold tracking-wide"
              onClick={() => window.open('https://meetlove.site/quiz-en/index.php', '_blank')}
            >
              I Want to Feel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;