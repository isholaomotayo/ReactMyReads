import   React  from 'react'
import ListBooks from './ListBooks'

class BookShelf extends React.Component{
    c2s = s => s.replace( /([A-Z])/g, " $1" ).charAt(0).toUpperCase() + s.replace( /([A-Z])/g, " $1" ).slice(1)


    render(){
        return(
            <div className="bookshelf ">
                <h2 className="bookshelf-title">{this.c2s(this.props.shelf)}</h2>
                <div className="bookshelf-books bookshelf--frame">
                    <ListBooks
                        books={this.props.books}
                        handleShelfChange={this.props.handleShelfChange}

                    />
                </div>
            </div>
        )
    }
}


export default BookShelf;