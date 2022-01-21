---
title: The Heisenbox
slug: /projects/heisenbox
tagline: Is it alive or dead?
secondaryDesc: An interactive educational tool demonstrating the concepts of the Heisenberg Uncertainty Principle
featuredImage: ./heisenbox-glam.jpg
date: 2019-11
github: https://github.com/eosti/heisenbox
---

Heisenberg's Uncertainty Principle states only one of two things can be known about a particle at any given time: its velocity or position

![Heisenbox closed](./heisenbox-top.jpg "So speedy! But where is it?")

![Heisenbox opened](./heisenbox-moving.jpg "So moving-around-y! But how fast is it going?")

This demonstrates that if you can determine the velocity (by looking at the 7-segment display readout) you can't see the particle.
Conversely, if you can see the 'particle' (by opening the box), you no longer can determine the velocity.

In classic form, this project was for an end-of-unit astrophysics project, and completely overkill. 
It conveys Heisenberg's principle well, but I think the entire learning a completely new microcontroller architecture in a week or so was a tad extra. 

The brains of this project is a MSP430G2553. 
This microcontroller is nice and low power, so great for a battery operated project, and also is pretty easy to pick up. 
I went from "a MSP what?" to completing this project in about a week. 

The display is a simple TM1637 7-segment display, and the motor is just some cheap hobby motor I found on eBay. 
Driving that motor is a homebrew H-bridge, thanks to the seller on eBay picking a _fabulous_ time to not ship me my motor controllers.

The control of the box is simple: the 'start' button is connected to the MSP430's reset pin, so after running the program for a minute or so, it will go into a low-power mode shutdown, with only the reset button able to wake it up. 
The lid being open or closed is a reed switch and a magnet, not very well hidden at all. 
I'm blaming the yellow on the short time frame to get this done. 

Side note, the handle that I used is actually the cheapest one that you can get from Home Depot (at least at the time). 
Given that, I'm surprised by how nice it looks. 

![Glam shot of Heisenbox](./heisenbox-glam.jpg "Look at that handle. So enticing.")

The code is up on Github [here](https://github.com/eosti/heisenbox). 
There are TM1637 drivers there that work with MSP430s, derived from an ATtiny library that's linked there too. 
