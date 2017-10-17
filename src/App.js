import React from 'react'
import {Route, Link} from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'
import './App.css'


class BooksApp extends React.Component {
    state = {
        books: [],
        search: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })

    }

    onSearch = (query) => {
        BooksAPI.search(query, 10).then((booksResult) => {
            this.setState((state) => ({search: booksResult}))
        })
    }
  
    onShelfChange = (bookObject, bookShelf) => {
        bookObject.shelf = bookShelf
        BooksAPI.update(bookObject, bookShelf).then(() => {
            this.setState((state) => ({
                books: state.books.concat(state.search.filter(
                    (book) => book.id === bookObject.id))
            }))
        })
    }

    // Don't wait for API call to return
    // onShelfChange = (bookObject, bookShelf) => {
    //     bookObject.shelf=bookShelf
    //     this.setState( (state) => ({
    //         books : state.books.concat(state.search.filter(
    //             (book) => book.id ===bookObject.id))
    //     }))
    //     BooksAPI.update(bookObject, bookShelf)
    // }


    render() {
        return (
            <div className="app">

                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title"><h1>MyReads</h1></div>

                        <div className="list-books-content">

                            <BookShelf books={this.state.books.filter(
                                (book) => book.shelf === 'currentlyReading')}
                                       shelf="currentlyReading"
                                       handleShelfChange={this.onShelfChange}
                            />

                            <BookShelf books={this.state.books.filter(
                                (book) => book.shelf === 'wantToRead')}
                                       shelf="wantToRead"
                                       handleShelfChange={this.onShelfChange}
                            />

                            <BookShelf books={this.state.books.filter(
                                (book) => book.shelf === 'read')}
                                       shelf='read'
                                       handleShelfChange={this.onShelfChange}
                            />


                        </div>
                        <div className="open-search">
                            <Link to='/search'> Search Books </Link>
                        </div>
                    </div>

                )}
                />

                <Route exact path='/search' render={() => (

                    <SearchBooks
                        sb={this.state.books}
                        books={this.state.search}
                        handleShelfChange={this.onShelfChange}
                        search={this.onSearch}

                    />
                )}
                />

            </div>
        )
    }
}

export default BooksApp
