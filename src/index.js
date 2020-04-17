import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                   <h4>Warning</h4> 
                   Are you sure you want to do this
                </div>
                
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="sam" 
                    texto="um simples texto" 
                    avatar = {faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Tiler" 
                    texto="um  tsimplesexto" 
                    avatar = {faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Netcha" 
                    texto="um complexo item" 
                    avatar = {faker.image.avatar()}/>
            </ApprovalCard>
                       
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))