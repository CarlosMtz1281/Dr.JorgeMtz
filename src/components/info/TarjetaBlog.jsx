import React from "react";



export default function TarjetaBlog(props){
    return(
        <div>
            <div className="blogItemDesktop">

            <img src={("fotosConsultorio/"+ props.item.image)} className="bFotoDesktop"/>


            <div className="blogTxtWrap">
                <h3>{props.item.tittle}</h3>

                <p className="bDescription">{props.item.description}</p>

                <div className="blog-button">
                    <div className="blogButtonTxtWrap">
                        <h2 className="blogButtonTxt">Leer más</h2>
                    </div>
                </div>

             </div>


            </div>
        </div>
    )
}