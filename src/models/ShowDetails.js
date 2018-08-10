export default class ShowDetails {
    constructor(img, title, genres, summary) {
        this.img = img;
        this.title = title;
        this.genres = genres;
        this.summary=summary.replace(/(<([^>]+)>)/gi, '')
        // let text = summary.split("");

        // this.summary = text.filter(el => (el != '<' && el != '>' && el != '/')).join('')
    }
}