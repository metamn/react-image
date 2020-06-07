# react-image

Responsive images for React

## Why?

Images are a vast and continuously evolving subject in web development. From capturing screenshots automatically to displaying them responsively without flipping the page on loading — perhaps with placeholders — the list grows.

Just consider the following use case: display screenshots of web pages for design inspiration. The process is:

1. Select the best part of the website to screenshot.
2. Create both portrait and landscape screenshots with large, retina friendly resolution.
3. Resize them to lower resolutions for mobile and tablet displays.
4. Optimize them with compression.
5. Convert them to modern formats like WebP
6. Add images to content responsively with art direction and resolution switching.
7. Display them responsively without flicks during page load using an intrinsic ratio container.
8. Display a progressive placeholder while loading.
9. Make sure tens of images don't slow the page by using a lazy loading technique.
10. Make sure they are served via a CDN for fast delivery.

What if this process could be reduced to:

1. Select the best part of the website to screenshot.
2. Capture both portrait and landscape screenshots with large, retina friendly resolution.
3. Generate optimized responsive images.
4. Add images to content with a single line of code without the need to set up <picture> or srcset, sizes.
5. Display images

## Capture screenshots (1-2)

With a tool like [screenshooter](https://github.com/vladocar/screenshoteer) you can capture both portrait and landscape screenshots in the command line.

However only the top of the screen is captured. If you want to capture other parts of the page like the footer you'll have to do it manually.

## Generate responsive images and code (3-4)

Use Cloudimage's [Responsive Image Breakpoints Generator](https://www.responsivebreakpoints.com/) to generate all images needed and the associated HTML code. Both `<img>` and `<picture>` code is generated.

See a [demo here](cloudimage.html) of what you'll get from Cloudimage.

## Display images

Cloudimage offers a [React library](https://github.com/scaleflex/react-cloudimage-responsive) to display images hosted on their platform. However the costs can [go high](https://www.cloudimage.io/en/pricing), and, I found on browser resize sometimes [the images become blurry](http://metamn.io/react-best-practices/?path=/docs/loading-images--art-direction-with-Cloudimage).

## Resources

- [Responsive Images the Simple Way](https://cloudfour.com/thinks/responsive-images-the-simple-way/)
- [An Almost Ideal React Image Component ](https://github.com/stereobooster/react-ideal-image)
