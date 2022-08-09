use wasm_bindgen::prelude::*;

use crate::MirageTank;

#[wasm_bindgen]
pub struct MirageTankWrapper {
    inner: MirageTank,
}

#[wasm_bindgen]
impl MirageTankWrapper {
    #[wasm_bindgen(constructor)]
    pub fn from_raw(wbuf: &[u8], bbuf: &[u8]) -> Result<MirageTankWrapper, JsValue> {
        let inner = MirageTank::from_raw(wbuf, bbuf)
            .map_err::<JsValue, _>(|_| "fail to load image".into())?;
        Ok(Self { inner })
    }

    #[wasm_bindgen(getter)]
    pub fn wimage_width(&self) -> u32 {
        self.inner.wimage_size().0
    }

    #[wasm_bindgen(getter)]
    pub fn wimage_height(&self) -> u32 {
        self.inner.wimage_size().1
    }

    #[wasm_bindgen(getter)]
    pub fn bimage_width(&self) -> u32 {
        self.inner.bimage_size().0
    }

    #[wasm_bindgen(getter)]
    pub fn bimage_height(&self) -> u32 {
        self.inner.bimage_size().1
    }
}

#[inline]
pub(crate) fn is_param(p: f32) -> bool {
    p.is_normal() && p >= 0.0 && p <= 1.0
}

#[wasm_bindgen]
impl MirageTankWrapper {
    pub fn grey_output(
        &self,
        width: u32,
        height: u32,
        checkerboarded: bool,
        wlight: f32,
        blight: f32,
    ) -> Result<Box<[u8]>, JsValue> {
        if !is_param(wlight) || !is_param(blight) {
            return Err("invalid parameter".into());
        }

        let output = self
            .inner
            .grey_output(width, height, checkerboarded, wlight, blight);
        Ok(output.into_raw().into_boxed_slice())
    }

    pub fn colorful_output(
        &self,
        width: u32,
        height: u32,
        checkerboarded: bool,
        wlight: f32,
        blight: f32,
        wcolor: f32,
        bcolor: f32,
    ) -> Result<Box<[u8]>, JsValue> {
        if ![wlight, blight, wcolor, bcolor]
            .iter()
            .all(|&p| is_param(p))
        {
            return Err("invalid parameter".into());
        }
        let output = self.inner.colorful_output(
            width,
            height,
            checkerboarded,
            wlight,
            blight,
            wcolor,
            bcolor,
        );
        Ok(output.into_raw().into_boxed_slice())
    }
}