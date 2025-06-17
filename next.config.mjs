/** @type {import('next').NextConfig} */
const config = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { _isServer }) => {
    // Add a rule to handle .md files
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};

export default config;
