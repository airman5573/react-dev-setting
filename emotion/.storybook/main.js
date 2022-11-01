module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async config => {
    // storybook이 작성한 webpack config객체를 받는다

    // 절대 경로를 설정한다
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': resolve(__dirname, '../src/components'),
      '@styles': resolve(__dirname, '../src/styles'),
    };

    // babel설정을 추가한다
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-env'),
      [
        require.resolve('@babel/preset-react'),
        {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      ],
    ];

    // emotion babel plugin을 설정한다
    config.module.rules[0].use[0].options.plugins = [
      [
        require.resolve('@emotion/babel-plugin'),
        {
          sourceMap: true,
          autoLabel: 'dev-only',
          labelFormat: '[local]',
          cssPropOptimization: true,
        },
      ],
    ];

    return config;
  },
};
