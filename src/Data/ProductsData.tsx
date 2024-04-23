export const Products = [
  {
    id: 1,
    name: 'Samsung S24',
    color: 'white',
    price: '50000',
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRPj7Jr6Xw4YKWN21dzQXuDR46qTZCiPm5XkKuCvlUBNvKqy0z7x7IvBlF4uwSgNv5J_rgJlxNxaT_UhkjkXboUwGA3_f0Rp-DmkDmPm55M4EBnkF6QUJFbctNMiCYO__dYvKkm0LzJIGU&usqp=CAc',
  },
  {
    id: 2,
    name: 'Realme 7',
    color: 'skyblue',
    price: '15000',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQosmklsPDaGPQtGWIvQIuTmF-AsN-9cuNCbEjHad09DVl90b9ovMweegDN-rm3nYucxY-RjgQRMY3frTjs5ob0DbVwMHCBOXzwqVAoeKLcTEkVNu3nIv6X-pCc2XT7YG0eveyzqrI&usqp=CAc',
  },
  {
    id: 3,
    name: 'Iphone 15',
    color: 'gold',
    price: '120000',
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQwa59SGsVbi3_FT1pLNfJMV-vUEV2qcErEHZDdJsB7R7t9n_yaMnDxx85OpJv9IyoJejrgQwpjt_rasfFQ5b86g0ln4Hu2brSvf8qUAb7X2mVxDzHBG4BamB8m4UtM6g&usqp=CAc',
  },
  {
    id: 4,
    name: 'Google Pixel 7a',
    color: 'black',
    price: '40000',
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRSHarotBbKrcQjNv9WcZXM8U668tbC9WyOej_T7GOz7lLsAg9bNreQmP39IpOomGCULQFq7Ls9_WcyZZebzeVATZ6VYkcmR0WcysEHgVF__R6ZfkFla2euAg&usqp=CAc',
  },
  {
    id: 5,
    name: 'OnePlus 12',
    color: 'green',
    price: '65000',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLRvt3w_yL18nmmNkRWm9jSTGtJKt_TGvmA&usqp=CAU',
  },
];

export type ProductsType = {
  id: number;
  name: any;
  color: string;
  price: string;
  image: string;
};
