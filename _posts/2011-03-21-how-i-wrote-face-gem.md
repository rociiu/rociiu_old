---
layout: post
---

I visited [face.com][] api by accident someday and found out that it's missing a ruby library. How can a cool service like face.com lack of ruby wrapper, then I decided to write one.

I wrote some service wrapper on consulting jobs but never write a gem for them, I searched some ruby gems of services wrapper and read how they are wrote. After that I read code of python library of face.com (I wrote some python code when I was a student). So I did enough research on how the ruby library of [face.com][] will like.

## Tools that used for build the gem

*  [bundler][]: I used it to generate basic files that needed for a gem.
*  [json][]: Used to parse response.
*  [rest-client]: Simple REST client for Ruby

## Structure of gem
![face gem structure][1]

**lib/ext/** contains some extension methods of Object and Hash copy from rails, (I can also include rails activesupport module, have to check whether rails is installed).

**lib/client/** most of things are done in this folders, **lib/client/utils** contains core methods that make request to face.com and parse the response.

**lib/face.rb** include a simple method call client instance from Client module

Check [face-gem][] for more detail of implementation.

## What I learn from building a gem

*  Don't reinvent wheels, find if there is a exist gem that can do what you want. For face-gem, [rest-client][] saved me a lot of time
*  Find inspirations from similar code.
*  Release soon. Always respond to issues submitted by users.

## Some links of face gem
[developer.face.com][]
[ruby5][]
[Tutorial][]
[SourceCode][]


[face.com]: <http://face.com>
[face-gem]: <https://github.com/rociiu/face>
[bundler]: <http://gembundler.com/>
[json]: <http://json.rubyforge.org>
[rest-client]: <https://github.com/adamwiggins/rest-client>
[1]: https://img.skitch.com/20110320-p582679nepi1y88snt2ybkectn.jpg  "Face gem structure"
[ruby5]: <http://ruby5.envylabs.com/episodes/155-episode-152-february-22-2011/stories/1366-face-a-ruby-library-for-face-com>
[developer.face.com]: <http://developers.face.com/2011/02/ruby-on-rails-api-for-face-com/>
[Tutorial]: <http://hemju.com/2011/03/14/face-recognition-with-ruby/>
[SourceCode]: <https://github.com/rociiu/face>

