/* eslint-disable */
import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem, Label, Row, Modal, ModalBody, ModalHeader, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const minLength = (len) => (val) => val && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isCommentModalOpen: false,
        };
        this.toggleCommentModal = this.toggleCommentModal.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    toggleCommentModal(){
        this.setState({
            isCommentModalOpen : !this.state.isCommentModalOpen,
        });
    }

    handleCommentSubmit(values){
        this.toggleCommentModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        alert('new comment posted by: ' + values.author);
    }

    render(){
        return(
            <React.Fragment>
                <Button outline onClick={this.toggleCommentModal} ><span className='fa fa-pencil fa-lg'></span> Submit Comment</Button>
                
                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
                    <ModalHeader toggle={this.toggleCommentModal}><b>Submit Comment</b></ModalHeader>
                    <ModalBody className='mx-3'>
                        <LocalForm onSubmit={(values) => this.handleCommentSubmit(values)} >
                            <Row className='form-group'>
                                <Label htmlFor='rating'>Rating</Label>
                                <Control.select model='.rating' name='rating' id='rating' className='form-control'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='author'>Your Name</Label>
                                <Control.text model='.author' name='author' id='author' placeholder='Your Name' className='form-control' 
                                    validators={{
                                        minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors 
                                    className='text-danger'
                                    model='.author'
                                    show='touched'
                                    messages={{
                                        minLength: "Must be greater than 2 characters",
                                        maxLength: "Must be 15 characters or less",
                                    }}
                                />
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='comment'>Comment</Label>
                                <Control.textarea model='.comment' name='comment' id='comment' rows='6' className='form-control' />
                            </Row>
                            <Row className='form-group'>
                                <Button type='submit' color='primary'>Submit</Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

    function DateFormat({date}){
        const format = {year: 'numeric', month: 'short', day: 'numeric'};
        const newDate = new Date(date);
        return newDate.toLocaleDateString("en-US", format);
    }

    function RenderComments({commentsErrMsg, comments, postComment, dishId}){
        if(commentsErrMsg){
            return(
                <h4>{commentsErrMsg}</h4>
            );
        }
        else if(comments!=null){
            const allComments = comments.map((cmnt) => {
                return(
                    <Fade in>        
                        <React.Fragment key={cmnt.id} >
                            <p>{cmnt.comment}</p>
                            <p>-- {cmnt.author}, < DateFormat date={cmnt.date} /> </p>
                        </React.Fragment>
                    </Fade>
                );
            });

            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4><strong>Comments</strong></h4>
                    <ul className='list-unstyled'>
                        <Stagger in>
                            {allComments}
                        </Stagger>
                    </ul>
                    <CommentForm postComment={postComment} dishId={dishId} />
                </div>
            );

        } else {
            return(<div></div>);
        }
    }

    function RenderDish({dish}){
        if(dish!=null){
            return(
                <div className='col-12 col-md-5 m-1'>
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)',
                        }} >  
                        <Card>
                            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle><strong>{dish.name}</strong></CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

// OR-- const DishDetail = (props) => {}
function DishDetail(props){

    if(props.isLoading){
        return(
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        );
    }

    else if(props.errMsg){
        return(
        <div className='container'>
            <div className='row'>
                <h4>{props.errMsg}</h4>
            </div>
        </div>
        );
    }
    
    else
        return(
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>

                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                    </div>
                    <hr />
                </div>
                <div className='row'>
                    <RenderDish dish={props.dish} />
                    <RenderComments commentsErrMsg={props.commentsErrMsg} comments={props.comments} postComment={props.postComment} dishId={props.dish.id} />
                </div>
            </div>
        );
}

export default DishDetail;