import React from "react";
import { Image } from "react-bootstrap";

export default function TarjetaBlog(props) {

    const sendToBlog = () => {
        window.location.href = "/blogs/" + props.item.link;
    }

    return (
        <div>
            <div className="blogItem">
                <Image src={("/blog/" + props.item.image)} className="bFotoCard" />
                <div className="blogTxtWrap">
                    <h3 className="blogCardTittle">{props.item.tittle}</h3>
                    <p className="bDescription">{props.item.description}</p>
                    <div className="blogButtonMobileWrp">
                        <button className="blogButtonMobile" onClick={sendToBlog}>
                            <p className="blogButtonMobileText">Leer más</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}