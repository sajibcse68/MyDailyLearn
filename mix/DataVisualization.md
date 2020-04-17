## What is D3?

[D3.js](https://d3js.org/) is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.

## Arrays (d3-array)

Array manipulation, ordering, searching, summarizing, etc.

### Statistics

- d3.min - compute the minimum value in an array.
- d3.max - compute the maximum value in an array.
- d3.extent - compute the minimum and maximum value in an array.

## Brushes (d3-brush)

- d3.brush - create a new two-dimensional brush.
- d3.brushX - create a brush along the x-dimension.
- d3.brushY - create a brush along the y-dimension.
- brush - apply the brush to a selection.

## Continuous Scales

Map a continuous, quantitative domain to a continuous range.

#### `d3.scaleLinear`

Create a quantitative linear scale. For a position encoding:

```js
var x = d3.scaleLinear().domain([10, 130]).range([0, 960]);

// Or, shorthand
var x = d3.scaleLinear([10, 130], [0, 960]);

x(20); // 80
x(50); // 320
```

Or, Apply a color coding:

```js
var color = d3.scaleLinear().domain([10, 100]).range(["brown", "steelblue"]);

// Or, shorthand
var color = d3.scaleLinear([10, 100], ["brown", "steelblue"]);

color(20); // "#9a3439"
color(50); // "#7b5167"
```

#### `d3.scaleLog`

Log scales are similar to `linear scales`, except a logarithmic transform is applied to the input domain value before the output range value is computed. The mapping to the range value y can be expressed as a function of the domain value x: y = m log(x) + b.

As `log(0) = -∞`, a log scale domain must be **strictly-positive or strictly-negative**; the domain must not include or cross zero. A log scale with a positive domain has a well-defined behavior for positive values, and a log scale with a negative domain has a well-defined behavior for negative values. (For a negative domain, input and output values are implicitly multiplied by -1.) The behavior of the scale is undefined if you pass a negative value to a log scale with a positive domain or vice versa.

```js
scaleBinary = d3
  .scaleLog()
  .base(2)
  .domain([16, 2 ** 20]);
```

#### `d3.scaleTime`

Create a linear scale for time.

## Quantize Scales

- d3.scaleQuantize - create a uniform quantizing linear scale.
