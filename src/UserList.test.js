import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test('one row per persion', () => { 
    

    const users = [
        { name:'jane', email:'jane@jane.com' },
        { name:'sam', email:'same@same.com' }
    ];

    render(<UserList users={users}/>);

 });