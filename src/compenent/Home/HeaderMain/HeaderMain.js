import React from 'react';
import pic from '../../../images/bner.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <section  className="container">
            <div  className="row bkg" >
                <div className="col-md-5 d-flex align-items-center  mt-5 ">
                    <div >
                        <h4 className="m-0"> EXCLUSIVE SALES </h4> <br />
                        <h1 className="m-0"> UP TO 50% OFF ON SALES </h1> <br />
                        <h6> Get all exclusive offers for the season </h6>
                        <h5 to="ProductItem" type="button" className="btn btn-primary"> Happiness </h5>
                    </div>
                </div>
                <div className="col-md-7">
                    <img className="img-fluid"  src={pic} alt=""/>
                </div>
            </div>
        </section>













        // <div className="container  ">
        //     {/* <div className="container-fluid row d-flex justify-content-around align-items-center">
        //         <div className="col-md-4 div">
        //             <h1 style={{fontSize: '50px', lineHeight: '60px', margin: '25px 0'}}>Lorem ipsum <br/> dolor </h1>
        //             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quo atque nemo facere assumenda enim. </p>
        //             {/* <Link class="btn">Dark </Link> */}

        //             {/* <Link  className="btnC btn">SHOP NOW</Link> */}

        //             <button type="button" className="btn btn-primary">Shop Now</button>
        //         </div>
        //         <div className="col-md-8 div">
        //             <img  src={img} alt=""/>
        //             {/* <img style={{ maxWidth: '100%', padding:'50px 0'}} src={img} alt=""/> */}
        //         </div>
        //     </div> */}
        // </div>
    );
};

export default HeaderMain;