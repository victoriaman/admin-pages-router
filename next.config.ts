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
            requiredVersion: '19.0.0',
            eager: true
          },
          'react-dom': {
            singleton: true,
            requiredVersion: '19.0.0',
            eager: true
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

    // config.resolve.alias = {
    //   ...(config.resolve.alias || {}),
    //   react: require.resolve('react'),
    //   'react-dom': require.resolve('react-dom'),
    // };


    return config;
  },
};

module.exports = nextConfig;