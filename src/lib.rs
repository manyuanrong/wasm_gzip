extern crate wasm_bindgen;

use flate2::read::GzDecoder;
use flate2::write::GzEncoder;

use flate2::Compression;
use std::io::{Read, Write};

use wasm_bindgen::prelude::*;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn gzip_decode(base_compressed: &[u8]) -> Vec<u8> {
    let mut d = GzDecoder::new(&base_compressed[..]);
    let mut buffer = Vec::new();
    d.read_to_end(&mut buffer).unwrap();
    return buffer;
}

#[wasm_bindgen]
pub fn gzip_encode(base_raw: &[u8]) -> Vec<u8> {
    let mut e = GzEncoder::new(Vec::new(), Compression::default());
    e.write_all(base_raw).expect("could not compress");
    let compressed_bytes = e.finish();
    return compressed_bytes.unwrap();
}
