cartongesso
===========

cartongesso is a very little SPA (Single-Page Application) developed for helping my brother to calculate the price of building material in a simple manner.

The requirements for this 'application' was the portability and the simplicity of the UI.
For that purpose I choose to build a *single* HTML document powered by Bootstrap & AngularJS (avoiding cross-browser incompatibility and using modern tools).

This repository includes also a gruntfile for building the application in a single file (it use a modified version of Yeoman build task to fulfill my purpose of obtaining a single file).

In my personal opinion: this 'project' was developed with a great effort regarding the requirements: it is something like to kill a mosquito with an ion cannon.
By the way, first commits already accomplished the requirements with a plain JavaScript solution, but the real pleasure was to port all the code to AngularJS, see the magics of frontend development and learn a lot :)

Under the hood
--------------

The document is powered by AngularJS, the entire body scope is related to the unique controller where all the model variables are 'linked' to HTML5 local storage (and persist through document visits) using the ngStorage package.

The calculation of the various price is performed by AngularJS services.

Getting started / building
--------------------------

You can see a builded version of this application at this [link](https://turbometalskater.github.io/cartongesso/).

For start tweaking with this repo, once cloned just run

    $ npm install
    $ grunt build

You will find the builded file on *dist* repository root directory.

PS. You will need at least nodejs for building the application. The other deps are installed through npm.
