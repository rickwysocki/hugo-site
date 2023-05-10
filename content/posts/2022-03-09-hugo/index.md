---
title:  "Hugo"
date:   2022-03-09 16:08:22 -0500
summary: So, I'm learning Hugo.
description: A review of how I'm learning Hugo.
tags: [hugo]
featured_image: featured.png
featured_alt: Here is some alt text.
classes: ["Digital Writing"]
---

## Intro

A few months ago, I got tired of dealing with my Jekyll site. That site was hosted on GitHub pages and used the Minimal Mistakes theme, which I continue to love. My issue, though, was that using a remote theme that I didn't quite understand led to ongoing difficulties with deployment. These, of course, all stemmed from user error.

Frustrated again by a site that wouldn't build or deploy, I said: "Screw it. I'm going to readymade option." I chose Ghost.

This platform seemed to have a lot of value:

- It seemed oriented toward writing and content over anything else.
- There are a lot of cool analytics features within the platform.
- It worked.

I was unable to stick with Ghost.

The site worked, for sure. But it didn't give me the kind of granular control over content that I wanted. Worse, it didn't let me me *tinker*, which is the most important feature of a technology, to me.

So, I decided to learn how to create a Hugo site, from scratch.

## Prior Knowledge

I went into this project knowing essentially nothing except about Hugo except its branded tagline: "A content manager's dream." That was enough to hook me in. Sure, I've had tons of experience with HTML, CSS/SCSS, and the relevant languages and markup syntax involved in Jekyll, like Liquid and Ruby. But I had no experience with Go, the language on which Hugo is based, or any of the other relevant aspects of the Hugo framework.

## Current Knowledge

I've taught myself... a lot. Over the past several weeks, I've gone from knowing nothing to having built a pretty much fully functional Hugo site. It may not look like much, currently being pretty "Bootstrap-y," but there's plenty of time to figure that out on a rolling basis.

Here is a list of things I've learned and / or built into this site during this process:

- Pretty much all of the methods of image processing available in Hugo. I put this first because it was probably the most difficult aspect of the project, requiring the most head-scratching and figuring out how Go works as a language. All of the images across the site are sized automatically to increase page-load time. That's pretty cool.
- Lots (lots!) about SEO and what to include as far as metadata goes. I knew a fair amount about this, but Minimal Mistakes did a lot of things automatically that I didn't understand and had to learn.
- Foregrounding site and page parameters to follow DRY principles as much as I possibly could. My plan is to release the final version of this theme as a project on GitHub, so I've designed this version to be as modular, customizable, and user-oriented as possible. More can and will be done here, but I'm happy with it so far.
- Lots about Hugo shortcodes. One of my bugbears is writing accessible-first markup, as it should be for everyone. It was harder than I thought to create the ability to auto-resize image--which requires accessing them as as global or page resources--and also pass in thinks like alt-text and, as necessary, captions. So, I wrote some shortcodes that do just that. There are others that are less impressive but still useful. I'll detail those at a later time.
- While I've used Bootstrap many times in the past, I've never done so using NPM. I wanted a deeper level of customizability (you probably can't currently tell, to be fair), so I learned how to use the NPM version of Bootstrap.
- Finally, I've just spent a lot of time messing around with the Hugo way of managing content. There's a lot more to come in that regard (see below), but I've learned a lot and am loving it so far.

## Next Steps

While I'm happy with all the work I've done here, there are quite a few things I want to get squared away. Here's a list of what's to come.

- **The visual design.** I know it, you know it; this site looks very boring. A next move will be focusing on a visual redesign of some of what I have here so far.
- **Bringing in more content.** I'm planning to bring in old posts and resources, but relatively slowly. The reason is that I want to be exactingly intentional about how I create the content structure for what I have here.
- **Release the theme.** The nice thing is that I'm really not all that far away from this. I'll probably send something up to GitHub once I figure out the visual redesign.

Fun stuff! I've learned so much building this site and developed a lot of useful new skills.
