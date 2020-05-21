---
excerpt: Radio House is a React app and statically generated site I built to start practicing React and have an easy way to play local MP3s.
image: /images/portfolio/radio-house.png
image-featured: /images/portfolio/radio-house-featured.png
permalink: radio-house
title: Radio House
breadcrumbs:
 - url: /
   text: home
 - url: /portfolio
   text: portfolio
 - text: radio house
---

An app to play local mp3 files. [link](https://radio-house.netlify.com) & [git repo](https://github.com/ericmikkelsen/music-cooler)

## The Technologies I used:

- CSS
- HTML
- Javascript
- JSX
- Next.js
- Netlify
- Preact
- React

## My problem with the internet, planes, and music.

Every single time I take a trip on a plane I'm stuck doing a thing I despise. I get on the plane, I open my laptop, and I go to the internet and I don't have access, so I bare down and click the Itunes logo, and wait 5 minutes. for it to catalogue all the music I have on my machine. The christmas mixes I've made my mom between now and the last time I opened Itunes, the memes, the fart noises I send to my wife in emails. Everything. It's the worst. I just want Winamp basically. I want a simple thing I could open up and add some songs, and get rolling. And I wanted it in a browser, because the web is the best platform.

## Why make stuff?

Radio house came from a desire to have an app that plays my local music. Also, since I wanted to move into doing more app development, it was a chance to learn React in a reasonable way.

My goals were:

### To Learn React.

At some point I became a marketing developer, which from my point of view seems light years away from front end developer, but when you talk to regular human being, they're like "So you make web stuff, but not that web stuff?" It actually seems reasonably close. So this is one of a few projects I'll be working on to cut my teeth on React and Webpack and PWAs etc.

### Statically render as much as possible.

As performance goes, nothing takes up megabytes on the internet like images and video, but nothing takes up processing power like Javascript. So that meant I wanted first render to have as much legitimate content rendered. I settled on using Next.js to pre-render static React (or in my case Preact) and hosted it on Netlify.

### Focus on accessibility and beauty.

I have this thing stuck in my craw, This notion that making accessible sites is an ugly venture just irritates my jib. So on this project I wanted to focus on Accessibility and Beauty. The whole thing uses semantic focusable markup, and doesn't do weird stuff with focus etc. But also I effort into making big beautiful readable high contrast text. About every week I change the colors, because I get bored easily, but big spaced out well structured text just looks good when you do it right.

## Stuff I want to change or build still.

 1. The whole point is offline support, so a service worker at some point so it can work offline
 2. Remembering previous tracks added
 3. Album + Artist Views
 4. Stretch goal is see if I can use some WASM library to rip cds. Probably not though.