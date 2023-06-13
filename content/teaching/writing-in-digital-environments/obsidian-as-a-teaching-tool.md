---
title: "Obsidian As a Teaching Tool"
date:   2021-11-26 16:08:22 -0500
courses: ['Writing in Digital Environments']
summary: A description of how I used the note-taking platform Obsidian in my course, Writing in Digital Environments.
published: false
---


## Introduction

This post details how I used the digital knowledge base and note-taking application Obsidian in a college course I taught last year, Writing in Digital Environments. I wanted students to engage in born-digital creative knowledge-making. Being a Zettelkasten fanatic and an Obsidian user, my first thought was Obsidian.

My concern, though, was that Obsidian is not a collaborative tool: it's designed for personal knowledge management. I brainstormed a number of different ideas and nearly decided to use Wiki.JS installed on a Digital Ocean droplet (at my own expense).

Ultimately, though, I returned to Obsidian, as it had the key features I wanted students exposed to:

- A minimal, plain text approach to digital writing.
- A heavy emphasis on linked, networked, and iterative thinking.
- A complete lack of cost for students. (The setup I describe here didn't cost me anything, either.)

There are several subsections of this very long post, and not all of them might be interesting to you. Here's a bird's eye view, for convenience:

- What is Obsidian?: A brief overview of Obsidian and its relevant features.
- Why Use Obsidian in the Classroom?: An argument for my decision to use Obsidian, and a few key ideas that informed that decision.
- How I Used Obsidian for Teaching: A more practical explanation of exactly how I used this technology to foster learning and thinking in my course.
- Conclusion and Final Notes: A broad overview of the post and my sense of the outcomes of using Obsidian in the class.

Please feel free to read these sections in any order that interests you.

## What is Obsidian?

Obsidian is a Markdown-based notes application. In it's own words:

> Obsidian is a powerful and extensible knowledge base that works on top of your local folder of plain text files.

In some ways, Obsidian resembles a wiki. There are a few differences, though, such as Obsidian's focus on personal information management. I successfully worked against its purpose in using it as a shared knowledge database in my class but, as will come up later, it's really not designed for collaboration.

There are three key things to understand in order to "get" Obsidian: Markdown, bi-directional linking, and the visualization of concepts.

### Markdown

Markdown is a markup syntax developed by John Gruber. It is writing-oriented but can be quickly exported into a number of other formats, as needed. In Obsidian, for example you can quickly write documents or notes, then export them to PDFs if you wanted to print them or share them as an independent document. With a bit more technical elbow grease, you could use Pandoc to translate a Markdown file into a breathtaking number of different formats and file-types. Because Markdown is so simple and content-focused, you can focus on writing. The file can become anything, later. You just have to write the content.

- The benefits of Markdown, in general but especially for students, include:
- Great documentation.
- An extremely small learning-curve. In my Writing in Digital Environments course, I showed students how to write in Markdown during a fifteen minute lesson in the first week. I didn't receive a question related to writing Markdown once all semester. (Teachers can attest how rare this is.) None of these students had ever used a plain text markup language before.

A simplicity that forces students out of their typical "grooves" in how they use and think about technology. More on this below.
If you can write in Markdown, you can write in Obsidian. The application is almost entirely just an environment for writing and collecting Markdown files. The additional feature that Obsidian adds, which is the "secret sauce," is the ability to create bi-directional links between your Markdown documents.
Bi-Directional Linking
Maggie Appleton has written a more detailed review of bi-directional linking and it's history. At its core, though, it's easy to understand. Imagine you have two webpages: Page A and Page B. If you add a link from Page A to Page B, we all know that you can click it and to travel from one to the other. If you were to include a bi-directional link, the difference is that Page B would "know" that it's being linked to. You could essentially "travel backward" through linking, not only to follow links on a page but to follow pages backwards to the other pages that link to it.
In Obsidian, These backward links are called backlinks. For example, here is a screenshot of a page in Obsidian using links to other notes (formatted in blue text) the standard way:
A note in Obsidian that includes several links at the bottom.
And here is a page in Obsidian showing all of its backlinks. In other words, this page shows all of the different pages that link to it under the "linked mentions" heading.
A note in Obsidian showing "linked mentions" with a list of ever other note that points to this one.
The addition of bi-directional links may seem small, but in practice it radically changes how you perceive and interact with connections across the content.
Visualization of Concepts
Finally, Obsidian provides a really neat way to visualize notes and their connections using its Graph View.
Graph View in Obsidian showing a number of notes, represented as circles, with lines that show the connections between them.
This feature allows you to see the connections between notes, which ones were being linked to most frequently, and which ones might be "left out" and need to be brought into the network more.
Why Use Obsidian in the Classroom?
You might be wondering: why use this for teaching? In this section, I'll give a few reasons.
Obsidian Foregrounds the Emergence of Complex Documentation
I have interests in content / knowledge management, content strategy, and documentation. The function of documents and documentation within organizations and companies is also fascinating to me. Obviously, each of these areas is highly affected by digital technology, and they were all central topics we addressed in my class.
Using Obsidian forced students to consider how knowledge can emerge over time through documentation. In scholarship in my field, it's been noted that wikis can provide an "archaeological" view of the production of a complex document (Barton and Heimann 46). This was something I constantly emphasized to my students: don't see the notes you create throughout the semester as individual, static documents, but as "nodes" of information that can be reconnected and reassembled over and over. This allowed us to talk about things like single-source authoring, "chunking," and content management, all of which are central to writing in technical and professional fields.
Bi-directional Linking Emphasizes "Conversation."
In the field of digital rhetoric, Johndan Johnson-Eilola and Amy Kimme Hea noted many years ago that standard linking on the Web may have become "normalized" in a way that has exhausted its possibilities. They wrote:
The Web, in particular, appears to have exhausted the possibilities of hypertext for the masses, a move that simultaneously made hypertext a household technology while evacuating it of the revolutionary potentials it once held. The Web, in some sense, took hypertext's postmodernist tendencies and accelerated them, turning the reader into a voracious, consuming mouseclick: Because one can go anywhere, one must go everywhere. If the linear, printed text offered a margin in which a lever could be placed, the Web often seems to offer no anchoring points in which to place a lever of resistance. (417)
In other words, Johnson-Eilola and Kimme Hea argue that following links has become a sort of passive activity. We don't create or click links to create conversations or networks of knowledge, but just to direct readers, or be directed, through established and fairly predictable patterns of information.
Maggie Appleton claims that bi-directional linking, by contrast, encourages linking as a conversation. She writes:
A bi-directional link has social awareness - it knows about other pages or 'nodes' that point to it, and can make them visible to people. This means we get a two-way conversation flowing between our web locations.
In my class, I encouraged students not to simply browse files in the navigator but to instead explore their knowledge database by following links and backlinks, creating new connections as they went. This allowed them to see the same notes repeatedly and to create new connections, and new knowledge, as they went.
Obsidian Can Disrupts Students Technological "Grooves"
Nearly all students have, at this point, been using digital technology in some way for their entire lives. There are two consequences of this that are worth acknowledging:
Students understandably have no real way to comprehend the concept of "new media" the way that people who have a conception of "before the Internet" do.
Students may have been using the Internet their whole lives, but they've specifically been using Web 2.0 their whole lives. They are used to platforms, clouds, restrictive interfaces, and opinionated processes. This normalization of Web 2.0 has led some teachers to note that students increasingly do not understand the basic concept of file structure, the premise for digital technology.
There is, of course, no blame to be assigned to students here; these outcomes are perfectly natural. But it does mean that--in a course on digital writing--it's necessary to shake students out of their established "grooves" of using digital technology. Obsidian, with it's three-part offering of plain text simplicity, unfamiliar syntax, and novel linking format, can do just that.
Description of Obsidian Used in the Classroom
What Students Did
So, how did this all work in my class? First, you can read the actual assignment sheet for the weekly "concept notes" (the name I went with) that students wrote. In nearly every case, the concept notes focused on the week's readings. Even on weeks with no readings, though, students were still asked to reflect on earlier readings and discussions from the course and write new concept notes.
To keep things manageable, I broke the class into two groups. The students in each group were required to post three concept notes on alternating weeks. These were the requirements, with the rationale in parentheses:
Each of the three concept notes per assignment should be ~100 words. (I didn't want papers or summaries. I wanted concepts that were emerging from the class that could be networked with other concepts.)
Each concept note must include at least three linked connections to other, related notes. (Perhaps obvious, but this was included to foster the iterative, collaborative, and networked purpose of the knowledge base.)
Each reference to a source should include author and page number (where applicable). Unless you are citing something outside of our course readings, however, you do not need to include a formal end-citation. (Students needed to document the author and page number, of course, but I explicitly did not want this to slide back into familiar academic citation practices at the expense of creative thinking.)
How I Scaffolded the Knowledge Base and Interacted with It
There were several steps that I devised to ease students into this unfamiliar practice.
In our first class with an assigned reading, I asked students to carry out a "lo-fi" version of these concepts notes. I distributed a series of Post-It notes and had students work in groups to identify key concepts from the reading and stick them on a large white-board. Then, the groups took turns going up to the board, drawing arrows to connect notes, and writing new ideas between concepts to synthesize information. This prepared students for the conceptual work involved in how we would use Obsidian.
I assigned Andy Matuschak's website Evergreen Notes as a reading. I did not tell students which nodes to read, only that they had to read a minimum of ten. In class, we talked about how Matuschak's note-taking system uses the affordances of digital technology to organize knowledge.
Of course, I walked them through how to use Markdown. But, to be honest, I did this quickly and mainly pointed students in the direction of Markdown documentation. Unbelievably, I never once got a question about writing Markdown during the semester.
After students began writing notes, I wrote my own weekly syntheses of students' ideas within Obsidian. This was time-intensive but very useful, and it showed my own investment in the ideas we were creating and networking as a class. Students also had the opportunity to write these syntheses as optional assignments.
Technical Elements
As I mentioned above, Obsidian is not designed for collaboration. It is simply an app that works on plain text Markdown files. There are no users and (unlike a traditional wiki) there is no versioning. So how did it work in our class?
The technical setup is actually very simple. I simply created a shared Dropbox folder and put our Vault (Obsidian's name for a collection of notes) in that folder. I then shared the folder with all of my students. In class, I showed them how install Dropbox so they could see it in Finder or Explorer. After that, it was a simple matter of showing them how to download Obsidian and point the app toward the correct folder. I did not at all expect this, but we never once had a syncing error during the semester.
The technical simplicity and the complete lack of  cost, however, did set up strong conditions for human error. Because there were no users or versioning, students had to be absolutely sure that they followed a set of practices (I called them "rules of the road") in order not to mess up the notes of others or the Vault in general:
All notes needed to include a name at the top. (I showed them how to use metadata tags in Obsidian for this.)
It was expressly forbidden to edit classmates' notes. But students could always write a new note with ideas or suggestions and simply link it.
This is the only pretty annoying aspect of this system: any setting changes were not local to individuals but were carried out for everyone, as Obsidian's settings are just stored in the same shared Vault. I asked students to stay out of the settings and simply use the default version of Obsidian, which had all the elements we needed anyway. Light and Dark Mode were regularly swapped for everyone throughout the semester, but otherwise students respected the rule.
Conclusion and Final Notes
This write-up became much longer than I expected. Still, I hope it's useful for teachers and / or Obsidian zealots looking for ways to make use of it in the classroom.
For privacy reasons, I obviously won't share specific student feedback. That said, it was regularly expressed in a variety of ways that students found our knowledge base to be very helpful in developing and understanding concepts from our course, despite feeling overwhelmed by Obsidian at the beginning.
To conclude, using Obsidian had the following benefits in my Writing in Digital Environments course:
It introduced students to forms of plain text writing that were unfamiliar and useful in a variety of digital contexts.
It asked students to engage in iterative, creative thinking about course content using digital technologies.
The previous two points fit Obsidian perfectly well within a class on writing with digital technologies.
It was entirely free.
It was entirely learn-able by every student.
Again, I hope this has been useful. Please feel free to reach out with any questions or comments!
Academic Citations
Barton, Matthew D., and James R. Heiman. “Process, Product, and Potential: The Archaeological Assessment of Collaborative, Wiki-Based Student Projects in the Technical Communication Classroom.” Technical Communication Quarterly, vol. 21, no. 1, Jan. 2012, pp. 46–60. Communication & Mass Media Complete.
Johnson-Eilola, Johndan, and Amy C. Kimme Hea. “After Hypertext: Other Ideas.” Computers and Composition, vol. 20, no. 4, Dec. 2003, pp. 415–25. DOI.org (Crossref), https://doi.org/10.1016/j.compcom.2003.08.014.
Related Pages
Obsidian Resources: A hub of resources I put together about Obsidian for students.
Start Here: This was the page I designed to broadly introduce students to Obsidian and how we would use it in the course.
Markdown Information: This was a page I also included in our Vault linking to a variety of resources on Markdown, the markup language used by Obsidian.
Networking Notes: This page was included in our Vault to explain the practice of bi-directional linking in Obsidian.
