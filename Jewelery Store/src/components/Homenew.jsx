import React from 'react'  
import axios from 'axios';
import Pagination from '../Pagination';
class Homenew extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          jewls: '',
          totalItems:'',
          pageOfItems: [],
          single: false,
          singlejewl_id:'',
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
        let request;
        request = {
          method: 'GET',
          url: `http://35.169.145.212:3000/Products`,
          headers: { 'Content-Type': 'application/json' },
        };
        axios(request).then((response) => {
          //console.log(response.data)
          console.log(response.data.products)
          this.setState({
            jewls: response.data.products,
            totalItems:response.data.products
          });
        })
          .catch((error) => {
          });
      }
      onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }
 
  render() { 
    const {single,singlejewl_id,singlepostimage, singlepostname, singlepostdescription,singlepostcolour,
        singlepostmanufacturer,
        singlepostprice,
        singlepostseats,
        singlepostweight,
        singlepostendingDateAvailable,
        singlepoststartingDateAvailable} = this.state
      console.log(window.location.hash); 
    return (
      <>

<div class="banner influencers thank-banner pb-0 pt-4" id="thank-banner">

<div className="thankyou">

  <div class="row">
    <div className="col-md-12">
    <div className='mainheading'><h1>Jewelry Store</h1></div>
    &nbsp;{this.state.totalItems.length > 0 ? <Pagination items={this.state.totalItems} onChangePage={this.onChangePage} /> : ''}

    <div className="list_with_thumbnails">
        <ul className="list img-list">
          {
            this.state.totalItems ? this.state.totalItems.length > 0 ? this.state.pageOfItems.map((post) => (
                <li className="item">
                                <a className='listjewl' href={`/single/${post._id}`} onClick={(e) => this.getSinglejewl(e,post._id)} role="button">

                  <div className="item-image">
                    <img className="thumbnail" src={`http://35.169.145.212:3000/Products/images/${post.image}`} alt="Image Alt Text" />
                  </div>
                  <div className="item-text">
                    <h4 className="heading">{post.name}</h4>
                    <p className="description">{post.description}</p>
                  </div>
              </a>
                </li>
            )) : 'No jewls' : ''
          }
        </ul>
      </div>
      &nbsp;{this.state.totalItems.length > 0 ? <Pagination items={this.state.totalItems} onChangePage={this.onChangePage} /> : ''}


    </div>
  </div>
  </div>
</div>

  </>
  );
  }  
}  
export default Homenew  