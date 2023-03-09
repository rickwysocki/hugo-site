---
title:  "Fixing Nokogiri for x86 Mac"
date:   2021-11-26 16:08:22 -0500
categories:
  - programming and technical matters
tags:
  - jekyll
excerpt: "I ran into the following error when working on my site (based on the Minimal Mistakes theme). It built fine when deployed on GitHub pages, but I was unable to serve up the site locally."
## header:
##   teaser: assets/images/turntable.png

---

## Problem

I ran into the following error when working on my site (based on the Minimal Mistakes theme). It built fine when deployed on GitHub pages, but I was unable to serve up the site locally.

```

rickwysocki@Ricks-MBP rickwysocki.github.io % bundle exec jekyll serve

bundler: failed to load command: jekyll (/Users/rickwysocki/.gem/ruby/2.6.0/bin/jekyll)

**Traceback** (most recent call last):

33: from /Users/rickwysocki/.gem/ruby/2.6.0/bin/bundle:23:in `<main>'

32: from /Users/rickwysocki/.gem/ruby/2.6.0/bin/bundle:23:in `load'

31: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/exe/bundle:37:in `<top (required)>'

30: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/friendly_errors.rb:103:in `with_friendly_errors'

29: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/exe/bundle:49:in `block in <top (required)>'

28: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/cli.rb:25:in `start'

27: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/vendor/thor/lib/thor/base.rb:485:in `start'

26: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/cli.rb:31:in `dispatch'

25: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/vendor/thor/lib/thor.rb:392:in `dispatch'

24: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/vendor/thor/lib/thor/invocation.rb:127:in `invoke_command'

23: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/vendor/thor/lib/thor/command.rb:27:in `run'

22: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/cli.rb:478:in `exec'

21: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/cli/exec.rb:23:in `run'

20: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/cli/exec.rb:58:in `kernel_load'

19: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/cli/exec.rb:58:in `load'

18: from /Users/rickwysocki/.gem/ruby/2.6.0/bin/jekyll:23:in `<top (required)>'

17: from /Users/rickwysocki/.gem/ruby/2.6.0/bin/jekyll:23:in `load'

16: from /Library/Ruby/Gems/2.6.0/gems/jekyll-3.9.0/exe/jekyll:11:in `<top (required)>'

15: from /Library/Ruby/Gems/2.6.0/gems/jekyll-3.9.0/lib/jekyll/plugin_manager.rb:51:in `require_from_bundler'

14: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler.rb:175:in `require'

13: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/runtime.rb:44:in `require'

12: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/runtime.rb:44:in `each'

11: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/runtime.rb:55:in `block in require'

10: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/runtime.rb:55:in `each'

9: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/runtime.rb:60:in `block (2 levels) in require'

8: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/runtime.rb:60:in `require'

7: from /Library/Ruby/Gems/2.6.0/gems/jemoji-0.12.0/lib/jemoji.rb:4:in `<top (required)>'

6: from /Library/Ruby/Gems/2.6.0/gems/jemoji-0.12.0/lib/jemoji.rb:4:in `require'

5: from /Library/Ruby/Gems/2.6.0/gems/html-pipeline-2.14.0/lib/html/pipeline.rb:3:in `<top (required)>'

4: from /Library/Ruby/Gems/2.6.0/gems/html-pipeline-2.14.0/lib/html/pipeline.rb:3:in `require'

3: from /Library/Ruby/Gems/2.6.0/gems/nokogiri-1.12.5-arm64-darwin/lib/nokogiri.rb:11:in `<top (required)>'

2: from /Library/Ruby/Gems/2.6.0/gems/nokogiri-1.12.5-arm64-darwin/lib/nokogiri.rb:11:in `require_relative'

1: from /Library/Ruby/Gems/2.6.0/gems/nokogiri-1.12.5-arm64-darwin/lib/nokogiri/extension.rb:7:in `<top (required)>'

/Library/Ruby/Gems/2.6.0/gems/nokogiri-1.12.5-arm64-darwin/lib/nokogiri/extension.rb:7:in `require_relative': **dlopen(/Library/Ruby/Gems/2.6.0/gems/nokogiri-1.12.5-arm64-darwin/lib/nokogiri/2.6/nokogiri.bundle, 0x0009): could not use '/Library/Ruby/Gems/2.6.0/gems/nokogiri-1.12.5-arm64-darwin/lib/nokogiri/2.6/nokogiri.bundle' because it is not a compatible arch - /Library/Ruby/Gems/2.6.0/gems/nokogiri-1.12.5-arm64-darwin/lib/nokogiri/2.6/nokogiri.bundle (****LoadError****)**

34: from /Users/rickwysocki/.gem/ruby/2.6.0/bin/bundle:23:in `<main>'

