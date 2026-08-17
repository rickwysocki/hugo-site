+++
title = "Tracking Reading in Emacs"
author = ["Rick Wysocki"]
date = 2026-08-17T18:41:00-04:00
draft = false
summary = "A Better Reads system for tracking books in Org Mode."
+++

A few weeks ago, I shared my approach to tracking my reading in Emacs Org Mode online. A couple folks seemed interested so, despite the _extreme_ simplicity of my system, I figured I'd write up and post what I've worked out.


## The Goal {#the-goal}

I read a lot of books over the course of the year. As with any metrics-poisoned citizen of the modern Dystopia, I like to track what I've read, when I finished it, quick thoughts about the book, etc. I used to use the book-tracking-site-that-will-not-be-named (bad). After I moved away from that, I switched to Bookwyrm (good). At a certain point, though, I realized that what I actually wanted was very simple, since I just don't care about the social element of book tracking. Enter Org Mode.

After thinking about it for an extremely short amount of time, I noticed that book tracking is, at root, a TODO list:

-   We enter books we want to read. (A TODO.)
-   We read them. (The part that actually matters.)
-   We check them off the list and get the dystopian dopamine (dystopiamine?)  hit of checking something off a list, as though that's the part that matters. (The DONE.)

All that can be done on a piece of paper, but we probably also want some sort of **template** to **capture** what we want to read. We probably also want to **stamp** the exact **time** that a book is completed and be **prompted** for a quick review.

As you might be noticing, Org Mode has all this covered already, very easily. Still, here's the setup I use in case you want to use it.


## The Setup {#the-setup}

Let's start with the main file, which I call `books.org`. The important bit here is the setup configuration at the top of the page.

```org
#+COLUMNS: %TODO %TITLE(Title) %AUTHOR(Author) %CLOSED(Finished) %RATING(Rating)
#+PROPERTY: Rating_ALL + ++ +++ ++++ +++++
#+SEQ_TODO: TO-READ(t) | READ(r@/!)
```

Just to explain what's happening here, I'm setting up columns to include the TODO type (this will be either "read" or "to-read"), the title of the book, the author, the date closed, and a rating. In the second line, I set up a basic five-star rating system (you can change this to whatever you want). Finally, in the third one, I define my two TODO states. The additional information after "r" in the READ todo state indicates that, when a book is marked as complete, Emacs will prompt me to log text about it (@) and also record a timestamp (!). _One note: My brain and fingers **always** want to type "d" (for DONE) when I check off a book. I like the semantic meaning of keeping it "r," but it's been a while it hasn't stuck. I might just change it, semantics be damned.)_

Simple simple. Then, I just use a capture template that calls for an entry:

```org
* TO-READ %^{Title}
:PROPERTIES:
:Title: %\1
:Author: %^{Author}
:RATING:
:END:
```

Note that the title ends up both in the headline and in the properties drawer. The reason is that I currently use this is column view most often. I could just have called %ITEM (instead of %Title) in the column setup above, but doing so adds in the asterisk from the headline, which annoys me. This method avoids that. (At some point I'm going to create a filter in my agenda file just for querying this book list and ignore column view altogether, but I haven't gotten around to it and this method works for now.)

Anyway, here's the description of how it works:

-   I find a book I want to read and hit my capture command for that template. It queries me for the title and then the author, then gets added to my books file as a TO-READ to-do item.
-   I read the book. (Again, the ONLY part that actually matters.)
-   Then, when I switch from TO-READ to READ, it marks the entry with a timestamp and queries me to add a note where I write a short review for myself. Then I enter that and it's all done.

Three points:

1.  You need to take some care about the timestamp. If you accidentally alter the TODO state you need to delete the timestamp it created. Otherwise, it will show up in the "Finished" column, even if the state is TO-READ. There's probably some way to account for user-error here but it's really not a big deal and I haven't gotten around to it.
2.  I'm realizing as I write this that the only thing the user isn't automatically prompted for is the rating. As with all things in Emacs, it's certainly doable somehow, and something I'll swing back to at some point.
3.  I'm planning to write some Elisp functions that will display the metrics in other ways, such as books read this year, this month, etc. I'll update this post once I do.
