import React, { useState } from 'react';

const HookUserForm = () => {

    let [user, setUser] = useState({ firstName: '', lastName: '' })
    return (
        <div>

            <form autoComplete="off">
                <input value={user.firstName} onChange={e => setUser({ ...user, firstName: e.target.value })} placeholder="First Name" /><br />
                <input value={user.lastName} onChange={e => setUser({ ...user, lastName: e.target.value })} placeholder="Last Name" />
            </form>

            <hr />

            <h1>
                First Name: {user.firstName} <br />
                Last Name {user.lastName}

            </h1>

            <br />

            <pre>
                <h1>
                    {JSON.stringify(user)}

                </h1>
            </pre>

        </div>
    );
};

export default HookUserForm;