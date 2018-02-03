// Example 1 - HTML within JS

var products = [{
  name: 'Banana',
  quantity: 14,
  price: 0.79
}, {
  name: 'Apple',
  quantity: 3,
  price: 0.55
}];

var products_html = [];

products.forEach(function(item) {
  products_html.push('<li><h3>' + item.name + '</h3><dl><dt>Quantity:</dt><dd>' + item.quantity + '</dd><dt>Price:</dt><dd>$' + item.price + '</dd></dl></li>');
});










// Example 2 - HTML within JS 

var products = [{
  name: 'Banana',
  quantity: 14,
  price: 0.79
}, {
  name: 'Apple',
  quantity: 3,
  price: 0.55
}];

var products_html = [];

products.forEach(function(item) {
  var html = '<li><h3>' + item.name + '</h3></dl></dt>Quantity:</dt><dd>' + item.quantity + '</dd><dt>Price:</dt><dd>$' + item.price;
  if (item.on_sale) {
    html += ' <strong>SALE!</strong';
  }

  html += '</dd></dl></li>';
  products_html.push(html);
});

$list.html(products_html.join(''));















// Example 3 - Client-side templating

// Handlebars Download: http://handlebarsjs.com/installation.html

// EXAMPLE HTML 
// <script id='productTemplate' type='text/x-handlebars'>
//  <li data-quantity="{{quantity}}">
//    <h3> {{name}} </h3>
//    <dl>
//      <dt>Quantity:</dt>
//      <dd>{{quantity}}</dd>
//      <dt>Price:</dt>
//      <dd>
//         ${{price}}
//         {{#if on_sale}}
//         <strong>SALE!</strong>
//         {{/if}}
//      </dd>
//    </dl>
//  </li>
// </script>


var productTemplate = Handlebars.compile($('#productTemplate').html());

var products = [{
  name: 'Banana',
  quantity: 14,
  price: 0.79
}, {
  name: 'Apple',
  quantity: 3,
  price: 0.55
}];

var products_html = [];

products.forEach(function(item) {
  products_html.push(productTemplate(item));
});

$list.html(products_html.join(''));















// Example 4 - clean up even more

// EXAMPLE HTML 
// <script id='productTemplate' type='text/x-handlebars'>
//  {{#each}}
//  <li data-quantity="{{quantity}}">
//    <h3> {{name}} </h3>
//    <dl>
//      <dt>Quantity:</dt>
//      <dd>{{quantity}}</dd>
//      <dt>Price:</dt>
//      <dd>
//         ${{price}}
//         {{#if on_sale}}
//         <strong>SALE!</strong>
//         {{/if}}
//      </dd>
//    </dl>
//  </li>
//  {{/each}}
// </script>

var products = [{
  name: 'Banana',
  quantity: 14,
  price: 0.79
}, {
  name: 'Apple',
  quantity: 3,
  price: 0.55
}];

var productTemplate = Handlebars.compile($('#productTemplate').html());

var products_html = [];

$list.html(productTemplate({items: products}));















// Example 5 - Handlebar parials

// EXAMPLE HTML
// <script id='productTemplate' type='text/x-handlebars'
//  <li>
//    <h3>{{name}}</h3>
//    <dl>
//      <dt>Quantity:</dt>
//      <dd>{quantity}</dd>
//      <dt>Price:</dt>
//      <dd>
//        ${{price}}
//        {{#if on_sale}}
//        <strong>SALE!</strong>
//        {{/if}}
//      </dd>
//    </dl>
//   </li>
// </script>

// <script id='productList' type='text/x-handlebars'>
//    {{#each items}}
//    {{> productTemplate}}
//    {{/each}}
// </script>



var products = [{
  name: 'Banana',
  quantity: 14,
  price: 0.79
}, {
  name: 'Apple',
  quantity: 3,
  price: 0.55
}];

// Compile templates
var productList = Handlebars.compile($('#productsList').html());
var productTemplate = Handlebars.compile($(#productTemplate).html());

// Register productTemplate as a partial
Handlebars.registerPartial('productTemplate', $('#productTemplate').html());

// Write the current list to the page
$list.html(productsList({items: products }));

// create a new product
var newProduct = {
  name: 'Soup',
  quantity: 1,
  price: 1.29
};

// Render the new product with the productTemplate
$list.append(productTemplate(newProduct));


