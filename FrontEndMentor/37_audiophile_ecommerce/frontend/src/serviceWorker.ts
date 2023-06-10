/// <reference lib="WebWorker" />

// export empty type because of tsc --isolatedModules flag
export type {};
declare const self: ServiceWorkerGlobalScope;

const domain = process.env.PUBLIC_URL as string;
// const assets = fetch(`${domain}/assets-manifest.json`)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   // eslint-disable-next-line unicorn/prefer-top-level-await
//   .catch(console.error);

// console.log(`ASSETS: ${assets}`);

const assets = {
  'app.css': 'app.css',
  'app.js': 'app.46a2e48ffa2b5f3b85b5.js',
  'script.js': 'script.e2dbb8f2727d51ac24ab.js',
  'serviceWorker.js': 'serviceWorker.js',
  '767.css': '767.css',
  '767.js': '767.1a1f0a1796b4a897b5aa.js',
  '989.css': '989.css',
  '989.js': '989.1b67de880ffa90181a33.js',
  '183.css': '183.css',
  '183.js': '183.df993a185aa2258a11ee.js',
  '213.css': '213.css',
  '213.js': '213.c70bb08268dca622b3d5.js',
  '609.css': '609.css',
  '609.js': '609.4d23092bd064d4562bfc.js',
  'img/shared/tablet/image-best-gear.jpg':
    'img/shared/tablet/image-best-gear.37743784743ba76b4130.webp',
  'img/product-yx1-earphones/tablet/image-gallery-3.jpg':
    'img/product-yx1-earphones/tablet/image-gallery-3.f1ec8d3ee828b612d780.webp',
  'img/product-yx1-earphones/desktop/image-gallery-3.jpg':
    'img/product-yx1-earphones/desktop/image-gallery-3.9a98eecc76719e959ff8.webp',
  'img/product-yx1-earphones/mobile/image-gallery-3.jpg':
    'img/product-yx1-earphones/mobile/image-gallery-3.d1350967e8271b9d5202.webp',
  'img/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg':
    'img/product-xx99-mark-one-headphones/tablet/image-gallery-3.f9865f3b379acd877a1b.webp',
  'img/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg':
    'img/product-xx99-mark-one-headphones/mobile/image-gallery-3.3e676a24d637bb14b24e.webp',
  'img/home/desktop/image-speaker-zx9.png':
    'img/home/desktop/image-speaker-zx9.153cd899b91a08b22b1a.webp',
  'img/shared/desktop/image-best-gear.jpg':
    'img/shared/desktop/image-best-gear.4d4a28e9e7c9ab158dd8.webp',
  'img/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg':
    'img/product-xx99-mark-one-headphones/desktop/image-category-page-preview.3807b3ee0f183b6785c8.webp',
  'img/shared/mobile/image-best-gear.jpg':
    'img/shared/mobile/image-best-gear.28ded79e4776ecd29f87.webp',
  'img/product-xx99-mark-one-headphones/desktop/image-product.jpg':
    'img/product-xx99-mark-one-headphones/desktop/image-product.69ed79fd0a5e5a81bee7.webp',
  'img/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg':
    'img/product-xx99-mark-one-headphones/desktop/image-gallery-3.aa600570262f6ad27889.webp',
  'img/product-zx7-speaker/tablet/image-gallery-3.jpg':
    'img/product-zx7-speaker/tablet/image-gallery-3.752d50026afdca761631.webp',
  'img/home/tablet/image-header.jpg':
    'img/home/tablet/image-header.13f7f18f9ae7b105ca12.webp',
  'img/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg':
    'img/product-xx99-mark-two-headphones/tablet/image-gallery-3.c9e695f6dadb6fce76e1.webp',
  'img/shared/desktop/image-category-thumbnail-headphones.png':
    'img/shared/desktop/image-category-thumbnail-headphones.fbd401d9c735a217286f.webp',
  'img/product-zx9-speaker/mobile/image-gallery-2.jpg':
    'img/product-zx9-speaker/mobile/image-gallery-2.add8167e75c03f37b2c7.webp',
  'img/product-zx7-speaker/mobile/image-gallery-3.jpg':
    'img/product-zx7-speaker/mobile/image-gallery-3.896e4cf0a7b65576a4ed.webp',
  'img/home/desktop/image-hero.jpg':
    'img/home/desktop/image-hero.55c18e980adf7658ae26.jpg',
  'img/product-zx7-speaker/desktop/image-gallery-3.jpg':
    'img/product-zx7-speaker/desktop/image-gallery-3.50fbac0ea290904cad74.webp',
  'img/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg':
    'img/product-xx99-mark-two-headphones/mobile/image-gallery-3.44b547374e699f273a84.webp',
  'img/product-zx9-speaker/tablet/image-gallery-2.jpg':
    'img/product-zx9-speaker/tablet/image-gallery-2.dc922c5004880df1d8e3.webp',
  'img/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg':
    'img/product-xx99-mark-two-headphones/mobile/image-gallery-2.fa88955aa19c069a0ae2.webp',
  'img/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg':
    'img/product-xx99-mark-two-headphones/mobile/image-gallery-1.e501be74d4b484588699.webp',
  'img/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg':
    'img/product-xx99-mark-two-headphones/desktop/image-category-page-preview.0f14e4284f019d62e1d4.webp',
  'img/product-xx99-mark-two-headphones/desktop/image-product.jpg':
    'img/product-xx99-mark-two-headphones/desktop/image-product.0f14e4284f019d62e1d4.webp',
  'img/product-zx9-speaker/mobile/image-gallery-1.jpg':
    'img/product-zx9-speaker/mobile/image-gallery-1.162fc7677de385034e56.webp',
  'img/product-zx7-speaker/mobile/image-gallery-2.jpg':
    'img/product-zx7-speaker/mobile/image-gallery-2.d588758dccb780a96ae6.webp',
  'img/product-zx9-speaker/desktop/image-gallery-2.jpg':
    'img/product-zx9-speaker/desktop/image-gallery-2.d0f0cdd127e678042fe8.webp',
  'img/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg':
    'img/product-xx99-mark-two-headphones/desktop/image-gallery-3.431f902855b243a10180.webp',
  'img/shared/desktop/image-category-thumbnail-earphones.png':
    'img/shared/desktop/image-category-thumbnail-earphones.6e8830d475e04b7b9627.webp',
  'img/product-yx1-earphones/mobile/image-gallery-1.jpg':
    'img/product-yx1-earphones/mobile/image-gallery-1.a5145b7aaff6a28f73aa.webp',
  'img/home/mobile/image-header.jpg':
    'img/home/mobile/image-header.d200a3583e72c7981f46.webp',
  'img/product-zx9-speaker/tablet/image-gallery-1.jpg':
    'img/product-zx9-speaker/tablet/image-gallery-1.25422a926c7e03f15fb4.webp',
  'img/product-zx7-speaker/desktop/image-category-page-preview.jpg':
    'img/product-zx7-speaker/desktop/image-category-page-preview.4601003a52f6fbc1be05.webp',
  'img/product-zx7-speaker/desktop/image-product.jpg':
    'img/product-zx7-speaker/desktop/image-product.26c0ce532534783cf320.webp',
  'img/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg':
    'img/product-xx99-mark-two-headphones/tablet/image-gallery-2.55cb250de76f54b4511f.webp',
  'img/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg':
    'img/product-xx99-mark-one-headphones/tablet/image-category-page-preview.cbc118b526dfb257e23c.webp',
  'img/shared/desktop/image-category-thumbnail-speakers.png':
    'img/shared/desktop/image-category-thumbnail-speakers.bbb1a70b6ebc42d18df7.webp',
  'img/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg':
    'img/product-xx99-mark-two-headphones/tablet/image-gallery-1.b7fe110141f335b3b0d9.webp',
  'img/product-zx7-speaker/tablet/image-gallery-2.jpg':
    'img/product-zx7-speaker/tablet/image-gallery-2.6edc6ba4a2505fa3757a.webp',
  'img/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg':
    'img/product-xx99-mark-one-headphones/mobile/image-gallery-2.e485f05bf026587147df.webp',
  'img/product-zx9-speaker/desktop/image-product.jpg':
    'img/product-zx9-speaker/desktop/image-product.ba07d762b90532ef207d.webp',
  'img/product-zx9-speaker/desktop/image-category-page-preview.jpg':
    'img/product-zx9-speaker/desktop/image-category-page-preview.598799e2020ad3677dd5.webp',
  'img/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg':
    'img/product-xx99-mark-one-headphones/mobile/image-category-page-preview.76443c3b26812728fb52.webp',
  'img/product-yx1-earphones/tablet/image-gallery-1.jpg':
    'img/product-yx1-earphones/tablet/image-gallery-1.4fbddd3e7f2204dd5aeb.webp',
  'img/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg':
    'img/product-xx99-mark-two-headphones/desktop/image-gallery-2.a88a2477f5da102c29c7.webp',
  'img/product-zx9-speaker/desktop/image-gallery-1.jpg':
    'img/product-zx9-speaker/desktop/image-gallery-1.0a0c0d0e09ae70410f5b.webp',
  'img/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg':
    'img/product-xx99-mark-two-headphones/desktop/image-gallery-1.fec85b48a6dccf303601.webp',
  'img/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg':
    'img/product-xx99-mark-one-headphones/tablet/image-gallery-2.783fae95cceabe6e545a.webp',
  'img/product-xx59-headphones/tablet/image-gallery-1.jpg':
    'img/product-xx59-headphones/tablet/image-gallery-1.0f70794c31d7dadebc3e.webp',
  'img/product-xx99-mark-one-headphones/tablet/image-product.jpg':
    'img/product-xx99-mark-one-headphones/tablet/image-product.043a2a4b6b496fd22517.webp',
  'img/product-xx99-mark-one-headphones/mobile/image-product.jpg':
    'img/product-xx99-mark-one-headphones/mobile/image-product.f757980d64af29bfe949.webp',
  'img/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg':
    'img/product-xx99-mark-two-headphones/tablet/image-category-page-preview.5dcebc1ac74a7d5632da.webp',
  'img/product-zx7-speaker/desktop/image-gallery-2.jpg':
    'img/product-zx7-speaker/desktop/image-gallery-2.0aebac5c242d93b311d7.webp',
  'img/product-xx59-headphones/mobile/image-gallery-1.jpg':
    'img/product-xx59-headphones/mobile/image-gallery-1.fd5bd9b42c82f9e79257.webp',
  'img/home/tablet/image-speaker-zx9.png':
    'img/home/tablet/image-speaker-zx9.14af4ebf7265ca4d0b0e.webp',
  'img/home/desktop/image-speaker-zx7.jpg':
    'img/home/desktop/image-speaker-zx7.3d4940e89ebadd9beb50.webp',
  'img/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg':
    'img/product-xx99-mark-two-headphones/mobile/image-category-page-preview.42ad246f85aec7b6d826.webp',
  'img/product-zx7-speaker/mobile/image-gallery-1.jpg':
    'img/product-zx7-speaker/mobile/image-gallery-1.e122714e2ea7fe6e63b0.webp',
  'img/shared/desktop/image-xx99-mark-one-headphones.jpg':
    'img/shared/desktop/image-xx99-mark-one-headphones.10fdef11c453651ae4b5.webp',
  'img/product-yx1-earphones/desktop/image-gallery-1.jpg':
    'img/product-yx1-earphones/desktop/image-gallery-1.602806e7722b167fac6b.webp',
  'img/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg':
    'img/product-xx99-mark-one-headphones/desktop/image-gallery-2.988992ea3225e6cd0070.webp',
  'img/shared/tablet/image-xx99-mark-one-headphones.jpg':
    'img/shared/tablet/image-xx99-mark-one-headphones.95d04bf15368bd35a195.webp',
  'img/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg':
    'img/product-xx99-mark-one-headphones/tablet/image-gallery-1.ab84752ef352e2b1f99a.webp',
  'img/product-zx7-speaker/tablet/image-gallery-1.jpg':
    'img/product-zx7-speaker/tablet/image-gallery-1.44546e25de8d3a7fa234.webp',
  'img/product-zx9-speaker/tablet/image-gallery-3.jpg':
    'img/product-zx9-speaker/tablet/image-gallery-3.e4bf15b79b5fc4d290bd.webp',
  'img/product-zx9-speaker/tablet/image-category-page-preview.jpg':
    'img/product-zx9-speaker/tablet/image-category-page-preview.89573543140fbf8298b0.webp',
  'img/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg':
    'img/product-xx99-mark-one-headphones/mobile/image-gallery-1.0b9c8ea82e53ddfa6990.webp',
  'img/product-xx59-headphones/tablet/image-gallery-3.jpg':
    'img/product-xx59-headphones/tablet/image-gallery-3.a077eeda610777c36083.webp',
  'img/product-yx1-earphones/desktop/image-category-page-preview.jpg':
    'img/product-yx1-earphones/desktop/image-category-page-preview.a059b67bb15b7b0dcf94.webp',
  'img/product-yx1-earphones/desktop/image-product.jpg':
    'img/product-yx1-earphones/desktop/image-product.1d1846889021c82a5606.webp',
  'img/product-xx59-headphones/desktop/image-gallery-1.jpg':
    'img/product-xx59-headphones/desktop/image-gallery-1.70968a6f1d475a35e6d9.webp',
  'img/home/mobile/image-speaker-zx9.png':
    'img/home/mobile/image-speaker-zx9.97769f2fb291eaed1868.webp',
  'img/product-xx59-headphones/desktop/image-product.jpg':
    'img/product-xx59-headphones/desktop/image-product.6febdca9d9630e5b7ebc.webp',
  'img/product-xx59-headphones/desktop/image-category-page-preview.jpg':
    'img/product-xx59-headphones/desktop/image-category-page-preview.77d41dad756f1c6b050b.webp',
  'img/product-zx9-speaker/mobile/image-gallery-3.jpg':
    'img/product-zx9-speaker/mobile/image-gallery-3.c41c82b2db3194541ce0.webp',
  'img/product-zx9-speaker/mobile/image-category-page-preview.jpg':
    'img/product-zx9-speaker/mobile/image-category-page-preview.7f5d920c3b971aa33dda.webp',
  'img/home/tablet/image-earphones-yx1.jpg':
    'img/home/tablet/image-earphones-yx1.21404fad8d187f84fc6f.webp',
  'img/product-xx99-mark-two-headphones/tablet/image-product.jpg':
    'img/product-xx99-mark-two-headphones/tablet/image-product.e99a745d1175d2a0bb47.webp',
  'img/product-xx99-mark-two-headphones/mobile/image-product.jpg':
    'img/product-xx99-mark-two-headphones/mobile/image-product.9bba6baf3e8cdb7afe01.webp',
  'img/product-zx7-speaker/tablet/image-category-page-preview.jpg':
    'img/product-zx7-speaker/tablet/image-category-page-preview.37f08eea0720b4a78552.webp',
  'img/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg':
    'img/product-xx99-mark-one-headphones/desktop/image-gallery-1.8f17771bdad41c798548.webp',
  'img/product-zx7-speaker/desktop/image-gallery-1.jpg':
    'img/product-zx7-speaker/desktop/image-gallery-1.51bc54acb23ef4776d86.webp',
  'img/shared/desktop/image-xx99-mark-two-headphones.jpg':
    'img/shared/desktop/image-xx99-mark-two-headphones.0ead05d95f8a7e5e17d2.webp',
  'img/product-xx59-headphones/mobile/image-gallery-3.jpg':
    'img/product-xx59-headphones/mobile/image-gallery-3.6e9fdbd4696f921c5fef.webp',
  'img/home/mobile/image-speaker-zx7.jpg':
    'img/home/mobile/image-speaker-zx7.82dc33d645ab18cf1ac1.webp',
  'img/shared/tablet/image-xx99-mark-two-headphones.jpg':
    'img/shared/tablet/image-xx99-mark-two-headphones.36fc239b1d26047f2260.webp',
  'img/product-zx9-speaker/desktop/image-gallery-3.jpg':
    'img/product-zx9-speaker/desktop/image-gallery-3.5bad5c687504a4eee848.webp',
  'img/product-zx9-speaker/tablet/image-product.jpg':
    'img/product-zx9-speaker/tablet/image-product.5ec482a5b90b8334f4a0.webp',
  'img/product-zx7-speaker/mobile/image-category-page-preview.jpg':
    'img/product-zx7-speaker/mobile/image-category-page-preview.b0fa634f925595c5a85b.webp',
  'img/product-xx59-headphones/desktop/image-gallery-3.jpg':
    'img/product-xx59-headphones/desktop/image-gallery-3.402d4e805943fb31ef40.webp',
  'img/product-zx9-speaker/mobile/image-product.jpg':
    'img/product-zx9-speaker/mobile/image-product.c3c7f55aef290981df1c.webp',
  'img/product-yx1-earphones/tablet/image-category-page-preview.jpg':
    'img/product-yx1-earphones/tablet/image-category-page-preview.74e2f27bf0076604f473.webp',
  'img/home/mobile/image-earphones-yx1.jpg':
    'img/home/mobile/image-earphones-yx1.48e16a44bd58ed3be41e.webp',
  'img/shared/desktop/image-zx9-speaker.jpg':
    'img/shared/desktop/image-zx9-speaker.6941ee046dc69b16ef1c.webp',
  'img/home/tablet/image-speaker-zx7.jpg':
    'img/home/tablet/image-speaker-zx7.173a4cb5c7acfc7f300c.webp',
  'img/product-yx1-earphones/mobile/image-category-page-preview.jpg':
    'img/product-yx1-earphones/mobile/image-category-page-preview.1e710ed30a8f1d2b6316.webp',
  'img/product-zx7-speaker/tablet/image-product.jpg':
    'img/product-zx7-speaker/tablet/image-product.229fae34cb81b846dee9.webp',
  'img/shared/tablet/image-zx9-speaker.jpg':
    'img/shared/tablet/image-zx9-speaker.6fc92e2f2d0520a60b68.webp',
  'img/product-xx59-headphones/tablet/image-category-page-preview.jpg':
    'img/product-xx59-headphones/tablet/image-category-page-preview.d9c00b361e85112261f3.webp',
  'img/product-zx7-speaker/mobile/image-product.jpg':
    'img/product-zx7-speaker/mobile/image-product.4dc7e99c2ff099acdcef.webp',
  'img/product-yx1-earphones/mobile/image-gallery-2.jpg':
    'img/product-yx1-earphones/mobile/image-gallery-2.725f8ccd8894b15caa12.webp',
  'img/shared/desktop/image-zx7-speaker.jpg':
    'img/shared/desktop/image-zx7-speaker.cd69c97742ac8d169a6f.webp',
  'img/product-yx1-earphones/tablet/image-gallery-2.jpg':
    'img/product-yx1-earphones/tablet/image-gallery-2.01573141ec7491103b16.webp',
  'img/shared/tablet/image-zx7-speaker.jpg':
    'img/shared/tablet/image-zx7-speaker.62fe609453f87aa9fcf5.webp',
  'img/home/desktop/image-earphones-yx1.jpg':
    'img/home/desktop/image-earphones-yx1.97a00dea8ff1e007891d.webp',
  'img/product-yx1-earphones/tablet/image-product.jpg':
    'img/product-yx1-earphones/tablet/image-product.1ea79aa3e440f09a8310.webp',
  'img/product-yx1-earphones/mobile/image-product.jpg':
    'img/product-yx1-earphones/mobile/image-product.67bb0f78dbdcf34ca984.webp',
  'img/shared/mobile/image-xx99-mark-one-headphones.jpg':
    'img/shared/mobile/image-xx99-mark-one-headphones.e6cbac088062a618578a.webp',
  'img/product-xx59-headphones/mobile/image-category-page-preview.jpg':
    'img/product-xx59-headphones/mobile/image-category-page-preview.995d7cb05dc122b739e1.webp',
  'img/product-xx59-headphones/tablet/image-product.jpg':
    'img/product-xx59-headphones/tablet/image-product.b91712935afd2b097b7a.webp',
  'img/product-yx1-earphones/desktop/image-gallery-2.jpg':
    'img/product-yx1-earphones/desktop/image-gallery-2.e70abcaf9ade35800806.webp',
  'img/product-xx59-headphones/mobile/image-product.jpg':
    'img/product-xx59-headphones/mobile/image-product.36e2e9204c7d0452ea18.webp',
  'img/shared/desktop/image-xx59-headphones.jpg':
    'img/shared/desktop/image-xx59-headphones.e824b0c2d796e0d14be2.webp',
  'img/shared/mobile/image-xx99-mark-two-headphones.jpg':
    'img/shared/mobile/image-xx99-mark-two-headphones.f38a951d4068d0b5a728.webp',
  'img/product-xx59-headphones/tablet/image-gallery-2.jpg':
    'img/product-xx59-headphones/tablet/image-gallery-2.aec190b4ed29290ff468.webp',
  'img/product-xx59-headphones/mobile/image-gallery-2.jpg':
    'img/product-xx59-headphones/mobile/image-gallery-2.475a86d4eef72c90e981.webp',
  'img/shared/tablet/image-xx59-headphones.jpg':
    'img/shared/tablet/image-xx59-headphones.0bd49e4977500048a7b3.webp',
  'assets/.svg/logo.svg': 'assets/.svg/logo.bf7edad389d38e0f95d5.svg',
  'img/shared/mobile/image-zx9-speaker.jpg':
    'img/shared/mobile/image-zx9-speaker.d98851175b3f36d2d467.webp',
  'img/cart/image-xx99-mark-one-headphones.jpg':
    'img/cart/image-xx99-mark-one-headphones.6e8b7beecd38c34ed5c4.webp',
  'img/product-xx59-headphones/desktop/image-gallery-2.jpg':
    'img/product-xx59-headphones/desktop/image-gallery-2.b66a7fced88d5b8017de.webp',
  'img/cart/image-xx99-mark-two-headphones.jpg':
    'img/cart/image-xx99-mark-two-headphones.74ff04c8e03f962c759d.webp',
  'assets/.svg/icon-cash.svg': 'assets/.svg/icon-cash.662913859280cc5c6ead.svg',
  'img/shared/mobile/image-zx7-speaker.jpg':
    'img/shared/mobile/image-zx7-speaker.4f291ce98b1720c8fdda.webp',
  'favicon-32x32.png': 'favicon-32x32.png',
  'img/cart/image-zx9-speaker.jpg':
    'img/cart/image-zx9-speaker.92ab92da533bd5bc50aa.webp',
  'index.html': 'index.html',
  'assets/.svg/icon-instagram.svg':
    'assets/.svg/icon-instagram.9806f9840902a1458290.svg',
  'assets/.svg/icon-cart.svg': 'assets/.svg/icon-cart.3f044dee9333470378fc.svg',
  'img/cart/image-zx7-speaker.jpg':
    'img/cart/image-zx7-speaker.e220712fdf96e30b4ca5.webp',
  'img/shared/mobile/image-xx59-headphones.jpg':
    'img/shared/mobile/image-xx59-headphones.2ba6720895c0b56145a7.webp',
  'img/cart/image-yx1-earphones.jpg':
    'img/cart/image-yx1-earphones.2815e69db1eccf31f6ce.webp',
  'assets/.svg/icon-twitter.svg':
    'assets/.svg/icon-twitter.d6504ef1fd2b3dd33fa5.svg',
  'img/cart/image-xx59-headphones.jpg':
    'img/cart/image-xx59-headphones.28078cf7210de9d7d876.webp',
  'assets/.svg/icon-facebook.svg':
    'assets/.svg/icon-facebook.7a43eb34d65a7ceecec4.svg',
  'assets/.svg/pattern-circles.svg':
    'assets/.svg/pattern-circles.f4df3610b83b818abbbe.svg',
  'assets/.svg/icon-hamburger.svg':
    'assets/.svg/icon-hamburger.8acf7655e141fd1a30d2.svg',
  'assets/.svg/icon-check.svg':
    'assets/.svg/icon-check.0fdb734289732870a2dc.svg',
  'assets/.svg/icon-arrow-right.svg':
    'assets/.svg/icon-arrow-right.76d7ef162f24034ea594.svg',
};

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const { url, method } = event.request;

  if (
    method === 'GET' &&
    (url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('.webp'))
  ) {
    const reqAsset = url.replace(domain, '');
    const resAsset = assets[reqAsset as keyof typeof assets];
    if (resAsset !== 'undefined') {
      const newResponse = `${domain}/${resAsset}`;
      event.respondWith(fetch(newResponse));
    }
  }
});