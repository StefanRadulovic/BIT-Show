import Show from '../models/Show';
import ShowDetails from '../models/ShowDetails';
import Actor from '../models/Actor'

class Data {

    getTop50Show() {
        return fetch('http://api.tvmaze.com/shows').then(data => data.json()).then(data => {

            let shows50 = data.sort(function (s1, s2) {
                let r1 = s1.rating.average;
                let r2 = s2.rating.average;

                if (r1 > r2) {
                    return -1
                }
                if (r1 <= r2) {
                    return 1
                }

            })
            shows50 = shows50.slice(0, 50);

            const shows = shows50.map(show => new Show(show.id, show.name, show.image.medium, show.rating.average));

            return shows
        })
    }
    getShowDetails(id) {
        return fetch(`http://api.tvmaze.com/shows/${id}`)
            .then(data => data.json())
            .then(data => {
                return new ShowDetails(data.image.original, data.name, data.genres, data.summary)
            })
    }
    getShowCast(id) {
        return fetch(`http://api.tvmaze.com/shows/${id}/cast`)
            .then(data => data.json())
            .then(data => {

                return data.map(actor => new Actor(actor.person.name, actor.person.image.medium))
            })
    }

}

export const data = new Data();