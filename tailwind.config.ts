import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      /* ── Tala fonts ── */
      fontFamily: {
        headline: ['"Nohemi"', "system-ui", "sans-serif"],
        body: ['"Helvetica"', '"Helvetica Neue"', "Arial", "sans-serif"],
      },

      /* ── Tala font sizes (matching Figma type scale) ── */
      fontSize: {
        // Body sizes
        "body-xs": ["14px", { lineHeight: "16px", letterSpacing: "-0.5px" }],
        "body-s": ["16px", { lineHeight: "18px", letterSpacing: "0px" }],
        "body-m": ["18px", { lineHeight: "20px", letterSpacing: "-0.18px" }],
        "body-l": ["20px", { lineHeight: "24px", letterSpacing: "0px" }],
        "body-xl": ["24px", { lineHeight: "28px", letterSpacing: "0px" }],
        // Heading sizes
        "h6": ["24px", { lineHeight: "26px", letterSpacing: "0px" }],
        "h5": ["28px", { lineHeight: "26px", letterSpacing: "0px" }],
        "h4": ["42px", { lineHeight: "40px", letterSpacing: "0px" }],
        "h3": ["56px", { lineHeight: "54px", letterSpacing: "0px" }],
        "h2": ["72px", { lineHeight: "68px", letterSpacing: "0px" }],
        "h1": ["96px", { lineHeight: "90px", letterSpacing: "-1px" }],
      },

      /* ── Tala color palette ── */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Tala semantic colors
        tala: {
          "0": "hsl(var(--tala-0))",
          "10": "hsl(var(--tala-10))",
          "20": "hsl(var(--tala-20))",
          "30": "hsl(var(--tala-30))",
          "40": "hsl(var(--tala-40))",
          "50": "hsl(var(--tala-50))",
          "60": "hsl(var(--tala-60))",
          "70": "hsl(var(--tala-70))",
          "80": "hsl(var(--tala-80))",
          "90": "hsl(var(--tala-90))",
          "100": "hsl(var(--tala-100))",
          brand: "hsl(var(--tala-brand))",
          red: "hsl(var(--tala-red))",
        },
      },

      /* ── Tala border radius scale ── */
      borderRadius: {
        "pill": "100px",
        "4xl": "60px",
        "3xl": "40px",
        "2xl": "20px",
        xl: "16px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* ── Tala box shadows ── */
      boxShadow: {
        "tala-m": "var(--shadow-m)",
      },

      /* ── Animations ── */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
