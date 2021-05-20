'use strict';

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.
*/

const wait = function (seconds) {
  return new Promise (function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images')

const createImage = function(imgPath) {
  return new Promise(function(resolve, reject){ 
    const image = document.createElement('img');
    image.setAttribute('src', imgPath);
    
    image.addEventListener('load', function() {
      imgContainer.append(image);
      resolve(image);
    });
    
    image.addEventListener('error', function() {
      reject(new Error('Image Not Found!'));
    });
  });
};

const loadNPause = async function() {
  try {
    // Load Image #1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 Loaded');
    // Pause #1
    await wait(2);
    // Remove Image #1
    img.style.display = 'none';
    
    // Load Image #2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 Loaded');
    await wait(2);
    img.style.display = 'none';
    
    // Load Image #3
    img = await createImage('img/img-3.jpg');
    console.log('Image 3 Loaded');
    await wait(2);
    img.style.display = 'none';
  }
  catch (err) {console.error(err)};
};

// loadNPause();

// TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.
// 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
// 2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array 😉
// 5. Add the 'paralell' class to all the images (it has some CSS styles).

const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const loadAll = async function(imgArr) {
  try {  
    const imgs = imgArr.map(async img => await createImage(img))
    const imgsAll = await Promise.all(imgs);
    console.log(imgs, imgsAll);
    imgsAll.forEach(img => img.classList.add('parallel'))
  } catch (err) {console.error(err)};
};

loadAll(imgArr);