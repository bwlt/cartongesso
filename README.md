cartongesso
===========

cartongesso is a very little SPA (Single-Page Application) developed for helping my brother to calculate the price of building material in a simple manner.

The requirements for this 'application' was the portability and the simplicity of the UI.
For that purpose I choose to build an HTML document powered by Bootstrap & jQuery (avoiding cross-browser incompatibility and using modern tools).

This repository includes also a gruntfile for building the application in a single file (it use grunt-inline node module).

Under the hood
--------------

The document is composed by two forms, all the value are serialized on forms change and stored through HTML5 local storage (this for avoiding to refill all forms).

Also the calculation of the total price is entirely performed with pure javascript.

Getting started / building
--------------------------

You can see a builded version of this application at [this link](https://turbometalskater.github.io/cartongesso/).

For start tweaking with this repo, once cloned just run

    $ npm install
    $ ./node_modules/.bin/bower install
    $ grunt

You will find the builded file on *dist* repository root directory.

PS. You will need nodejs for building the application.

TODO
----

The dist file (the builded one for production use) have url refs to bootstrap glyphicons, it causes error on web console.
