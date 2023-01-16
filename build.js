require("esbuild").buildSync({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  platform: "node",
  target: ["node10"],
  banner: {
    js: "#!/usr/bin/env node"
  },
  outfile: "./bin/typedoc-to-mdx.js",
  external: [
    "typescript",
    "vscode-oniguruma"
  ]
});

console.log("Done");
