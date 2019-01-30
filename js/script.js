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

Vue.component("harry", {
    template: `<p>` + emojify("harry") + `</p>`
})

var app = new Vue({
    el: "#app",
    data: {
        wizard      : "",
        harry       : emojify("harry"      ),
        hedwig      : emojify("hedwig"     ),
        ron         : emojify("ron"        ),
        scabbers    : emojify("scabbers"   ),
        hermione    : emojify("hermione"   ),
        crookshanks : emojify("crookshanks")
    },
    methods: {
        wizards: function () {
            return [
                { name: this.harry   , pet: this.hedwig      },
                { name: this.ron     , pet: this.scabbers    },
                { name: this.hermione, pet: this.crookshanks }
            ]
        }
    }
})

app.wizard = app.ron