import React, {Component} from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";



class DishDetail extends Component{

    dateFormat(date){
        const format = {year: 'numeric', month: 'short', day: 'numeric'};
        const newDate = new Date(date);
        return newDate.toLocaleDateString("en-US", format);
    }

    renderComments(comments){
        if(comments!=null){
            const allComments = comments.map((cmnt) => {
                return(
                    <React.Fragment>
                        <li>{cmnt.comment}</li><br/>
                        <li>-- {cmnt.author}, {this.dateFormat(cmnt.date)}</li><br/>
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

    renderDish(dish){
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
                    {this.renderComments(dish.comments)}
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

    render(){
        const dish = this.props.dish;
        return(
            <div className='row'>
                {this.renderDish(dish)}
            </div>
        );
    }
}

export default DishDetail;