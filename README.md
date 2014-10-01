# Materialistic

<p align="center">
    <img src="http://media.giphy.com/media/r2vGd8UzaqlOw/giphy.gif" />
</p>

A promise based product scraper written in js.

Fetch the following from any ecomm site:
- Name
- Brand
- Price
- Currency
- Availability

## Usage

```javascript
var materialistic = require('materialistic');

var url = 'http://anecommsite.com/gear';

materialistic(url).then(function(product) {
  console.log(product);
}).catch(console.error);

// {
//   brand: 'Nike',
//   name: 'Air Jordan',
//   price: '$200',
//   currency: 'USD',
//   availability: [
//     {
//       size: '7',
//       color: 'white'
//     },
//     {
//       size: '7.5',
//       color: 'white'
//     },
//     ..
//   ]
// }
```

## How it works

Materialistic takes a plugin based approach to scraping products. When a `url` is passed to the library, materialistic will decide what plugin to call in order to scrape the page.

E.g., passing the url `http://www1.macys.com/shop/product/hawke-co-outfitter-lightweight-packable-jackets?ID=1509132` will invoke the macys plugin in order to fetch the page.


## How to add a plugin

TBD

Idea right now:
Plugin must be named `materialistic-HOST`, `HOST` being the hostname of the ecomm site.
Plugin must have a fetch method, fetch method must return a promise that is resolved with product json.

