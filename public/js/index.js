var React = require('react');
var ReactDOM = require('react-dom');

var CONTACTS = {
    0: {
        id: 0,
        name: 'Sarah Hughes',
        phoneNumber: '01234 567890'
    },
    1: {
        id: 1,
        name: 'Tim Taylor',
        phoneNumber: '02345 678901'
    },
    2: {
        id: 2,
        name: 'Sam Smith',
        phoneNumber: '03456 789012'
    }
};

var Contact = function(props) {
    return (
        <div>
            <strong>
                {props.name}
            </strong>
            &nbsp;
            {props.phoneNumber}
        </div>
    );
};

var ContactList = function(props) {
    var contacts = Object.keys(props.contacts).map(function(contactId, index) {
        var contact = props.contacts[contactId];
        return (
            <li key={index}>
                <Contact id={contact.id} name={contact.name}
                         phoneNumber={contact.phoneNumber} />
            </li>
        );
    });
    return (
        <ul>
            {contacts}
        </ul>
    );
};


var ContactListContainer = function() {
    return <ContactList contacts={CONTACTS} />;
};
