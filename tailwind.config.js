module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'Stone': '#44403C',
      'white': '#fff',
      'black': "#000",
      'Lime': '#84cc16',
      'Red': '#ef4444',
      'gray': {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },

    },
    backgroundImage: {
      'call': "url('img/call.svg')",
      'put': "url('img/put.svg')",
      'skt': "url('img/skt.svg')",
    }

  },
  plugins: [],
}
