import React from 'react'
import {Card} from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as SiIcons from 'react-icons/si'
import Store from '../../Store'

 

const Nav_content = () => {   

    
    const description = [
        {title: 'Users', link: 'go to Users', url: 'users', icon:<FaIcons.FaUser color="black" size="30"/>, count: <Store value="users"  />,lastone: <Store last="user" value="null"  /> },
         {title: 'Livreurs', link: 'go to Livreurs', url: 'livreurs', icon:<MdIcons.MdDeliveryDining color="black" size="30"/>, count: <Store value="livreurs"  />,lastone: <Store last="livreur" value="null"  /> }, 
         {title: 'Commandes', link: 'go to Commandes', url: 'commandes', icon:<MdIcons.MdFastfood color="black" size="30"/>, count: <Store value="commands"  />,lastone: <Store last="commands" value="null"  />} , 
         {title: 'CMD & Livreur', link: 'go to CMD & Livreur', url:'assigned_cmd', icon:<MdIcons.MdPendingActions color="black" size="30"/>} , 
         {title: 'Restaurants', link: 'go to Restaurants', url: 'restaurants', icon:<MdIcons.MdRestaurant color="black" size="30"/>, count: <Store value="restaurant"  />,lastone: <Store last="restaurant" value="null"  />} ,  
         {title: 'Managers', link: 'go to Managers', url: 'chefsecteur',icon:<SiIcons.SiCodechef color="black" size="30"/>, count: <Store value="chefs"  />,lastone: <Store last="chefs" value="null"  />}
        ]
    
    const desc = description.map((item, i) => {

        return (
            <Card style={{ width: '23rem' , marginTop: '20px', padding:'10px'}}>
         <Card.Body>
         <Card.Header className="bg bg-white" as="h5" key={'icon'+i}>{item.icon}</Card.Header>
     <Card.Title className="mt-2"key={'title_'+i}>{item.title}</Card.Title>
     <Card.Subtitle className="mb-2 text-muted">Card Information</Card.Subtitle>
      <Card.Text key={'text'+i}>
      Number of {item.title} : {item.count}
      </Card.Text>
      <Card.Text key={'last'+i}>
      Last {item.title} : {item.lastone}
      </Card.Text>
      <Card.Link href={`dashboard/${item.url}`} key= {'link'+i}>{item.link}</Card.Link>
            
            <Card.Link href="#">Another Link</Card.Link>
     </Card.Body>
     </Card>

           
    )
}
    )


  return (
    <>


      

      <div className="container_nav-content d-flex flex-wrap justify-content-around">

      
          {desc}

      </div>



    </>
  )
}

export default Nav_content
