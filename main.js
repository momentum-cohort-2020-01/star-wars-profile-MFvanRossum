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

        // const homeworld = document.createElement('div')
        // homeworld.innerText = 'Homeworld: ' + data.homeworld
        // homeworld.classList.add('homeworld')
        // dataSection.appendChild(homeworld)

    })