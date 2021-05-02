import styled from "styled-components";

const FooterWrapper = styled.div`
    background-color: #f7f7f7;
    border-top: 1px solid #ccc;
    padding: 16px;
    text-align: left;
`;

function Footer() {
    return (
        <FooterWrapper>
            Footer goes here
        </FooterWrapper>
    );
}

export default Footer;