export default class DummySwapiService {

  _people = [
    {
      id: 1,
      name: 'Darth',
      last_name: 'Vader',
      homeworld: 'Tatooine',
      born: '41 BBY',
      died: '4 ABY',
      species: 'Human',
      gender: 'Male',
      height: '1.73 meters',
      mass: '136 kilograms',
      hair_color: 'Gray and white',
      eye_color: 'Blue',
      cybernetics: 'Prosthetic arms and legs, and a life-support system',
      url: 'https://swapi.dev/api/people/1/',
      full_image: 'http://sw/characters/1-full.png',
      preview_image: 'http://sw/characters/1-mini.jpg',
      bg_image: '/users/d-vader-bg.jpg',
      status_level: 'Dark lord of the sith',
      logo_side: 'http://sw/logo/empire-logo.png',
      title_side: 'Galactic Empire',
      color: '#B11918',
      description: 'Darth Vader, also known by his real name as Anakin Skywalker, is the central character in the first six episodes of the Star Wars saga. Also appears in Rogue One. The epic Star Wars shows his rise as a Jedi Knight, his transition to the dark side of the Force and his final redemption. Father of Luke Skywalker and Leia Organa. The only character to appear in six episodes and the Rogue One spin-off In the Flesh'
    },
    {
      id: 2,
      name: 'Palpatine',
      last_name: null,
      homeworld: 'Naboo',
      born: '82 BBY, Naboo',
      died: '10 ABY',
      species: 'Human',
      gender: 'Male',
      height: '1.73 meters',
      mass: '75 kilograms',
      hair_color: 'Red, later gray and white',
      eye_color: 'Blue, yellow/red (dark side)',
      cybernetics: '-',
      url: 'https://swapi.dev/api/people/2/',
      full_image: 'http://sw/characters/2-full.png',
      preview_image: 'http://sw/characters/2-mini.jpg',
      bg_image: '/users/obiwan-bg.jpg',
      status_level: 'Dark Lord of the Sith ',
      logo_side: 'http://sw/logo/empire-logo.png',
      title_side: 'Galactic Empire',
      color: '#65A4CE',
      description: 'Palpatine, also known as Darth Sidious, was a Force-sensitive Human male who served as the last Supreme Chancellor of the Galactic Republic and the first Emperor of the Galactic Empire. \n' +
        'Noted for his sadistic and self-serving intentions just as well as his ability to conceal them, Palpatine impacted the galaxy perhaps more than any other single individual, and it is likely that his impact on history, for good or ill, was immeasurable.'
    },
    {
      id: 3,
      name: 'Anakin',
      last_name: 'Skywalker',
      homeworld: 'Stewjon',
      born: '41 BBY, Tatooine',
      died: '4 ABY',
      species: 'Human',
      gender: 'Male',
      height: '1.88 meters',
      mass: '120 kilograms',
      hair_color: 'Blond light and dark',
      eye_color: 'Gray-blue',
      cybernetics: '-',
      url: 'https://swapi.dev/api/people/2/',
      full_image: 'http://sw/characters/3-full.png',
      preview_image: 'http://sw/characters/3-mini.jpg',
      bg_image: '/users/obiwan-bg.jpg',
      status_level: 'Jedi Knight',
      logo_side: 'http://sw/logo/republic-logo.png',
      title_side: 'Republic',
      color: '#65A4CE',
      description: 'Anakin Skywalker was a legendary human male Jedi Knight of the Galactic Republic and the prophesied Chosen One of the Jedi Order, destined to bring\n' +
        'balance to the Force. Also known as "Ani"\n' +
        'during his childhood.\n' +
        '\n' +
        'Skywalker earned the moniker "Hero With No Fear" from his accomplishments in the Clone Wars. His alter ego, Darth Vader, the Dark Lord of the Sith, was created when Skywalker turned to the dark side of the Force, pledging his allegiance to the Sith Lord Darth Sidious at the end of the Republic Era.'
    },
    {
      id: 4,
      name: 'Obi-wan',
      last_name: 'Kenobi',
      homeworld: 'Stewjon',
      born: '57 BBY',
      died: '0 BBY',
      species: 'Human',
      gender: 'Male',
      height: '1.82 meters',
      mass: '81 kilograms',
      hair_color: 'Auburn, later white',
      eye_color: 'Gray-blue',
      cybernetics: '-',
      url: 'https://swapi.dev/api/people/2/',
      full_image: 'http://sw/characters/4-full.png',
      preview_image: 'http://sw/characters/4-mini.jpg',
      bg_image: '/users/obiwan-bg.jpg',
      status_level: 'Jedi master',
      logo_side: 'http://sw/logo/republic-logo.png',
      title_side: 'Republic',
      color: '#65A4CE',
      description: 'Obi-Wan Kenobi was a Force-sensitive legendary human male Jedi Master who served on the Jedi High Council during the last years of the Republic Era. During the Imperial Era, he adopted the alias Ben Kenobi in order to hide from the regime that drove the Jedi to near extinction.\n' +
        '\n' +
        'A noble man known for his skills with the Force, Kenobi trained Anakin Skywalker, served as a Jedi General in the Grand Army of the Republic, and became a mentor to Luke Skywalker prior to his death in 0 BBY.'
    },
    {
      id: 5,
      name: 'Mace',
      last_name: 'Windu',
      homeworld: 'Haruun Kal',
      born: '57 BBY',
      died: '19 ABY',
      species: 'Human',
      gender: 'Male',
      height: '1.92 meters',
      mass: '80 kilograms',
      hair_color: 'Black',
      eye_color: 'Brown',
      cybernetics: '-',
      url: 'https://swapi.dev/api/people/2/',
      full_image: 'http://sw/characters/5-full.png',
      preview_image: 'http://sw/characters/5-mini.jpg',
      bg_image: '/users/obiwan-bg.jpg',
      status_level: 'Jedi master',
      logo_side: 'http://sw/logo/republic-logo.png',
      title_side: 'Republic',
      color: '#65A4CE',
      description: 'Mace Windu was a revered human male Jedi Master and member of the Jedi High Council during the last years of the Galactic Republic. During his time in the Jedi Order, he once served as elected leader of the Jedi and, during the Clone Wars, as a Jedi General in the Grand Army of the Republic.\n' +
        '\n' +
        'He was the greatest champion of the Jedi Order and promoted its ancient traditions amidst the growing influence of the dark side of the Force in the corrupt, declining days of the Republic.'
    },
    {
      id: 6,
      name: 'TEST1',
      last_name: 'Windu',
      homeworld: 'Haruun Kal',
      born: '57 BBY',
      died: '19 ABY',
      species: 'Human',
      gender: 'Male',
      height: '1.92 meters',
      mass: '80 kilograms',
      hair_color: 'Black',
      eye_color: 'Brown',
      cybernetics: '-',
      url: 'https://swapi.dev/api/people/2/',
      full_image: 'http://sw/characters/5-full.png',
      preview_image: 'http://sw/characters/5-mini.jpg',
      bg_image: '/users/obiwan-bg.jpg',
      status_level: 'Jedi master',
      logo_side: 'http://sw/logo/republic-logo.png',
      title_side: 'Republic',
      color: '#65A4CE',
      description: 'Mace Windu was a revered human male Jedi Master and member of the Jedi High Council during the last years of the Galactic Republic. During his time in the Jedi Order, he once served as elected leader of the Jedi and, during the Clone Wars, as a Jedi General in the Grand Army of the Republic.\n' +
        '\n' +
        'He was the greatest champion of the Jedi Order and promoted its ancient traditions amidst the growing influence of the dark side of the Force in the corrupt, declining days of the Republic.'
    },
    {
      id: 7,
      name: 'TEST2',
      last_name: 'Windu',
      homeworld: 'Haruun Kal',
      born: '57 BBY',
      died: '19 ABY',
      species: 'Human',
      gender: 'Male',
      height: '1.92 meters',
      mass: '80 kilograms',
      hair_color: 'Black',
      eye_color: 'Brown',
      cybernetics: '-',
      url: 'https://swapi.dev/api/people/2/',
      full_image: 'http://sw/characters/5-full.png',
      preview_image: 'http://sw/characters/5-mini.jpg',
      bg_image: '/users/obiwan-bg.jpg',
      status_level: 'Jedi master',
      logo_side: 'http://sw/logo/republic-logo.png',
      title_side: 'Republic',
      color: '#65A4CE',
      description: 'Mace Windu was a revered human male Jedi Master and member of the Jedi High Council during the last years of the Galactic Republic. During his time in the Jedi Order, he once served as elected leader of the Jedi and, during the Clone Wars, as a Jedi General in the Grand Army of the Republic.\n' +
        '\n' +
        'He was the greatest champion of the Jedi Order and promoted its ancient traditions amidst the growing influence of the dark side of the Force in the corrupt, declining days of the Republic.'
    },
  ];

