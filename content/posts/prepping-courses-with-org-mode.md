+++
title = "Un-Learning the LMS: Prepping Courses with Org Mode"
author = ["Rick Wysocki"]
date = 2026-09-11T12:50:00-04:00
tags = ["emacs"]
draft = false
summary = "How I use Org Mode for better course materials, better pedagogy, and more agency in the college classroom."
+++

It's the start of the semester here and, like every semester since starting the Emacs journey, I've moved more of my workflow into the program. This Fall feels more like punctuated equilibrium-style jump than the slow evolution I've gone through in the past, and I figured I'd share some of the systems I've worked out that so far are are really beneficial for me. I'll detail the following:

-   Using dynamic blocks to generate table-based course schedules out of a lesson plan document.
-   Employing technical writing's techniques of component content modularity and the DRY principle within Emacs to create chunks of content that can be used across documents and courses.
-   Making creative use of Org Mode syntax and export functions to maximize accessibility, offer students multiple formats (always from the same source content, making edits and updates a breeze), and anticipate and afford administrative review of course materials.
-   Finally, creating material in Emacs that can be easily integrated into your learning management system _without_ succumbing to the "LMS first" mindset that (in my opinion) is slowly eating away the core of pedagogy and creating distance between teachers and the products of their intellectual work.

    Each of these areas builds on the previous ones, but they also each present independent benefits.


## Lesson Planning with Dynamic Blocks and Column View {#lesson-planning-with-dynamic-blocks-and-column-view}

I'm not an ideologue. I can say it: Creating tables in Org Mode sucks. I wouldn't trade anything about Emacs/Org Mode to make tables easier (which for lots of reasons are just hard to implement in plain text), but I don't want to give up my tables. They're one of the most useful genres for presenting complex information in a simplified format for readers. (And, personally, one of my favorite information genres, in general.)

Everything you'll read in this post was inspired by a workflow annoyance I had. I want to mark the start of that much larger process here to show how **really** complex workflow improvements can begin with doing something "basic" and then extending it over and over again into what you already know. Here's the annoyance: I couldn't create or read my course schedules (which I have always written in table format) in Emacs in a way that I found acceptable. This ultimately meant (I thought) that I would always need to rely on a tool outside of Emacs. Which, of course, blows.

Quickly: Here's a really simple row demonstrating of what a course schedule might include on my syllabus:

| Week | Day     | Readings                              | Assignments                                  |
|------|---------|---------------------------------------|----------------------------------------------|
| 4    | Tuesday | Anzaldúa: "How to Tame a Wild Tongue" | Discussion Board Post: What is a "Language?" |

This table looks nice to you because it's been exported. It looks absolutely terrible in my Emacs buffer. Here's a rough approximation of what it looks like to me:

```org
| Week | Day     | Readings                              | Assignments                                   |
|------+---------+---------------------------------------+-----------------------------------------------|
|    4 | Tuesday | Anzaldúa: "How to Tame a Wild Tongue" | Discussion Board Post: What is a "Language?"   |
```

This is hard to demonstrate online, but when I have `visual-line-mode` enabled it technically "wraps," but not at all in a readable fashion. Without `visual-line-mode` enabled, it runs right off the page. In neither case is it readable.

