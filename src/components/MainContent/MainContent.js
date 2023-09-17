import React,{Fragment} from "react";
import HeaderContainer from "./header/HeaderContainer";
import FooterContainer from "./footer/FooterContainer";
import Listtestimonials from "./body/ListTesttimonials";
import Card from "../layout/Card";
import MainTitle from "../Title/MainTitle";

const MainContent = ()=>{
    return (
        <Fragment>
            <MainTitle/>
            <Card>
            <HeaderContainer/>
            <Listtestimonials/>
            <FooterContainer/>
            </Card>
        </Fragment>
    )
}

export default MainContent;