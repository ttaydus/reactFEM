const Pet = ({ name, animal, breed }) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed),
    ])
}

const App = () => {
    return React.createElement(
        'div',
        {},
        [
            React.createElement('h1', {}, "Adopt Me!"),
            React.createElement(Pet, { 
                name: 'Chubbs', 
                animal: 'Dog', 
                breed: 'Tasmanian Devil'
            }),
            React.createElement(Pet, { 
                name: 'Mr. Bo Jangles', 
                animal: 'Cat', 
                breed: 'Mixed'
            }),
            React.createElement(Pet, 
                { name: 'Flap', 
                animal: 'Bird', 
                breed: 'Exotic'
            })
        ]

    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);