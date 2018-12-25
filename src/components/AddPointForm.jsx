import React, { Component } from 'react';
import './AddPointForm.css';

class AddPointForm extends Component {
    state = {
        pointCoordinates: ''
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.pointCoordinates) {
            if (this.formValidate()) {
                let coordinates = this.state.pointCoordinates.split(' ');
                this.props.pointAdd(coordinates);
                this.setState({pointCoordinates: ''})
            } else {
                alert('Ошибка! Введите координаты в формате X.X Y.Y')
                this.setState({pointCoordinates: ''});
            }
        }
    }

    handleChange(event) {
        let pointCoordinates = event.target.value;

        this.setState({pointCoordinates})
    }

    formValidate() {
        const coordinates = this.state.pointCoordinates;
        const coordinatesRegEx = /[-]*[\d]+[.][\d]+\s[-]*[\d]+[.][\d]+/;
        const coordinatesRegExMatch = coordinates.match(coordinatesRegEx);
        if (coordinatesRegExMatch !== null) {
            return coordinatesRegExMatch[0] === coordinates;
        }
        return false;
    }

    render() {
        return(
            <form className='point-form' onSubmit={this.handleSubmit.bind(this)}>
                <label htmlFor='addPointInput'>Введите точку маршрута в формате "X.X Y.Y"</label>
                <input id='addPointInput' className='point-form-input' placeholder='Новая точка маршрута' value={this.state.pointCoordinates} onChange={this.handleChange.bind(this)} type="text"/>
            </form>
        )
    }

}

export default AddPointForm;