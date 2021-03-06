import React  from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'


class ListBooks extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        handleShelfChange: PropTypes.func.isRequired


    }

    render() {
        const {books} = this.props
        books.sort(sortBy('title'))
        return (
            <ol className="books-grid book-wrapper">

                {books.map((book, index) =>
                    <li key={book.id}>

                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{
                                    width: 128,
                                    height: 183,
                                    backgroundRepeat:'no-repeat',
                                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                                }}></div>
                                <div className="book-shelf-changer">
                                    <select
                                        value={book.shelf || 'none'}

                                        onChange={(event) => this.props.handleShelfChange(book, event.target.value)}
                                    >

                                        <option value="Move to" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead" >Want to Read</option>
                                        <option value="read"  > Read</option>
                                        <option value="none"  >None</option>
                                    </select>
                                </div>
                            </div>

                            <div className="book-title">{book.title} </div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                    </li>
                )}
            </ol>

        )
    }
}

export default ListBooks;