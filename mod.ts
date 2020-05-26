import bytes from "./bytes.js";
import init, { gzip_decode, gzip_encode } from "./wasm.js";

await init(bytes);

export function gzipDecode(base_compressed: Uint8Array): Uint8Array {
  return gzip_decode(base_compressed);
}

export function gzipEncode(bytes: Uint8Array): Uint8Array {
  return gzip_encode(bytes);
}
