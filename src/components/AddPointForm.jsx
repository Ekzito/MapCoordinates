import React, { Component } from 'react';

class AddPointForm extends Component {
    state = {
        pointCoordinates: ''
    }

    handleSubmit(event) {
        event.preventDefault();
        this.formValidate();
        if (this.state.pointCoordinates) {
            if (this.formValidate() === true) {
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
        let str = this.state.pointCoordinates;
        let valide = /[-]*[\d]+[.][\d]+\s[-]*[\d]+[.][\d]+/;
        if (str.match(valide) !== null) {
            return str.match(valide)[0] === str;
        }
        return false;
    }

    render() {
        return(
            <form className='point-form' onSubmit={this.handleSubmit.bind(this)}>
                <input className='point-form-input' placeholder='Новая точка маршрута' value={this.state.pointCoordinates} onChange={this.handleChange.bind(this)} type="text"/>
            </form>
        )
    }

}

export default AddPointForm;