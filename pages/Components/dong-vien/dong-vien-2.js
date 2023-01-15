import Head from 'next/head';
import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button2 from '../buttons/button-3.js';
import { images } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';
import { pageContent } from '/pages/core/info';

export default function DongVien2(){
    return(
        <>
            <div className="dong-vien">
                <div className="dong-vien-text">
                    <div className="dong-vien-title">
                            <h2 className="title-1">
                                {pageContent.section2Heading}
                            </h2>
                            <div className="divider">
                                <NavDropdown.Divider /> 
                            </div>
                    </div>
                    <div className="dong-vien-description">
                        <p className="dong-vien-description">
                            {pageContent.section2Description}
                        </p>
                    </div>
                    <div className="button">
                        <Button2 />
                    </div>
                </div>
                <div className="dong-vien-content-anh">
                    <img className="dong-vien-content-anh" alt={imageAlt.section2Image1Alt} src={images.section2Image1} />
                </div> 
            </div>
        </>
    )
}
