# react-image
Responsive images for React

# Why?

- Current image libraries are incomplete, bounded or expensive. 
- Incomplete: Either lazy loading, or art direction, or preloading, or compression, or something is missing. (Npmjs and Github searched for `react-image` with nothing really usable found)
- Bounded: `gatsby-image` comes bundled with Sharp and transformers
- Expensive: Cloudimage seems to be perfect however on 10k visitors / month viiting 5 pages with 20 images needs the Pro plan which is EUR79/month)
- Images are a [constant](http://metamn.io/mr-ui/?selectedKind=Basics%2FImages%20%E2%9C%93&selectedStory=Overview&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook-addon-background%2Fbackground-panel&background=beige) [itch](http://metamn.io/react-best-practices/?path=/docs/loading-images--art-direction-with-cloudinary) [for me](https://github.com/metamn/inu-v2-b/blob/master/react-src/src/components/ImageResponsive/ImageResponsive.js). Time to solve the problem.  
