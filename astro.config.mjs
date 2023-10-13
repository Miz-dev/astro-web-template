import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  srcDir: './src',
  outDir: './dist',
  site: 'https://example.com/',
  server: { host: true },
  compressHTML: false,
  vite: {
    resolve: {
      alias: {
        '@/*': 'src/*',
      },
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `
    //         @use "./src/styles/utils/variable/_index.scss";
    //         @use "./src/styles/utils/function/_index.scss" as fn;
    //         @use "./src/styles/utils/mixin/_index.scss" as mixin;
    //       `,
    //     },
    //   },
    // },
    build: {
      assetsInlineLimit: 0,
			target: 'es2015',
			minify: 'terser',
			cssMinify: false,
			rollupOptions: {
				output: {
					assetFileNames: (assetInfo) => {
						let extType = assetInfo.name.split('.').at(-1)
						if (/png|jpeg|svg|gif|tiff|bmp|ico/i.test(extType)) {
							return `assets/img/[name].[extname]`
						}
						if (/css|scss/i.test(extType)) {
							return `assets/css/style.css`
						}
						return `assets/[name].[extname]`
					},
					entryFileNames: () => {
            return `assets/js/main.js`;
          },
				}
      }
		}
  },
});
