import React from 'react'
import wp1 from "../Assets/wp1.png"
import wp2 from "../Assets/wp2.png"
import wp3 from "../Assets/wp3.png"
import wp4 from "../Assets/wp4.png"
import wp5 from "../Assets/wp5.png"
import wp6 from "../Assets/wp6.png"
import wp7 from "../Assets/wp7.png"
import wp8 from "../Assets/wp8.png"

const Footer = () => {
  return (
    <footer>
    <div className="left">
     <h3>About Flex Business Pro</h3>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis laboriosam dignissimos illum incidunt. Ipsam voluptatum odit hic eos, perspiciatis distinctio minus autem, voluptate consequuntur quidem dignissimos ullam neque, quos quae quia repellat praesentium repellendus eligendi id! Ipsa tenetur doloremque ea laboriosam harum dolor, consequuntur necessitatibus iusto aspernatur itaque doloribus magnam reiciendis, accusantium.</p>
    </div>
    <div className="middle">
    <h3>Recent Post</h3>
    <h4>Fly to London</h4>
    <p>September 18, 2018</p>
    <br />
    <h4>Stair Communication</h4>
    <p>September 18, 2018</p>
    <br />
    <h4>Do you want to bea robot</h4>
    <p>September 18, 2018</p>
    </div>
    <div className="right">
    <h3>Galleries</h3>
    <div className="pictures">
        <img src={wp1} alt="" />
        <img src={wp2} alt="" />
        <img src={wp3} alt="" />
        <img src={wp4} alt="" />
        <img src={wp5} alt="" />
        <img src={wp6} alt="" />
        <img src={wp7} alt="" />
        <img src={wp8} alt="" />
    </div>
    </div>
    </footer>
  )
}

export default Footer