# PostCSS OkLCH relative chroma

A PostCSS plugin to use relative chroma in an upgraded `oklch()` CSS notation. Check the [live demo](https://dokozero.github.io/oklch-css-relative-chroma-demo/) to see it in action.

The proposal is:

```markdown
oklch(gamut L RC H)
```

`gamut` can either be `srgb`, `display-p3` or `p3` (same), and `rec2020`.

Exemple: `oklch(p3 80% 100% 20)` which means: "for a lightness of 80 % and a hue of 20, I want a color with the maximum chroma possible in the P3 gamut" and translates to `oklch(80% 0.148 20)`.

This is a work in progress that might change in the future.

## How to use it

The plugin has not yet been published on NPM. To use it, you can download the dist folder and configure your postcss.config.js file to use it.

Check the [demo repo](https://github.com/dokozero/oklch-css-relative-chroma-demo) to see how I use it.
