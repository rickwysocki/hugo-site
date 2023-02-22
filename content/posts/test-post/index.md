---
title:  "Learning Hugo"
date:   2022-02-15 16:08:22 -0500
summary: So, I'm learning Hugo.
description: A review of how I'm learning Hugo.
tags: [hugo]
featured_image: featured.jpeg
featured_alt: Here is some alt text.


---

So, I'm learning Hugo.

This is a really fun framework, and I've learned more in about a week designing this site than I may ever have in such a condensed period of time.

There's still a lot to do, though:

- ~~I'm done some fine design stuff here, but I really want to get the template set up with the Node version of Bootstrap so that I can do more related to customizing site-wide variables.~~
- I need to get all the SEO stuff squared away.
- ~~Obviously, set up .git to do versioning, especially. A good time to get that done is when I get Node running and start playing with bootstrap's default variables.~~
- Figure out how to set up a light / dark mode toggle.
- Make sure images and all that work fine.
- Eventually, I'd like to package this all up as a theme to show off as a project, so I'm sure there is lots that I don't know that I don't know yet related to that.
- ~~Figure out featured images.~~
- ~~Figure out the Open Graph stuff.~~
- Create useful 404 page.

Ideas for the theme name? Here's a few off-the-top:

- Super Simple Hugo

## Front Matter

```
---
title:  "Learning Hugo"
date:   2022-02-15 16:08:22 -0500
summary: So, I'm learning Hugo.
description: A review of how I'm learning Hugo.
tag: hugo
image:
  src: featured.jpg
  alt: Me
---
```

The featured image can also be set as a site-wide variable in the Config file. Tip: The image aspect ratio should be 1.91 : 1, with the usual size being 1200x627 pixels. Obviously, the site-wide featured image will be overwritten by local page bundles with featured images.
