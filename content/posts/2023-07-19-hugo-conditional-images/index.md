---
layout: single
title:  "Conditional Image Layouts in Hugo"
date:   2023-07-20 08:40:22 -0500
summary: This post describes how to write conditional image layouts using Go and HTML for a Hugo site. 
featured_image: featured.png
featured_alt: A screenshot of some of the code from this tutorial.
featured_caption: Photo by Campina Grande - https://unsplash.com/photos/Z19vToWBDIc
published: true
featured_post: true
tags:
  - Web Development
  - Hugo
---

## Introduction

In this tutorial, I'll describe how to write conditional image layouts using [Go](https://go.dev/) and HTML for a [Hugo](https://gohugo.io) site. 

When I started designing [Little Ghost](https://github.com/rickwysocki/littleGhost), my Hugo theme, I wanted to conditionally insert featured images based on parameters called in a page's front matter and the site configuration file. Hugo's [figure shortcode](https://gohugo.io/content-management/shortcodes/#figure) was an option, but I wanted something more automatic. After a bit of learning, I learned how easy this can be in Hugo.

## Part 1: Featured Images for Pages (Basic)

There were a few criteria I wanted to meet for featured image layouts. Specifically, I wanted Hugo to:

- Check the page's front matter for a featured image.
- If a featured image is declared, pull it in as a resource and inject it into the HTML.
- Allow the user to include alt text for the image within the front matter.

Finally, I wanted this to be optional. If no front matter is declared, no HTML should be rendered for the image layout.

### Building the Featured Image Layout


Here is the entire HTML and Go markup / code for this feature. I'll explain each line below.

```
{{ if isset .Params "featured_image" }}

{{ $image := .Resources.GetMatch .Params.featured_image }}

<img
    {{ with $image }}src="{{$image.RelPermalink }}"{{end}}
    alt="{{ .Params.featured_alt }}"
/>

{{ end }}
```

So what is each line doing here? 

First, we check whether a `featured_image` is set in the front matter. If there isn't everything else will be ignored:

```
{{ if isset .Params "featured_image" }}
```

Assuming we have a featured image, we want to get it as a page resource. This is important because, as described in [the Hugo documentation](https://gohugo.io/content-management/page-resources/), page resource files get a page-relative URL, which simplifies the front matter we need to write. Additionally, we'll see later that getting our image as a page resource will let us make creative use of Hugo's image-processing methods.

So, what we want to do is:

1. Get `featured_image`.
2. Ensure that we are getting it as a _page resource_.
3. Store the image as a variable that we can use in our HTML layout.

The next line accomplishes all three of these tasks:

```
{{ $image := .Resources.GetMatch .Params.featured_image }}
```

At this point, we have our image as a resource, but we haven't created its display. To do so, we'll go ahead and create an `<img>` layout that calls in the resource.

First, we'll open (and leave open) the image tag:

```
<img
```

Then, as with any image tag, we need to include the source for the file. This is extremely easy now that we've called the image as a resource and assigned it to a variable: we just need to add `.RelPermalink` to get the URL. 

The only slight twist is that we need to set the scope for the image's source permalink so that we can also declare the alt text using another front matter parameter. So we'll also include `{{ with }} ... {{ end }}` around _only_ the `src` line:

```
<img
    {{ with $image }}src="{{$image.RelPermalink }}"{{end}}
/>
```

Finally, we can also include alt text with our image using the `featured_alt` parameter in the front matter:

```
alt="{{ .Params.featured_alt }}"
```

At the end, we just need to close the conditional statement we started at the beginning of the block with `{{ end }}`. Here's the whole block again:

```
{{ if isset .Params "featured_image" }}

{{ $image := .Resources.GetMatch .Params.featured_image }}
<img
    {{ with $image }}src="{{$image.RelPermalink }}"{{end}}
    alt="{{ .Params.featured_alt }}"
/>

{{ end }}
```

Once you've written this into your page layout file, **all you'll ever have to do** is include the following two lines in your page front matter:

```
---
featured_image: image.jpg
featured_alt: "Your alt text."
---
```

It's that easy!

## Conditional Images and Image Processing in List Pages

But there's more! We can expand our basic layout and front matter parameters to create an even more dynamic and intelligent image layout for a list page. This page will range over relevant content and return an optimized featured image. A good example of (actually the best example, since we'll be recreating a small part of it) is the [Posts page](/posts/) for this website.

### The Full Markup / Code

First, let's look at the markup / code for a _full grid layout_ of blog posts. Ignore Tailwind CSS classes, which are irrelevant. 

```
{{ range (.Paginate ( .Pages.ByDate.Reverse )).Pages }}

      <article class="p-6 shadow-lg flex flex-col">

        {{ if isset .Params "featured_image" }}

          {{ $image := .Resources.GetMatch .Params.featured_image }}
          <a href="{{ .RelPermalink }}">
            <img
                {{ with $image }}src="{{ (($image.Crop "1200x800").Resize "600x").RelPermalink }}"{{ end }}
                alt="{{ .Params.featured_alt }}"/>
          </a>

        {{ else }}

        {{ $image := resources.Get .Site.Params.post_image }}

          <a href="{{ .RelPermalink }}">
            <img 
                {{ with $image }}src="{{ (($image.Crop "1200x800").Resize "60x").RelPermalink }}" {{ end }} 
                alt="{{ .Site.Params.post_image_alt }}"
            />
        </a>

        {{ end }}

        <div class="grow">

          <h3 class="font-bold text-xl mt-2"><a href="{{ .RelPermalink }}">{{ .Title }}</a></h3>

          <p class="mb-4">{{ .Params.summary }}</p>

        </div>

        <div>

          <a href="{{ .RelPermalink }}" class="p-2 rounded-lg bg-indigo-600 text-white">Read More</a>
        
        </div>

      </article>

  {{ end }}
```

To summarize what's going on here: we're creating a layout where Hugo will range over every relevant page and, for each one, produce a grid item containing:
- a featured image, 
- a summary, 
- and a "Read More" button. 

The main thing you need to understand is that all of this is surrounded by:

```
{{ range (.Paginate ( .Pages.ByDate.Reverse )).Pages }}

    ...

{{{ end }}}
```

What this is stating (beyond some pagination information) is that Hugo is going to range over every relevant page and create whatever is included between these tags.

### Back to the Images

So, back to our focus: the featured image. We _could_ simply copy the image layout we created above. But I want something beyond the basics. Specifically:

1. I want all these images to be the same size, automatically, so that they look nice together.
2. I want a way to increase page load time. This is going to be a lot of images loading on a single list page. 
3. I want a backup image even if a page _doesn't_ have a featured image assigned. A single page without a featured image is fine, but inconsistency on a list page bugs me. 
4. I don't want to write any extra front matter beyond what we've included for the single layout above.

So how do we do all this? Let's take a closer look at the image-related part of the markup / code above:

```
{{ if isset .Params "featured_image" }}

    {{ $image := .Resources.GetMatch .Params.featured_image }}

    <a href="{{ .RelPermalink }}">
        <img
            {{ with $image }}src="{{ (($image.Crop "1200x800").Resize "600x").RelPermalink }}"{{ end }}
            alt="{{ .Params.featured_alt }}"
        />
    </a>

{{ else }}

    {{ $image := resources.Get .Site.Params.post_image }}

    <a href="{{ .RelPermalink }}">
        <img 
            {{ with $image }}src="{{ (($image.Crop "1200x800").Resize "600x").RelPermalink }}" {{ end }}
            alt="{{ .Site.Params.post_image_alt }}"
        />
    </a>

{{ end }}
```

Much of this should hopefully look familiar to you now. To summarize the first half of the block:

1. We're again checking to see if a featured image has been set. If it has, we call it as a resource into a variable.
2. We're now surrounding the image with an `<a href="{{ .RelPermalink }}"></a>` tag so that clicking the link takes us to the page itself. Note that we're still in the page scope, so `.RelPermalink` is returning the link to the page, not the image.
3. We're including the image source and within the correct scope using `{{ with $image }}{{ end }}`. 
4. We're getting the alt text from the front matter and inserting it into the HTML.

Now let's look at the second half, which starts at the `{{ else }}` line:

```
{{ else }}

    {{ $image := resources.Get .Site.Params.post_image }}

    <a href="{{ .RelPermalink }}">
        <img 
            {{ with $image }}src="{{ (($image.Crop "1200x800").Resize "60x").RelPermalink }}" {{ end }}
            alt="{{ .Site.Params.post_image_alt }}"
        />
    </a>

{{ end }}
```
Note that we're getting something different in our variable here: `.Site.Params.post_image`. What this block is saying is that if a featured_image **hasn't** been called on a page, Hugo should go get a default image declared in your configuration file title `post_image`. Again, you can include also define the alt text there as `post_image_alt`. In your config file, it would look like this:

```
post_image = 'images/image.png'
post_image_alt = 'Alt text.'
```

Note that I'm using a config.toml file, so the specific syntax might vary since Hugo allows for YAML, TOML, or JSON. This won't have any effect on the layouts we've created. 

### Processing Our Images

We're in the home stretch now. There's one small piece of our markup / code that we haven't talked about, but it's doing some essential work. Note that we've added something to how we've called our image source:

```
{{ (($image.Crop "1200x800").Resize "600x").RelPermalink }}
```

We're using some of [Hugo's image-processing methods](https://gohugo.io/content-management/image-processing/) here. Because we wanted equally sized images, we employ the `.Crop` method to first take our image and crop it to 1200x800. Because the image will be used in a grid layout where it will be smaller, we then resize our cropped image to half size using the `Resize` method. This will help with page load time. Finally, we're returning the permalink for the now-processed image. You can and should tweak the crop size and the resize to your liking.

## Conclusion

Once you've set up these layouts, the only thing you will _ever_ have to write is:
- The `featured_image` and `featured_alt` parameters in your page front matter.
- The default `post_image` and `post_image_alt` in your config file as a fallback. Hopefully, this helped you learn something about using creating image layouts in Hugo.

You can focus entirely on your content and let Hugo and your layouts do the work for you.

### Next Steps


If you've got this down and want to do more with what you've learned, here are two small project ideas:

- Rewrite the `<img></img>` layouts using `<figure></figure>` tags. See if you can add an optional parameter for `figcaptions`.
- Look over some of the other [image processing](https://gohugo.io/content-management/image-processing/) methods that Hugo ships with. What other ones might you include? 

### An Easier Solution

Finally, if you just want a simple and flexible Hugo theme that does all of this for you, check out [Little Ghost](https://github.com/rickwysocki/littleGhost).