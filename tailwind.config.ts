import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  theme: {extend: {}, },
  plugins: [
    function ({ addVariant }: any) {
      addVariant("blue", ".blue &")  // 👈 adds blue: variant like dark:
    }
  ],
}

export default config