import React, {Component} from "react";
import {Container, Row, Table, Button, Col, Form, FormGroup, Label, Input, FormText} from "reactstrap";
import TableHeaders from "./TableHeaders";
import TableRow from "./TableRow";
import ViewModal from "./ViewModal";
import axios from "axios";
const apiUrl = "https://ghibliapi.herokuapp.com/films/";

export default class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesList: [],
            showModal: false,
            movie: {}
        }
        this.handleClick = this.handleClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentDidMount() {
        axios.get(apiUrl).then((resp) => {
            const moviesList = resp.data;
            this.setState({moviesList});
        })
    }

    handleClick(movie) {
       this.setState({
           movie,
           showModal: true
        });
    }

    onClose() {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
    }

    handleChange(e) {
        const {name, value} = e.target;
        const stateCopy = Object.assign({}, this.state);
        stateCopy[name] = value;
        this.setState(stateCopy);
    }

    render() {
        const {moviesList, showModal, username, email, password } = this.state;
        const movies = moviesList.map((movie, i) => <TableRow key={i} props={movie} index={i} handleClick={this.handleClick}/>);
        return (
            <Container>
                <Row className="mb10">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input type="text" name="username" value={username}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" value={email}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" value={password} />
                        </FormGroup>
                        <Button type="button">Submit</Button>
                    </Form>
                </Row>
                <Row className="mb10">
                    <Col md="9">
                        <h3>Films List</h3>
                    </Col>
                    <Col md="3">
                        <Button>Add Movie</Button>
                    </Col>
                </Row>
                <Row>
                    <Table>
                        <TableHeaders />
                        <tbody>{movies}</tbody>
                    </Table>
                </Row>
                <ViewModal isOpen={showModal} props={this.state.movie} onClose={this.onClose}/>
            </Container>
        );
    }
}