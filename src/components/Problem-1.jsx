import React, { useState } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');

    const [user, setUser] = useState([]);
    const [sorted, setSorted] = useState([]);

    const handleClick = (val) => {
        if (val == 'all') {
            console.log(`line no : 11 ,`, sorted);
            const x = user.filter(singleUser => singleUser.status.toLowerCase() == 'active')
            console.log(x);

            const y = user.filter(singleUser => singleUser.status.toLowerCase() == 'completed')
            console.log(y);

            const others = user.filter(singleUser => singleUser.status.toLowerCase() !== 'completed' && singleUser.status.toLowerCase() !== 'active')
            console.log(others);

            setSorted([...x, ...y, ...others]);
        }
        else {
            const x = user.filter(singleUser => singleUser.status.toLowerCase() == val)
            // // console.log(x);
            setSorted(x);
        }
        // setShow(val);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = e.target.name.value;
        const status = e.target.status.value;
        // // console.log('submit button');
        // // console.log(name, status);

        setUser([...user, { name, status }]);
        form.reset();
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input name="name" type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input name="status" type="text" className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sorted.length == 0 && (user?.map((singleUser, index) => <tr key={index}>
                                    <td scope='col'>{singleUser.name}</td>
                                    <td scope='col'>{singleUser.status}</td>
                                </tr>
                                )
                                )
                            }
                            {
                                sorted.length > 0 && sorted?.map((singleUser, index) => <tr key={index}>
                                    <td scope='col'>{singleUser.name}</td>
                                    <td scope='col'>{singleUser.status}</td>
                                </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;