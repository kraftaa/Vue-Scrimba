"use strict"

// emojify returns the corresponding emoji image
function emojify(name) {
    var out = `<img src="emojis/` + name + `.png">`
    return out
}

// cast returns a spell (function) that decorates the wizard
// function cast(emoji) {
//     if (!emoji) {
//         emoji = "¯\\_(ツ)_/¯"
//     }
//     return function (wizard) {
//         return emoji + wizard + emoji
//     }
// }

// Vue.component("harry", {
//     template: `<p>` + emojify("harry") + `</p>`
// })
// Vue.component("ron"     , { template: `<p>` + emojify("ron"     ) + `</p>` })
// Vue.component("hermione", { template: `<p>` + emojify("hermione") + `</p>` })

// Vue.component("wizard", {
//     props: ["name", "cast"],
//     template: `<p v-html="cast(name)"><slot></slot></p>`
// })

// var app = new Vue({
//     el: "#app",
//     data: {
//         harry    : emojify("harry"   ),
//         ron      : emojify("ron"     ),
//         hermione : emojify("hermione")
//     },
//     methods: {
//         // oculus_reparo returns a spell (function) that repairs glasses
//         oculus_reparo: cast(emojify("oculus-reparo")),
//         // wingardium_leviosa returns a spell (function) that levitates an object
//         wingardium_leviosa: cast(emojify("wingardium-leviosa")),
//         // alohomora returns a spell (function) that unlocks a door
//         alohomora: cast(emojify("alohomora"))
//     }
// })

var app = new Vue({
    el: "#app",
    data: {
        active: emojify("sirius--man"),
        // sirius is an object that contains two states: man and dog
        sirius: {
            man: emojify("sirius--man"),
            dog: emojify("sirius--dog")
        }
    },
    methods: {
        // an animagus is a wizard whom can shapeshift
        animagus: function () {
            this.active = (
                this.active == this.sirius.man ?
                    this.sirius.dog :
                    this.sirius.man
            )
        },
        // breathe returns the corresponding .breathe--*
        breathe: function () {
            return (
                this.active == this.sirius.man ?
                    "breathe--man" :
                    "breathe--dog"
            )
        },
        // background returns the corresponding background
        background: function () {
            return (
                this.active == this.sirius.man ?
                    "" :
                    "black"
            )
        },
    }
})