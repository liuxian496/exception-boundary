import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        copyPublicDir: false,
        cssCodeSplit: true,
        lib: {
            entry: {
                index: "src/index.ts",
                exceptionBoundary: "src/exceptionBoundary.ts",
            },
            name: "exceptionBoundary",
            fileName: "index",
        },
        outDir: "dist",
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "react/jsx-runtime",
                "classnames",
                "cyndi/dist/getPrefixNs",
                "cyndi/isEmptyString",
            ],
            output: [
                {
                    manualChunks: (id: string) => {
                        if (id.includes("node_modules")) {
                            console.log(id);
                            // if (id.includes("cyndi")) {
                            //     return "cyndi";
                            // }
                            return "vender";
                        }
                    },
                    format: "es",
                    chunkFileNames: "chunks/[name].[hash].js",
                    assetFileNames: "assets/[name][extname]",
                    entryFileNames: "[name].js",
                },
            ],
        },
    },
    plugins: [
        react(),
        dts(),
        // visualizer()
    ],
});
