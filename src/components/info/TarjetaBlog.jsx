import React from "react";



export default function TarjetaBlog(props){
    return(
        <div>
            <div className="blogItem">

            <img src={("projects/"+ props.item.image)} className="bFoto"/>


            <div className="blogTxtWrap">
                <h3>{props.item.tittle}</h3>

                <p className="bDescription">{props.item.description}</p>
                <p>{props.item.description}</p>

             </div>


            </div>
        </div>
    )
}