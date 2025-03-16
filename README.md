# PostCSS OkLCH relative chroma

A PostCSS plugin to use relative chroma in an upgraded `oklch()` CSS notation.

The plugin has not yet been published on npm. To use it, you can download the dist folder and configure your postcss.config.js file to use it. Check the [documentation repo](https://github.com/dokozero/oklch-css-relative-chroma-documentation) to see how I use it.

This is a work in progress which might change in the future.

The proposal is:

```markdown
oklch(colorspace L RC H)
```

`colorspace` can either be `srgb`, `display-p3` or `rec2020`.

Exemple: `oklch(display-p3 80% 100% 20)` which means: "for a lightness of 80 % and a hue of 20, I want a color with the maximum chroma possible in the P3 space" and translate to `oklch(80% 0.148 20)`.

See the [documentation repo](https://github.com/dokozero/oklch-css-relative-chroma-documentation) for more information and demo.
