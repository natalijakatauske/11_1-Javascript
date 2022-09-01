console.log('labas')

//1. Susikuriame h1 elementą, jame įrašome savo vardą, pastilizuojame, kad
//elementas būtų raudonas ir pridedame jį prie <body>.

// const myName = document.createElement('h1')
// myName.textContent = 'Paula'
// myName.style.color = 'red'
// document.body.append(myName)


//2. Sukuriame <ul> elementą, o jame - tris <li> elementus su mašinų brand'ais.
//<body> turi atsirasti <ul>, kuriame trys <li>

// const listGroup = document.createElement('ul')
// document.body.appendChild(listGroup)

// const listGroupItem = document.createElement('li')
// listGroupItem.textContent = 'BMW'
// listGroupItem.style.color = 'aqua'
// listGroup.appendChild(listGroupItem)

// const listGroupItem2 = document.createElement('li')
// listGroupItem2.textContent = 'Honda'
// listGroupItem2.style.color = 'blue'
// listGroup.appendChild(listGroupItem2)

// const listGroupItem3 = document.createElement('li')
// listGroupItem3.textContent = 'Toyota'
// listGroupItem3.style.color = 'orange'
// listGroupItem.appendChild(listGroupItem3)


// Pratimas 3
document.body.style.background = 'lightcyan'

//Main Block
const main = document.createElement('main')
main.style.background = 'white'
main.style.borderRadius = '10px'
main.style.width = '80%'
main.style.margin = '10rem auto 0 auto'
main.style.padding = '1rem'
main.style.textAlign = 'center'
document.body.append(main)

//Photo
const photo = document.createElement('img')
photo.scr = 'https://www.face.eu/wp-content/uploads/2018/09/Torbjorn-Larsson.jpg'
photo.style.width = '10rem'
photo.style.height = '10rem'
photo.style.borderRadius = '50%'
photo.style.border = '1px solid black'
photo.style.padding = '0.5rem'
photo.style.marginTop = '-6.5rem'
main.append(photo)

const firstRow = document.createElement('h3')
firstRow.textContent = 'Trent Walton'
firstRow.style.textAlign = 'center'
main.append(firstRow)

const secondRow = document.createElement('p')
secondRow.textContent = 'Founder & 1/3 of @paravelinc'
secondRow.style.textAlign = 'center'
main.append(secondRow)

const thirdRow = document.createElement('p')
thirdRow.textContent = 'Austin, TX'
thirdRow.style.textAlign = 'center'
main.append(thirdRow)