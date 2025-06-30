import React from 'react';

const Person = (props) => {
    return (
        <div>
            Mi nombre es <span>{props.name} {props.surname}</span> y tengo <span>{props.age}</span> años.
        </div>
    );
}

class PersonClass extends React.Component {
    render() {
        return (
            <div>
                Mi nombre es <span>{this.props.name} {this.props.surname}</span> y tengo <span>{this.props.age}</span> años.
            </div>
        );
    }
}

export { Person, PersonClass };

// export { PersonClass };