So... I decided I'm probably not just going read tables in Org Mode. That remains true and it will remain true for me. There's lots of packages that claim to make tables more manageable (and I'm sure there are great ones), but every time I've tried them they increase complexity, not decrease it. I just want to write. And, at some point during all this, I realized that tables are really meant for the audience, post-export, not for me. They're used by the **writer** to simplify complex information that **they already understand** for the **reader.** Wild how you can learn stuff you already know.

So the next thought I had: What if there were some way to write my course schedules in a different, more readable way in Org Mode, and then somehow transcode _that_ format into a table when necessary. After some searching, of course, Org Mode already has this built in with [columnview dynamic blocks](https://orgmode.org/manual/Capturing-column-view.html).

Let's set up every day of the semester as a heading, rather than as a row. And let's apply some metadata using properties. Finally, we're going to add a tag (I use column) for a purpose that I will explain in a moment:

```org
* Week 4
  ** Thursday                                                         :column:
  :PROPERTIES:
  :WEEK: 4
  :READINGS: Anzaldúa: "How to Tame a Wild Tongue"
  :ASSIGNMENTS: Discussion Board Post: What is a "Language?"
  :END:
```

Take a second and compare this with the table version above. It may take marginally more typing to set up (until you create a template), but it is far more readable **and** much more natural in terms of writing. We could even add some lesson planning to this subtree.

```org
* Week 4
  ** Thursday                                                         :column:
  :PROPERTIES:
  :WEEK: 4
  :READINGS: Anzaldúa: "How to Tame a Wild Tongue"
  :ASSIGNMENTS: Discussion Board Post: What is a "Language?"
  :END:
  *** Lesson Plan
  - Background on Anzaldúa
  - Small group discussion
```

I just added two points, but obviously we could add as much as we want.

Now, imagine we've done this for every course session for the semester. That's awesome but, wait, oh shit, how do we communicate this to students? Obviously, we don't want students to see lesson plans. (If you're anything like me, they will change frequently and sometimes on the fly.) And we don't want to have to retype all of the readings and assignments into a WYSIWG editor, whether it's Microsoft Word or Canvas LMS. Get this: If we take a look at the dynamic block documentation I linked to above, we can **generate a table out of the metadata.** 💥

Let's put a subtree at the bottom of this document that contains the following:

```org
* Course Schedule
  #+BEGIN: columnview :hlines 2 :id global :indent t :match "column" :maxlevel 2 link: nil
    #+CAPTION: Tentative Course Schedule.
    #+END:
```

Ignore the caption part for a moment (I'll discuss it below). What that first line does, in order:

-   Indicates that the dynamic block should capture a columnview. (In other words, a table.)
-   Indicates that horizontal lines should be introduced after every second level heading. (Note above that these will be the main "day" blocks of the file.)
-   Sets the scope of the columnview to be global, the entire file.
-   Sets the "match" to "column" ensuring for good measure that only subtrees tagged with column will be included in the table. (The tag "column" I am realizing makes less sense the more you think about it, so try not to and name the tag whatever you like.)
-   Ensures that only second level headers will be included, rather than adding a row for each week.
-   Removes links from the table to the original subtree headers. These links can be useful if it is going to stay in Emacs, but we're going to export this for other audiences later on. We don't want a bunch of broken links to local spots on our computer.

We just now need to name the columns that will be created. At the top of the file, let's include:

```org
#+COLUMNS: %Week %ITEM(Day) %Readings %Assignments
```

So here's the whole (abbreviated) file we've created:

```org
#+COLUMNS: %Week %ITEM(Class) %Readings %Assignments

* Week 4
  ** Thursday                                                         :column:
  :PROPERTIES:
  :WEEK: 4
  :READINGS: Anzaldúa: "How to Tame a Wild Tongue"
  :ASSIGNMENTS: Discussion Board Post: What is a "Language?"
  :END:
  *** Lesson Plan
  - Background on Anzaldúa
  - Small group discussion

 * Course Schedule
   #+BEGIN: columnview :hlines 2 :id global :indent t :match "column" :maxlevel 2 link: nil
  #+CAPTION: Tentative Course Schedule.
  #+END:
```

When we update the dynamic block, what do we get at the bottom? The exact table format we wanted:

```org
| Week | Day     | Readings                              | Assignments                                   |
|------+---------+---------------------------------------+-----------------------------------------------|
|    4 | Tuesday | Anzaldúa: "How to Tame a Wild Tongue" | Discussion Board Post: What is a "Language?"   |
```

The first workflow annoyance is solved. But just by addressing it, we've already opened more possibilities. We can write and read in the preferred format in Org Mode, update our table whenever necessary with whatever metadata categories we want, and (as we'll see in the next sections) export and reuse this content in a variety of interesting ways.


## Component Content Modularity and Course Prep in Emacs {#component-content-modularity-and-course-prep-in-emacs}

[Component content modularity/management](https://en.wikipedia.org/wiki/Component_content_management_system) (CCM) is a technique often employed in technical writing documentation that emphasizes breaking information into reusable components rather than continuously creating different versions of the same documents. It follows the [Don't Repeat Yourself (DRY) principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and, in the process, helps afford several [principles of effective documentation](https://www.writethedocs.org/guide/writing/docs-principles/) (especially "Consistent" and "Current"). Imagine, for example, that you're teaching several versions of the same course, or different courses that have some sort of shared content. The goal would be to think about what is shared across those courses, and how those shared elements could be broken down into components that can be assembled in multiple useful ways.

In the previous section, I showed how we can build a course schedule through metadata included in headings, which affords us as teachers: we can see the assignments, the lesson plans, notes, etc. all together in a bundle. But, as mentioned above, we probably don't want students to see **all** of that information. There are three things we could do:

1.  We could copy the table and paste it into a syllabus. This, however, would be repeating ourselves; we've already done the work of automating the creation of the table. Certainly we can automate the next step, too?
2.  We could use Org Mode's export functionality on the "Course Schedule" subtree, creating a document (in whatever format we'd like, which I'll cover in the next sections). This will _only_ include the course schedule, however.
3.  **We could draw on Org Mode's `#+INCLUDE:` functionality to insert the course schedule as a module into course syllabi (or anything else) as necessary.** This is, obviously, the approach I'll take, and you'll see as we go that this approach will basically force you to start reconsidering your course content in other useful ways.


### Assembling a Basic Syllabus {#assembling-a-basic-syllabus}

Let's start with some basic content that we might include in a syllabus. Unlike the overly-inflated syllabi today (by the way, this process is going to be magical in that context), I'm going to keep it simple for the sake of explanation:

```org
#+TITLE: Course Syllabus
#+AUTHOR: John Teacher

* Course Information

* Course Description

* A Course Policy, for an Example

* Course Description
```

The first think we could do is add in the course schedule we created above. Here's how I have that set up.

```org
#+TITLE: Course Syllabus
#+AUTHOR: John Teacher

 * Course Information

 * Course Description

 * A Course Policy, for an Example

 * Course Description

 * Course Schedule
 #+INCLUDE: "~/path/to/schedule.org::*course schedule" :only-contents t
```

Now, whenever we export our syllabus, it will pull in course schedule table we created above, which is itself created out of the readable subtrees  we wrote for each class session.

We could go further, but it all follows the same logic, so I'll just list ideas:

-   Maybe your course descriptions stay the same year to year. Write those in a separate Org file, so you can just include them when assembling your syllabi each semester.
-   Maybe there is a lot of required policies your university asks to be included on syllabi. Do the same thing: create a module file for them. This makes things even easier when the university changes something about these policies (as they always do): you just update the relevant Org files at the beginning of the semester and, since they're shared across documents you only have to do it once.
-   Maybe you're teaching different sections of the same course. Revise your course information section into independent modules.

There are sort of infinite possibilities once you crack open this way of thinking, so experiment and see what works best for you.


## Org Mode Markup for Accessible, Multi-format Exports {#org-mode-markup-for-accessible-multi-format-exports}

Okay, here is where my mind started spinning out a bit. I realized that this way of thinking opened up a new world of possibilities for giving audiences _different views of the same source material_. I'll offer two examples and then a quick note on best practices.


### Example 1: Multi-Format Course Files {#example-1-multi-format-course-files}

In our annual reports, we are required to submit all of our course materials: syllabi, assignments, etc. Since all of this is hosted on Canvas (see the next section), I have always just used print-to-pdf to export this information. This makes me feel bad, because it's a terrible way for reviewers to actually read the documents. (Everyone does it, to be clear: it's not just me). But then I had a thought: Canvas allows you edit pages as raw HTML.

My mind promptly exploded when it dawned on me that I could just rewrite _all_ my course documents as Org files. I could use export them to HTML buffers, and copy those buffers into the Canvas HTML editors. I did not expect this to be as seamless as it is, but it works **perfectly**. Then, when it comes time to submit my annual reports, I just open up the same file and export it in a more readable PDF format. Actually, I don't have to, because I also upload the PDF version for students, in case they prefer downloading or printing their own copy. But you get the idea.

The only annoyance is that there isn't any easier way to "push" to Canvas (like a Git repository) other than exporting to an HTML buffer and copying over the material. Still, the amount of time this saves me is extraordinary, and has other benefits I'll explain in the next section.


### Example 2: Slide Decks {#example-2-slide-decks}

I also realized I could do the same for slides. This is a bit complicated and takes some trial and error, but it follows all the same logic as the above. Here's my workflow:

1.  I write all my slide content in Org, including embedded images. (I keep a dedicated image folder for each course I teach.)
2.  I narrow the export to the current subtree and for whatever day I'm teaching and then export as Beamer slides.
3.  I additionally have all of the slides set with the tag `noexport` and remove them for each day. As I do, I use `org-publish` to collect the slides and images into a website directory as a simple running HTML page. I host that directory on Github Pages and link to that site on my Canvas page. That way, students can always reference slides, but in a **much** more readable format. No one, in my experience, likes _reading_ a slide deck. Slides are for presenting.

The logic here is simple, but this one is sort of a learn-by-doing approach. There are lots of small tweaks I made to make this work the way I liked it, for example setting a template for my images that crops them when exporting to a slide (so that they always fit correctly) but _not_ cropping them when exporting to the HTML version (so students can see the full image when looking at slide content on their own).

This one takes tweaking but it's **so** rewarding and also extensible. For example, during class discussions I often type out notes in Emacs like a digital whiteboard as students offer interesting points. My students asked if there was any way to get those notes and, because I had set up the system above already, it literally took me five minutes to create and notes file and configure it to be part of my org-publish workflow. As long as I save that notes file, it **will** be pushed to the site the next time I publish and push changes.


### Accessible Markup {#accessible-markup}

I won't say much about this because this post is already too long, but one of the best benefits of this system is leveraging Org Mode's markup for accessibility (alt-text, captions, heading structures, etc.) as part of the writing practice, and then skipping the tools that tend to much up accessibility. Again, exporting to HTML and then copying that markup into Canvas _will_ retain all the great accessibility tags you **surely put in** (right?) and has the added benefit of Canvas _not_ incorrectly flagging accessible content as inaccessible, which it has a habit of doing. My anecdotal observation is that Canvas's accessibility checker correctly assesses raw HTML, where other file types, and even WYSIWYG text written in Canvas, often create real or Canvas-imagined accessibility problems. More importantly, you have students who need this accessible markup, so include it.


## Using Emacs to Free Yourself from LMS Logic (Even Though You Probably Still Need to Use the LMS) {#using-emacs-to-free-yourself-from-lms-logic--even-though-you-probably-still-need-to-use-the-lms}

My final point here is more philosophical than technical. In my opinion, having been teaching just over a decade, teachers and students have increasingly adopted an "LMS-first" mindset, almost as though we are teaching online classes that happen to be face-to-face. When we do in-class activities, we show the instructions on the board through Canvas. When we write assignments, many of us actually write the text _into_ Canvas editors. Etc., etc.

In a very real way, this LMS-first mindset alienates teachers from the product of their labor. Everything "exists" in the LMS and only becomes real and operational there. When you learn, as I did, that your university removes courses after a few years from Canvas, you risk losing knowledge and work you created because you offloaded it into an external platform.

What I love **so much** about the practices outlined above is that they have shifted my mindset back to my local machine. I need to write an assignment? I fire up Emacs and write it in Org Mode. I need to lesson plan? The same. Then you get to the question of how to display that information for your audience. Sometimes the right choice **is** putting is on Canvas, and because Org Mode can export to HTML it becomes comically easy. But also, if it's just written in Org you could just as easily make the decision to just export a PDF and print some handouts. Or throw the content into some Beamer slides. Or... **whatever makes the most pedagogical sense for your situation.** All of a sudden, you're reinverting the situation, using the LMS in service of good teaching, rather than adapting teaching to fit the LMS.

This doesn't fix all problems. I imagine we're probably a year or two away from universities selling all of their teachers' Canvas material to train LLMs, if we're not there already. There are more issues with LMS's that this system can't fix. But it's a good first step, and one I'm appreciating so far.
