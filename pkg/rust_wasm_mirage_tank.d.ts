/* tslint:disable */
/* eslint-disable */
/**
*/
export class MirageTankWrapper {
  free(): void;
/**
* @param {Uint8Array} wbuf
* @param {Uint8Array} bbuf
*/
  constructor(wbuf: Uint8Array, bbuf: Uint8Array);
/**
* @param {number} width
* @param {number} height
* @param {boolean} checkerboarded
* @param {number} wlight
* @param {number} blight
* @returns {Uint8Array}
*/
  grey_output(width: number, height: number, checkerboarded: boolean, wlight: number, blight: number): Uint8Array;
/**
* @param {number} width
* @param {number} height
* @param {boolean} checkerboarded
* @param {number} wlight
* @param {number} blight
* @param {number} wcolor
* @param {number} bcolor
* @returns {Uint8Array}
*/
  colorful_output(width: number, height: number, checkerboarded: boolean, wlight: number, blight: number, wcolor: number, bcolor: number): Uint8Array;
/**
*/
  readonly bimage_height: number;
/**
*/
  readonly bimage_width: number;
/**
*/
  readonly wimage_height: number;
/**
*/
  readonly wimage_width: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_miragetankwrapper_free: (a: number) => void;
  readonly miragetankwrapper_from_raw: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly miragetankwrapper_wimage_width: (a: number) => number;
  readonly miragetankwrapper_wimage_height: (a: number) => number;
  readonly miragetankwrapper_bimage_width: (a: number) => number;
  readonly miragetankwrapper_bimage_height: (a: number) => number;
  readonly miragetankwrapper_grey_output: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly miragetankwrapper_colorful_output: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* Synchronously compiles the given `bytes` and instantiates the WebAssembly module.
*
* @param {BufferSource} bytes
*
* @returns {InitOutput}
*/
export function initSync(bytes: BufferSource): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
