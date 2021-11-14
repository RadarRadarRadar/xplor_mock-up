'use strict';

export function preloadImages() {
  let images = []
  for (i=0; i < preloadImages.arguments.length; i++){
    images[i] = new Image();
    images[i].src = preloadImages.arguments[i];
  }
}