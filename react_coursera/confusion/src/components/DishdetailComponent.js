import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem, Label, Row, Modal, ModalBody, ModalHeader, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

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
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
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

    function RenderComments({comments, addComment, dishId}){
        if(comments!=null){
            const allComments = comments.map((cmnt) => {
                return(
                    <React.Fragment key={cmnt.id} >
                        <li>{cmnt.comment}</li><br/>
                        <li>-- {cmnt.author}, < DateFormat date={cmnt.date} /> </li><br/>
                    </React.Fragment>
                );
            });

            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4><strong>Comments</strong></h4>
                    <ul className='list-unstyled'>
                        {allComments}
                    </ul>
                    <CommentForm addComment={addComment} dishId={dishId} />
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
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
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
                <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
            </div>
        </div>
    );
}

export default DishDetail;