import React from 'react';


const CommentDetail = (props) => {

    console.log(props);
    return (
        <div className="comment">
            <a className="avatar">
            <img src={props.avatar} />
            </a>
            <div className="content">
                <a className="author">{props.author}</a>
                <div className="metadata">
                    <div className="date">2 days ago</div>
                    <div className="rating">
                        <i className="star icon"></i>
                        5 Faves
                    </div>
                </div>
                <div className="text">
                    {props.texto}
                </div>
            </div>
        </div>
    );
}

export default CommentDetail;