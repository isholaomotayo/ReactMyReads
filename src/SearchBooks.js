import React  from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'



import ListBooks  from './ListBooks'

class SearchBooks extends React.Component {


    state = {
        query:''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }


    render() {
        const { books } = this.props
        const { query } =this.state

        let showingBooks
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks = books.filter(
                (books) => match.test(books.title) || match.test(books.authors.toString()))
        } else {
            showingBooks = books
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link  className="close-search" to="/">Close</Link>
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
                    <ol className="books-grid"></ol>
                    {query}
                    <ListBooks books = {showingBooks}/>
                </div>
            </div>
        )
    }
}


export default SearchBooks;