
> Open this page at [https://timnew.github.io/omni_bit_car/](https://timnew.github.io/omni_bit_car/)

## Introduction

This is project for to control a Mecanum Wheel robot car with a remote controller communicated via MicroBit bluetooth protocol.

The whole project requires:

* 2 MicroBit controllers, one for the car, the other is fore the controller
* [Yahboom Omni:Bit](https://category.yahboom.net/collections/micro-bit/products/omni-bit) as the car
* [Yahboom GameHand](https://category.yahboom.net/collections/micro-bit/products/basicgamehandle) as the remote controller

The software part contains 2 projects:

* Car: https://github.com/timnew/omni_bit_car
* Controller: https://github.com/timnew/omni_bit_remote

## What is the difference from the offical solution

* It is similar to the offical solution at the core, but is more elegent and graceful.
* It inherits the responsiveness from the official solution, no response delay.
* It reads the joystick analog reading on the control pad, and control the car with analog signal. So you can control the speed or the car with joy stick, also allow you to move the car in any direction as joystick points.
* This project redsign the communication protocol, it depends on MicrBit's built-in key value pair signal instead of the clucky string based protocol.
* By dropping the clucky string protocol, code is hugely simplifed.
* The right buttons also controls the car to move forward and backward at full speed.
* Button control and joystick control can seamlessly works at the same time.

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/timnew/omni_bit_car** and import

## Edit this project ![Build status badge](https://github.com/timnew/omni_bit_car/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/timnew/omni_bit_car** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/timnew/omni_bit_car/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
