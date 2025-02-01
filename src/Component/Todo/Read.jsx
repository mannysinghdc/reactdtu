import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import TodoItem from './TodoItem';
import { useContext } from 'react';
import { TodoContext } from '../../store/Todo-Item'

const Read = () => {
    const { todo } = useContext(TodoContext)
    return (
        <>
            {
                todo.length !== 0 ? <div className="container">
                    <MDBTable align='middle'>
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>SNo.</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Checked</th>
                                <th scope='col'>Age</th>
                                <th scope='col'>Date</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                todo.map((item, i) => (
                                    <TodoItem item={item} key={item.id} index={i} />
                                ))
                            }
                        </MDBTableBody>
                    </MDBTable>
                </div> : <h3 className='text-center'>No data available</h3>
            }

        </>

    );
}
export default Read