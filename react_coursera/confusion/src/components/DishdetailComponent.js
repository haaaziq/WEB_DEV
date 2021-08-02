import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

    function DateFormat(date){
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
                <ul className='list-unstyled'>
                    {allComments}
                </ul>
            );

        } else {
            return(<div></div>);
        }
    }

    function RenderDish({dish}){
        if(dish!=null){
            return(
                <React.Fragment>
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <h4><strong>Comments</strong></h4>
                    <RenderComments comments={dish.comments} />
                </div>
                </React.Fragment>
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
    const dish = props.dish;
    return(
        <div className='container'>
            <div className='row'>
                <RenderDish dish={dish} />
            </div>
        </div>
    );
}

export default DishDetail;