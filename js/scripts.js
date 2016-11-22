// My Scripts
// Store & Generate Number
var maxRand = 3;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = '/img/full-res/unsplash.jpg';
var img1 = '/img/full-res/unsplash-1.jpg';
var img2 = '/img/full-res/unsplash-2.jpg';

// Show Images
$('header img').attr('src', eval('img' + numRand) );
$('figure').lightGallery(
{
    selector: 'a'
    
});