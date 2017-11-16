

let input = {
    "a": {
    "id": "a",
    "title": "Im the root",
    "parent": null,
    "children": [
    "b",
    "c",
    "d"
    ]
    },
    "b": {
    "id": "b",
    "title": "Im the first child of the root",
    "parent": "a",
    "children": null
    },
    "c": {
    "id": "c",
    "title": "Im a the second child of the root",
    "parent": "a",
    "children": [
    "e",
    "f"
    ]
    },
    "d": {
    "id": "d",
    "title": "Im the third child of the root",
    "parent": "a",
    "children": [
    "h"
    ]
    },
    "e": {
    "id": "e",
    "title": "Im the first child of c",
    "parent": "c",
    "children": [
    "g"
    ]
    },
    "f": {
    "id": "f",
    "title": "Im the second child of c",
    "parent": "c",
    "children": null
    },
    "g": {
    "id": "g",
    "title": "Im the first child of e",
    "parent": "e",
    "children": null
    },
    "h": {
    "id": "h",
    "title": "Im the first child of d",
    "parent": "d",
    "children": null
    }
    }


    const getSubtree = (input, letter) => {
      const elements = objectToArray(input)
      const parentsWithChilds = [getElement(elements, letter)[0]]

      if (getElement(elements, letter)[0].children)
        getElement(elements, letter)[0].children.map((letter) => {
           elements.filter( element => element.id === letter ? parentsWithChilds.push(element) : '' )
        })

      return parentsWithChilds
    }

    const objectToArray = (input) => {
      return Object.keys(input).map((element) => {
        return input[element]
      })
    }

    const getElement = (elements, letter) => {
      return elements.filter( (element) => element.id === letter )
    }

    console.log(getSubtree(input, 'e'))
