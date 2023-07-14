/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
        alt: 'var(--font-montserrat)',
        roboto: 'var(--font-roboto)',
      },

      screens: {
        mobile: '40rem',
        tablet: '48rem',
        laptop: '80rem',
        'laptop-sm': '85.375rem',
        'laptop-md': '90rem',
        desktop: '96rem',
        '4k': '240rem',
      },

      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },

        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },

        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },

        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },

        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },

        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },

        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        gray: {
          20: '#F5F6FA',
          30: '#F5F5F5',
          50: '#eaeaea',
          70: '#E5E5E5',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },

        brand: {
          primary: '#00C900',
          secondary: '#008C00',
          gray: {
            300: '#EDEBEB',
            500: '#909090',
            700: '#2C2C2C',
          },
        },

        blue: {
          baby: '#F4F5F9',
          sheet: '#E4E8F5',
          soft: '#E9EFFD',
        },

        green: {
          30: '#DDF9DD',
          50: '#E1FFD6',
          100: '#8BFF60',
        },

        orange: {
          50: '#ffefeb',
          100: '#ffccc2',
          200: '#ffb4a4',
          300: '#ff927b',
          400: '#ff7d61',
          500: '#ff5c3a',
          600: '#e85435',
          700: '#b54129',
          800: '#8c3320',
          900: '#6b2718',
        },

        yellow: {
          50: '#fff9ec',
          100: '#ffebc4',
          200: '#ffe2a7',
          300: '#ffd47f',
          400: '#ffcc66',
          500: '#ffbf40',
          600: '#e8ae3a',
          700: '#b5882d',
          800: '#8c6923',
          900: '#6b501b',
        },
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
          'muted-hover': 'var(--color-text-muted-hover)',
        },
      },

      blur: {
        md: '100px',
        full: '194px',
      },

      fontSize: {
        '5xl': '2.5rem',
      },

      via: {
        scale: {
          600: 'var(--tw-gradient-from), var(--colors-scale6) var(--tw-gradient-via-position),var(--tw-gradient-to)',
        },
      },

      maxWidth: {
        '8xl': '85.375rem',
        '9xl': '90rem',
        '10xl': '96rem',
        '11xl': '1920px',
      },

      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'fill-base': 'var(--color-fill-base)',
          'fill-hover': 'var(--color-fill-hover)',
          'fill-accent': 'var(--color-fill-accent)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover': 'var(--color-button-accent-hover)',
          'button-muted': 'var(--color-button-muted)',
        },
      },

      borderWidth: {
        6: '.375rem',
        10: '.625rem',
        12: '.75rem',
        14: '.875rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        22: '1.375rem',
        24: '1.5rem',
        26: '1.625rem',
      },

      borderColor: {
        skin: {
          fill: 'var(--color-fill)',
          'fill-base': 'var(--color-fill-base)',
          'fill-hover': 'var(--color-fill-hover)',
          'fill-accent': 'var(--color-fill-accent)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover': 'var(--color-button-accent-hover)',
          'button-muted': 'var(--color-button-muted)',
        },
      },

      backgroundImage: {
        stripes:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)',
        hline:
          'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8), transparent 80%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      backgroundSize: {
        stripes: '100% 8px',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms')],
}