33: from /Users/rickwysocki/.gem/ruby/2.6.0/bin/bundle:23:in `load'

32: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/exe/bundle:37:in `<top (required)>'

31: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/friendly_errors.rb:103:in `with_friendly_errors'

30: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/exe/bundle:49:in `block in <top (required)>'

29: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/cli.rb:25:in `start'

28: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/vendor/thor/lib/thor/base.rb:485:in `start'

27: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/cli.rb:31:in `dispatch'

26: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/vendor/thor/lib/thor.rb:392:in `dispatch'

25: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/vendor/thor/lib/thor/invocation.rb:127:in `invoke_command'

24: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/vendor/thor/lib/thor/command.rb:27:in `run'

23: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/cli.rb:478:in `exec'

22: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/cli/exec.rb:23:in `run'

21: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/cli/exec.rb:58:in `kernel_load'

20: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/cli/exec.rb:58:in `load'

19: from /Users/rickwysocki/.gem/ruby/2.6.0/bin/jekyll:23:in `<top (required)>'

18: from /Users/rickwysocki/.gem/ruby/2.6.0/bin/jekyll:23:in `load'

17: from /Library/Ruby/Gems/2.6.0/gems/jekyll-3.9.0/exe/jekyll:11:in `<top (required)>'

16: from /Library/Ruby/Gems/2.6.0/gems/jekyll-3.9.0/lib/jekyll/plugin_manager.rb:51:in `require_from_bundler'

15: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler.rb:175:in `require'

14: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/runtime.rb:44:in `require'

13: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/runtime.rb:44:in `each'

12: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/runtime.rb:55:in `block in require'

11: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/runtime.rb:55:in `each'

10: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/runtime.rb:60:in `block (2 levels) in require'

9: from /Users/rickwysocki/.gem/ruby/2.6.0/gems/bundler-2.2.31/lib/bundler/runtime.rb:60:in `require'

8: from /Library/Ruby/Gems/2.6.0/gems/jemoji-0.12.0/lib/jemoji.rb:4:in `<top (required)>'

7: from /Library/Ruby/Gems/2.6.0/gems/jemoji-0.12.0/lib/jemoji.rb:4:in `require'

6: from /Library/Ruby/Gems/2.6.0/gems/html-pipeline-2.14.0/lib/html/pipeline.rb:3:in `<top (required)>'

5: from /Library/Ruby/Gems/2.6.0/gems/html-pipeline-2.14.0/lib/html/pipeline.rb:3:in `require'

4: from /Library/Ruby/Gems/2.6.0/gems/nokogiri-1.12.5-arm64-darwin/lib/nokogiri.rb:11:in `<top (required)>'

3: from /Library/Ruby/Gems/2.6.0/gems/nokogiri-1.12.5-arm64-darwin/lib/nokogiri.rb:11:in `require_relative'

2: from /Library/Ruby/Gems/2.6.0/gems/nokogiri-1.12.5-arm64-darwin/lib/nokogiri/extension.rb:4:in `<top (required)>'

1: from /Library/Ruby/Gems/2.6.0/gems/nokogiri-1.12.5-arm64-darwin/lib/nokogiri/extension.rb:30:in `rescue in <top (required)>'

/Library/Ruby/Gems/2.6.0/gems/nokogiri-1.12.5-arm64-darwin/lib/nokogiri/extension.rb:30:in `require': **cannot load such file -- nokogiri/nokogiri (****LoadError****)**

```

## Theorized Cause

I noticed when trying to uninstall nokogiri and reinstall it (which did not solve the problem), that there were two separate versions installed:

```      

rickwysocki@Ricks-MBP rickwysocki.github.io % gem uninstall nokogiri

Select gem to uninstall:

 1. nokogiri-1.12.5-x86_64-darwin

 2. nokogiri-1.12.5-arm64-darwin

 3. All versions

>

```

I realized that the problem was related to the installed ARM version, but received error messages whenever I uninstalled only that version. My Jekyll gemfile wanted the ARM version.

## Fix

I fixed this issue by revising my gemfile.lock, which was requiring an ARM-based version of nokogiri, to require the following: nokogiri (1.12.5-x86_64-darwin).

The issue was caused by two different forms of Nokogiri (one x86, like my machine, and one ARM) and the gemfile.lock requiring the latter. I'm sure that this is not the most elegant solution and am unsure about the longevity of this fix. I'll update if I run into any problems and / or locate any more information.
