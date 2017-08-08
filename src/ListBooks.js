import React  from 'react'
import {Route} from 'react-router-dom'


class ListBooks extends React.Component {
    render() {
        let books = this.props.books;

        return (
            <div>
                {books.map((book) =>
                    <div key={book.id} className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        <li>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{
                                                        width: 128,
                                                        height: 193,
                                                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`
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
                    </div>
                )}
            </div>


        )
    }
}

export default ListBooks;