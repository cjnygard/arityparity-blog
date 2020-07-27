---
title: Architecture Cast In Aluminum
date: '2020-07-01T00:17:32.224Z'
template: 'post'
draft: true
slug: 'architecture-in-aluminum'
category: 'Architecture'
tags:
  - 'Systems Architecture'
  - 'Software Development'
description: 'The principles are the same, but the stakes are much different.  You'd better know your interface is right - before you cast it in aluminum.'
socialImage: '/media/software-development-media.jpg'
---

# Soft Interfaces

One of the most awesome innovations across software,ever, is the ability for the to _phone home_ for updates.

We experience this all the time.  My iPhone recently updated for the third major release and the 14-millionth minor patch.

A team in my office just fixed a host of bugs and features in time for an upcoming release to be shipped to customers in the next few days.  

Among these, several key interfaces added a version 2 in addition to the existing first version to account for some new breaking model changes.  What's more, several internal libraries that were upgraded suffered the effects of affecting implementation in slight ways.

Testing of all of it went well - functionally nothing is broken and a host of new features are going to be available to the delight of our customers.

# Some Tools Can't Phone Home

I build bits of computer code that repeatedly gets transformed into heat for a living.  But I assure you - if there is a hammer to be swung in the physical world - I'm lining up to swing it.  My "favorite tools" aren't limited to Visual Studio Code and Docker Desktop.  

As a life long _hotrodder_, I find myself in my workshop on occasion working through some misfit project.  What I'm working on now is the subject for another post - and perhaps another blog, but I had this strange situation unfold the other day where two of my worlds crossed.

# What Does Manufacturing Process Borrow from Software Architecture and Development?

Modern gasoline engines are modular in a lot of ways.  Economies of scale in manufacturing can be reached when the same engine family can be packaged in slightly different ways and deployed to multiple vehicle lines. 

Engine families have a deliberate architecture and have modular subsystems whose implementations can deal with variability across vehicle lines.

From my own observations, a lot of the variability has to do with physical packaging.  If the same engine family has a variant going in a transverse-mounted front-wheel-drive small sedan and a longitudinal-mounted  all-wheel-drive crossover, the physical constraints are immediately size and mounting points at a minimum. These are part of the design constraints and have to be minded.  

On my project, I was dealing  with a packaging problem, too. 

For the engine I had chosen, the oil cooler was physically in the path of where the engine would mount to the car's frame.  This posed a problem for me.

An oil cooler's job is to keep the engine oil within a temperature range specification for the operating parameters of the engine.

How it accomplished these tasks was an implementation detail.  For this engine family, I was surprised to locate three physically different oil coolers that were manufactured for this engine family.

# Interfaces and Implementations Exist Outside of Software, Too

Upon examination, a similarity emerged with each of the three oil coolers.  Between each of the three and the engine block, there emerged a well-defined interface where block and cooler mated together. 

The interface was precise.  The engine block has specific holes in the side designed for oil and water to pass through into the oil cooler.  The holes are sized for flow and pressure.  In addition, 6 perfectly spaced through-bolts holes were machined to allow 6 bolts provide the clamping force to bind the cooler to the block. 

Any deviation at these mating surfaces produces the less-than-desired result of oil and coolant leaking out the side of the block.  That scenario would prove fatal for the whole engine in a matter of minutes.

How interesting it was to observe this interface the engine block offered with three physical oil cooler implementations side-by-side in the workshop.  This was an elegant manifestation of some of the same princples I deal with in software in a real-world example.

Thankfully, one of those coolers had physical characteristics that were beneficial for my project.  I added the right seals and bolted it right up.  I am now well positioned for the next issue to crop up.

# When You Can't Phone Home

How lucky in software that we can cheaply deliver updated versions of our software because it can *phone home* and get updates right in the field.  It allows us a degree of freedom to figure it out as we go.

But in other places, like the engine going into my project, those interfaces are fixed and have to be precise and certain.

So certain, in fact - they're permanently cast in aluminum.