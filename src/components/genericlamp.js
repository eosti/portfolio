import React from "react"

function GenericLamp() {
    return (
        <div>
            <h2 className="w-full">Using the SAO</h2>
            <div className="pb-4 w-full">
                For stand-alone operation, the internal 555 gives you
                PWM&apos;ed brightness control. This is adjustable via the
                trimpot on the back, for which you&apos;ll need a decent
                flathead screwdriver for. It&apos;s pretty sticky, so it may
                require a bit of force to move for the first time.
            </div>
            <div className="pb-4 w-full">
                If you want to control the SAO from your badge, the two GPIO can
                be used. GPIO1 is an active high signal that can be used to
                disable the internal PWM, and GPIO2 is an active high signal
                that can be used to PWM the LEDs.
            </div>
            <div className="pb-4 w-full">
                You can use GPIO1 as an on/off switch: drive high to turn off,
                drive low or float to turn on. To input your own PWM signal, you
                should assert GPIO1 and then PWM in to GPIO2. If you don&apos;t
                assert GPIO1, then the output will be the sum of your PWM and
                the 555&apos;s PWM.
            </div>
            <h2 className="w-full ">Design Notes</h2>
            <div className="pb-4 w-full">
                Much to
                <a
                    href="https://www.youtube.com/playlist?list=PLs5li81gerh6Ckl2zl0UMHGSjHia6M6LH"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    &nbsp;Alec from Technology Connections&apos;
                </a>
                &nbsp;dismay, the lamps are single-spectrum colored filaments so
                you don&apos;t get quite the nostoligc glow from years past. The
                filaments are 28mm, rigid filaments. Due to some logistical
                issues, all I have for Supercon 2026 is red, green, blue,
                purple, and warm white, but you can get a bunch of other colors.
            </div>
            <div className="pb-4 w-full">
                The design files (including schematics) are up{" "}
                <a
                    href="https://github.com/eosti/lamp-sao"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    on GitHub
                </a>
                . The control circuitry is fully BJT-based (which means that
                it&apos;s radiation-tolerant and safe for spaceflight!) with a
                555 for onboard PWM and some BJTs for driving the LEDs and for
                muxing between the internal PWM and an external PWM source.
            </div>
            <div className="pb-4 w-full">
                The input for the external PWM signal goes into a TTL-esque
                gate, inspired by reading in{" "}
                <a
                    href="https://books.google.ca/books/about/Digital_Systems_Engineering.html?id=oDWRAxCU-g8C"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Digital Integrated Electronics by Dally and Poulton
                </a>
                . It&apos;s a good read, and gives a much better description on
                how this works than I could give.
            </div>
            <div className="pb-4 w-full">
                I did a bit of a brain fart and missed that the input to the TTL
                gate is a NOR, not an NAND... so external and internal PWM
                aren&apos;t mutually exclusive. Oops. Could simplify the
                schematics a bit with this realization, which could save a whole
                pair of NPNs in the layout. Next time, I guess.
            </div>
        </div>
    )
}

export default GenericLamp
