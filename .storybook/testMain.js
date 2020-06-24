module.exports = {
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ],
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve("babel-preset-react-app")],
            // presets: [['react-app', { flow: false, typescript: true }]],
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')
              }
              return true
            }
          }
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}

// module.exports = ({ config }) => {
//   config.module.rules.push({
//     test: /\.tsx?$/,
//     use: [
//       {
//         loader: require.resolve("babel-loader"),
//         options: {
//           presets: [require.resolve("babel-preset-react-app")]
//         }
//       }, 
//       {
//         loader: require.resolve("react-docgen-typescript-loader"),
//         options: {
//           shouldExtractLiteralValuesFromEnum: true,
//           propFilter: (prop) => {
//             if (prop.parent) {
//               return !prop.parent.fileName.includes('node_modules')
//             }
//             return true            
//           }
//         }
//       }
//     ]
//   });

//   config.resolve.extensions.push(".ts", ".tsx");

//   return config;
// };