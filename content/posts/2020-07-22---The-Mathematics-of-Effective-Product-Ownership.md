---
title: Continuous Delivery - It's More Than the Tech
date: '2020-07-22T14:53:32.169Z'
template: 'post'
draft: true
slug: 'mathematical-basis-of-effective-product-ownership'
category: 'Software Development'
tags:
  - 'Process'
  - 'Product'
  - 'Software Development'
description: 'All the CI/CD technology will not help if your Product Owners cannot organize the work to deliver value quickly.'
socialImage: '/media/software-development-media.jpg'
author: cjnygard
---

Contiuous Delivery is the Holy Grail of software development organizations.
Anyone paying attention to the DORA Report can see the eye-popping stats of high-performing organizations.
However, depending on your personal experience, it can be easy to dismiss the reports of pushing to production multiple times per day as unrealistic.
Perhaps you're even thinking, "We could do that too if we committed _every trivial change_ we make."

You would be wrong.
That statement glosses over many complementary practices and technical capabilities that are necessary prerequisites for achieving Continuous Delivery.
One of the most important is Product Management, because your Product Owners are responsible for defining the work entering the system.

In what follows, I hope you take away a fundamental understanding of why you should devote serious attention to the Product Management practices within your software production pipeline as a critical piece of the value-stream within your business.

To achieve that understanding, we’re going to walk through a thought experiment revolving around two hypothetical almost-identical teams.
We’ll take a look at their Product Management process and how (and when) they produce deliverable business value for the customers.
By understanding the implications of their process, we’ll also understand the implications of our own processes, and more importantly, understand what we need to do to achieve significant gains in delivering value to the business.

## Thought Experiment

For our thought experiemnt, we posit the existence of two teams, our Slow Team and our Fast Team.
Both teams are similarly skilled, delivering the same feature, using the same technology.

We further posit that there is some chance that at any given moment, some external stakeholder will raise an issue which forces the team to pivot.
The reason could be anything - a Sev 0 production issue, a high-profile sales opportunity that needs to check a box in a competitive RFP feature matrix, or supporting a new strategic partnership the CEO is prioritizing.
Regardless of the reason, we admit we have a reasonable expectation to pivot, and for the purposes of this thought experiment, we're going to peg that probability at 25% [^probability].

The only difference between these scenarios is our Product Owner, and more specifically, how the Product Owner writes the stories.
Our thought experiment will be looking at the effects on the team and the business due to how the Product Owner splits and schedules the work.

### The Feature

For this scenario, our teams will be developing a feature involving the parameterized styling of the representation of an entity based on the properties of an entity.
As a more specific example - think about styling a cell in a spreadsheet based on the value in a cell.

Our Product Owner has decided that we need to support coloring the content of the cell based on the value of content in the cell.
She wants to support comparison within a numeric range (i.e. _min < value < max_), outside a numeric range (i.e. not within a range), with comparisons above or below a single value being special cases (i.e. _value < min_ or _max < value_).

She also wants to support text comparison, to highlight text that might contain a specific string.
As variations of this capability, she wants to support partial match, case sensitive or insensitive matches, and regular expression matches.

Finally, she wants to be able to associate a specific text style (font, color, background) for the cell based on whether it matches the criteria specified.

We will look at two different ways to break up the work, and examine the effects each has on how quickly (or slowly) value is delivered to the customer.
We will also look at the risks involved, what those risks mean to the business, and how to mitigate the risks.

## The Slow Team

In the Slow Team, the Product Owner defines the work based on the full vision of the feature, and splits up the work based on the systems that are affected.
The work is ordered from the bottom up, starting with the persistence layer, followed by the business logic, the API, and the various components of the UI.

ACs for each piece are written detailing the full vision of the feature, so that each (sub)team understands how to most efficiently build the functionality upon which the others are dependent.
In other words, each piece of work needs to support the full vision of the feature.

![slow-team-implementation-path.jpg](/media/slow-team-implementation-path.png)

\_Figure 1: Slow Team Implementation Path

Recognizing Conway's Law at work, we can detect silos of expertise that may have built up.
These silos might occur within the team, based on individuals' preferences or experience.
The silos may manifest more explicitly in the form of separate functional teams concentrating on one technology layer.

What this means to the team and the Product Owner is two-fold:

