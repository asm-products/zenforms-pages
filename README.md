# Zenforms Pages

<a href="https://assembly.com/zenforms/bounties"><img src="http://badger.asm.co/zenforms/badges/tasks.svg" height="24px" alt="Open Tasks" /></a>

1099 and other forms as a service

## Pages

```HTML``` files are stored in the ```/pages``` folder. Each is a static page which recreates the corresponding mockup. These pages will later be converted to a Rails Template for implementation into the codebase, but for now do what you do best and don't worry about the backend!

- Contractor List
- Landing Page

## Stylesheets

Styles are based on the ```Bootstrap``` library, which is implemented using ```SCSS``` as a preprocessor by ```@extend```-ing the classes.
Front-facing classes should not be ```Bootstrap``` classes.

## Icons

A custom font ("zenforms", by [@davecrow](https://assembly.com/users/davecrow)) is used as an icon font for the project.

## Javascript

```jQuery``` is the main javascript library, which is a dependency of ```Bootstrap``` as well as other javascript frameworks which may be implemented in the future.

## Task Runner

Tasks are run using the command line tool ```Gulp```.

See ```gulpfile.js``` for  details.
