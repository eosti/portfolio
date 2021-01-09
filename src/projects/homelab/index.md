---
title: Homelab
slug: projects/homelab
tagline: There's no place like 127.0.0.1
featuredImage: ./homelab-featured.jpg
date: 2021-01
---

## Network Map ##

![network map](network-map.png)

I decided that what my network really needed was a bunch of VLANS.
I don't actually think that they're necessary, nor make my network more secure or less busy; I really only added them for the fun of it, to see what I could do with them.

There are four VLANS: management, wired devices, wireless devices, and IoT. 
The IoT VLAN has limited local network access, only to lithium-server on certain ports for MQTT and Sonos services.
The rest just segregate the network nicely, and for the most part, are transparent to whatever I'm working on. 

## lithium-server.lan ##

The pièce de résistance of the entire network, a 2009 Mac Mini that was underpowered even when it was brand new. 
Perfect for a headless install of Ubuntu Server and a handful of applications, though!

![server map](server-map.png)

I need the **Unifi controller** for management of the two WAPs and a switch.

**HomeAssistant** is used for controlling my lights, which are from Phillips Wiz.
The primary usage is to have them change color temperature though the day using [adaptive-lighting](https://github.com/basnijholt/adaptive-lighting).
**Mosquitto** is my MQTT broker of choice, communicating with a smart switch and my [weatherstation](../weatherstation).

I use **JellyFin** for the occasional video streaming need, and then **node-sonos-http-api** for the backend to a [Sonos remote](https://github.com/eosti/sonos-remote).

Finally, I am using **Traefik** to tie it all together though a remote proxy.
Originally I could just remember the port numbers for each service, but that got difficult quickly.
Many hours of pain and suffering later, each frequently used service has a sub-domain that is much easier to use.
