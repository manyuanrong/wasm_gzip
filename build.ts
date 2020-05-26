const cargoBuild = Deno.run({
  cmd: ["wasm-pack", "build", "-t", "web", "--release"],
  stdout: "inherit",
});

await cargoBuild.status();

const wasmBin = await Deno.readFile("./pkg/wasm_gzip_bg.wasm");

const bytes: number[] = [];

wasmBin.forEach((byte) => bytes.push(byte));

await Deno.writeTextFile(
  "./bytes.js",
  `
const code = [${bytes}];

const bytes = Uint8Array.from(code);

export default bytes;`,
);

await Deno.copyFile("./pkg/wasm_gzip.js", "./wasm.js");
