import React  from 'react'
import { Link } from 'react-router-dom'


class ListBooks extends React.Component {


    render() {
        const { books } = this.props


        return (
            <div className="list-books">
                <div className="list-books-title"><h1>MyReads</h1></div>
                {books.map((book) =>
                    <div key={book.id} className="list-books-content">
                       <div className="bookshelf">
                           <h2 className="bookshelf-title">{book.shelf}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        <li>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{
                                                        width: 128,
                                                        height: 193,
                                                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                    }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select>
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading
                                                            </option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">{book.authors}</div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                )}
                <div className="open-search">
                    <Link
                    to='/search'
                    >Search Books </Link>
                </div>
            </div>
        )
    }
}

export default ListBooks;