import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
class SingleProductNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
          jwels: '',
          single: false,
          jwelid:'',
          singlejwel_id:'',
          singlepostimage:'',
          singlepostname:'',
          singlepostdescription:'',
          singlepostcolour:'',
          singlepostmanufacturer:'',
          singlepostprice:'',
          singlepostseats:'',
          singlepostweight:'',
          singlepostendingDateAvailable:'',
          singlepoststartingDateAvailable:''
        }
      }
    componentDidMount() {
        const jwelid = this.props.match.params.id;
        this.setState({jwelid:jwelid})
        console.log(jwelid)
        let request;
        request = {
            method: 'GET',
            url: `http://35.169.145.212:3000/Products/${jwelid}`,
            headers: { 'Content-Type': 'application/json'},
        };
        axios(request).then((response) => {
         
          console.log(response.data)
            this.setState({
              singlejwel_id:response.data.item._id,
              singlepostimage:response.data.item.image,
              singlepostname:response.data.item.name,
              singlepostdescription:response.data.item.description,
              singlepostcolour:response.data.item.colour,
              singlepostmanufacturer:response.data.item.manufacturer,
              singlepostprice:response.data.item.price,
              singlepostseats:response.data.item.seats,
              singlepostweight:response.data.item.weight,
              singlepostendingDateAvailable:response.data.item.endingDateAvailable,
              singlepoststartingDateAvailable:response.data.item.startingDateAvailable
            });
        })
      } 
      DeleteProduct=(e,jwelid)=>{
        swal({
            title: "Are you sure to Completly Delete this Product?",
            buttons: ["Cancel", "Yes"],
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
        const request = new Request(`http://localhost:4000/Products/${jwelid}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
            })
        });
        return fetch(request)
            .then(res => res.json())
            .then(data => {
                console.log(data.message)
                if(data.message == 'Deleted Item'){
                    swal("Done", 'Deleted Successfully', "success");
                    this.props.history.push('/')
                }else{
                    swal("Oops!", 'Error.. please try again', "error");
                }
            })
            .catch(err => {
            });
        } 
    });

      }
    render() {
        const {single,jwelid,singlejwel_id,singlepostimage, singlepostname, singlepostdescription,singlepostcolour,
            singlepostmanufacturer,
            singlepostprice,
            singlepostseats,
            singlepostweight,
            singlepostendingDateAvailable,
            singlepoststartingDateAvailable} = this.state
        return (
            <>
                        <div class="row">
                        <div className='mainheading'><h1>{singlepostname}</h1></div>
                        <button className='deleteBtn' onClick={(e)=>this.DeleteProduct(e,jwelid)}>DELETE</button>
                        <a className='updateBtn' href={`/update-product/${jwelid}`}>UPDATE</a>

                            <div className="list_with_thumbnails">
                          <ul className="main_list img-list">
                            <li className="main_item">
                              <div className="main_item-image">
                                <img className="main_thumbnail" src={`http://35.169.145.212:3000/Products/images/${singlepostimage}`} alt="Image Alt Text" />
                                
                              </div>
                              <div className="main_item-text">
                                <h4 className="main_heading">{singlepostname}</h4>
                                <p className="main_description">{singlepostdescription}</p>
                                <p className="main_description">COLOR: {singlepostcolour}</p>
                                <p className="main_description">PRICE: {singlepostprice}</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        </div>
                    
            </>
        );
    }
}

export default SingleProductNew;