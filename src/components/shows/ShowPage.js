import React, { Component, Fragment } from 'react';
import { data } from '../../services/showService';
import ShowGrid from './ShowGrid';
import Loader from '../../partials/Loader/Loader';
import SearchBar from '../../partials/SearchBar'


class ShowPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [],
            filteredShows: [],
            isLoad: false
        }

    }
    searchHandler = (input) => {
        const text = input.toLowerCase()
        const shows = this.state.shows
        const searchShows = shows.filter(show => {
            const title = show.title.toLowerCase()
            return title.includes(text)
        })
        this.setState({
            filteredShows: searchShows
        })
    }
    loadShows() {
        data.getTop50Show().then((data) => {
            return (this.setState({
                shows: data,
                filteredShows: data,
                isLoad: true
            })

            )
        })
    }
    componentDidMount() {
        this.loadShows()
    }

    render() {
        return (
            <Fragment>
                <SearchBar search={this.searchHandler} />
                {(this.state.isLoad) ? <ShowGrid shows={this.state.filteredShows} /> : <Loader />}
            </Fragment>
        )
    }
}

export default ShowPage