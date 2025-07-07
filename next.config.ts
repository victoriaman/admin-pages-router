import NextFederationPlugin from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  webpack: (config: any, options: any) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'adminMFE',
        library: { type: 'var', name: 'adminMFE' },
        filename: 'static/runtime/remoteEntry.js',
        exposes: {
          './Header': './src/components/Header',
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: false,
          },
        },
        extraOptions: {
          debug: false,
          exposePages: false,
          enableImageLoaderFix: false,
          enableUrlLoaderFix: false,
          skipSharingNextInternals: true,
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;