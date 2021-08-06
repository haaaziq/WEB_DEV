import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

    function DateFormat({date}){
        const format = {year: 'numeric', month: 'short', day: 'numeric'};
        const newDate = new Date(date);
        return newDate.toLocaleDateString("en-US", format);
    }

    function RenderComments({comments}){
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
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.comments} />
            </div>
        </div>
    );
}

export default DishDetail;