import React, { Component } from 'react';

class PointList extends Component {

    handleClick(key) {
        this.props.deletePoint(key)
    }

    render() {
        return (
            <div>
                <ul className='pointList'>
                    {this.props.points ? this.props.points.map(point => 
                    <li draggable='true' className='point-element' key={point.key}>
                    <p className='point-element-text'>{`${point.coordinates[0]} ${point.coordinates[1]}`}</p>
                    <button className='point-element-delete' onClick={() => this.handleClick(point.key)}>
                        <span className="point-delete-icon">
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="0" x2="20" y2="20" stroke="black" strokeWidth="2" />
                                <line x1="0" y1="20" x2="20" y2="0" stroke="black" strokeWidth="2" />
                            </svg>
                        </span>
                    </button>
                    </li>
                    ) : null}
                </ul>
            </div>
        )
    }
}

export default PointList;