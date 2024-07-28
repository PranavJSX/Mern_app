import React from 'react'
import { UsersList } from '../pages/UsersList'

export const User = () => {

    const USERS=[{
        id:'u1',
        image:'D:\New folder\Udemy\reacg\My_full_stack_app\Frontend\frontend_app\public\wp8967033-max-verstappen-2021-wallpapers.jpg',
        name:'Max',
        places:3
    },];
  return (
  <>
    <UsersList items={USERS}/>
  </>
  )
}
