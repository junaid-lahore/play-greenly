
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './ui/src/**/*.{js,jsx,ts,tsx}',"./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['NeuropoliticalRg', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        // Add specific font family variants for the corporate front #2
        title: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        // Add custom font sizes according to typography hierarchy
        'display': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'lead': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        brand: {
          black: '#1C1C1C',
          teal: '#24B389',
          green: '#0F483B',
          white: '#FFFFFF',
          gray: '#e5e5e5',
          'light-bg': '#F3FAF6'
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1C1C1C',
            a: {
              color: '#24B389',
              '&:hover': {
                color: '#0F483B',
              },
            },
            h1: {
              // Updated to use Montserrat for corporate front #2
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '700',
              color: '#1C1C1C',
            },
            h2: {
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              color: '#1C1C1C',
            },
            h3: {
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              color: '#1C1C1C',
            },
            h4: {
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              color: '#1C1C1C',
            },
            blockquote: {
              borderLeftColor: '#24B389',
              color: '#1C1C1C',
              fontStyle: 'normal',
              fontWeight: '500',
              backgroundColor: '#e5e5e5',
              borderRadius: '0.25rem',
              padding: '1rem 1.5rem',
            },
            code: {
              color: '#0F483B',
              backgroundColor: '#e5e5e5',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            table: {
              borderCollapse: 'collapse',
              width: '100%',
            },
            'thead th': {
              backgroundColor: '#e5e5e5',
              borderBottom: '2px solid #24B389',
              fontFamily: 'NeuropoliticalRg, sans-serif',
            },
            'tbody tr': {
              borderBottom: '1px solid #e5e5e5',
            },
            'tbody tr:nth-child(even)': {
              backgroundColor: '#f7f7f7',
            },
            'td, th': {
              padding: '0.75em',
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
