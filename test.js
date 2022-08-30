const phones = [
  { name: "sony", price: 500 },
  { name: "apple", price: 700 },
  { name: "sony", price: 700 },
];

console.log(phones.filter((phone) => phone.price === 500));
