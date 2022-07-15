import React from 'react'
import Container from "../../Layout/Container";
import Tickets from './Tickets/Tickets';
import "./Styles/Ticket.css";


export default function Ticket() {
  return (
   <>
     <Container className='Ticket'>

        <div className="Ticket_Header">
            <h1 className='Ticket_title'>GRAB A TICKET</h1>
        </div>

        <div className="Ticket_Info">
            <div className="Ticket_Info_Left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, temporibus. Sed alias rem quae molestiae eum blanditiis iusto quaerat beatae, veniam, esse hic, dignissimos neque. Quisquam, earum hic distinctio eos repudiandae quos voluptatum veritatis ex iusto consectetur necessitatibus odit sapiente nisi voluptates asperiores adipisci. Illum consequuntur repudiandae ut corporis sit, vitae voluptates, iste doloribus porro saepe exercitationem voluptatibus perspiciatis beatae quisquam harum nisi? Minus?
            </div>
            <div className="Ticket_Info_Right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corrupti nam laudantium praesentium omnis recusandae, est facilis voluptas quis architecto deleniti fuga et, obcaecati pariatur illo maiores illum accusantium. Quidem non saepe sed pariatur tempore nobis quisquam asperiores maiores facere ad ipsam odio assumenda cumque laborum soluta, blanditiis reiciendis doloremque amet cum ullam. Velit facere rerum impedit nostrum ab adipisci dolores repellendus, doloribus totam!
            </div>
        </div>

        <div className="Ticket_Cards">
            <Tickets/>
            
          
        </div>
     </Container>
   </>
  )
}
