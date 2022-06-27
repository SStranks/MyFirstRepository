// Your job is to create a class called Song.

// A new Song will take two parameters, title and artist.

// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// mountMoose.title => 'Mount Moose'
// mountMoose.artist => 'The Snazzy Moose'
// You will also have to create an instance method named howMany() (or how_many()).

// The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".

// Example
// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// // day 1 (or test 1)
// mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 5
// // These are all new since they are the first listeners.

// // day 2
// mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); => 2
// // Luke and Amanda are new, john already listened to it the previous day
// Also if the same person listened to it more than once a day it should only count them once.

// Example
// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// // day 1
// mountMoose.howMany(['John', 'joHN', 'carl']); => 2

// My Solution
class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listeners = [];
  }

  howMany(arr) {
    return arr.filter((el) => {
      const name = el.toLowerCase();
      if (!this.listeners.includes(name)) {
        this.listeners.push(name);
        return el;
      }
    }).length;
  }
}

// Other Solutions
class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listener = new Set();
  }
  howMany(people) {
    let oldSize = this.listener.size;
    people.map((p) => this.listener.add(p.toLowerCase()));
    return this.listener.size - oldSize;
  }
}

class Song {
  constructor(title, artist) {
    Object.assign(this, { title, artist, set: new Set() });
  }

  howMany(people) {
    return people.reduce(
      (pre, val) => pre - this.set.size + this.set.add(val.toLowerCase()).size,
      0
    );
  }
}

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.ar = [];
  }

  howMany(arr) {
    let out = 0;
    for (let i of arr) {
      if (!this.ar.includes(i.toLowerCase())) {
        this.ar.push(i.toLowerCase());
        out++;
      }
    }
    return out;
  }
}