  _planets = [
    {
      id: 1,
      name: 'Earth1 [TEST DATA]',
      population: '7.530.000.000',
      rotationPeriod: '23 hours 56 seconds',
      diameter: '12.742 km'
    },
    {
      id: 2,
      name: 'Venu33s [TEST DATA]',
      population: 'not known',
      rotationPeriod: '243 days',
      diameter: '12.104 km'
    },
    {
      id: 3,
      name: 'Venus22 [TEST DATA]',
      population: 'not known',
      rotationPeriod: '243 days',
      diameter: '12.104 km'
    },
    {
      id: 4,
      name: 'Venus11 [TEST DATA]',
      population: 'not known',
      rotationPeriod: '243 days',
      diameter: '12.104 km'
    }
  ];

  _starships = [
    {
      id: 1,
      name: 'USS Enterprise [TEST DATA]',
      model: 'NCC-1701-C',
      manufacturer: 'Northrop Grumman Shipbuilding',
      costInCredits: 'not known',
      length: 'approx 300 meters',
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100
    }
  ];

  getAllPeople = async () => {
    const res=  this._people;
    return res.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const person = this._people[id-1];
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanet = async (id) => {
    return this._planets[id]
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getStarship = async () => {
    return this._starships[0];
  };

  getPersonImage = () => {
    return `https://placeimg.com/400/500/people`
  };

  getStarshipImage = () => {
    return `https://placeimg.com/600/400/tech`;
  };

  getPlanetImage = () => {
    return `https://placeimg.com/400/400/nature`
  };

  _transformPlanet = (planet) => {
    return {
      id: planet.id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformPerson = (person) => {
    return {
      id: person.id,
      name: person.name,
      lastName: person.last_name,
      eyeColor: person.eye_color,
      gender: person.gender,
      previewImage: person.preview_image,
      birthYear: person.born,
      diedYear: person.died,
      description: person.description,
      hairColor: person.hair_color,
      statusLevel: person.status_level,
      cybernetics: person.cybernetics,
      species: person.species,
      homeWorld: person.homeworld,
      height: person.height,
      mass: person.mass,
      fullImage: person.full_image,
      logoSide: person.logo_side,
      titleSide: person.title_side,
    }
  }

  _transformStarship = (starship) => {
    return {
      id: starship.id,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      crew: starship.crew
    }
  }
}
