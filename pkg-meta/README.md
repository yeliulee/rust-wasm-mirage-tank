# MirageTank Wasm

MirageTank Wasm driven by rustwasm

[![GitHub forks](https://img.shields.io/github/forks/yeliulee/rust-wasm-mirage-tank?style=plastic)](https://github.com/yeliulee/rust-wasm-mirage-tank/network)

## Installation

```bash
yarn add @yeliulee/rust-wasm-mirage-tank
# or 
npm install @yeliulee/rust-wasm-mirage-tank
```

## Usage

```js
import { MirageTankWrapper } from "@yeliulee/rust-wasm-mirage-tank";

const foreImageBuffer = undefined // specific your own image buffer here
const backImageBuffer = undefined // specific your own image buffer here

const tank = new MirageTank(foreImageBuffer, backImageBuffer)

// more
```
