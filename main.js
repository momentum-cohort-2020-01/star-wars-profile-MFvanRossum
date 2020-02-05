let vaderData

const dataSection = document.querySelector('#vader-data')

fetch('https://swapi.co/api/people/4')
    .then(function (response) {
        return response.json()
    })
    .then (function (data) {
        const img = document.createElement('img')
        img.src = 'https://cnet1.cbsistatic.com/img/Pej70RwEp3pNiG3mlpFthfFEpDU=/1092x0/2019/04/12/52c72c4b-bbae-43bc-b1c9-40792c5fb67c/vaderimmortal-episode1-vader1.jpg'
        img.classList.add('pic')
        dataSection.appendChild(img)

        const height = document.createElement('div')
        height.innerText = 'Height: ' + data.height + 'cm'
        height.classList.add('stats')
        dataSection.appendChild(height)

        const mass = document.createElement('div')
        mass.innerText = 'Mass: ' + data.mass + 'kg'
        mass.classList.add('stats')
        dataSection.appendChild(mass)

        const hairColor = document.createElement('div')
        hairColor.innerText = 'Hair Color: ' + data.hair_color
        hairColor.classList.add('stats')
        dataSection.appendChild(hairColor)

        const skin = document.createElement('div')
        skin.innerText = 'Skin Color: ' + data.skin_color
        skin.classList.add('stats')
        dataSection.appendChild(skin)

        const eyes = document.createElement('div')
        eyes.innerText = 'Eye Color: ' + data.eye_color
        eyes.classList.add('stats')
        dataSection.appendChild(eyes)

        const birthYear = document.createElement('div')
        birthYear.innerText = 'Birth Year: ' + data.birth_year
        birthYear.classList.add('stats')
        dataSection.appendChild(birthYear)


        return data.repos_url
    })
    .then(url => fetch('https://swapi.co/api/planets/1/'))
    .then(response => response.json())
    .then(function(data) {
        const homeworld = document.createElement('div')
        homeworld.classList.add('homeworld')
        dataSection.appendChild(homeworld)

        const tatooine = document.createElement('h2')
        tatooine.innerText = 'Homeworld: ' + data.name
        homeworld.appendChild(tatooine)

        const tatImg = document.createElement('img')
        tatImg.src = 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-m6xfo_e2c4e766.jpeg?region=0%2C0%2C1200%2C587'
        tatImg.classList.add('tatImg')
        homeworld.appendChild(tatImg)

        const tatClimate = document.createElement('div')
        tatClimate.innerText = 'Climate: ' + data.climate
        tatClimate.classList.add('stats')
        homeworld.appendChild(tatClimate)

        const tatTerrain = document.createElement('div')
        tatTerrain.innerText = 'Terrain: ' + data.terrain
        tatTerrain.classList.add('stats')
        homeworld.appendChild(tatTerrain)

        const tatPop = document.createElement('div')
        tatPop.innerText = 'Population: ' + data.population
        tatPop.classList.add('stats')
        homeworld.appendChild(tatPop)

    })
    .then(url => fetch('https://swapi.co/api/starships/13/'))
    .then(response => response.json())
    .then(function(data) {
        const starship = document.createElement('div')
        starship.classList.add('starship')
        dataSection.appendChild(starship)

        const ship = document.createElement('h2')
        ship.innerText = 'Ship: ' + data.name
        starship.appendChild(ship)

        const shipImg = document.createElement('img')
        shipImg.src = 'https://vignette.wikia.nocookie.net/starwars/images/7/78/TIEadvancedx1_btm.jpg/revision/latest?cb=20080320040101'
        shipImg.classList.add('shipImg')
        starship.appendChild(shipImg)

        const shipModel = document.createElement('div')
        shipModel.innerText = 'Model: ' + data.model
        shipModel.classList.add('stats')
        starship.appendChild(shipModel)

        const shipMan = document.createElement('div')
        shipMan.innerText = 'Manufacturer: ' + data.manufacturer
        shipMan.classList.add('stats')
        starship.appendChild(shipMan)

        const shipHyper = document.createElement('div')
        shipHyper.innerText = 'Hyperdrive Rating: ' + data.hyperdrive_rating
        shipHyper.classList.add('stats')
        starship.appendChild(shipHyper)

        const shipClass = document.createElement('div')
        shipClass.innerText = 'Ship Class: ' + data.starship_class
        shipClass.classList.add('stats')
        starship.appendChild(shipClass)
    })