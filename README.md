# wasm_gzip

Gzip encryption and decryption wasm implementation, support Deno

[![Build Status](https://github.com/manyuanrong/deno-smtp/workflows/ci/badge.svg?branch=master)](https://github.com/manyuanrong/wasm_gzip/actions)
![GitHub](https://img.shields.io/github/license/manyuanrong/wasm_gzip.svg)
![GitHub release](https://img.shields.io/github/release/manyuanrong/wasm_gzip.svg)
![(Deno)](https://img.shields.io/badge/deno-1.0.2-green.svg)

## Usage

```ts
import {
  gzipDecode,
  gzipEncode,
} from "https://github.com/manyuanrong/wasm_gzip/raw/master/mod.ts";

const helloWorld = new TextEncoder().encode("Hello World");

const encoded = gzipEncode(helloWorld);
const decoded = gzipDecode(encoded);
```
