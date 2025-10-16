+++
title = "2024 Review: The Movies"
author = ["Rick Wysocki"]
date = 2025-01-13T00:00:00-05:00
tags = ["film"]
draft = false
summary = "Visualizations of, and thoughts on, my year watching movies."
+++

I've been a bit slow on the blog here at the start of the year. A lot of
my attention has been dedicated to getting my Spring classes off the
ground. I redesigned both my professional writing and research writing
courses pretty extensively this semester. What I didn't account for was
a mysterious missing week in our break this year...

Excuses aside, I am committing to resuming my [link
roundups](/tags/link-roundup) next week. Actually, I would have one this week, but I
decided to finish a 2024 film post instead.

Like everyone with too much free time and an interest in movies, I love
Letterboxd. In fact, before I get into the post, go ahead and follow me
on [Letterboxd](https://letterboxd.com/rickwysocki/). Come on, let's
be friends.

Toward the end of the year, I realized that Letterboxd allows you to
export your data as a .csv file. Immediately, I knew what I would be
doing: data visualizations with [d3.js](https://d3js.org/).

Did I know how to use d3.js? No. But I know enough JavaScript to be
dangerous and am a generally obsessive person. I actually _was_ able to
generate a variety of visualizations of my 2024 cinematic experience.
The problem came when I tried to move these visualizations out of
[Observable](https://observablehq.com/platform/notebooks). I realized
I needed a bit more learning time than I wanted to spend before
actually... writing this post. No matter: I'll learn it later.

What you'll see below:

1.  A set of handsome and spunky visualizations of my 2024 Letterboxd
    data. Just kidding: they're very straightforward Google Sheets
    charts. But, hey, they work.
2.  A table of most of my raw data for the year. I've omitted my actual,
    often embarrassing reviews, but I've included the URI links to them
    in case you really are interested.

**A quick note:** These are pretty bare bones insights, and this post was
really about the journey more than the end product. The most exciting
part of learning I could export my data was visualizing genres but,
sadly, genre doesn't seem to be included in the data set. I looked into
whether Letterboxd has a public API, and it doesn't. Web scraping is a
possibility, but I don't currently have that kind of time. If ANYONE has
ideas or recommendations for exporting a user's film data, including
genre, I **beg** you to let me know in the comments or send me an email.

Okay, onto the visuals.


## Films by Rating {#films-by-rating}

I try to maintain a simple ethos on Letterboxd: only you (I) can fight
rating inflation. Looking at the data, I feel like I've failed at that
goal. On the other hand, my statician friend reminded me once that
people tend to seek out movies that are good and not ones that are bad,
so it makes sense for their to be a bit of a curve upward. So maybe I am
holding my position better than I think.

<div class="html">

&lt;iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="<https://docs.google.com/spreadsheets/d/e/2PACX-1vRZ9b9uE5N6k1tRKhx4RA2baBO2cwSqE9yoS9NpMNxSRhsTeJXR7vxAoj771Tg8EJ-imfgZfdG4IvSg/pubchart?oid=871881655&amp;format=interactive>"&gt;

</div>

<div class="html">

&lt;/iframe&gt;

</div>


## Films By Release Year {#films-by-release-year}

At first, I was surprised here. I'm not pretentious when it comes to
movies (at least, I don't think I am). If asked whether I tend toward
watch older or contemporary films, though, I'd say older ones.

This visualization, though, shows a clear spike in 2024 and more
relatively films than I'd expect in the 2020s. Thinking about it more, I
first realized that my buddy Ari and I (I told him I'd give him a
shout-out) go see a lot of new films in the theater, so the 2024 bump
made sense.

<div class="html">

&lt;iframe width="600" height="1293" seamless frameborder="0" scrolling="no" src="<https://docs.google.com/spreadsheets/d/e/2PACX-1vRZ9b9uE5N6k1tRKhx4RA2baBO2cwSqE9yoS9NpMNxSRhsTeJXR7vxAoj771Tg8EJ-imfgZfdG4IvSg/pubchart?oid=891124448&amp;format=interactive>"&gt;

</div>

<div class="html">

&lt;/iframe&gt;

</div>

I was still surprised by the distribution. But as I always tell my
students, the subjective decisions involved in representing data tell
_particular_ stories, not absolute ones. And I felt stupid, having
clearly forgot that, when I parsed the data another way.


## Films By Release Decade {#films-by-release-decade}

Here, I visualize the data by release decade, and everything makes more
sense.

<div class="html">

&lt;iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="<https://docs.google.com/spreadsheets/d/e/2PACX-1vRZ9b9uE5N6k1tRKhx4RA2baBO2cwSqE9yoS9NpMNxSRhsTeJXR7vxAoj771Tg8EJ-imfgZfdG4IvSg/pubchart?oid=1291011069&amp;format=interactive>"&gt;

</div>

<div class="html">

&lt;/iframe&gt;

</div>

Now, we've got a much more visually-even distribution across several
decades. I am slightly embarrassed that I watched no movies from the
1950s, however, since that's ostensibly my favorite decade in film.


## Wrapping Up {#wrapping-up}

So... there you go. Again, this was more about the journey than the end
product. If you want to see the raw data, take a look at the table
below. And, PLEASE, if you know a way to export genre-based viewing data
from Letterboxd, let me know.


## The Data {#the-data}

{{&lt; csv-to-table "films.csv" &gt;}}
