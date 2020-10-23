const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray: GalleryData[];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let count = 5;
const API_KEY = '6HL117qqw4aTFpcCjNEwtkCJKk8U6NVGIhiv5kvdMbY';
let API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${count}
`;

interface GalleryData {
  alt_description: string;
  urls: {
    regular: string;
  };
  links: {
    html: string;
  }
}

interface Attribute {
  src?: string;
  alt?: string;
  href?: string;
  title?: string;
  target?: string;
}

// Check if all images were loaded
function imageLoaded() {
  imagesLoaded++;

  if (imagesLoaded === totalImages) {
    ready = true;
    loader!.hidden = true;
    count = 30;
    API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${count}
`;
  }
}

// Helper function to set attributes on DOM elements
function setAttributes(element: HTMLElement, attributes: Attribute) {
  for (const [key, value] of Object.entries(attributes as Record<string, string>)) {
    element.setAttribute(key, value);
  }
}

