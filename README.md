# Planet Vacation
#### A site to help you decide which planet to visit.
#### By Colin Kingen
#### How it works.
 Each planet is assigned a value on a scale of one to nine.
 The answer for each question is assigned a numeric weight,
 from one to nine. If there are fewer than nine answers, the
 values for that question are evenly distributed across this range.
 For example, a question with three answers would have the values 2,5,7.
 (3,6,9 would have a higher range prejudice, but 1,3,6,9 works for four
  answers.)

  The site gathers your answers and gives you a custom background color
  and text blurb for all nine possible ends.
### Planet values
  Planets were roughly ordered very arbitrarily from most friendly (1, Earth)
  to least hospitable (9, Pluto). I consider Pluto a planet for this site even
  though it isn't. So sue me. Complete order as follows:

*  1-Earth
*  2-Mars
*  3-Saturn (Moons)
*  4-Jupiter (Moons)
*  5-Venus
*  6-Mercury
*  7-Neptune
*  8-Uranus
*  9-Pluto

The distribution of possible numbers makes weighting the largest
and smallest target values more heavily necessary, or the middle possible options
will be reached almost every time. This is dealt with in the JS logic by specifying
a bigger range for the lowest and highest value planets.
### Created with

* HTML
* CSS & Bootstrap 3
* Javascript and jquery
* Atom Text Editor
* Git version control
### License
Copyright (c) 2016 Colin Kingen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
