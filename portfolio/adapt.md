---
excerpt: Adapt is Sprout Social's new "Big Thinking" blog, that required a fork of our pattern library, and was my first project built from scratch using tachyons, a utility class library.
image: /images/portfolio/adapt.png
image-featured: /images/portfolio/adapt-featured.png
layout: Page
permalink: adapt
title: Adapt by Sprout Social
breadcrumbs:
 - url: /
   text: home
 - url: /portfolio
   text: portfolio
 - text: adapt
---

Sprout Social's big thinking blog. [link](https://sproutsocial.com/adapt)

## The Technologies we used:

- CSS
- HTML
- Javascript
- PHP
- SCSS
- Twig Templating
- Wordpress

## Sprout wants to be a good company, not just a good social media company.

Adapt was the new big thinking blog at Sprout Social, it's purpose was to write articles that talked more about how to run a great company and be a leader, as opposed to their other blog Insights who's goal was to lead the conversation in Social Media Management.

## From a technical Standpoint . . .

. . . it was interesting, we had a pattern library, which could be evolved to a new look with just a few variable changes in our scss. We had recently moved from a straight up pattern library, to a much looser pattern library that used mostly utility classes. but this was the first time we went whole hog on utility classes, which proved to make things much easier actually, we had to change the default color of links a few other brand decisions, but most of what was happening was just new components being built out of the utilities and being saved in twig templates.  It was pretty great. 

### Don't mess with the Wordpress loop.

I mean, mess with it alot, it's super powerful, and I've done it a ton, but this one thing . . . Oh man, having 9 posts on one page of an archive, and 8 on another, is not a thing that Wordpress likes to do. But I did it, and then built a class around it, so we never ever had to fix that one problem ever again.

## I'm crazy happy that adapt is accessible and beautiful.

At this point I had helped build the Accessibility Guild, and the design department was on board. They picked a deep dark purple for links, and on articles all links had underlines. There's little things I could pick on, but for the most part, it as bold, easy to read, and beautiful. Shout out: Sprout Social Design Team.

## Stuff I'd fix

1. I always wanted to build an svg to png converter into Wordpress. So that Yoast could use .png files, and the content could serve SVGs. The idea was to have a node service living on Lambda, or use a Cloudinary or something. The rough part would've been associating the svg + the png to the same media post.
2. I'd love to make it amp, and use Automatics (although mostly [westonruter's](https://github.com/westonruter)), amp wordpress plugin. It's super awesome, and going to be even awesome-er soon.