- The organizational structure of the functional tiers linearize the work (Conway's Law)
- Value is finally delivered by the UI team[^api] once every other functional silo has delivered their full body of work.

A graph of the Slow Team’s delivery of value:

![slow-team-value-curve.jpg](/media/slow-team-value-curve.png)

\_Figure 0: Slow Team Value Delivery and Wasted Opportunity

Some explanation:

We see that the work being done by the team increases linearly (we're simplifying things).
Note that delivery of value doesn't occur until all the pieces are put into place, and the UI team can start delivering the user-facing features associated with all the plumbing.

Now consider what happens if the team needs to pivot to focus on something new.
We have created a situation in which the team has created sunk cost in the form of an incomplete and undeliverable feature.
It doesn't really matter whether the new focus is bug fixing, supporting another team's delivery, or pivoting in a new direction.
Wasted work is wasted work.

From the graph we see that the Wasted Work (WW) at any given point is exactly the work that has so far been completed by the team, and the Expected Wasted Work factors in the Probability of Pivot (PP).
Mathematically, `EWW = WW * PP`.
Clearly, EWW grows in proportion to the work and doesn't start dropping until very near the end when the UI team starts delivering value.

TODO: Think about how to represent expected future value as a function of time in each of these scenarios.

## The Fast Team

In the Fast Team, the product owner defines the work based on the smallest deliverable slices of value and plots out a plan of work that delivers incremental value as quickly as possible.

The work is ordered starting with the first slice of minimal fundamental value, and proceeds according to the Principal of Optionality[^optionality].
At each stage, the Product Owner has choices regarding which is the next most-valuable (sub)feature to deliver.
Because of this principal, the work flow looks more like a tree, where the branches form implementation paths through related functionality.

What this means to the team and the Product Owner is two-fold:

- The (sub)feature dependencies linearize the work along a path.
- Value is delivered iteratively by the whole team.

![fast-team-implementation-tree.jpg](/media/fast-team-implementation-tree.png)

\_Figure 1: Fast Team Implementation Tree

We can play out the scenario and see where it leads us.
Let's assume that initial customer discussions indicate that 100% of users want numerical comparisons of varying complexity while 40% also want text-based styling.

Based on this initial view, the Product Owner choses the simplest use-case, turn negative values red.
It's the simplest piece of functionality from the user's perspective, but it gives the team a chance to install the minimal plumbing necessary to support the planned features.
Even if the team needs to pivot now, they've still delivered value to the user.

Once delivered, the Product Owner can start to get feedback from the users, while focusing on the next slice of work.
This feedback indicates that negative numbers in red satisfies 80% of the users, which leads the product owner to prioritize the text match styling next.

Huh?
Why are we doing text styling when only 40% wanted that, compared to 100% who wanted numerical styling?
Based on the initial feedback, we know that only 20% of the users desire more complicated numeric styling, while 40% of the users would like some form of text match styling.

Clearly, our Product Owner is discovering that the user research shifts her direction over time, as more features are delivered, and users identify the missing features that would provide the most incremental value.

A graph of the Fast Team’s delivery of value:

![fast-team-value-curve.jpg](/media/fast-team-value-curve.png)

\_Figure 2: Fast Team Value Delivery and Wasted Opportunity

You can see that at any given point along the delivery, the amount of wasted work is limited to what has been developed since the last release.
Not only that, but we can pivot away temporarily (or permanently) and the team has still delivered value to the users.

## Limit of Wasted Work as Delivery Cycle Shortens Approaches Zero

TODO: Picture of stepwise value curves.

Wish I had Latex, so this would be prettier (and less wordy).

The graphs above attempt to show where teams are losing (or finding, in the case of the DORA-Elite teams) value.
Each of the stepwise increments are delivery of some chunk of value to the user.
Low performing teams deliver large(ish) chunks relatively infrequently, yielding a stepwise curve that looks like a Giant's staircase.
DORA-Elite teams deliver smaller chunks much more frequently, yielding a much smoother curve that more resembles the pixelated curve of old Atari games.
If you measure the area under each curve, it's clear that being able to release value to the user in smaller, more frequent iterations yields enormous advantages to the user (and by extension, to the business).

While the technical bits of CI/CD - automated testing, automated build/deploy pipelines, monitoring, feature flags, automatic rollback - give teams the capability to execute, these are not sufficient pre-requisites.
Your Product Owners need to be able to define the work in ways that enable this incremental delivery, and your teams need to be structured in a way that they can execute the work with minimal outside dependencies.

## Acknowledgements

Thanks to JK Werner, Matt Foster, Mike Mason, and Dan Kunnath for pointing out significant ways to make this article stronger and more relevant.
I claim responsibility for all remaining flaws.

[^probability]:
  You can probably estimate this probability by looking at your backlog and measuring how many items get deprioritized and/or removed from the list.
  If you have reasonable product management processes and don't just throw every half-baked idea onto the backlog, then the ratio of executed work to deprioritized/removed work can be a reasonable proxy.

[^api]: One could argue that value is delivered by the API team, but for the purposes of simplifying the thought experiment, we're going to overlook that detail.
[^optionality]:
  Principal of Optionality essentially means that each iteration of value expands the Product Owner's options to define and execute what is the "best next thing" to deliver to the customer.
  At any point, this work can be abandoned and the risk of wasted work is minimized to the delta measured from the present back to the last release of value to the customer.
  Here's the kicker, in the case of the elite organizations (as measured by the DORA metrics) deploying multiple times per day, the amount of wasted work might be measured in person-minutes instead of person-months.
