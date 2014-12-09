RadioReceiver
=============

Using a 433Mhz receiver, audio jack, and a webpage to gather data from wireless sensors

Wiring Up
---------

* Buy a simple [433Mhz receiver](http://www.espruino.com/433Mhz), USB plug, Audio Jack, and 2x 10k Ohm (ish) resistors
* Connect GND and 5V from USB to the Receiver
* Connect the 2 resistors in series, across the receiver's output and GND
* Connect the Audio Jack to GND and the middle of the 2 resistors.

Using
----

* Enter your Xively feed ID and API key into index.html
* Serve the webpage from a web server
* Load it in your web browser
* Job done
