var rules = {
  categories: ['Food', 'Appliances', 'Games', 'Arts & Crafts', 'Baby',
               'Beauty', 'Books', 'Music', 'Clothing', 'Jewellery', 'Art', 'Electronics',
               'Furniture', 'Kitchen', 'Kindle', 'Office products', 'Musical Instruments',
               'Sports', 'Pet Supplies', 'Tools', 'Toys', 'Booze'],
  words: ['cheese', 'Star Wars', 'Star Trek', 'cats'],
  prices: ['5.99', '9.99'],
  items: [2, 3, 4, 5],
  letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  challenges: [
    { name: 'Aisle Down', description: 'Can’t buy anything from category: {}.', count: 3, type: 'categories'},
    { name: 'Budget Battle', description: 'Limited amount of money. You can only spend up to ${}. You can use coupons.', count: 1, type: 'prices'},
    { name: 'Cart/Station Swap', description: 'You can only buy something you saw in someone else’s cart.'},
    { name: 'Express Lane', description: 'You can\'t buy more than {} items and you have to wait in the express lane when you buy them.', count: 1, type: 'items'},
    { name: 'Flip This Dish', description: 'You need to incorporate {} into your present', count: 1, type: 'words'},
    { name: 'Grocery List', description: 'You need to incorporate these 3 items in your present: {}.', count: 3, type: 'words'},
    { name: 'Keep It Sample', description: 'You can only use things that you find in the sample displays of the store.'},
    { name: 'Musical Carts', description: 'Walk around aisles until the song that is currently playing stops. Whatever aisle you’re left on is the one you have to buy items from.'},
    { name: 'No Carts Allowed', description: 'You can’t use a cart, you must carry your items around the store'},
    { name: 'One Ingredient Per Aisle', description: 'You can only use items from these categories, one max per category: {}.', count: 3, type: 'categories'},
    { name: 'Red Light Special', description: 'You can only use items on sale'},
    { name: 'Un-gredient List', description: 'You are not allowed to include anything from the {} category in your present.', count: 1, type: 'categories'},
    { name: 'Alphabet Soup', description: 'You can only buy items that start with the letter: {}', count: 1, type: 'letters'},
  ]
}

function doAThing() {
  var pick = pickIndex(rules.challenges);

  var description = rules.challenges[pick].description;
  var type = rules.challenges[pick].type;
  which.textContent = rules.challenges[pick].name;

  // Maybe it's a mad lib thing.
  if (type) {
    var replacement = '';

    for (var i = 0; i < rules.challenges[pick].count; i++) {
      replacement += pickOne(rules[type]) + ', ';
    }

    // Nuke the last ', '
    replacement = replacement.substring(0, replacement.length - 2);
    description = description.replace('{}', replacement);
  }
  
  what.textContent = description;
}

function pickIndex(fromWhere) {
  return Math.floor(Math.random() * (fromWhere.length));
}

function pickOne(fromWhere) {
  return fromWhere[pickIndex(fromWhere)];
}
