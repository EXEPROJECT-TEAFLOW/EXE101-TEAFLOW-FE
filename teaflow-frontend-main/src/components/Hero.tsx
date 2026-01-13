import Button from "@mui/material/Button";
import { ArrowRight, Star } from "lucide-react";
import Avatar from "@mui/material/Avatar";
import AvatarFallback from "@mui/material/Avatar";
export default function Hero() {
  const avatars = [
    { name: "Sarah", initials: "SA", color: "bg-blue-500" },
    { name: "Mike", initials: "MI", color: "bg-pink-500" },
    { name: "Emily", initials: "EM", color: "bg-purple-500" },
    { name: "Alex", initials: "AL", color: "bg-orange-500" },
  ];

  return (
    <section className="min-h-screen bg-gradient-hero pt-32 pb-16 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Building bold brands
            <br />
            with <span className="italic font-serif text-5xl md:text-6xl">thoughtful design</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            At Awake, we help small startups tackle the world's biggest challenges with tailored
            solutions, guiding you from strategy to success in a competitive market.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <Button
              size="large"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 group"
            >
              Get Started
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition" />
            </Button>

            {/* Social Proof */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center -space-x-3">
                {avatars.map((avatar, i) => (
                  <Avatar key={i} className="border-4 border-background dark:border-slate-950">
                    <AvatarFallback className={`${avatar.color} text-white font-bold`}>
                      {avatar.initials}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
                <Star size={16} className="text-gray-300" />
                <span className="text-sm text-muted-foreground ml-2">Trusted by 1000+ clients</span>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-sm text-muted-foreground mb-8">
            Loved by 1000+ big and small brands around the worlds
          </p>

          {/* Get This Template Button */}
          <div className="flex justify-center">
            <Button
              size="small"
              className="rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get This Template
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
