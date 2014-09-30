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

materialistic.fetch(url).then(function(product) {
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
