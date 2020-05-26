import { assertEquals } from "https://deno.land/std@v0.53.0/testing/asserts.ts";
import { gzipDecode, gzipEncode } from "./mod.ts";

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

const encodedHelloWorld = new Uint8Array([
  31,
  139,
  8,
  0,
  0,
  0,
  0,
  0,
  0,
  255,
  243,
  72,
  205,
  201,
  201,
  87,
  8,
  207,
  47,
  202,
  73,
  1,
  0,
  86,
  177,
  23,
  74,
  11,
  0,
  0,
  0,
]);

Deno.test("encode", function () {
  const encoded = gzipEncode(textEncoder.encode("Hello World"));
  assertEquals(encoded, encodedHelloWorld);
});

Deno.test("decode", function () {
  const decoded = gzipDecode(encodedHelloWorld);
  assertEquals(textDecoder.decode(decoded), "Hello World");
});
