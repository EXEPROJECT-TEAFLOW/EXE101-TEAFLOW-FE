import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background font-bold text-sm">
            A
          </div>
          <span className="font-bold text-lg text-foreground">Awake</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
            About us
          </a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition">
            Services
          </a>
          <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition">
            Work
          </a>
          <a href="#team" className="text-sm text-muted-foreground hover:text-foreground transition">
            Team
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
            Pricing
          </a>
          <a href="#awards" className="text-sm text-muted-foreground hover:text-foreground transition">
            Awards
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outlined"
         
            className="rounded-full border-foreground text-foreground hover:bg-foreground/10"
          >
            Sign in
          </Button>
          <Button
            variant="contained"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Sign up
          </Button>
          <button
            onClick={toggleDarkMode}
            className="p-2 text-foreground hover:bg-secondary rounded-lg transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
