import React, { Component } from "react";
import { theme } from "../../../../Defaults.js";
import SponsorItem from "./SponsorItem.jsx";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";


const sponsor_colors = {
    GOLD: "#D4AF37",
    SILVER: "#C0C0C0",
    BRONZE: "#CD7F32",
}

class SponsorContainer extends Component {
    render() {
        let { declaration } = this.props;
        let sponsors = [];
        for (let i = 0; i < declaration.children.length; i++) {
            //console.log(declaration.baseURL);
            sponsors.push(<SponsorItem key={i}
                type={declaration.name}
                color={theme[declaration.color]}
                size={declaration.size}
                baseURL={this.props.baseURL}
                image={`${declaration.root}${declaration.children[i].image}`}
                href={declaration.children[i].url}
                name={declaration.children[i].name} />);
        }
        return (
            <Container fluid
                style={{ textAlign: "center" }}>
                { this.props.showName &&
                    <Row style={{ width: "100%" }}
                        className="d-flex align-items-center">
                        <Col xs={12}>
                            <h2 className="display-4"
                                style={{ color: theme[declaration.color] }}>
                                {declaration.name}
                            </h2>
                        </Col>
                    </Row>}
                <Row style={{ backgroundColor: sponsor_colors[declaration.name] ? sponsor_colors[declaration.name] : theme.secondary[1] }}>
                    {sponsors}
                </Row>
            </Container>
        );
    }
}

SponsorContainer.propTypes = {
    declaration: PropTypes.object,
    baseURL: PropTypes.string,
    showName: PropTypes.bool
};

export default SponsorContainer;