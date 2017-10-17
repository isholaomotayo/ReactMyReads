import React  from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

import ListBooks  from './ListBooks'
class SearchBooks extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        handleShelfChange: PropTypes.func.isRequired,
        search: PropTypes.func.isRequired
    }

    state = {
        query:''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
        this.props.search(query)
    }
    render() {
        const { books, sb} = this.props
        const { query } =this.state

        books.map( (b,i) => (
             sb.map( (el) => el.id ).indexOf(b.id) > -1 && (b.shelf=sb[sb.map( (el) => el.id ).indexOf(b.id)].shelf)

        ))

       books.sort(sortBy('title'))
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link  className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">

                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event)=> this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">

                    <ListBooks
                        books={books}
                        handleShelfChange={this.props.handleShelfChange}

                    />



                </div>
            </div>
        )
    }
}



export default SearchBooks;