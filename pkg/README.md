# MirageTank Wasm

MirageTank Wasm driven by rustwasm

[![GitHub forks](https://img.shields.io/github/forks/yeliulee/rust-wasm-mirage-tank?style=plastic)](https://github.com/yeliulee/rust-wasm-mirage-tank)

## Online demo

[https://ol.woobx.cn/tool/mirage-tank](https://ol.woobx.cn/tool/mirage-tank)

## Installation

```bash
yarn add @yeliulee/rust-wasm-mirage-tank
# or
npm install @yeliulee/rust-wasm-mirage-tank
```

## Usage

```js
import * as wasm from "@yeliulee/rust-wasm-mirage-tank_bg.wasm";
// or `import wasm from "@yeliulee/rust-wasm-mirage-tank_bg.wasm?url"` with vite
import {
  MirageTankWrapper,
  default as initWasm,
} from "@yeliulee/rust-wasm-mirage-tank";

// init wasm module, you can specific wasm from cdn or just imported from the module itself
initWasm(wasm);


const initMirageTank = () => {
  const foreImageBuffer = undefined; // specific your own image buffer here
  const backImageBuffer = undefined; // specific your own image buffer here

  // make sure to init mirage tank after wasm is initialized
  const tank = new MirageTankWrapper(foreImageBuffer, backImageBuffer);
};

// more
```
