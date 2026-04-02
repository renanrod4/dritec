/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0d47a1',
        'brand-primary-hover': '#1565c0',
        'brand-dark': '#0a1628',
        'highlight-light-blue': '#93c5fd',
        'highlight-pale-blue': '#dbeafe',
        'whatsapp': '#22c55e',
        'whatsapp-hover': '#16a34a',
        'background-white': '#ffffff',
        'background-light-gray': '#f9fafb',
        'background-blue-subtle': '#eff6ff',
        'text-primary': '#111827',
        'text-secondary': '#374151',
        'text-muted': '#6b7280',
        'text-light': '#9ca3af',
        'text-on-blue': '#ffffff',
        'border-blue-light': '#dbeafe',
        'border-blue-medium': '#bfdbfe',
        'border-gray-light': '#f3f4f6',
        'card-background': '#ffffff',
        'card-blue-tint': '#eff6ff',
      },
    },
  },
  plugins: [],
};
