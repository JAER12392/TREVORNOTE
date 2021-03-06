import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

class NoteSummaryItem extends React.Component {

  render() {
    const note = this.props.note;
    let className = "";

    if (this.props.currentNote) {
      className = "selected-note";
    }

    return (
      <Link to={`/${this.props.type}/${note.id}`}>
        <li className={`note-summary-item ${className}`}>
          <div className="note-container">
            <h4>{note.title}</h4>
            <h5>{note.last_updated}</h5>
            <p>{ReactHtmlParser(note.body.slice(0, 150))}</p>
            <div className="note-actions">
              <i className="fa fa-trash" onClick={e => {
                  e.preventDefault();
                  this.props.deleteNote(note.id);
                }}/>
              <i className="fa fa-star" />
            </div>
          </div>
        </li>
      </Link>
    );
  }
}

export default NoteSummaryItem;
