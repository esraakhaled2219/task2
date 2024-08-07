import Rep from "../Rep/Rep"
import "./Buttons.css"

function Buttons () {
    

        const arrayofobjects = [
            {
               SelectionName : "GitHub" ,
            },
            {
               SelectionName : "FrontendMentor" ,
            },
            {
               SelectionName : "LinkedIN" ,
            },
            {
               SelectionName : "Twitter" ,
            },
            {
               SelectionName : "Instagram" ,
            },
           

        ];
        return (
            <div>
                {arrayofobjects.length > 0} 
                {arrayofobjects.map((item) => {
                    return (
                    <Rep 
                    key = {item.uniqueID}
                    SelectionName= {item.SelectionName} >
                        
                    </Rep>
                    );
                },
               
            ) 
                },
              
                
            </div>
        );
    
}

export default Buttons